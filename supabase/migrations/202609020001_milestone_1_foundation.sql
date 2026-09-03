-- Elite Resume Craft / Milestone 1
-- Run this migration through the Supabase CLI or the owner's Supabase SQL editor.
-- It establishes role, public-content, profile, and private-file foundations.

create extension if not exists "pgcrypto";

create type public.app_role as enum ('customer', 'super_admin', 'content_manager', 'order_manager', 'support_manager');
create type public.content_status as enum ('draft', 'published', 'archived');

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role public.app_role not null default 'customer',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

-- SECURITY DEFINER avoids RLS recursion in administrator policies.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid()
      and role in ('super_admin', 'content_manager', 'order_manager', 'support_manager')
  );
$$;

create table public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name text not null,
  short_description text not null,
  long_description text,
  deliverables jsonb not null default '[]'::jsonb,
  status public.content_status not null default 'draft',
  display_order integer not null default 0,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.packages (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references public.services(id) on delete set null,
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name text not null,
  description text,
  currency char(3) not null default 'USD',
  price_cents integer not null check (price_cents >= 0),
  features jsonb not null default '[]'::jsonb,
  revision_count smallint not null default 0 check (revision_count >= 0),
  is_active boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.resume_templates (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name text not null,
  category text not null,
  description text,
  preview_path text,
  renderer_key text not null unique,
  configuration jsonb not null default '{}'::jsonb,
  is_ats_safe boolean not null default true,
  is_active boolean not null default true,
  price_cents integer not null default 0 check (price_cents >= 0),
  display_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  status public.content_status not null default 'draft',
  display_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_title text,
  quote text not null,
  rating smallint check (rating between 1 and 5),
  status public.content_status not null default 'draft',
  display_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  excerpt text,
  content text,
  category text,
  tags text[] not null default '{}',
  featured_image_path text,
  author_name text not null default 'Elite Resume Craft',
  status public.content_status not null default 'draft',
  published_at timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.site_content (
  id uuid primary key default gen_random_uuid(),
  content_key text not null unique,
  value jsonb not null default '{}'::jsonb,
  updated_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create trigger services_set_updated_at before update on public.services for each row execute procedure public.set_updated_at();
create trigger packages_set_updated_at before update on public.packages for each row execute procedure public.set_updated_at();
create trigger templates_set_updated_at before update on public.resume_templates for each row execute procedure public.set_updated_at();
create trigger faqs_set_updated_at before update on public.faqs for each row execute procedure public.set_updated_at();
create trigger testimonials_set_updated_at before update on public.testimonials for each row execute procedure public.set_updated_at();
create trigger blog_posts_set_updated_at before update on public.blog_posts for each row execute procedure public.set_updated_at();
create trigger site_content_set_updated_at before update on public.site_content for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.packages enable row level security;
alter table public.resume_templates enable row level security;
alter table public.faqs enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.site_content enable row level security;
alter table public.audit_logs enable row level security;

create policy "profiles: read own" on public.profiles for select to authenticated using (id = auth.uid());
create policy "profiles: update own non-role data" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid() and role = (select role from public.profiles where id = auth.uid()));
create policy "profiles: administrators read" on public.profiles for select to authenticated using (public.is_admin());

create policy "services: public published read" on public.services for select using (status = 'published' or public.is_admin());
create policy "packages: public active read" on public.packages for select using (is_active or public.is_admin());
create policy "templates: public active read" on public.resume_templates for select using (is_active or public.is_admin());
create policy "faqs: public published read" on public.faqs for select using (status = 'published' or public.is_admin());
create policy "testimonials: public published read" on public.testimonials for select using (status = 'published' or public.is_admin());
create policy "blog: public published read" on public.blog_posts for select using (status = 'published' or public.is_admin());
create policy "site content: public read" on public.site_content for select using (true);

create policy "content: administrators insert services" on public.services for insert to authenticated with check (public.is_admin());
create policy "content: administrators update services" on public.services for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators delete services" on public.services for delete to authenticated using (public.is_admin());
create policy "content: administrators insert packages" on public.packages for insert to authenticated with check (public.is_admin());
create policy "content: administrators update packages" on public.packages for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators delete packages" on public.packages for delete to authenticated using (public.is_admin());
create policy "content: administrators insert templates" on public.resume_templates for insert to authenticated with check (public.is_admin());
create policy "content: administrators update templates" on public.resume_templates for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators delete templates" on public.resume_templates for delete to authenticated using (public.is_admin());
create policy "content: administrators insert faqs" on public.faqs for insert to authenticated with check (public.is_admin());
create policy "content: administrators update faqs" on public.faqs for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators delete faqs" on public.faqs for delete to authenticated using (public.is_admin());
create policy "content: administrators insert testimonials" on public.testimonials for insert to authenticated with check (public.is_admin());
create policy "content: administrators update testimonials" on public.testimonials for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators delete testimonials" on public.testimonials for delete to authenticated using (public.is_admin());
create policy "content: administrators insert blog" on public.blog_posts for insert to authenticated with check (public.is_admin());
create policy "content: administrators update blog" on public.blog_posts for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators delete blog" on public.blog_posts for delete to authenticated using (public.is_admin());
create policy "content: administrators update site content" on public.site_content for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "content: administrators insert site content" on public.site_content for insert to authenticated with check (public.is_admin());
create policy "audit: administrators read" on public.audit_logs for select to authenticated using (public.is_admin());

-- Private bucket for customer uploads and generated career documents.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('customer-files', 'customer-files', false, 10485760, array['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'])
on conflict (id) do nothing;

create policy "customer files: user owns objects" on storage.objects for select to authenticated using (bucket_id = 'customer-files' and owner_id = auth.uid());
create policy "customer files: user uploads own objects" on storage.objects for insert to authenticated with check (bucket_id = 'customer-files' and owner_id = auth.uid());
create policy "customer files: user updates own objects" on storage.objects for update to authenticated using (bucket_id = 'customer-files' and owner_id = auth.uid()) with check (bucket_id = 'customer-files' and owner_id = auth.uid());
create policy "customer files: user deletes own objects" on storage.objects for delete to authenticated using (bucket_id = 'customer-files' and owner_id = auth.uid());
create policy "customer files: administrators manage" on storage.objects for all to authenticated using (bucket_id = 'customer-files' and public.is_admin()) with check (bucket_id = 'customer-files' and public.is_admin());

-- Only a trusted service role or a direct owner action can set an administrator role.
-- Promote the owner after signup from the Supabase SQL editor, for example:
-- update public.profiles set role = 'super_admin' where id = '<owner-auth-user-uuid>';
