
alter table "public"."dao_member"
  add constraint "dao_member_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("did") on update restrict on delete restrict;

comment on TABLE "public"."dao_member" is E'Junction table between DAOs and users';

comment on TABLE "public"."contributor_skill" is E'Junction table between contributors and skills. Represents the skills a contributor used in their contribution';

alter table "public"."contributor" rename to "user_contribution";

comment on TABLE "public"."user_contribution" is E'Junction table between a user and a contribution they made';

alter table "public"."contributor_skill" rename to "user_contribution_skill";

comment on TABLE "public"."user_contribution_skill" is E'Junction table between user_contributions and skills. Represents the skills a contributor used in their contribution';

comment on TABLE "public"."contribution_rating" is E'A rating that a user gave to a contribution';

comment on TABLE "public"."contribution" is E'A contribution made in a DAO';
