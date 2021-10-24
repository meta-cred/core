
comment on TABLE "public"."contribution" is E'NULL';

comment on TABLE "public"."contribution_rating" is E'NULL';

comment on TABLE "public"."user_contribution_skill" is E'NULL';

alter table "public"."user_contribution_skill" rename to "contributor_skill";

comment on TABLE "public"."user_contribution" is E'NULL';

alter table "public"."user_contribution" rename to "contributor";

comment on TABLE "public"."contributor_skill" is E'NULL';

comment on TABLE "public"."dao_member" is E'NULL';

alter table "public"."dao_member" drop constraint "dao_member_user_id_fkey";
