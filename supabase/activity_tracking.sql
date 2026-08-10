-- MandarinCourse: User time-on-site tracking (Option A)
-- Run ONCE: Supabase Dashboard -> SQL Editor -> paste -> Run.

-- 1) Table: one row per user with accumulated active seconds
create table if not exists public.user_activity (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  email         text,
  total_seconds bigint not null default 0,
  last_seen     timestamptz,
  updated_at    timestamptz default now()
);

-- 2) RLS: each authenticated user can read/write only their own row
alter table public.user_activity enable row level security;

drop policy if exists "user_activity_own" on public.user_activity;
create policy "user_activity_own"
  on public.user_activity
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 3) Atomic increment helper used by the app heartbeat.
--    Security definer runs as owner (bypasses RLS) but only allows
--    a user to record seconds for their own account.
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

-- 4) Permissions
grant execute on function public.add_activity_seconds(uuid, bigint) to authenticated;
grant select, insert, update on public.user_activity to authenticated;