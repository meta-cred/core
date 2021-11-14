CREATE OR REPLACE VIEW "public"."me" AS
SELECT "user".did,
       "user".eth_address
FROM "user";
