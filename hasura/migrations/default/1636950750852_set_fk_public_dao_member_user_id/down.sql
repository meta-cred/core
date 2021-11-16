alter table "public"."dao_member" drop constraint "dao_member_user_id_fkey",
  add constraint "dao_member_user_id_fkey"
  foreign key ("user_id")
  references "public"."user"
  ("did") on update restrict on delete restrict;
