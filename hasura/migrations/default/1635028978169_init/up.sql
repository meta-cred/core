SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.contribution (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    author_id text NOT NULL,
    dao_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    occured date NOT NULL
);
COMMENT ON TABLE public.contribution IS 'A contribution that a DAO member made for a DAO';
CREATE TABLE public.contribution_rating (
    user_id text NOT NULL,
    rating text NOT NULL,
    contribution_id uuid NOT NULL
);
COMMENT ON TABLE public.contribution_rating IS 'A rating that a DAO member gave to a contribution';
CREATE TABLE public.contributor (
    contribution_id uuid NOT NULL,
    user_id text NOT NULL,
    contribution_share numeric NOT NULL,
    CONSTRAINT is_percentage CHECK (((contribution_share > (0)::numeric) AND (contribution_share <= (1)::numeric)))
);
COMMENT ON TABLE public.contributor IS 'A user that worked on a contribution';
CREATE TABLE public.contributor_skill (
    skill_id uuid NOT NULL,
    contribution_id uuid NOT NULL,
    user_id text NOT NULL
);
COMMENT ON TABLE public.contributor_skill IS 'Skills a contributor employed for a contribution';
CREATE TABLE public.dao (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    eth_address text
);
COMMENT ON TABLE public.dao IS 'An organization of people working together to track their contributions';
CREATE TABLE public.dao_member (
    dao_id uuid NOT NULL,
    user_id text NOT NULL,
    is_admin boolean,
    created_at timestamp with time zone DEFAULT now(),
    can_rate boolean DEFAULT true NOT NULL
);
CREATE TABLE public.rating (
    label text NOT NULL,
    description text NOT NULL
);
CREATE TABLE public.skill (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text NOT NULL
);
CREATE TABLE public."user" (
    did text NOT NULL,
    eth_address text NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
ALTER TABLE ONLY public.contribution
    ADD CONSTRAINT contribution_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.contribution_rating
    ADD CONSTRAINT contribution_rating_pkey PRIMARY KEY (user_id, contribution_id);
ALTER TABLE ONLY public.contributor
    ADD CONSTRAINT contributor_pkey PRIMARY KEY (contribution_id, user_id);
ALTER TABLE ONLY public.contributor_skill
    ADD CONSTRAINT contributor_skill_pkey PRIMARY KEY (skill_id, contribution_id, user_id);
ALTER TABLE ONLY public.dao
    ADD CONSTRAINT dao_eth_address_key UNIQUE (eth_address);
ALTER TABLE ONLY public.dao_member
    ADD CONSTRAINT dao_member_pkey PRIMARY KEY (dao_id, user_id);
ALTER TABLE ONLY public.dao
    ADD CONSTRAINT dao_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_pkey PRIMARY KEY (label);
ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_name_key UNIQUE (name);
ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_eth_address_key UNIQUE (eth_address);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (did);
CREATE TRIGGER set_public_contribution_updated_at BEFORE UPDATE ON public.contribution FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_contribution_updated_at ON public.contribution IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.contribution
    ADD CONSTRAINT contribution_author_id_dao_id_fkey FOREIGN KEY (author_id, dao_id) REFERENCES public.dao_member(user_id, dao_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.contribution
    ADD CONSTRAINT contribution_dao_id_fkey FOREIGN KEY (dao_id) REFERENCES public.dao(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.contribution_rating
    ADD CONSTRAINT contribution_rating_contribution_id_fkey FOREIGN KEY (contribution_id) REFERENCES public.contribution(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.contribution_rating
    ADD CONSTRAINT contribution_rating_rating_fkey FOREIGN KEY (rating) REFERENCES public.rating(label) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public.contribution_rating
    ADD CONSTRAINT contribution_rating_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(did) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.contributor
    ADD CONSTRAINT contributor_contribution_id_fkey FOREIGN KEY (contribution_id) REFERENCES public.contribution(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.contributor_skill
    ADD CONSTRAINT contributor_skill_contribution_id_user_id_fkey FOREIGN KEY (contribution_id, user_id) REFERENCES public.contributor(contribution_id, user_id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.contributor_skill
    ADD CONSTRAINT contributor_skill_skill_id_fkey FOREIGN KEY (skill_id) REFERENCES public.skill(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.contributor
    ADD CONSTRAINT contributor_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(did) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.dao_member
    ADD CONSTRAINT dao_member_dao_id_fkey FOREIGN KEY (dao_id) REFERENCES public.dao(id) ON UPDATE RESTRICT ON DELETE CASCADE;
