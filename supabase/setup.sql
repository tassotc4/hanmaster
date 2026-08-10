-- MandarinCourse: Full database setup (run ONCE in Supabase SQL Editor)
-- Idempotent: safe to run multiple times.
-- How: https://supabase.com/dashboard -> select project "enisseoyaledojeuykbd"
--      -> SQL Editor -> New query -> paste this whole file -> Run.

-- ================= user_profiles =================
create table if not exists public.user_profiles (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  trial_start  timestamptz,
  updated_at   timestamptz default now()
);
alter table public.user_profiles add column if not exists display_name text;
alter table public.user_profiles add column if not exists trial_start timestamptz;
alter table public.user_profiles add column if not exists updated_at timestamptz;
alter table public.user_profiles enable row level security;

drop policy if exists "user_profiles_own" on public.user_profiles;
create policy "user_profiles_own"
  on public.user_profiles
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

grant select, insert, update on public.user_profiles to authenticated;

-- ================= user_progress =================
create table if not exists public.user_progress (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  hsk_progress  text,
  vocab_score   text,
  streak        text,
  updated_at    timestamptz default now()
);
alter table public.user_progress add column if not exists hsk_progress text;
alter table public.user_progress add column if not exists vocab_score text;
alter table public.user_progress add column if not exists streak text;
alter table public.user_progress add column if not exists updated_at timestamptz;
alter table public.user_progress enable row level security;

drop policy if exists "user_progress_own" on public.user_progress;
create policy "user_progress_own"
  on public.user_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

grant select, insert, update on public.user_progress to authenticated;

-- ================= user_activity + RPC =================
create table if not exists public.user_activity (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  email         text,
  total_seconds bigint not null default 0,
  last_seen     timestamptz,
  updated_at    timestamptz default now()
);
alter table public.user_activity enable row level security;

drop policy if exists "user_activity_own" on public.user_activity;
create policy "user_activity_own"
  on public.user_activity
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create or replace function public.add_activity_seconds(p_user_id uuid, p_seconds bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_user_id is null or p_user_id <> auth.uid() then
    raise exception 'Not allowed';
  end if;
  insert into public.user_activity (user_id, email, total_seconds, last_seen, updated_at)
  values (
    p_user_id,
    (select email from auth.users where id = p_user_id),
    greatest(p_seconds, 0),
    now(),
    now()
  )
  on conflict (user_id) do update set
    total_seconds = public.user_activity.total_seconds + greatest(p_seconds, 0),
    last_seen     = now(),
    updated_at    = now(),
    email         = excluded.email;
end;
$$;

grant execute on function public.add_activity_seconds(uuid, bigint) to authenticated;
grant select, insert, update on public.user_activity to authenticated;
