alter table "public"."contribution" drop constraint "contribution_dao_id_author_id_fkey",
  add constraint "contribution_author_id_dao_id_fkey"
  foreign key ("author_id", "dao_id")
  references "public"."dao_member"
  ("user_id", "dao_id") on update restrict on delete restrict;
