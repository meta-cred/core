alter table "public"."contribution" drop constraint "contribution_author_id_dao_id_fkey",
  add constraint "contribution_dao_id_author_id_fkey"
  foreign key ("dao_id", "author_id")
  references "public"."dao_member"
  ("dao_id", "user_id") on update cascade on delete restrict;
