/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: number;
  timestamp: any;
  timestamptz: string;
  uuid: string;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
}

/** order by aggregate values of table "contribution" */
export interface contribution_aggregate_order_by {
  count?: Maybe<order_by>;
  max?: Maybe<contribution_max_order_by>;
  min?: Maybe<contribution_min_order_by>;
}

/** input type for inserting array relation for remote table "contribution" */
export interface contribution_arr_rel_insert_input {
  data: Array<contribution_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<contribution_on_conflict>;
}

/** Boolean expression to filter rows from the table "contribution". All fields are combined with a logical 'AND'. */
export interface contribution_bool_exp {
  _and?: Maybe<Array<contribution_bool_exp>>;
  _not?: Maybe<contribution_bool_exp>;
  _or?: Maybe<Array<contribution_bool_exp>>;
  author?: Maybe<dao_member_bool_exp>;
  author_id?: Maybe<String_comparison_exp>;
  contributors?: Maybe<user_contribution_bool_exp>;
  created_at?: Maybe<timestamptz_comparison_exp>;
  dao?: Maybe<dao_bool_exp>;
  dao_id?: Maybe<uuid_comparison_exp>;
  description?: Maybe<String_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  occured?: Maybe<date_comparison_exp>;
  ratings?: Maybe<contribution_rating_bool_exp>;
  title?: Maybe<String_comparison_exp>;
  updated_at?: Maybe<timestamp_comparison_exp>;
}

/** unique or primary key constraints on table "contribution" */
export enum contribution_constraint {
  /** unique or primary key constraint */
  contribution_pkey = 'contribution_pkey',
}

/** input type for inserting data into table "contribution" */
export interface contribution_insert_input {
  author?: Maybe<dao_member_obj_rel_insert_input>;
  author_id?: Maybe<Scalars['String']>;
  contributors?: Maybe<user_contribution_arr_rel_insert_input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dao?: Maybe<dao_obj_rel_insert_input>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  occured?: Maybe<Scalars['date']>;
  ratings?: Maybe<contribution_rating_arr_rel_insert_input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** order by max() on columns of table "contribution" */
export interface contribution_max_order_by {
  author_id?: Maybe<order_by>;
  created_at?: Maybe<order_by>;
  dao_id?: Maybe<order_by>;
  description?: Maybe<order_by>;
  id?: Maybe<order_by>;
  occured?: Maybe<order_by>;
  title?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** order by min() on columns of table "contribution" */
export interface contribution_min_order_by {
  author_id?: Maybe<order_by>;
  created_at?: Maybe<order_by>;
  dao_id?: Maybe<order_by>;
  description?: Maybe<order_by>;
  id?: Maybe<order_by>;
  occured?: Maybe<order_by>;
  title?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** input type for inserting object relation for remote table "contribution" */
export interface contribution_obj_rel_insert_input {
  data: contribution_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<contribution_on_conflict>;
}

/** on conflict condition type for table "contribution" */
export interface contribution_on_conflict {
  constraint: contribution_constraint;
  update_columns?: Array<contribution_update_column>;
  where?: Maybe<contribution_bool_exp>;
}

/** Ordering options when selecting data from "contribution". */
export interface contribution_order_by {
  author?: Maybe<dao_member_order_by>;
  author_id?: Maybe<order_by>;
  contributors_aggregate?: Maybe<user_contribution_aggregate_order_by>;
  created_at?: Maybe<order_by>;
  dao?: Maybe<dao_order_by>;
  dao_id?: Maybe<order_by>;
  description?: Maybe<order_by>;
  id?: Maybe<order_by>;
  occured?: Maybe<order_by>;
  ratings_aggregate?: Maybe<contribution_rating_aggregate_order_by>;
  title?: Maybe<order_by>;
  updated_at?: Maybe<order_by>;
}

/** primary key columns input for table: contribution */
export interface contribution_pk_columns_input {
  id: Scalars['uuid'];
}

/** order by aggregate values of table "contribution_rating" */
export interface contribution_rating_aggregate_order_by {
  count?: Maybe<order_by>;
  max?: Maybe<contribution_rating_max_order_by>;
  min?: Maybe<contribution_rating_min_order_by>;
}

/** input type for inserting array relation for remote table "contribution_rating" */
export interface contribution_rating_arr_rel_insert_input {
  data: Array<contribution_rating_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<contribution_rating_on_conflict>;
}

/** Boolean expression to filter rows from the table "contribution_rating". All fields are combined with a logical 'AND'. */
export interface contribution_rating_bool_exp {
  _and?: Maybe<Array<contribution_rating_bool_exp>>;
  _not?: Maybe<contribution_rating_bool_exp>;
  _or?: Maybe<Array<contribution_rating_bool_exp>>;
  contribution?: Maybe<contribution_bool_exp>;
  contribution_id?: Maybe<uuid_comparison_exp>;
  rating?: Maybe<String_comparison_exp>;
  ratingGiven?: Maybe<rating_bool_exp>;
  user?: Maybe<user_bool_exp>;
  user_id?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "contribution_rating" */
export enum contribution_rating_constraint {
  /** unique or primary key constraint */
  contribution_rating_pkey = 'contribution_rating_pkey',
}

/** input type for inserting data into table "contribution_rating" */
export interface contribution_rating_insert_input {
  contribution?: Maybe<contribution_obj_rel_insert_input>;
  contribution_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['String']>;
  ratingGiven?: Maybe<rating_obj_rel_insert_input>;
  user?: Maybe<user_obj_rel_insert_input>;
  user_id?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "contribution_rating" */
export interface contribution_rating_max_order_by {
  contribution_id?: Maybe<order_by>;
  rating?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** order by min() on columns of table "contribution_rating" */
export interface contribution_rating_min_order_by {
  contribution_id?: Maybe<order_by>;
  rating?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** on conflict condition type for table "contribution_rating" */
export interface contribution_rating_on_conflict {
  constraint: contribution_rating_constraint;
  update_columns?: Array<contribution_rating_update_column>;
  where?: Maybe<contribution_rating_bool_exp>;
}

/** Ordering options when selecting data from "contribution_rating". */
export interface contribution_rating_order_by {
  contribution?: Maybe<contribution_order_by>;
  contribution_id?: Maybe<order_by>;
  rating?: Maybe<order_by>;
  ratingGiven?: Maybe<rating_order_by>;
  user?: Maybe<user_order_by>;
  user_id?: Maybe<order_by>;
}

/** primary key columns input for table: contribution_rating */
export interface contribution_rating_pk_columns_input {
  contribution_id: Scalars['uuid'];
  user_id: Scalars['String'];
}

/** select columns of table "contribution_rating" */
export enum contribution_rating_select_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  rating = 'rating',
  /** column name */
  user_id = 'user_id',
}

/** input type for updating data in table "contribution_rating" */
export interface contribution_rating_set_input {
  contribution_id?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
}

/** update columns of table "contribution_rating" */
export enum contribution_rating_update_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  rating = 'rating',
  /** column name */
  user_id = 'user_id',
}

/** select columns of table "contribution" */
export enum contribution_select_column {
  /** column name */
  author_id = 'author_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  dao_id = 'dao_id',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  occured = 'occured',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
}

/** input type for updating data in table "contribution" */
export interface contribution_set_input {
  author_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dao_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  occured?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
}

/** update columns of table "contribution" */
export enum contribution_update_column {
  /** column name */
  author_id = 'author_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  dao_id = 'dao_id',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  occured = 'occured',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
}

/** Boolean expression to filter rows from the table "dao". All fields are combined with a logical 'AND'. */
export interface dao_bool_exp {
  _and?: Maybe<Array<dao_bool_exp>>;
  _not?: Maybe<dao_bool_exp>;
  _or?: Maybe<Array<dao_bool_exp>>;
  contributions?: Maybe<contribution_bool_exp>;
  created_at?: Maybe<timestamptz_comparison_exp>;
  eth_address?: Maybe<String_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  members?: Maybe<dao_member_bool_exp>;
  name?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "dao" */
export enum dao_constraint {
  /** unique or primary key constraint */
  dao_eth_address_key = 'dao_eth_address_key',
  /** unique or primary key constraint */
  dao_pkey = 'dao_pkey',
}

/** input type for inserting data into table "dao" */
export interface dao_insert_input {
  contributions?: Maybe<contribution_arr_rel_insert_input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  eth_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  members?: Maybe<dao_member_arr_rel_insert_input>;
  name?: Maybe<Scalars['String']>;
}

/** order by aggregate values of table "dao_member" */
export interface dao_member_aggregate_order_by {
  count?: Maybe<order_by>;
  max?: Maybe<dao_member_max_order_by>;
  min?: Maybe<dao_member_min_order_by>;
}

/** input type for inserting array relation for remote table "dao_member" */
export interface dao_member_arr_rel_insert_input {
  data: Array<dao_member_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<dao_member_on_conflict>;
}

/** Boolean expression to filter rows from the table "dao_member". All fields are combined with a logical 'AND'. */
export interface dao_member_bool_exp {
  _and?: Maybe<Array<dao_member_bool_exp>>;
  _not?: Maybe<dao_member_bool_exp>;
  _or?: Maybe<Array<dao_member_bool_exp>>;
  can_rate?: Maybe<Boolean_comparison_exp>;
  contributions?: Maybe<contribution_bool_exp>;
  created_at?: Maybe<timestamptz_comparison_exp>;
  dao?: Maybe<dao_bool_exp>;
  dao_id?: Maybe<uuid_comparison_exp>;
  is_admin?: Maybe<Boolean_comparison_exp>;
  user?: Maybe<user_bool_exp>;
  user_id?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "dao_member" */
export enum dao_member_constraint {
  /** unique or primary key constraint */
  dao_member_pkey = 'dao_member_pkey',
}

/** input type for inserting data into table "dao_member" */
export interface dao_member_insert_input {
  can_rate?: Maybe<Scalars['Boolean']>;
  contributions?: Maybe<contribution_arr_rel_insert_input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dao?: Maybe<dao_obj_rel_insert_input>;
  dao_id?: Maybe<Scalars['uuid']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  user?: Maybe<user_obj_rel_insert_input>;
  user_id?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "dao_member" */
export interface dao_member_max_order_by {
  created_at?: Maybe<order_by>;
  dao_id?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** order by min() on columns of table "dao_member" */
export interface dao_member_min_order_by {
  created_at?: Maybe<order_by>;
  dao_id?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** input type for inserting object relation for remote table "dao_member" */
export interface dao_member_obj_rel_insert_input {
  data: dao_member_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<dao_member_on_conflict>;
}

/** on conflict condition type for table "dao_member" */
export interface dao_member_on_conflict {
  constraint: dao_member_constraint;
  update_columns?: Array<dao_member_update_column>;
  where?: Maybe<dao_member_bool_exp>;
}

/** Ordering options when selecting data from "dao_member". */
export interface dao_member_order_by {
  can_rate?: Maybe<order_by>;
  contributions_aggregate?: Maybe<contribution_aggregate_order_by>;
  created_at?: Maybe<order_by>;
  dao?: Maybe<dao_order_by>;
  dao_id?: Maybe<order_by>;
  is_admin?: Maybe<order_by>;
  user?: Maybe<user_order_by>;
  user_id?: Maybe<order_by>;
}

/** primary key columns input for table: dao_member */
export interface dao_member_pk_columns_input {
  dao_id: Scalars['uuid'];
  user_id: Scalars['String'];
}

/** select columns of table "dao_member" */
export enum dao_member_select_column {
  /** column name */
  can_rate = 'can_rate',
  /** column name */
  created_at = 'created_at',
  /** column name */
  dao_id = 'dao_id',
  /** column name */
  is_admin = 'is_admin',
  /** column name */
  user_id = 'user_id',
}

/** input type for updating data in table "dao_member" */
export interface dao_member_set_input {
  can_rate?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dao_id?: Maybe<Scalars['uuid']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['String']>;
}

/** update columns of table "dao_member" */
export enum dao_member_update_column {
  /** column name */
  can_rate = 'can_rate',
  /** column name */
  created_at = 'created_at',
  /** column name */
  dao_id = 'dao_id',
  /** column name */
  is_admin = 'is_admin',
  /** column name */
  user_id = 'user_id',
}

/** input type for inserting object relation for remote table "dao" */
export interface dao_obj_rel_insert_input {
  data: dao_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<dao_on_conflict>;
}

/** on conflict condition type for table "dao" */
export interface dao_on_conflict {
  constraint: dao_constraint;
  update_columns?: Array<dao_update_column>;
  where?: Maybe<dao_bool_exp>;
}

/** Ordering options when selecting data from "dao". */
export interface dao_order_by {
  contributions_aggregate?: Maybe<contribution_aggregate_order_by>;
  created_at?: Maybe<order_by>;
  eth_address?: Maybe<order_by>;
  id?: Maybe<order_by>;
  members_aggregate?: Maybe<dao_member_aggregate_order_by>;
  name?: Maybe<order_by>;
}

/** primary key columns input for table: dao */
export interface dao_pk_columns_input {
  id: Scalars['uuid'];
}

/** select columns of table "dao" */
export enum dao_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  eth_address = 'eth_address',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "dao" */
export interface dao_set_input {
  created_at?: Maybe<Scalars['timestamptz']>;
  eth_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
}

/** update columns of table "dao" */
export enum dao_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  eth_address = 'eth_address',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface date_comparison_exp {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/** Boolean expression to filter rows from the table "rating". All fields are combined with a logical 'AND'. */
export interface rating_bool_exp {
  _and?: Maybe<Array<rating_bool_exp>>;
  _not?: Maybe<rating_bool_exp>;
  _or?: Maybe<Array<rating_bool_exp>>;
  description?: Maybe<String_comparison_exp>;
  label?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "rating" */
export enum rating_constraint {
  /** unique or primary key constraint */
  rating_pkey = 'rating_pkey',
}

/** input type for inserting data into table "rating" */
export interface rating_insert_input {
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "rating" */
export interface rating_obj_rel_insert_input {
  data: rating_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<rating_on_conflict>;
}

/** on conflict condition type for table "rating" */
export interface rating_on_conflict {
  constraint: rating_constraint;
  update_columns?: Array<rating_update_column>;
  where?: Maybe<rating_bool_exp>;
}

/** Ordering options when selecting data from "rating". */
export interface rating_order_by {
  description?: Maybe<order_by>;
  label?: Maybe<order_by>;
}

/** primary key columns input for table: rating */
export interface rating_pk_columns_input {
  label: Scalars['String'];
}

/** select columns of table "rating" */
export enum rating_select_column {
  /** column name */
  description = 'description',
  /** column name */
  label = 'label',
}

/** input type for updating data in table "rating" */
export interface rating_set_input {
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
}

/** update columns of table "rating" */
export enum rating_update_column {
  /** column name */
  description = 'description',
  /** column name */
  label = 'label',
}

/** Boolean expression to filter rows from the table "skill". All fields are combined with a logical 'AND'. */
export interface skill_bool_exp {
  _and?: Maybe<Array<skill_bool_exp>>;
  _not?: Maybe<skill_bool_exp>;
  _or?: Maybe<Array<skill_bool_exp>>;
  description?: Maybe<String_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  name?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "skill" */
export enum skill_constraint {
  /** unique or primary key constraint */
  skill_name_key = 'skill_name_key',
  /** unique or primary key constraint */
  skill_pkey = 'skill_pkey',
}

/** input type for inserting data into table "skill" */
export interface skill_insert_input {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "skill" */
export interface skill_obj_rel_insert_input {
  data: skill_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<skill_on_conflict>;
}

/** on conflict condition type for table "skill" */
export interface skill_on_conflict {
  constraint: skill_constraint;
  update_columns?: Array<skill_update_column>;
  where?: Maybe<skill_bool_exp>;
}

/** Ordering options when selecting data from "skill". */
export interface skill_order_by {
  description?: Maybe<order_by>;
  id?: Maybe<order_by>;
  name?: Maybe<order_by>;
}

/** primary key columns input for table: skill */
export interface skill_pk_columns_input {
  id: Scalars['uuid'];
}

/** select columns of table "skill" */
export enum skill_select_column {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "skill" */
export interface skill_set_input {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
}

/** update columns of table "skill" */
export enum skill_update_column {
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp {
  _and?: Maybe<Array<user_bool_exp>>;
  _not?: Maybe<user_bool_exp>;
  _or?: Maybe<Array<user_bool_exp>>;
  contributed?: Maybe<user_contribution_bool_exp>;
  created_at?: Maybe<timestamptz_comparison_exp>;
  dao_memberships?: Maybe<dao_member_bool_exp>;
  did?: Maybe<String_comparison_exp>;
  eth_address?: Maybe<String_comparison_exp>;
  name?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "user" */
export enum user_constraint {
  /** unique or primary key constraint */
  user_eth_address_key = 'user_eth_address_key',
  /** unique or primary key constraint */
  user_pkey = 'user_pkey',
}

/** order by aggregate values of table "user_contribution" */
export interface user_contribution_aggregate_order_by {
  avg?: Maybe<user_contribution_avg_order_by>;
  count?: Maybe<order_by>;
  max?: Maybe<user_contribution_max_order_by>;
  min?: Maybe<user_contribution_min_order_by>;
  stddev?: Maybe<user_contribution_stddev_order_by>;
  stddev_pop?: Maybe<user_contribution_stddev_pop_order_by>;
  stddev_samp?: Maybe<user_contribution_stddev_samp_order_by>;
  sum?: Maybe<user_contribution_sum_order_by>;
  var_pop?: Maybe<user_contribution_var_pop_order_by>;
  var_samp?: Maybe<user_contribution_var_samp_order_by>;
  variance?: Maybe<user_contribution_variance_order_by>;
}

/** input type for inserting array relation for remote table "user_contribution" */
export interface user_contribution_arr_rel_insert_input {
  data: Array<user_contribution_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<user_contribution_on_conflict>;
}

/** order by avg() on columns of table "user_contribution" */
export interface user_contribution_avg_order_by {
  contribution_share?: Maybe<order_by>;
}

/** Boolean expression to filter rows from the table "user_contribution". All fields are combined with a logical 'AND'. */
export interface user_contribution_bool_exp {
  _and?: Maybe<Array<user_contribution_bool_exp>>;
  _not?: Maybe<user_contribution_bool_exp>;
  _or?: Maybe<Array<user_contribution_bool_exp>>;
  contribution?: Maybe<contribution_bool_exp>;
  contribution_id?: Maybe<uuid_comparison_exp>;
  contribution_share?: Maybe<numeric_comparison_exp>;
  skills?: Maybe<user_contribution_skill_bool_exp>;
  user?: Maybe<user_bool_exp>;
  user_id?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "user_contribution" */
export enum user_contribution_constraint {
  /** unique or primary key constraint */
  contributor_pkey = 'contributor_pkey',
}

/** input type for incrementing numeric columns in table "user_contribution" */
export interface user_contribution_inc_input {
  contribution_share?: Maybe<Scalars['numeric']>;
}

/** input type for inserting data into table "user_contribution" */
export interface user_contribution_insert_input {
  contribution?: Maybe<contribution_obj_rel_insert_input>;
  contribution_id?: Maybe<Scalars['uuid']>;
  contribution_share?: Maybe<Scalars['numeric']>;
  skills?: Maybe<user_contribution_skill_arr_rel_insert_input>;
  user?: Maybe<user_obj_rel_insert_input>;
  user_id?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "user_contribution" */
export interface user_contribution_max_order_by {
  contribution_id?: Maybe<order_by>;
  contribution_share?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** order by min() on columns of table "user_contribution" */
export interface user_contribution_min_order_by {
  contribution_id?: Maybe<order_by>;
  contribution_share?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** input type for inserting object relation for remote table "user_contribution" */
export interface user_contribution_obj_rel_insert_input {
  data: user_contribution_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<user_contribution_on_conflict>;
}

/** on conflict condition type for table "user_contribution" */
export interface user_contribution_on_conflict {
  constraint: user_contribution_constraint;
  update_columns?: Array<user_contribution_update_column>;
  where?: Maybe<user_contribution_bool_exp>;
}

/** Ordering options when selecting data from "user_contribution". */
export interface user_contribution_order_by {
  contribution?: Maybe<contribution_order_by>;
  contribution_id?: Maybe<order_by>;
  contribution_share?: Maybe<order_by>;
  skills_aggregate?: Maybe<user_contribution_skill_aggregate_order_by>;
  user?: Maybe<user_order_by>;
  user_id?: Maybe<order_by>;
}

/** primary key columns input for table: user_contribution */
export interface user_contribution_pk_columns_input {
  contribution_id: Scalars['uuid'];
  user_id: Scalars['String'];
}

/** select columns of table "user_contribution" */
export enum user_contribution_select_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  contribution_share = 'contribution_share',
  /** column name */
  user_id = 'user_id',
}

/** input type for updating data in table "user_contribution" */
export interface user_contribution_set_input {
  contribution_id?: Maybe<Scalars['uuid']>;
  contribution_share?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['String']>;
}

/** order by aggregate values of table "user_contribution_skill" */
export interface user_contribution_skill_aggregate_order_by {
  count?: Maybe<order_by>;
  max?: Maybe<user_contribution_skill_max_order_by>;
  min?: Maybe<user_contribution_skill_min_order_by>;
}

/** input type for inserting array relation for remote table "user_contribution_skill" */
export interface user_contribution_skill_arr_rel_insert_input {
  data: Array<user_contribution_skill_insert_input>;
  /** on conflict condition */
  on_conflict?: Maybe<user_contribution_skill_on_conflict>;
}

/** Boolean expression to filter rows from the table "user_contribution_skill". All fields are combined with a logical 'AND'. */
export interface user_contribution_skill_bool_exp {
  _and?: Maybe<Array<user_contribution_skill_bool_exp>>;
  _not?: Maybe<user_contribution_skill_bool_exp>;
  _or?: Maybe<Array<user_contribution_skill_bool_exp>>;
  contribution_id?: Maybe<uuid_comparison_exp>;
  contributor?: Maybe<user_contribution_bool_exp>;
  skill?: Maybe<skill_bool_exp>;
  skill_id?: Maybe<uuid_comparison_exp>;
  user_id?: Maybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "user_contribution_skill" */
export enum user_contribution_skill_constraint {
  /** unique or primary key constraint */
  contributor_skill_pkey = 'contributor_skill_pkey',
}

/** input type for inserting data into table "user_contribution_skill" */
export interface user_contribution_skill_insert_input {
  contribution_id?: Maybe<Scalars['uuid']>;
  contributor?: Maybe<user_contribution_obj_rel_insert_input>;
  skill?: Maybe<skill_obj_rel_insert_input>;
  skill_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "user_contribution_skill" */
export interface user_contribution_skill_max_order_by {
  contribution_id?: Maybe<order_by>;
  skill_id?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** order by min() on columns of table "user_contribution_skill" */
export interface user_contribution_skill_min_order_by {
  contribution_id?: Maybe<order_by>;
  skill_id?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** on conflict condition type for table "user_contribution_skill" */
export interface user_contribution_skill_on_conflict {
  constraint: user_contribution_skill_constraint;
  update_columns?: Array<user_contribution_skill_update_column>;
  where?: Maybe<user_contribution_skill_bool_exp>;
}

/** Ordering options when selecting data from "user_contribution_skill". */
export interface user_contribution_skill_order_by {
  contribution_id?: Maybe<order_by>;
  contributor?: Maybe<user_contribution_order_by>;
  skill?: Maybe<skill_order_by>;
  skill_id?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** primary key columns input for table: user_contribution_skill */
export interface user_contribution_skill_pk_columns_input {
  contribution_id: Scalars['uuid'];
  skill_id: Scalars['uuid'];
  user_id: Scalars['String'];
}

/** select columns of table "user_contribution_skill" */
export enum user_contribution_skill_select_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  skill_id = 'skill_id',
  /** column name */
  user_id = 'user_id',
}

/** input type for updating data in table "user_contribution_skill" */
export interface user_contribution_skill_set_input {
  contribution_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
}

/** update columns of table "user_contribution_skill" */
export enum user_contribution_skill_update_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  skill_id = 'skill_id',
  /** column name */
  user_id = 'user_id',
}

/** order by stddev() on columns of table "user_contribution" */
export interface user_contribution_stddev_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by stddev_pop() on columns of table "user_contribution" */
export interface user_contribution_stddev_pop_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by stddev_samp() on columns of table "user_contribution" */
export interface user_contribution_stddev_samp_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by sum() on columns of table "user_contribution" */
export interface user_contribution_sum_order_by {
  contribution_share?: Maybe<order_by>;
}

/** update columns of table "user_contribution" */
export enum user_contribution_update_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  contribution_share = 'contribution_share',
  /** column name */
  user_id = 'user_id',
}

/** order by var_pop() on columns of table "user_contribution" */
export interface user_contribution_var_pop_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by var_samp() on columns of table "user_contribution" */
export interface user_contribution_var_samp_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by variance() on columns of table "user_contribution" */
export interface user_contribution_variance_order_by {
  contribution_share?: Maybe<order_by>;
}

/** input type for inserting data into table "user" */
export interface user_insert_input {
  contributed?: Maybe<user_contribution_arr_rel_insert_input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dao_memberships?: Maybe<dao_member_arr_rel_insert_input>;
  did?: Maybe<Scalars['String']>;
  eth_address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

/** input type for inserting object relation for remote table "user" */
export interface user_obj_rel_insert_input {
  data: user_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<user_on_conflict>;
}

/** on conflict condition type for table "user" */
export interface user_on_conflict {
  constraint: user_constraint;
  update_columns?: Array<user_update_column>;
  where?: Maybe<user_bool_exp>;
}

/** Ordering options when selecting data from "user". */
export interface user_order_by {
  contributed_aggregate?: Maybe<user_contribution_aggregate_order_by>;
  created_at?: Maybe<order_by>;
  dao_memberships_aggregate?: Maybe<dao_member_aggregate_order_by>;
  did?: Maybe<order_by>;
  eth_address?: Maybe<order_by>;
  name?: Maybe<order_by>;
}

/** primary key columns input for table: user */
export interface user_pk_columns_input {
  did: Scalars['String'];
}

/** select columns of table "user" */
export enum user_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  did = 'did',
  /** column name */
  eth_address = 'eth_address',
  /** column name */
  name = 'name',
}

/** input type for updating data in table "user" */
export interface user_set_input {
  created_at?: Maybe<Scalars['timestamptz']>;
  did?: Maybe<Scalars['String']>;
  eth_address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

/** update columns of table "user" */
export enum user_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  did = 'did',
  /** column name */
  eth_address = 'eth_address',
  /** column name */
  name = 'name',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Int: true,
  String: true,
  contribution_constraint: true,
  contribution_rating_constraint: true,
  contribution_rating_select_column: true,
  contribution_rating_update_column: true,
  contribution_select_column: true,
  contribution_update_column: true,
  dao_constraint: true,
  dao_member_constraint: true,
  dao_member_select_column: true,
  dao_member_update_column: true,
  dao_select_column: true,
  dao_update_column: true,
  date: true,
  numeric: true,
  order_by: true,
  rating_constraint: true,
  rating_select_column: true,
  rating_update_column: true,
  skill_constraint: true,
  skill_select_column: true,
  skill_update_column: true,
  timestamp: true,
  timestamptz: true,
  user_constraint: true,
  user_contribution_constraint: true,
  user_contribution_select_column: true,
  user_contribution_skill_constraint: true,
  user_contribution_skill_select_column: true,
  user_contribution_skill_update_column: true,
  user_contribution_update_column: true,
  user_select_column: true,
  user_update_column: true,
  uuid: true,
};
export const generatedSchema = {
  Boolean_comparison_exp: {
    _eq: { __type: 'Boolean' },
    _gt: { __type: 'Boolean' },
    _gte: { __type: 'Boolean' },
    _in: { __type: '[Boolean!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'Boolean' },
    _lte: { __type: 'Boolean' },
    _neq: { __type: 'Boolean' },
    _nin: { __type: '[Boolean!]' },
  },
  String_comparison_exp: {
    _eq: { __type: 'String' },
    _gt: { __type: 'String' },
    _gte: { __type: 'String' },
    _ilike: { __type: 'String' },
    _in: { __type: '[String!]' },
    _iregex: { __type: 'String' },
    _is_null: { __type: 'Boolean' },
    _like: { __type: 'String' },
    _lt: { __type: 'String' },
    _lte: { __type: 'String' },
    _neq: { __type: 'String' },
    _nilike: { __type: 'String' },
    _nin: { __type: '[String!]' },
    _niregex: { __type: 'String' },
    _nlike: { __type: 'String' },
    _nregex: { __type: 'String' },
    _nsimilar: { __type: 'String' },
    _regex: { __type: 'String' },
    _similar: { __type: 'String' },
  },
  contribution: {
    __typename: { __type: 'String!' },
    author: { __type: 'dao_member' },
    author_id: { __type: 'String!' },
    contributors: {
      __type: '[user_contribution!]!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    contributors_aggregate: {
      __type: 'user_contribution_aggregate!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    created_at: { __type: 'timestamptz!' },
    dao: { __type: 'dao!' },
    dao_id: { __type: 'uuid!' },
    description: { __type: 'String!' },
    id: { __type: 'uuid!' },
    occured: { __type: 'date!' },
    ratings: {
      __type: '[contribution_rating!]!',
      __args: {
        distinct_on: '[contribution_rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_rating_order_by!]',
        where: 'contribution_rating_bool_exp',
      },
    },
    ratings_aggregate: {
      __type: 'contribution_rating_aggregate!',
      __args: {
        distinct_on: '[contribution_rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_rating_order_by!]',
        where: 'contribution_rating_bool_exp',
      },
    },
    title: { __type: 'String!' },
    updated_at: { __type: 'timestamp!' },
  },
  contribution_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'contribution_aggregate_fields' },
    nodes: { __type: '[contribution!]!' },
  },
  contribution_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[contribution_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'contribution_max_fields' },
    min: { __type: 'contribution_min_fields' },
  },
  contribution_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'contribution_max_order_by' },
    min: { __type: 'contribution_min_order_by' },
  },
  contribution_arr_rel_insert_input: {
    data: { __type: '[contribution_insert_input!]!' },
    on_conflict: { __type: 'contribution_on_conflict' },
  },
  contribution_bool_exp: {
    _and: { __type: '[contribution_bool_exp!]' },
    _not: { __type: 'contribution_bool_exp' },
    _or: { __type: '[contribution_bool_exp!]' },
    author: { __type: 'dao_member_bool_exp' },
    author_id: { __type: 'String_comparison_exp' },
    contributors: { __type: 'user_contribution_bool_exp' },
    created_at: { __type: 'timestamptz_comparison_exp' },
    dao: { __type: 'dao_bool_exp' },
    dao_id: { __type: 'uuid_comparison_exp' },
    description: { __type: 'String_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    occured: { __type: 'date_comparison_exp' },
    ratings: { __type: 'contribution_rating_bool_exp' },
    title: { __type: 'String_comparison_exp' },
    updated_at: { __type: 'timestamp_comparison_exp' },
  },
  contribution_insert_input: {
    author: { __type: 'dao_member_obj_rel_insert_input' },
    author_id: { __type: 'String' },
    contributors: { __type: 'user_contribution_arr_rel_insert_input' },
    created_at: { __type: 'timestamptz' },
    dao: { __type: 'dao_obj_rel_insert_input' },
    dao_id: { __type: 'uuid' },
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    occured: { __type: 'date' },
    ratings: { __type: 'contribution_rating_arr_rel_insert_input' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  contribution_max_fields: {
    __typename: { __type: 'String!' },
    author_id: { __type: 'String' },
    created_at: { __type: 'timestamptz' },
    dao_id: { __type: 'uuid' },
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    occured: { __type: 'date' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  contribution_max_order_by: {
    author_id: { __type: 'order_by' },
    created_at: { __type: 'order_by' },
    dao_id: { __type: 'order_by' },
    description: { __type: 'order_by' },
    id: { __type: 'order_by' },
    occured: { __type: 'order_by' },
    title: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  contribution_min_fields: {
    __typename: { __type: 'String!' },
    author_id: { __type: 'String' },
    created_at: { __type: 'timestamptz' },
    dao_id: { __type: 'uuid' },
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    occured: { __type: 'date' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  contribution_min_order_by: {
    author_id: { __type: 'order_by' },
    created_at: { __type: 'order_by' },
    dao_id: { __type: 'order_by' },
    description: { __type: 'order_by' },
    id: { __type: 'order_by' },
    occured: { __type: 'order_by' },
    title: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  contribution_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[contribution!]!' },
  },
  contribution_obj_rel_insert_input: {
    data: { __type: 'contribution_insert_input!' },
    on_conflict: { __type: 'contribution_on_conflict' },
  },
  contribution_on_conflict: {
    constraint: { __type: 'contribution_constraint!' },
    update_columns: { __type: '[contribution_update_column!]!' },
    where: { __type: 'contribution_bool_exp' },
  },
  contribution_order_by: {
    author: { __type: 'dao_member_order_by' },
    author_id: { __type: 'order_by' },
    contributors_aggregate: { __type: 'user_contribution_aggregate_order_by' },
    created_at: { __type: 'order_by' },
    dao: { __type: 'dao_order_by' },
    dao_id: { __type: 'order_by' },
    description: { __type: 'order_by' },
    id: { __type: 'order_by' },
    occured: { __type: 'order_by' },
    ratings_aggregate: { __type: 'contribution_rating_aggregate_order_by' },
    title: { __type: 'order_by' },
    updated_at: { __type: 'order_by' },
  },
  contribution_pk_columns_input: { id: { __type: 'uuid!' } },
  contribution_rating: {
    __typename: { __type: 'String!' },
    contribution: { __type: 'contribution!' },
    contribution_id: { __type: 'uuid!' },
    rating: { __type: 'String!' },
    ratingGiven: { __type: 'rating!' },
    user: { __type: 'user!' },
    user_id: { __type: 'String!' },
  },
  contribution_rating_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'contribution_rating_aggregate_fields' },
    nodes: { __type: '[contribution_rating!]!' },
  },
  contribution_rating_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[contribution_rating_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'contribution_rating_max_fields' },
    min: { __type: 'contribution_rating_min_fields' },
  },
  contribution_rating_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'contribution_rating_max_order_by' },
    min: { __type: 'contribution_rating_min_order_by' },
  },
  contribution_rating_arr_rel_insert_input: {
    data: { __type: '[contribution_rating_insert_input!]!' },
    on_conflict: { __type: 'contribution_rating_on_conflict' },
  },
  contribution_rating_bool_exp: {
    _and: { __type: '[contribution_rating_bool_exp!]' },
    _not: { __type: 'contribution_rating_bool_exp' },
    _or: { __type: '[contribution_rating_bool_exp!]' },
    contribution: { __type: 'contribution_bool_exp' },
    contribution_id: { __type: 'uuid_comparison_exp' },
    rating: { __type: 'String_comparison_exp' },
    ratingGiven: { __type: 'rating_bool_exp' },
    user: { __type: 'user_bool_exp' },
    user_id: { __type: 'String_comparison_exp' },
  },
  contribution_rating_insert_input: {
    contribution: { __type: 'contribution_obj_rel_insert_input' },
    contribution_id: { __type: 'uuid' },
    rating: { __type: 'String' },
    ratingGiven: { __type: 'rating_obj_rel_insert_input' },
    user: { __type: 'user_obj_rel_insert_input' },
    user_id: { __type: 'String' },
  },
  contribution_rating_max_fields: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid' },
    rating: { __type: 'String' },
    user_id: { __type: 'String' },
  },
  contribution_rating_max_order_by: {
    contribution_id: { __type: 'order_by' },
    rating: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  contribution_rating_min_fields: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid' },
    rating: { __type: 'String' },
    user_id: { __type: 'String' },
  },
  contribution_rating_min_order_by: {
    contribution_id: { __type: 'order_by' },
    rating: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  contribution_rating_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[contribution_rating!]!' },
  },
  contribution_rating_on_conflict: {
    constraint: { __type: 'contribution_rating_constraint!' },
    update_columns: { __type: '[contribution_rating_update_column!]!' },
    where: { __type: 'contribution_rating_bool_exp' },
  },
  contribution_rating_order_by: {
    contribution: { __type: 'contribution_order_by' },
    contribution_id: { __type: 'order_by' },
    rating: { __type: 'order_by' },
    ratingGiven: { __type: 'rating_order_by' },
    user: { __type: 'user_order_by' },
    user_id: { __type: 'order_by' },
  },
  contribution_rating_pk_columns_input: {
    contribution_id: { __type: 'uuid!' },
    user_id: { __type: 'String!' },
  },
  contribution_rating_set_input: {
    contribution_id: { __type: 'uuid' },
    rating: { __type: 'String' },
    user_id: { __type: 'String' },
  },
  contribution_set_input: {
    author_id: { __type: 'String' },
    created_at: { __type: 'timestamptz' },
    dao_id: { __type: 'uuid' },
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    occured: { __type: 'date' },
    title: { __type: 'String' },
    updated_at: { __type: 'timestamp' },
  },
  dao: {
    __typename: { __type: 'String!' },
    contributions: {
      __type: '[contribution!]!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    contributions_aggregate: {
      __type: 'contribution_aggregate!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    created_at: { __type: 'timestamptz!' },
    eth_address: { __type: 'String' },
    id: { __type: 'uuid!' },
    members: {
      __type: '[dao_member!]!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    members_aggregate: {
      __type: 'dao_member_aggregate!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    name: { __type: 'String!' },
  },
  dao_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'dao_aggregate_fields' },
    nodes: { __type: '[dao!]!' },
  },
  dao_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[dao_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'dao_max_fields' },
    min: { __type: 'dao_min_fields' },
  },
  dao_bool_exp: {
    _and: { __type: '[dao_bool_exp!]' },
    _not: { __type: 'dao_bool_exp' },
    _or: { __type: '[dao_bool_exp!]' },
    contributions: { __type: 'contribution_bool_exp' },
    created_at: { __type: 'timestamptz_comparison_exp' },
    eth_address: { __type: 'String_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    members: { __type: 'dao_member_bool_exp' },
    name: { __type: 'String_comparison_exp' },
  },
  dao_insert_input: {
    contributions: { __type: 'contribution_arr_rel_insert_input' },
    created_at: { __type: 'timestamptz' },
    eth_address: { __type: 'String' },
    id: { __type: 'uuid' },
    members: { __type: 'dao_member_arr_rel_insert_input' },
    name: { __type: 'String' },
  },
  dao_max_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    eth_address: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  dao_member: {
    __typename: { __type: 'String!' },
    can_rate: { __type: 'Boolean!' },
    contributions: {
      __type: '[contribution!]!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    contributions_aggregate: {
      __type: 'contribution_aggregate!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    created_at: { __type: 'timestamptz' },
    dao: { __type: 'dao!' },
    dao_id: { __type: 'uuid!' },
    is_admin: { __type: 'Boolean' },
    user: { __type: 'user!' },
    user_id: { __type: 'String!' },
  },
  dao_member_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'dao_member_aggregate_fields' },
    nodes: { __type: '[dao_member!]!' },
  },
  dao_member_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[dao_member_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'dao_member_max_fields' },
    min: { __type: 'dao_member_min_fields' },
  },
  dao_member_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'dao_member_max_order_by' },
    min: { __type: 'dao_member_min_order_by' },
  },
  dao_member_arr_rel_insert_input: {
    data: { __type: '[dao_member_insert_input!]!' },
    on_conflict: { __type: 'dao_member_on_conflict' },
  },
  dao_member_bool_exp: {
    _and: { __type: '[dao_member_bool_exp!]' },
    _not: { __type: 'dao_member_bool_exp' },
    _or: { __type: '[dao_member_bool_exp!]' },
    can_rate: { __type: 'Boolean_comparison_exp' },
    contributions: { __type: 'contribution_bool_exp' },
    created_at: { __type: 'timestamptz_comparison_exp' },
    dao: { __type: 'dao_bool_exp' },
    dao_id: { __type: 'uuid_comparison_exp' },
    is_admin: { __type: 'Boolean_comparison_exp' },
    user: { __type: 'user_bool_exp' },
    user_id: { __type: 'String_comparison_exp' },
  },
  dao_member_insert_input: {
    can_rate: { __type: 'Boolean' },
    contributions: { __type: 'contribution_arr_rel_insert_input' },
    created_at: { __type: 'timestamptz' },
    dao: { __type: 'dao_obj_rel_insert_input' },
    dao_id: { __type: 'uuid' },
    is_admin: { __type: 'Boolean' },
    user: { __type: 'user_obj_rel_insert_input' },
    user_id: { __type: 'String' },
  },
  dao_member_max_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    dao_id: { __type: 'uuid' },
    user_id: { __type: 'String' },
  },
  dao_member_max_order_by: {
    created_at: { __type: 'order_by' },
    dao_id: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  dao_member_min_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    dao_id: { __type: 'uuid' },
    user_id: { __type: 'String' },
  },
  dao_member_min_order_by: {
    created_at: { __type: 'order_by' },
    dao_id: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  dao_member_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[dao_member!]!' },
  },
  dao_member_obj_rel_insert_input: {
    data: { __type: 'dao_member_insert_input!' },
    on_conflict: { __type: 'dao_member_on_conflict' },
  },
  dao_member_on_conflict: {
    constraint: { __type: 'dao_member_constraint!' },
    update_columns: { __type: '[dao_member_update_column!]!' },
    where: { __type: 'dao_member_bool_exp' },
  },
  dao_member_order_by: {
    can_rate: { __type: 'order_by' },
    contributions_aggregate: { __type: 'contribution_aggregate_order_by' },
    created_at: { __type: 'order_by' },
    dao: { __type: 'dao_order_by' },
    dao_id: { __type: 'order_by' },
    is_admin: { __type: 'order_by' },
    user: { __type: 'user_order_by' },
    user_id: { __type: 'order_by' },
  },
  dao_member_pk_columns_input: {
    dao_id: { __type: 'uuid!' },
    user_id: { __type: 'String!' },
  },
  dao_member_set_input: {
    can_rate: { __type: 'Boolean' },
    created_at: { __type: 'timestamptz' },
    dao_id: { __type: 'uuid' },
    is_admin: { __type: 'Boolean' },
    user_id: { __type: 'String' },
  },
  dao_min_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    eth_address: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  dao_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[dao!]!' },
  },
  dao_obj_rel_insert_input: {
    data: { __type: 'dao_insert_input!' },
    on_conflict: { __type: 'dao_on_conflict' },
  },
  dao_on_conflict: {
    constraint: { __type: 'dao_constraint!' },
    update_columns: { __type: '[dao_update_column!]!' },
    where: { __type: 'dao_bool_exp' },
  },
  dao_order_by: {
    contributions_aggregate: { __type: 'contribution_aggregate_order_by' },
    created_at: { __type: 'order_by' },
    eth_address: { __type: 'order_by' },
    id: { __type: 'order_by' },
    members_aggregate: { __type: 'dao_member_aggregate_order_by' },
    name: { __type: 'order_by' },
  },
  dao_pk_columns_input: { id: { __type: 'uuid!' } },
  dao_set_input: {
    created_at: { __type: 'timestamptz' },
    eth_address: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  date_comparison_exp: {
    _eq: { __type: 'date' },
    _gt: { __type: 'date' },
    _gte: { __type: 'date' },
    _in: { __type: '[date!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'date' },
    _lte: { __type: 'date' },
    _neq: { __type: 'date' },
    _nin: { __type: '[date!]' },
  },
  mutation: {
    __typename: { __type: 'String!' },
    delete_contribution: {
      __type: 'contribution_mutation_response',
      __args: { where: 'contribution_bool_exp!' },
    },
    delete_contribution_by_pk: {
      __type: 'contribution',
      __args: { id: 'uuid!' },
    },
    delete_contribution_rating: {
      __type: 'contribution_rating_mutation_response',
      __args: { where: 'contribution_rating_bool_exp!' },
    },
    delete_contribution_rating_by_pk: {
      __type: 'contribution_rating',
      __args: { contribution_id: 'uuid!', user_id: 'String!' },
    },
    delete_dao: {
      __type: 'dao_mutation_response',
      __args: { where: 'dao_bool_exp!' },
    },
    delete_dao_by_pk: { __type: 'dao', __args: { id: 'uuid!' } },
    delete_dao_member: {
      __type: 'dao_member_mutation_response',
      __args: { where: 'dao_member_bool_exp!' },
    },
    delete_dao_member_by_pk: {
      __type: 'dao_member',
      __args: { dao_id: 'uuid!', user_id: 'String!' },
    },
    delete_rating: {
      __type: 'rating_mutation_response',
      __args: { where: 'rating_bool_exp!' },
    },
    delete_rating_by_pk: { __type: 'rating', __args: { label: 'String!' } },
    delete_skill: {
      __type: 'skill_mutation_response',
      __args: { where: 'skill_bool_exp!' },
    },
    delete_skill_by_pk: { __type: 'skill', __args: { id: 'uuid!' } },
    delete_user: {
      __type: 'user_mutation_response',
      __args: { where: 'user_bool_exp!' },
    },
    delete_user_by_pk: { __type: 'user', __args: { did: 'String!' } },
    delete_user_contribution: {
      __type: 'user_contribution_mutation_response',
      __args: { where: 'user_contribution_bool_exp!' },
    },
    delete_user_contribution_by_pk: {
      __type: 'user_contribution',
      __args: { contribution_id: 'uuid!', user_id: 'String!' },
    },
    delete_user_contribution_skill: {
      __type: 'user_contribution_skill_mutation_response',
      __args: { where: 'user_contribution_skill_bool_exp!' },
    },
    delete_user_contribution_skill_by_pk: {
      __type: 'user_contribution_skill',
      __args: {
        contribution_id: 'uuid!',
        skill_id: 'uuid!',
        user_id: 'String!',
      },
    },
    insert_contribution: {
      __type: 'contribution_mutation_response',
      __args: {
        objects: '[contribution_insert_input!]!',
        on_conflict: 'contribution_on_conflict',
      },
    },
    insert_contribution_one: {
      __type: 'contribution',
      __args: {
        object: 'contribution_insert_input!',
        on_conflict: 'contribution_on_conflict',
      },
    },
    insert_contribution_rating: {
      __type: 'contribution_rating_mutation_response',
      __args: {
        objects: '[contribution_rating_insert_input!]!',
        on_conflict: 'contribution_rating_on_conflict',
      },
    },
    insert_contribution_rating_one: {
      __type: 'contribution_rating',
      __args: {
        object: 'contribution_rating_insert_input!',
        on_conflict: 'contribution_rating_on_conflict',
      },
    },
    insert_dao: {
      __type: 'dao_mutation_response',
      __args: {
        objects: '[dao_insert_input!]!',
        on_conflict: 'dao_on_conflict',
      },
    },
    insert_dao_member: {
      __type: 'dao_member_mutation_response',
      __args: {
        objects: '[dao_member_insert_input!]!',
        on_conflict: 'dao_member_on_conflict',
      },
    },
    insert_dao_member_one: {
      __type: 'dao_member',
      __args: {
        object: 'dao_member_insert_input!',
        on_conflict: 'dao_member_on_conflict',
      },
    },
    insert_dao_one: {
      __type: 'dao',
      __args: { object: 'dao_insert_input!', on_conflict: 'dao_on_conflict' },
    },
    insert_rating: {
      __type: 'rating_mutation_response',
      __args: {
        objects: '[rating_insert_input!]!',
        on_conflict: 'rating_on_conflict',
      },
    },
    insert_rating_one: {
      __type: 'rating',
      __args: {
        object: 'rating_insert_input!',
        on_conflict: 'rating_on_conflict',
      },
    },
    insert_skill: {
      __type: 'skill_mutation_response',
      __args: {
        objects: '[skill_insert_input!]!',
        on_conflict: 'skill_on_conflict',
      },
    },
    insert_skill_one: {
      __type: 'skill',
      __args: {
        object: 'skill_insert_input!',
        on_conflict: 'skill_on_conflict',
      },
    },
    insert_user: {
      __type: 'user_mutation_response',
      __args: {
        objects: '[user_insert_input!]!',
        on_conflict: 'user_on_conflict',
      },
    },
    insert_user_contribution: {
      __type: 'user_contribution_mutation_response',
      __args: {
        objects: '[user_contribution_insert_input!]!',
        on_conflict: 'user_contribution_on_conflict',
      },
    },
    insert_user_contribution_one: {
      __type: 'user_contribution',
      __args: {
        object: 'user_contribution_insert_input!',
        on_conflict: 'user_contribution_on_conflict',
      },
    },
    insert_user_contribution_skill: {
      __type: 'user_contribution_skill_mutation_response',
      __args: {
        objects: '[user_contribution_skill_insert_input!]!',
        on_conflict: 'user_contribution_skill_on_conflict',
      },
    },
    insert_user_contribution_skill_one: {
      __type: 'user_contribution_skill',
      __args: {
        object: 'user_contribution_skill_insert_input!',
        on_conflict: 'user_contribution_skill_on_conflict',
      },
    },
    insert_user_one: {
      __type: 'user',
      __args: { object: 'user_insert_input!', on_conflict: 'user_on_conflict' },
    },
    update_contribution: {
      __type: 'contribution_mutation_response',
      __args: {
        _set: 'contribution_set_input',
        where: 'contribution_bool_exp!',
      },
    },
    update_contribution_by_pk: {
      __type: 'contribution',
      __args: {
        _set: 'contribution_set_input',
        pk_columns: 'contribution_pk_columns_input!',
      },
    },
    update_contribution_rating: {
      __type: 'contribution_rating_mutation_response',
      __args: {
        _set: 'contribution_rating_set_input',
        where: 'contribution_rating_bool_exp!',
      },
    },
    update_contribution_rating_by_pk: {
      __type: 'contribution_rating',
      __args: {
        _set: 'contribution_rating_set_input',
        pk_columns: 'contribution_rating_pk_columns_input!',
      },
    },
    update_dao: {
      __type: 'dao_mutation_response',
      __args: { _set: 'dao_set_input', where: 'dao_bool_exp!' },
    },
    update_dao_by_pk: {
      __type: 'dao',
      __args: { _set: 'dao_set_input', pk_columns: 'dao_pk_columns_input!' },
    },
    update_dao_member: {
      __type: 'dao_member_mutation_response',
      __args: { _set: 'dao_member_set_input', where: 'dao_member_bool_exp!' },
    },
    update_dao_member_by_pk: {
      __type: 'dao_member',
      __args: {
        _set: 'dao_member_set_input',
        pk_columns: 'dao_member_pk_columns_input!',
      },
    },
    update_rating: {
      __type: 'rating_mutation_response',
      __args: { _set: 'rating_set_input', where: 'rating_bool_exp!' },
    },
    update_rating_by_pk: {
      __type: 'rating',
      __args: {
        _set: 'rating_set_input',
        pk_columns: 'rating_pk_columns_input!',
      },
    },
    update_skill: {
      __type: 'skill_mutation_response',
      __args: { _set: 'skill_set_input', where: 'skill_bool_exp!' },
    },
    update_skill_by_pk: {
      __type: 'skill',
      __args: {
        _set: 'skill_set_input',
        pk_columns: 'skill_pk_columns_input!',
      },
    },
    update_user: {
      __type: 'user_mutation_response',
      __args: { _set: 'user_set_input', where: 'user_bool_exp!' },
    },
    update_user_by_pk: {
      __type: 'user',
      __args: { _set: 'user_set_input', pk_columns: 'user_pk_columns_input!' },
    },
    update_user_contribution: {
      __type: 'user_contribution_mutation_response',
      __args: {
        _inc: 'user_contribution_inc_input',
        _set: 'user_contribution_set_input',
        where: 'user_contribution_bool_exp!',
      },
    },
    update_user_contribution_by_pk: {
      __type: 'user_contribution',
      __args: {
        _inc: 'user_contribution_inc_input',
        _set: 'user_contribution_set_input',
        pk_columns: 'user_contribution_pk_columns_input!',
      },
    },
    update_user_contribution_skill: {
      __type: 'user_contribution_skill_mutation_response',
      __args: {
        _set: 'user_contribution_skill_set_input',
        where: 'user_contribution_skill_bool_exp!',
      },
    },
    update_user_contribution_skill_by_pk: {
      __type: 'user_contribution_skill',
      __args: {
        _set: 'user_contribution_skill_set_input',
        pk_columns: 'user_contribution_skill_pk_columns_input!',
      },
    },
  },
  numeric_comparison_exp: {
    _eq: { __type: 'numeric' },
    _gt: { __type: 'numeric' },
    _gte: { __type: 'numeric' },
    _in: { __type: '[numeric!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'numeric' },
    _lte: { __type: 'numeric' },
    _neq: { __type: 'numeric' },
    _nin: { __type: '[numeric!]' },
  },
  query: {
    __typename: { __type: 'String!' },
    contribution: {
      __type: '[contribution!]!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    contribution_aggregate: {
      __type: 'contribution_aggregate!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    contribution_by_pk: { __type: 'contribution', __args: { id: 'uuid!' } },
    contribution_rating: {
      __type: '[contribution_rating!]!',
      __args: {
        distinct_on: '[contribution_rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_rating_order_by!]',
        where: 'contribution_rating_bool_exp',
      },
    },
    contribution_rating_aggregate: {
      __type: 'contribution_rating_aggregate!',
      __args: {
        distinct_on: '[contribution_rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_rating_order_by!]',
        where: 'contribution_rating_bool_exp',
      },
    },
    contribution_rating_by_pk: {
      __type: 'contribution_rating',
      __args: { contribution_id: 'uuid!', user_id: 'String!' },
    },
    dao: {
      __type: '[dao!]!',
      __args: {
        distinct_on: '[dao_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_order_by!]',
        where: 'dao_bool_exp',
      },
    },
    dao_aggregate: {
      __type: 'dao_aggregate!',
      __args: {
        distinct_on: '[dao_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_order_by!]',
        where: 'dao_bool_exp',
      },
    },
    dao_by_pk: { __type: 'dao', __args: { id: 'uuid!' } },
    dao_member: {
      __type: '[dao_member!]!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    dao_member_aggregate: {
      __type: 'dao_member_aggregate!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    dao_member_by_pk: {
      __type: 'dao_member',
      __args: { dao_id: 'uuid!', user_id: 'String!' },
    },
    rating: {
      __type: '[rating!]!',
      __args: {
        distinct_on: '[rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[rating_order_by!]',
        where: 'rating_bool_exp',
      },
    },
    rating_aggregate: {
      __type: 'rating_aggregate!',
      __args: {
        distinct_on: '[rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[rating_order_by!]',
        where: 'rating_bool_exp',
      },
    },
    rating_by_pk: { __type: 'rating', __args: { label: 'String!' } },
    skill: {
      __type: '[skill!]!',
      __args: {
        distinct_on: '[skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[skill_order_by!]',
        where: 'skill_bool_exp',
      },
    },
    skill_aggregate: {
      __type: 'skill_aggregate!',
      __args: {
        distinct_on: '[skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[skill_order_by!]',
        where: 'skill_bool_exp',
      },
    },
    skill_by_pk: { __type: 'skill', __args: { id: 'uuid!' } },
    user: {
      __type: '[user!]!',
      __args: {
        distinct_on: '[user_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_order_by!]',
        where: 'user_bool_exp',
      },
    },
    user_aggregate: {
      __type: 'user_aggregate!',
      __args: {
        distinct_on: '[user_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_order_by!]',
        where: 'user_bool_exp',
      },
    },
    user_by_pk: { __type: 'user', __args: { did: 'String!' } },
    user_contribution: {
      __type: '[user_contribution!]!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    user_contribution_aggregate: {
      __type: 'user_contribution_aggregate!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    user_contribution_by_pk: {
      __type: 'user_contribution',
      __args: { contribution_id: 'uuid!', user_id: 'String!' },
    },
    user_contribution_skill: {
      __type: '[user_contribution_skill!]!',
      __args: {
        distinct_on: '[user_contribution_skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_skill_order_by!]',
        where: 'user_contribution_skill_bool_exp',
      },
    },
    user_contribution_skill_aggregate: {
      __type: 'user_contribution_skill_aggregate!',
      __args: {
        distinct_on: '[user_contribution_skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_skill_order_by!]',
        where: 'user_contribution_skill_bool_exp',
      },
    },
    user_contribution_skill_by_pk: {
      __type: 'user_contribution_skill',
      __args: {
        contribution_id: 'uuid!',
        skill_id: 'uuid!',
        user_id: 'String!',
      },
    },
  },
  rating: {
    __typename: { __type: 'String!' },
    description: { __type: 'String!' },
    label: { __type: 'String!' },
  },
  rating_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'rating_aggregate_fields' },
    nodes: { __type: '[rating!]!' },
  },
  rating_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[rating_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'rating_max_fields' },
    min: { __type: 'rating_min_fields' },
  },
  rating_bool_exp: {
    _and: { __type: '[rating_bool_exp!]' },
    _not: { __type: 'rating_bool_exp' },
    _or: { __type: '[rating_bool_exp!]' },
    description: { __type: 'String_comparison_exp' },
    label: { __type: 'String_comparison_exp' },
  },
  rating_insert_input: {
    description: { __type: 'String' },
    label: { __type: 'String' },
  },
  rating_max_fields: {
    __typename: { __type: 'String!' },
    description: { __type: 'String' },
    label: { __type: 'String' },
  },
  rating_min_fields: {
    __typename: { __type: 'String!' },
    description: { __type: 'String' },
    label: { __type: 'String' },
  },
  rating_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[rating!]!' },
  },
  rating_obj_rel_insert_input: {
    data: { __type: 'rating_insert_input!' },
    on_conflict: { __type: 'rating_on_conflict' },
  },
  rating_on_conflict: {
    constraint: { __type: 'rating_constraint!' },
    update_columns: { __type: '[rating_update_column!]!' },
    where: { __type: 'rating_bool_exp' },
  },
  rating_order_by: {
    description: { __type: 'order_by' },
    label: { __type: 'order_by' },
  },
  rating_pk_columns_input: { label: { __type: 'String!' } },
  rating_set_input: {
    description: { __type: 'String' },
    label: { __type: 'String' },
  },
  skill: {
    __typename: { __type: 'String!' },
    description: { __type: 'String!' },
    id: { __type: 'uuid!' },
    name: { __type: 'String!' },
  },
  skill_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'skill_aggregate_fields' },
    nodes: { __type: '[skill!]!' },
  },
  skill_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[skill_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'skill_max_fields' },
    min: { __type: 'skill_min_fields' },
  },
  skill_bool_exp: {
    _and: { __type: '[skill_bool_exp!]' },
    _not: { __type: 'skill_bool_exp' },
    _or: { __type: '[skill_bool_exp!]' },
    description: { __type: 'String_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
  },
  skill_insert_input: {
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  skill_max_fields: {
    __typename: { __type: 'String!' },
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  skill_min_fields: {
    __typename: { __type: 'String!' },
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  skill_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[skill!]!' },
  },
  skill_obj_rel_insert_input: {
    data: { __type: 'skill_insert_input!' },
    on_conflict: { __type: 'skill_on_conflict' },
  },
  skill_on_conflict: {
    constraint: { __type: 'skill_constraint!' },
    update_columns: { __type: '[skill_update_column!]!' },
    where: { __type: 'skill_bool_exp' },
  },
  skill_order_by: {
    description: { __type: 'order_by' },
    id: { __type: 'order_by' },
    name: { __type: 'order_by' },
  },
  skill_pk_columns_input: { id: { __type: 'uuid!' } },
  skill_set_input: {
    description: { __type: 'String' },
    id: { __type: 'uuid' },
    name: { __type: 'String' },
  },
  subscription: {
    __typename: { __type: 'String!' },
    contribution: {
      __type: '[contribution!]!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    contribution_aggregate: {
      __type: 'contribution_aggregate!',
      __args: {
        distinct_on: '[contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_order_by!]',
        where: 'contribution_bool_exp',
      },
    },
    contribution_by_pk: { __type: 'contribution', __args: { id: 'uuid!' } },
    contribution_rating: {
      __type: '[contribution_rating!]!',
      __args: {
        distinct_on: '[contribution_rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_rating_order_by!]',
        where: 'contribution_rating_bool_exp',
      },
    },
    contribution_rating_aggregate: {
      __type: 'contribution_rating_aggregate!',
      __args: {
        distinct_on: '[contribution_rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_rating_order_by!]',
        where: 'contribution_rating_bool_exp',
      },
    },
    contribution_rating_by_pk: {
      __type: 'contribution_rating',
      __args: { contribution_id: 'uuid!', user_id: 'String!' },
    },
    dao: {
      __type: '[dao!]!',
      __args: {
        distinct_on: '[dao_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_order_by!]',
        where: 'dao_bool_exp',
      },
    },
    dao_aggregate: {
      __type: 'dao_aggregate!',
      __args: {
        distinct_on: '[dao_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_order_by!]',
        where: 'dao_bool_exp',
      },
    },
    dao_by_pk: { __type: 'dao', __args: { id: 'uuid!' } },
    dao_member: {
      __type: '[dao_member!]!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    dao_member_aggregate: {
      __type: 'dao_member_aggregate!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    dao_member_by_pk: {
      __type: 'dao_member',
      __args: { dao_id: 'uuid!', user_id: 'String!' },
    },
    rating: {
      __type: '[rating!]!',
      __args: {
        distinct_on: '[rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[rating_order_by!]',
        where: 'rating_bool_exp',
      },
    },
    rating_aggregate: {
      __type: 'rating_aggregate!',
      __args: {
        distinct_on: '[rating_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[rating_order_by!]',
        where: 'rating_bool_exp',
      },
    },
    rating_by_pk: { __type: 'rating', __args: { label: 'String!' } },
    skill: {
      __type: '[skill!]!',
      __args: {
        distinct_on: '[skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[skill_order_by!]',
        where: 'skill_bool_exp',
      },
    },
    skill_aggregate: {
      __type: 'skill_aggregate!',
      __args: {
        distinct_on: '[skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[skill_order_by!]',
        where: 'skill_bool_exp',
      },
    },
    skill_by_pk: { __type: 'skill', __args: { id: 'uuid!' } },
    user: {
      __type: '[user!]!',
      __args: {
        distinct_on: '[user_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_order_by!]',
        where: 'user_bool_exp',
      },
    },
    user_aggregate: {
      __type: 'user_aggregate!',
      __args: {
        distinct_on: '[user_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_order_by!]',
        where: 'user_bool_exp',
      },
    },
    user_by_pk: { __type: 'user', __args: { did: 'String!' } },
    user_contribution: {
      __type: '[user_contribution!]!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    user_contribution_aggregate: {
      __type: 'user_contribution_aggregate!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    user_contribution_by_pk: {
      __type: 'user_contribution',
      __args: { contribution_id: 'uuid!', user_id: 'String!' },
    },
    user_contribution_skill: {
      __type: '[user_contribution_skill!]!',
      __args: {
        distinct_on: '[user_contribution_skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_skill_order_by!]',
        where: 'user_contribution_skill_bool_exp',
      },
    },
    user_contribution_skill_aggregate: {
      __type: 'user_contribution_skill_aggregate!',
      __args: {
        distinct_on: '[user_contribution_skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_skill_order_by!]',
        where: 'user_contribution_skill_bool_exp',
      },
    },
    user_contribution_skill_by_pk: {
      __type: 'user_contribution_skill',
      __args: {
        contribution_id: 'uuid!',
        skill_id: 'uuid!',
        user_id: 'String!',
      },
    },
  },
  timestamp_comparison_exp: {
    _eq: { __type: 'timestamp' },
    _gt: { __type: 'timestamp' },
    _gte: { __type: 'timestamp' },
    _in: { __type: '[timestamp!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'timestamp' },
    _lte: { __type: 'timestamp' },
    _neq: { __type: 'timestamp' },
    _nin: { __type: '[timestamp!]' },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: 'timestamptz' },
    _gt: { __type: 'timestamptz' },
    _gte: { __type: 'timestamptz' },
    _in: { __type: '[timestamptz!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'timestamptz' },
    _lte: { __type: 'timestamptz' },
    _neq: { __type: 'timestamptz' },
    _nin: { __type: '[timestamptz!]' },
  },
  user: {
    __typename: { __type: 'String!' },
    contributed: {
      __type: '[user_contribution!]!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    contributed_aggregate: {
      __type: 'user_contribution_aggregate!',
      __args: {
        distinct_on: '[user_contribution_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_order_by!]',
        where: 'user_contribution_bool_exp',
      },
    },
    created_at: { __type: 'timestamptz!' },
    dao_memberships: {
      __type: '[dao_member!]!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    dao_memberships_aggregate: {
      __type: 'dao_member_aggregate!',
      __args: {
        distinct_on: '[dao_member_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[dao_member_order_by!]',
        where: 'dao_member_bool_exp',
      },
    },
    did: { __type: 'String!' },
    eth_address: { __type: 'String!' },
    name: { __type: 'String' },
  },
  user_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'user_aggregate_fields' },
    nodes: { __type: '[user!]!' },
  },
  user_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: { columns: '[user_select_column!]', distinct: 'Boolean' },
    },
    max: { __type: 'user_max_fields' },
    min: { __type: 'user_min_fields' },
  },
  user_bool_exp: {
    _and: { __type: '[user_bool_exp!]' },
    _not: { __type: 'user_bool_exp' },
    _or: { __type: '[user_bool_exp!]' },
    contributed: { __type: 'user_contribution_bool_exp' },
    created_at: { __type: 'timestamptz_comparison_exp' },
    dao_memberships: { __type: 'dao_member_bool_exp' },
    did: { __type: 'String_comparison_exp' },
    eth_address: { __type: 'String_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
  },
  user_contribution: {
    __typename: { __type: 'String!' },
    contribution: { __type: 'contribution!' },
    contribution_id: { __type: 'uuid!' },
    contribution_share: { __type: 'numeric!' },
    skills: {
      __type: '[user_contribution_skill!]!',
      __args: {
        distinct_on: '[user_contribution_skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_skill_order_by!]',
        where: 'user_contribution_skill_bool_exp',
      },
    },
    skills_aggregate: {
      __type: 'user_contribution_skill_aggregate!',
      __args: {
        distinct_on: '[user_contribution_skill_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[user_contribution_skill_order_by!]',
        where: 'user_contribution_skill_bool_exp',
      },
    },
    user: { __type: 'user!' },
    user_id: { __type: 'String!' },
  },
  user_contribution_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'user_contribution_aggregate_fields' },
    nodes: { __type: '[user_contribution!]!' },
  },
  user_contribution_aggregate_fields: {
    __typename: { __type: 'String!' },
    avg: { __type: 'user_contribution_avg_fields' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[user_contribution_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'user_contribution_max_fields' },
    min: { __type: 'user_contribution_min_fields' },
    stddev: { __type: 'user_contribution_stddev_fields' },
    stddev_pop: { __type: 'user_contribution_stddev_pop_fields' },
    stddev_samp: { __type: 'user_contribution_stddev_samp_fields' },
    sum: { __type: 'user_contribution_sum_fields' },
    var_pop: { __type: 'user_contribution_var_pop_fields' },
    var_samp: { __type: 'user_contribution_var_samp_fields' },
    variance: { __type: 'user_contribution_variance_fields' },
  },
  user_contribution_aggregate_order_by: {
    avg: { __type: 'user_contribution_avg_order_by' },
    count: { __type: 'order_by' },
    max: { __type: 'user_contribution_max_order_by' },
    min: { __type: 'user_contribution_min_order_by' },
    stddev: { __type: 'user_contribution_stddev_order_by' },
    stddev_pop: { __type: 'user_contribution_stddev_pop_order_by' },
    stddev_samp: { __type: 'user_contribution_stddev_samp_order_by' },
    sum: { __type: 'user_contribution_sum_order_by' },
    var_pop: { __type: 'user_contribution_var_pop_order_by' },
    var_samp: { __type: 'user_contribution_var_samp_order_by' },
    variance: { __type: 'user_contribution_variance_order_by' },
  },
  user_contribution_arr_rel_insert_input: {
    data: { __type: '[user_contribution_insert_input!]!' },
    on_conflict: { __type: 'user_contribution_on_conflict' },
  },
  user_contribution_avg_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_avg_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_bool_exp: {
    _and: { __type: '[user_contribution_bool_exp!]' },
    _not: { __type: 'user_contribution_bool_exp' },
    _or: { __type: '[user_contribution_bool_exp!]' },
    contribution: { __type: 'contribution_bool_exp' },
    contribution_id: { __type: 'uuid_comparison_exp' },
    contribution_share: { __type: 'numeric_comparison_exp' },
    skills: { __type: 'user_contribution_skill_bool_exp' },
    user: { __type: 'user_bool_exp' },
    user_id: { __type: 'String_comparison_exp' },
  },
  user_contribution_inc_input: { contribution_share: { __type: 'numeric' } },
  user_contribution_insert_input: {
    contribution: { __type: 'contribution_obj_rel_insert_input' },
    contribution_id: { __type: 'uuid' },
    contribution_share: { __type: 'numeric' },
    skills: { __type: 'user_contribution_skill_arr_rel_insert_input' },
    user: { __type: 'user_obj_rel_insert_input' },
    user_id: { __type: 'String' },
  },
  user_contribution_max_fields: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid' },
    contribution_share: { __type: 'numeric' },
    user_id: { __type: 'String' },
  },
  user_contribution_max_order_by: {
    contribution_id: { __type: 'order_by' },
    contribution_share: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  user_contribution_min_fields: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid' },
    contribution_share: { __type: 'numeric' },
    user_id: { __type: 'String' },
  },
  user_contribution_min_order_by: {
    contribution_id: { __type: 'order_by' },
    contribution_share: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  user_contribution_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[user_contribution!]!' },
  },
  user_contribution_obj_rel_insert_input: {
    data: { __type: 'user_contribution_insert_input!' },
    on_conflict: { __type: 'user_contribution_on_conflict' },
  },
  user_contribution_on_conflict: {
    constraint: { __type: 'user_contribution_constraint!' },
    update_columns: { __type: '[user_contribution_update_column!]!' },
    where: { __type: 'user_contribution_bool_exp' },
  },
  user_contribution_order_by: {
    contribution: { __type: 'contribution_order_by' },
    contribution_id: { __type: 'order_by' },
    contribution_share: { __type: 'order_by' },
    skills_aggregate: { __type: 'user_contribution_skill_aggregate_order_by' },
    user: { __type: 'user_order_by' },
    user_id: { __type: 'order_by' },
  },
  user_contribution_pk_columns_input: {
    contribution_id: { __type: 'uuid!' },
    user_id: { __type: 'String!' },
  },
  user_contribution_set_input: {
    contribution_id: { __type: 'uuid' },
    contribution_share: { __type: 'numeric' },
    user_id: { __type: 'String' },
  },
  user_contribution_skill: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid!' },
    contributor: { __type: 'user_contribution' },
    skill: { __type: 'skill!' },
    skill_id: { __type: 'uuid!' },
    user_id: { __type: 'String!' },
  },
  user_contribution_skill_aggregate: {
    __typename: { __type: 'String!' },
    aggregate: { __type: 'user_contribution_skill_aggregate_fields' },
    nodes: { __type: '[user_contribution_skill!]!' },
  },
  user_contribution_skill_aggregate_fields: {
    __typename: { __type: 'String!' },
    count: {
      __type: 'Int!',
      __args: {
        columns: '[user_contribution_skill_select_column!]',
        distinct: 'Boolean',
      },
    },
    max: { __type: 'user_contribution_skill_max_fields' },
    min: { __type: 'user_contribution_skill_min_fields' },
  },
  user_contribution_skill_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'user_contribution_skill_max_order_by' },
    min: { __type: 'user_contribution_skill_min_order_by' },
  },
  user_contribution_skill_arr_rel_insert_input: {
    data: { __type: '[user_contribution_skill_insert_input!]!' },
    on_conflict: { __type: 'user_contribution_skill_on_conflict' },
  },
  user_contribution_skill_bool_exp: {
    _and: { __type: '[user_contribution_skill_bool_exp!]' },
    _not: { __type: 'user_contribution_skill_bool_exp' },
    _or: { __type: '[user_contribution_skill_bool_exp!]' },
    contribution_id: { __type: 'uuid_comparison_exp' },
    contributor: { __type: 'user_contribution_bool_exp' },
    skill: { __type: 'skill_bool_exp' },
    skill_id: { __type: 'uuid_comparison_exp' },
    user_id: { __type: 'String_comparison_exp' },
  },
  user_contribution_skill_insert_input: {
    contribution_id: { __type: 'uuid' },
    contributor: { __type: 'user_contribution_obj_rel_insert_input' },
    skill: { __type: 'skill_obj_rel_insert_input' },
    skill_id: { __type: 'uuid' },
    user_id: { __type: 'String' },
  },
  user_contribution_skill_max_fields: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid' },
    skill_id: { __type: 'uuid' },
    user_id: { __type: 'String' },
  },
  user_contribution_skill_max_order_by: {
    contribution_id: { __type: 'order_by' },
    skill_id: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  user_contribution_skill_min_fields: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid' },
    skill_id: { __type: 'uuid' },
    user_id: { __type: 'String' },
  },
  user_contribution_skill_min_order_by: {
    contribution_id: { __type: 'order_by' },
    skill_id: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  user_contribution_skill_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[user_contribution_skill!]!' },
  },
  user_contribution_skill_on_conflict: {
    constraint: { __type: 'user_contribution_skill_constraint!' },
    update_columns: { __type: '[user_contribution_skill_update_column!]!' },
    where: { __type: 'user_contribution_skill_bool_exp' },
  },
  user_contribution_skill_order_by: {
    contribution_id: { __type: 'order_by' },
    contributor: { __type: 'user_contribution_order_by' },
    skill: { __type: 'skill_order_by' },
    skill_id: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  user_contribution_skill_pk_columns_input: {
    contribution_id: { __type: 'uuid!' },
    skill_id: { __type: 'uuid!' },
    user_id: { __type: 'String!' },
  },
  user_contribution_skill_set_input: {
    contribution_id: { __type: 'uuid' },
    skill_id: { __type: 'uuid' },
    user_id: { __type: 'String' },
  },
  user_contribution_stddev_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_stddev_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_stddev_pop_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_stddev_pop_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_stddev_samp_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_stddev_samp_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_sum_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'numeric' },
  },
  user_contribution_sum_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_var_pop_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_var_pop_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_var_samp_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_var_samp_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_contribution_variance_fields: {
    __typename: { __type: 'String!' },
    contribution_share: { __type: 'Float' },
  },
  user_contribution_variance_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  user_insert_input: {
    contributed: { __type: 'user_contribution_arr_rel_insert_input' },
    created_at: { __type: 'timestamptz' },
    dao_memberships: { __type: 'dao_member_arr_rel_insert_input' },
    did: { __type: 'String' },
    eth_address: { __type: 'String' },
    name: { __type: 'String' },
  },
  user_max_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    did: { __type: 'String' },
    eth_address: { __type: 'String' },
    name: { __type: 'String' },
  },
  user_min_fields: {
    __typename: { __type: 'String!' },
    created_at: { __type: 'timestamptz' },
    did: { __type: 'String' },
    eth_address: { __type: 'String' },
    name: { __type: 'String' },
  },
  user_mutation_response: {
    __typename: { __type: 'String!' },
    affected_rows: { __type: 'Int!' },
    returning: { __type: '[user!]!' },
  },
  user_obj_rel_insert_input: {
    data: { __type: 'user_insert_input!' },
    on_conflict: { __type: 'user_on_conflict' },
  },
  user_on_conflict: {
    constraint: { __type: 'user_constraint!' },
    update_columns: { __type: '[user_update_column!]!' },
    where: { __type: 'user_bool_exp' },
  },
  user_order_by: {
    contributed_aggregate: { __type: 'user_contribution_aggregate_order_by' },
    created_at: { __type: 'order_by' },
    dao_memberships_aggregate: { __type: 'dao_member_aggregate_order_by' },
    did: { __type: 'order_by' },
    eth_address: { __type: 'order_by' },
    name: { __type: 'order_by' },
  },
  user_pk_columns_input: { did: { __type: 'String!' } },
  user_set_input: {
    created_at: { __type: 'timestamptz' },
    did: { __type: 'String' },
    eth_address: { __type: 'String' },
    name: { __type: 'String' },
  },
  uuid_comparison_exp: {
    _eq: { __type: 'uuid' },
    _gt: { __type: 'uuid' },
    _gte: { __type: 'uuid' },
    _in: { __type: '[uuid!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'uuid' },
    _lte: { __type: 'uuid' },
    _neq: { __type: 'uuid' },
    _nin: { __type: '[uuid!]' },
  },
} as const;

/**
 * A contribution made in a DAO
 *
 *
 * columns and relationships of "contribution"
 */
export interface contribution {
  __typename?: 'contribution';
  /**
   * An object relationship
   */
  author?: Maybe<dao_member>;
  author_id: ScalarsEnums['String'];
  /**
   * An array relationship
   */
  contributors: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<user_contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<user_contribution_bool_exp>;
  }) => Array<user_contribution>;
  /**
   * An aggregate relationship
   */
  contributors_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<user_contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<user_contribution_bool_exp>;
  }) => user_contribution_aggregate;
  created_at: ScalarsEnums['timestamptz'];
  /**
   * An object relationship
   */
  dao: dao;
  dao_id: ScalarsEnums['uuid'];
  description: ScalarsEnums['String'];
  id: ScalarsEnums['uuid'];
  occured: ScalarsEnums['date'];
  /**
   * An array relationship
   */
  ratings: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_rating_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<contribution_rating_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_rating_bool_exp>;
  }) => Array<contribution_rating>;
  /**
   * An aggregate relationship
   */
  ratings_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_rating_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<contribution_rating_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_rating_bool_exp>;
  }) => contribution_rating_aggregate;
  title: ScalarsEnums['String'];
  updated_at: ScalarsEnums['timestamp'];
}

/**
 * aggregated selection of "contribution"
 */
export interface contribution_aggregate {
  __typename?: 'contribution_aggregate';
  aggregate?: Maybe<contribution_aggregate_fields>;
  nodes: Array<contribution>;
}

/**
 * aggregate fields of "contribution"
 */
export interface contribution_aggregate_fields {
  __typename?: 'contribution_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<contribution_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<contribution_max_fields>;
  min?: Maybe<contribution_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface contribution_max_fields {
  __typename?: 'contribution_max_fields';
  author_id?: Maybe<ScalarsEnums['String']>;
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  dao_id?: Maybe<ScalarsEnums['uuid']>;
  description?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  occured?: Maybe<ScalarsEnums['date']>;
  title?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
}

/**
 * aggregate min on columns
 */
export interface contribution_min_fields {
  __typename?: 'contribution_min_fields';
  author_id?: Maybe<ScalarsEnums['String']>;
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  dao_id?: Maybe<ScalarsEnums['uuid']>;
  description?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  occured?: Maybe<ScalarsEnums['date']>;
  title?: Maybe<ScalarsEnums['String']>;
  updated_at?: Maybe<ScalarsEnums['timestamp']>;
}

/**
 * response of any mutation on the table "contribution"
 */
export interface contribution_mutation_response {
  __typename?: 'contribution_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<contribution>;
}

/**
 * A rating that a user gave to a contribution
 *
 *
 * columns and relationships of "contribution_rating"
 */
export interface contribution_rating {
  __typename?: 'contribution_rating';
  /**
   * An object relationship
   */
  contribution: contribution;
  contribution_id: ScalarsEnums['uuid'];
  rating: ScalarsEnums['String'];
  /**
   * An object relationship
   */
  ratingGiven: rating;
  /**
   * An object relationship
   */
  user: user;
  user_id: ScalarsEnums['String'];
}

/**
 * aggregated selection of "contribution_rating"
 */
export interface contribution_rating_aggregate {
  __typename?: 'contribution_rating_aggregate';
  aggregate?: Maybe<contribution_rating_aggregate_fields>;
  nodes: Array<contribution_rating>;
}

/**
 * aggregate fields of "contribution_rating"
 */
export interface contribution_rating_aggregate_fields {
  __typename?: 'contribution_rating_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<contribution_rating_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<contribution_rating_max_fields>;
  min?: Maybe<contribution_rating_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface contribution_rating_max_fields {
  __typename?: 'contribution_rating_max_fields';
  contribution_id?: Maybe<ScalarsEnums['uuid']>;
  rating?: Maybe<ScalarsEnums['String']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface contribution_rating_min_fields {
  __typename?: 'contribution_rating_min_fields';
  contribution_id?: Maybe<ScalarsEnums['uuid']>;
  rating?: Maybe<ScalarsEnums['String']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "contribution_rating"
 */
export interface contribution_rating_mutation_response {
  __typename?: 'contribution_rating_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<contribution_rating>;
}

/**
 * An organization of people working together to track their contributions
 *
 *
 * columns and relationships of "dao"
 */
export interface dao {
  __typename?: 'dao';
  /**
   * An array relationship
   */
  contributions: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_bool_exp>;
  }) => Array<contribution>;
  /**
   * An aggregate relationship
   */
  contributions_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_bool_exp>;
  }) => contribution_aggregate;
  created_at: ScalarsEnums['timestamptz'];
  eth_address?: Maybe<ScalarsEnums['String']>;
  id: ScalarsEnums['uuid'];
  /**
   * An array relationship
   */
  members: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<dao_member_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<dao_member_bool_exp>;
  }) => Array<dao_member>;
  /**
   * An aggregate relationship
   */
  members_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<dao_member_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<dao_member_bool_exp>;
  }) => dao_member_aggregate;
  name: ScalarsEnums['String'];
}

/**
 * aggregated selection of "dao"
 */
export interface dao_aggregate {
  __typename?: 'dao_aggregate';
  aggregate?: Maybe<dao_aggregate_fields>;
  nodes: Array<dao>;
}

/**
 * aggregate fields of "dao"
 */
export interface dao_aggregate_fields {
  __typename?: 'dao_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<dao_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<dao_max_fields>;
  min?: Maybe<dao_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface dao_max_fields {
  __typename?: 'dao_max_fields';
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  eth_address?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * Junction table between DAOs and users
 *
 *
 * columns and relationships of "dao_member"
 */
export interface dao_member {
  __typename?: 'dao_member';
  can_rate: ScalarsEnums['Boolean'];
  /**
   * An array relationship
   */
  contributions: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_bool_exp>;
  }) => Array<contribution>;
  /**
   * An aggregate relationship
   */
  contributions_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_bool_exp>;
  }) => contribution_aggregate;
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  /**
   * An object relationship
   */
  dao: dao;
  dao_id: ScalarsEnums['uuid'];
  is_admin?: Maybe<ScalarsEnums['Boolean']>;
  /**
   * An object relationship
   */
  user: user;
  user_id: ScalarsEnums['String'];
}

/**
 * aggregated selection of "dao_member"
 */
export interface dao_member_aggregate {
  __typename?: 'dao_member_aggregate';
  aggregate?: Maybe<dao_member_aggregate_fields>;
  nodes: Array<dao_member>;
}

/**
 * aggregate fields of "dao_member"
 */
export interface dao_member_aggregate_fields {
  __typename?: 'dao_member_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<dao_member_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<dao_member_max_fields>;
  min?: Maybe<dao_member_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface dao_member_max_fields {
  __typename?: 'dao_member_max_fields';
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  dao_id?: Maybe<ScalarsEnums['uuid']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface dao_member_min_fields {
  __typename?: 'dao_member_min_fields';
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  dao_id?: Maybe<ScalarsEnums['uuid']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "dao_member"
 */
export interface dao_member_mutation_response {
  __typename?: 'dao_member_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<dao_member>;
}

/**
 * aggregate min on columns
 */
export interface dao_min_fields {
  __typename?: 'dao_min_fields';
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  eth_address?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "dao"
 */
export interface dao_mutation_response {
  __typename?: 'dao_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<dao>;
}

export interface Mutation {
  __typename?: 'Mutation';
  delete_contribution: (args: {
    where: contribution_bool_exp;
  }) => Maybe<contribution_mutation_response>;
  delete_contribution_by_pk: (args: {
    id: Scalars['uuid'];
  }) => Maybe<contribution>;
  delete_contribution_rating: (args: {
    where: contribution_rating_bool_exp;
  }) => Maybe<contribution_rating_mutation_response>;
  delete_contribution_rating_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<contribution_rating>;
  delete_dao: (args: { where: dao_bool_exp }) => Maybe<dao_mutation_response>;
  delete_dao_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<dao>;
  delete_dao_member: (args: {
    where: dao_member_bool_exp;
  }) => Maybe<dao_member_mutation_response>;
  delete_dao_member_by_pk: (args: {
    dao_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<dao_member>;
  delete_rating: (args: {
    where: rating_bool_exp;
  }) => Maybe<rating_mutation_response>;
  delete_rating_by_pk: (args: { label: Scalars['String'] }) => Maybe<rating>;
  delete_skill: (args: {
    where: skill_bool_exp;
  }) => Maybe<skill_mutation_response>;
  delete_skill_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<skill>;
  delete_user: (args: {
    where: user_bool_exp;
  }) => Maybe<user_mutation_response>;
  delete_user_by_pk: (args: { did: Scalars['String'] }) => Maybe<user>;
  delete_user_contribution: (args: {
    where: user_contribution_bool_exp;
  }) => Maybe<user_contribution_mutation_response>;
  delete_user_contribution_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<user_contribution>;
  delete_user_contribution_skill: (args: {
    where: user_contribution_skill_bool_exp;
  }) => Maybe<user_contribution_skill_mutation_response>;
  delete_user_contribution_skill_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    skill_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<user_contribution_skill>;
  insert_contribution: (args: {
    objects: Array<contribution_insert_input>;
    on_conflict?: Maybe<contribution_on_conflict>;
  }) => Maybe<contribution_mutation_response>;
  insert_contribution_one: (args: {
    object: contribution_insert_input;
    on_conflict?: Maybe<contribution_on_conflict>;
  }) => Maybe<contribution>;
  insert_contribution_rating: (args: {
    objects: Array<contribution_rating_insert_input>;
    on_conflict?: Maybe<contribution_rating_on_conflict>;
  }) => Maybe<contribution_rating_mutation_response>;
  insert_contribution_rating_one: (args: {
    object: contribution_rating_insert_input;
    on_conflict?: Maybe<contribution_rating_on_conflict>;
  }) => Maybe<contribution_rating>;
  insert_dao: (args: {
    objects: Array<dao_insert_input>;
    on_conflict?: Maybe<dao_on_conflict>;
  }) => Maybe<dao_mutation_response>;
  insert_dao_member: (args: {
    objects: Array<dao_member_insert_input>;
    on_conflict?: Maybe<dao_member_on_conflict>;
  }) => Maybe<dao_member_mutation_response>;
  insert_dao_member_one: (args: {
    object: dao_member_insert_input;
    on_conflict?: Maybe<dao_member_on_conflict>;
  }) => Maybe<dao_member>;
  insert_dao_one: (args: {
    object: dao_insert_input;
    on_conflict?: Maybe<dao_on_conflict>;
  }) => Maybe<dao>;
  insert_rating: (args: {
    objects: Array<rating_insert_input>;
    on_conflict?: Maybe<rating_on_conflict>;
  }) => Maybe<rating_mutation_response>;
  insert_rating_one: (args: {
    object: rating_insert_input;
    on_conflict?: Maybe<rating_on_conflict>;
  }) => Maybe<rating>;
  insert_skill: (args: {
    objects: Array<skill_insert_input>;
    on_conflict?: Maybe<skill_on_conflict>;
  }) => Maybe<skill_mutation_response>;
  insert_skill_one: (args: {
    object: skill_insert_input;
    on_conflict?: Maybe<skill_on_conflict>;
  }) => Maybe<skill>;
  insert_user: (args: {
    objects: Array<user_insert_input>;
    on_conflict?: Maybe<user_on_conflict>;
  }) => Maybe<user_mutation_response>;
  insert_user_contribution: (args: {
    objects: Array<user_contribution_insert_input>;
    on_conflict?: Maybe<user_contribution_on_conflict>;
  }) => Maybe<user_contribution_mutation_response>;
  insert_user_contribution_one: (args: {
    object: user_contribution_insert_input;
    on_conflict?: Maybe<user_contribution_on_conflict>;
  }) => Maybe<user_contribution>;
  insert_user_contribution_skill: (args: {
    objects: Array<user_contribution_skill_insert_input>;
    on_conflict?: Maybe<user_contribution_skill_on_conflict>;
  }) => Maybe<user_contribution_skill_mutation_response>;
  insert_user_contribution_skill_one: (args: {
    object: user_contribution_skill_insert_input;
    on_conflict?: Maybe<user_contribution_skill_on_conflict>;
  }) => Maybe<user_contribution_skill>;
  insert_user_one: (args: {
    object: user_insert_input;
    on_conflict?: Maybe<user_on_conflict>;
  }) => Maybe<user>;
  update_contribution: (args: {
    _set?: Maybe<contribution_set_input>;
    where: contribution_bool_exp;
  }) => Maybe<contribution_mutation_response>;
  update_contribution_by_pk: (args: {
    _set?: Maybe<contribution_set_input>;
    pk_columns: contribution_pk_columns_input;
  }) => Maybe<contribution>;
  update_contribution_rating: (args: {
    _set?: Maybe<contribution_rating_set_input>;
    where: contribution_rating_bool_exp;
  }) => Maybe<contribution_rating_mutation_response>;
  update_contribution_rating_by_pk: (args: {
    _set?: Maybe<contribution_rating_set_input>;
    pk_columns: contribution_rating_pk_columns_input;
  }) => Maybe<contribution_rating>;
  update_dao: (args: {
    _set?: Maybe<dao_set_input>;
    where: dao_bool_exp;
  }) => Maybe<dao_mutation_response>;
  update_dao_by_pk: (args: {
    _set?: Maybe<dao_set_input>;
    pk_columns: dao_pk_columns_input;
  }) => Maybe<dao>;
  update_dao_member: (args: {
    _set?: Maybe<dao_member_set_input>;
    where: dao_member_bool_exp;
  }) => Maybe<dao_member_mutation_response>;
  update_dao_member_by_pk: (args: {
    _set?: Maybe<dao_member_set_input>;
    pk_columns: dao_member_pk_columns_input;
  }) => Maybe<dao_member>;
  update_rating: (args: {
    _set?: Maybe<rating_set_input>;
    where: rating_bool_exp;
  }) => Maybe<rating_mutation_response>;
  update_rating_by_pk: (args: {
    _set?: Maybe<rating_set_input>;
    pk_columns: rating_pk_columns_input;
  }) => Maybe<rating>;
  update_skill: (args: {
    _set?: Maybe<skill_set_input>;
    where: skill_bool_exp;
  }) => Maybe<skill_mutation_response>;
  update_skill_by_pk: (args: {
    _set?: Maybe<skill_set_input>;
    pk_columns: skill_pk_columns_input;
  }) => Maybe<skill>;
  update_user: (args: {
    _set?: Maybe<user_set_input>;
    where: user_bool_exp;
  }) => Maybe<user_mutation_response>;
  update_user_by_pk: (args: {
    _set?: Maybe<user_set_input>;
    pk_columns: user_pk_columns_input;
  }) => Maybe<user>;
  update_user_contribution: (args: {
    _inc?: Maybe<user_contribution_inc_input>;
    _set?: Maybe<user_contribution_set_input>;
    where: user_contribution_bool_exp;
  }) => Maybe<user_contribution_mutation_response>;
  update_user_contribution_by_pk: (args: {
    _inc?: Maybe<user_contribution_inc_input>;
    _set?: Maybe<user_contribution_set_input>;
    pk_columns: user_contribution_pk_columns_input;
  }) => Maybe<user_contribution>;
  update_user_contribution_skill: (args: {
    _set?: Maybe<user_contribution_skill_set_input>;
    where: user_contribution_skill_bool_exp;
  }) => Maybe<user_contribution_skill_mutation_response>;
  update_user_contribution_skill_by_pk: (args: {
    _set?: Maybe<user_contribution_skill_set_input>;
    pk_columns: user_contribution_skill_pk_columns_input;
  }) => Maybe<user_contribution_skill>;
}

export interface Query {
  __typename?: 'Query';
  contribution: (args?: {
    distinct_on?: Maybe<Array<contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_order_by>>;
    where?: Maybe<contribution_bool_exp>;
  }) => Array<contribution>;
  contribution_aggregate: (args?: {
    distinct_on?: Maybe<Array<contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_order_by>>;
    where?: Maybe<contribution_bool_exp>;
  }) => contribution_aggregate;
  contribution_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<contribution>;
  contribution_rating: (args?: {
    distinct_on?: Maybe<Array<contribution_rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_rating_order_by>>;
    where?: Maybe<contribution_rating_bool_exp>;
  }) => Array<contribution_rating>;
  contribution_rating_aggregate: (args?: {
    distinct_on?: Maybe<Array<contribution_rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_rating_order_by>>;
    where?: Maybe<contribution_rating_bool_exp>;
  }) => contribution_rating_aggregate;
  contribution_rating_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<contribution_rating>;
  dao: (args?: {
    distinct_on?: Maybe<Array<dao_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_order_by>>;
    where?: Maybe<dao_bool_exp>;
  }) => Array<dao>;
  dao_aggregate: (args?: {
    distinct_on?: Maybe<Array<dao_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_order_by>>;
    where?: Maybe<dao_bool_exp>;
  }) => dao_aggregate;
  dao_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<dao>;
  dao_member: (args?: {
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_member_order_by>>;
    where?: Maybe<dao_member_bool_exp>;
  }) => Array<dao_member>;
  dao_member_aggregate: (args?: {
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_member_order_by>>;
    where?: Maybe<dao_member_bool_exp>;
  }) => dao_member_aggregate;
  dao_member_by_pk: (args: {
    dao_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<dao_member>;
  rating: (args?: {
    distinct_on?: Maybe<Array<rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<rating_order_by>>;
    where?: Maybe<rating_bool_exp>;
  }) => Array<rating>;
  rating_aggregate: (args?: {
    distinct_on?: Maybe<Array<rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<rating_order_by>>;
    where?: Maybe<rating_bool_exp>;
  }) => rating_aggregate;
  rating_by_pk: (args: { label: Scalars['String'] }) => Maybe<rating>;
  skill: (args?: {
    distinct_on?: Maybe<Array<skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<skill_order_by>>;
    where?: Maybe<skill_bool_exp>;
  }) => Array<skill>;
  skill_aggregate: (args?: {
    distinct_on?: Maybe<Array<skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<skill_order_by>>;
    where?: Maybe<skill_bool_exp>;
  }) => skill_aggregate;
  skill_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<skill>;
  user: (args?: {
    distinct_on?: Maybe<Array<user_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_order_by>>;
    where?: Maybe<user_bool_exp>;
  }) => Array<user>;
  user_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_order_by>>;
    where?: Maybe<user_bool_exp>;
  }) => user_aggregate;
  user_by_pk: (args: { did: Scalars['String'] }) => Maybe<user>;
  user_contribution: (args?: {
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_order_by>>;
    where?: Maybe<user_contribution_bool_exp>;
  }) => Array<user_contribution>;
  user_contribution_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_order_by>>;
    where?: Maybe<user_contribution_bool_exp>;
  }) => user_contribution_aggregate;
  user_contribution_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<user_contribution>;
  user_contribution_skill: (args?: {
    distinct_on?: Maybe<Array<user_contribution_skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_skill_order_by>>;
    where?: Maybe<user_contribution_skill_bool_exp>;
  }) => Array<user_contribution_skill>;
  user_contribution_skill_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_contribution_skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_skill_order_by>>;
    where?: Maybe<user_contribution_skill_bool_exp>;
  }) => user_contribution_skill_aggregate;
  user_contribution_skill_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    skill_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<user_contribution_skill>;
}

/**
 * columns and relationships of "rating"
 */
export interface rating {
  __typename?: 'rating';
  description: ScalarsEnums['String'];
  label: ScalarsEnums['String'];
}

/**
 * aggregated selection of "rating"
 */
export interface rating_aggregate {
  __typename?: 'rating_aggregate';
  aggregate?: Maybe<rating_aggregate_fields>;
  nodes: Array<rating>;
}

/**
 * aggregate fields of "rating"
 */
export interface rating_aggregate_fields {
  __typename?: 'rating_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<rating_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<rating_max_fields>;
  min?: Maybe<rating_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface rating_max_fields {
  __typename?: 'rating_max_fields';
  description?: Maybe<ScalarsEnums['String']>;
  label?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface rating_min_fields {
  __typename?: 'rating_min_fields';
  description?: Maybe<ScalarsEnums['String']>;
  label?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "rating"
 */
export interface rating_mutation_response {
  __typename?: 'rating_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<rating>;
}

/**
 * columns and relationships of "skill"
 */
export interface skill {
  __typename?: 'skill';
  description: ScalarsEnums['String'];
  id: ScalarsEnums['uuid'];
  name: ScalarsEnums['String'];
}

/**
 * aggregated selection of "skill"
 */
export interface skill_aggregate {
  __typename?: 'skill_aggregate';
  aggregate?: Maybe<skill_aggregate_fields>;
  nodes: Array<skill>;
}

/**
 * aggregate fields of "skill"
 */
export interface skill_aggregate_fields {
  __typename?: 'skill_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<skill_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<skill_max_fields>;
  min?: Maybe<skill_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface skill_max_fields {
  __typename?: 'skill_max_fields';
  description?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface skill_min_fields {
  __typename?: 'skill_min_fields';
  description?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['uuid']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "skill"
 */
export interface skill_mutation_response {
  __typename?: 'skill_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<skill>;
}

export interface Subscription {
  __typename?: 'Subscription';
  contribution: (args?: {
    distinct_on?: Maybe<Array<contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_order_by>>;
    where?: Maybe<contribution_bool_exp>;
  }) => Array<contribution>;
  contribution_aggregate: (args?: {
    distinct_on?: Maybe<Array<contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_order_by>>;
    where?: Maybe<contribution_bool_exp>;
  }) => contribution_aggregate;
  contribution_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<contribution>;
  contribution_rating: (args?: {
    distinct_on?: Maybe<Array<contribution_rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_rating_order_by>>;
    where?: Maybe<contribution_rating_bool_exp>;
  }) => Array<contribution_rating>;
  contribution_rating_aggregate: (args?: {
    distinct_on?: Maybe<Array<contribution_rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_rating_order_by>>;
    where?: Maybe<contribution_rating_bool_exp>;
  }) => contribution_rating_aggregate;
  contribution_rating_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<contribution_rating>;
  dao: (args?: {
    distinct_on?: Maybe<Array<dao_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_order_by>>;
    where?: Maybe<dao_bool_exp>;
  }) => Array<dao>;
  dao_aggregate: (args?: {
    distinct_on?: Maybe<Array<dao_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_order_by>>;
    where?: Maybe<dao_bool_exp>;
  }) => dao_aggregate;
  dao_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<dao>;
  dao_member: (args?: {
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_member_order_by>>;
    where?: Maybe<dao_member_bool_exp>;
  }) => Array<dao_member>;
  dao_member_aggregate: (args?: {
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<dao_member_order_by>>;
    where?: Maybe<dao_member_bool_exp>;
  }) => dao_member_aggregate;
  dao_member_by_pk: (args: {
    dao_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<dao_member>;
  rating: (args?: {
    distinct_on?: Maybe<Array<rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<rating_order_by>>;
    where?: Maybe<rating_bool_exp>;
  }) => Array<rating>;
  rating_aggregate: (args?: {
    distinct_on?: Maybe<Array<rating_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<rating_order_by>>;
    where?: Maybe<rating_bool_exp>;
  }) => rating_aggregate;
  rating_by_pk: (args: { label: Scalars['String'] }) => Maybe<rating>;
  skill: (args?: {
    distinct_on?: Maybe<Array<skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<skill_order_by>>;
    where?: Maybe<skill_bool_exp>;
  }) => Array<skill>;
  skill_aggregate: (args?: {
    distinct_on?: Maybe<Array<skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<skill_order_by>>;
    where?: Maybe<skill_bool_exp>;
  }) => skill_aggregate;
  skill_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<skill>;
  user: (args?: {
    distinct_on?: Maybe<Array<user_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_order_by>>;
    where?: Maybe<user_bool_exp>;
  }) => Array<user>;
  user_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_order_by>>;
    where?: Maybe<user_bool_exp>;
  }) => user_aggregate;
  user_by_pk: (args: { did: Scalars['String'] }) => Maybe<user>;
  user_contribution: (args?: {
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_order_by>>;
    where?: Maybe<user_contribution_bool_exp>;
  }) => Array<user_contribution>;
  user_contribution_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_order_by>>;
    where?: Maybe<user_contribution_bool_exp>;
  }) => user_contribution_aggregate;
  user_contribution_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<user_contribution>;
  user_contribution_skill: (args?: {
    distinct_on?: Maybe<Array<user_contribution_skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_skill_order_by>>;
    where?: Maybe<user_contribution_skill_bool_exp>;
  }) => Array<user_contribution_skill>;
  user_contribution_skill_aggregate: (args?: {
    distinct_on?: Maybe<Array<user_contribution_skill_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<user_contribution_skill_order_by>>;
    where?: Maybe<user_contribution_skill_bool_exp>;
  }) => user_contribution_skill_aggregate;
  user_contribution_skill_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    skill_id: Scalars['uuid'];
    user_id: Scalars['String'];
  }) => Maybe<user_contribution_skill>;
}

/**
 * columns and relationships of "user"
 */
export interface user {
  __typename?: 'user';
  /**
   * An array relationship
   */
  contributed: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<user_contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<user_contribution_bool_exp>;
  }) => Array<user_contribution>;
  /**
   * An aggregate relationship
   */
  contributed_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<user_contribution_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<user_contribution_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<user_contribution_bool_exp>;
  }) => user_contribution_aggregate;
  created_at: ScalarsEnums['timestamptz'];
  /**
   * An array relationship
   */
  dao_memberships: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<dao_member_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<dao_member_bool_exp>;
  }) => Array<dao_member>;
  /**
   * An aggregate relationship
   */
  dao_memberships_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<dao_member_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<dao_member_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<dao_member_bool_exp>;
  }) => dao_member_aggregate;
  did: ScalarsEnums['String'];
  eth_address: ScalarsEnums['String'];
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregated selection of "user"
 */
export interface user_aggregate {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<user_aggregate_fields>;
  nodes: Array<user>;
}

/**
 * aggregate fields of "user"
 */
export interface user_aggregate_fields {
  __typename?: 'user_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<user_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<user_max_fields>;
  min?: Maybe<user_min_fields>;
}

/**
 * Junction table between a user and a contribution they made
 *
 *
 * columns and relationships of "user_contribution"
 */
export interface user_contribution {
  __typename?: 'user_contribution';
  /**
   * An object relationship
   */
  contribution: contribution;
  contribution_id: ScalarsEnums['uuid'];
  contribution_share: ScalarsEnums['numeric'];
  /**
   * An array relationship
   */
  skills: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<user_contribution_skill_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<user_contribution_skill_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<user_contribution_skill_bool_exp>;
  }) => Array<user_contribution_skill>;
  /**
   * An aggregate relationship
   */
  skills_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<user_contribution_skill_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars['Int']>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars['Int']>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<user_contribution_skill_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<user_contribution_skill_bool_exp>;
  }) => user_contribution_skill_aggregate;
  /**
   * An object relationship
   */
  user: user;
  user_id: ScalarsEnums['String'];
}

/**
 * aggregated selection of "user_contribution"
 */
export interface user_contribution_aggregate {
  __typename?: 'user_contribution_aggregate';
  aggregate?: Maybe<user_contribution_aggregate_fields>;
  nodes: Array<user_contribution>;
}

/**
 * aggregate fields of "user_contribution"
 */
export interface user_contribution_aggregate_fields {
  __typename?: 'user_contribution_aggregate_fields';
  avg?: Maybe<user_contribution_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<user_contribution_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<user_contribution_max_fields>;
  min?: Maybe<user_contribution_min_fields>;
  stddev?: Maybe<user_contribution_stddev_fields>;
  stddev_pop?: Maybe<user_contribution_stddev_pop_fields>;
  stddev_samp?: Maybe<user_contribution_stddev_samp_fields>;
  sum?: Maybe<user_contribution_sum_fields>;
  var_pop?: Maybe<user_contribution_var_pop_fields>;
  var_samp?: Maybe<user_contribution_var_samp_fields>;
  variance?: Maybe<user_contribution_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface user_contribution_avg_fields {
  __typename?: 'user_contribution_avg_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate max on columns
 */
export interface user_contribution_max_fields {
  __typename?: 'user_contribution_max_fields';
  contribution_id?: Maybe<ScalarsEnums['uuid']>;
  contribution_share?: Maybe<ScalarsEnums['numeric']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface user_contribution_min_fields {
  __typename?: 'user_contribution_min_fields';
  contribution_id?: Maybe<ScalarsEnums['uuid']>;
  contribution_share?: Maybe<ScalarsEnums['numeric']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "user_contribution"
 */
export interface user_contribution_mutation_response {
  __typename?: 'user_contribution_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<user_contribution>;
}

/**
 * Junction table between user_contributions and skills. Represents the skills a contributor used in their contribution
 *
 *
 * columns and relationships of "user_contribution_skill"
 */
export interface user_contribution_skill {
  __typename?: 'user_contribution_skill';
  contribution_id: ScalarsEnums['uuid'];
  /**
   * An object relationship
   */
  contributor?: Maybe<user_contribution>;
  /**
   * An object relationship
   */
  skill: skill;
  skill_id: ScalarsEnums['uuid'];
  user_id: ScalarsEnums['String'];
}

/**
 * aggregated selection of "user_contribution_skill"
 */
export interface user_contribution_skill_aggregate {
  __typename?: 'user_contribution_skill_aggregate';
  aggregate?: Maybe<user_contribution_skill_aggregate_fields>;
  nodes: Array<user_contribution_skill>;
}

/**
 * aggregate fields of "user_contribution_skill"
 */
export interface user_contribution_skill_aggregate_fields {
  __typename?: 'user_contribution_skill_aggregate_fields';
  count: (args?: {
    columns?: Maybe<Array<user_contribution_skill_select_column>>;
    distinct?: Maybe<Scalars['Boolean']>;
  }) => ScalarsEnums['Int'];
  max?: Maybe<user_contribution_skill_max_fields>;
  min?: Maybe<user_contribution_skill_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface user_contribution_skill_max_fields {
  __typename?: 'user_contribution_skill_max_fields';
  contribution_id?: Maybe<ScalarsEnums['uuid']>;
  skill_id?: Maybe<ScalarsEnums['uuid']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface user_contribution_skill_min_fields {
  __typename?: 'user_contribution_skill_min_fields';
  contribution_id?: Maybe<ScalarsEnums['uuid']>;
  skill_id?: Maybe<ScalarsEnums['uuid']>;
  user_id?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "user_contribution_skill"
 */
export interface user_contribution_skill_mutation_response {
  __typename?: 'user_contribution_skill_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<user_contribution_skill>;
}

/**
 * aggregate stddev on columns
 */
export interface user_contribution_stddev_fields {
  __typename?: 'user_contribution_stddev_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface user_contribution_stddev_pop_fields {
  __typename?: 'user_contribution_stddev_pop_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface user_contribution_stddev_samp_fields {
  __typename?: 'user_contribution_stddev_samp_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate sum on columns
 */
export interface user_contribution_sum_fields {
  __typename?: 'user_contribution_sum_fields';
  contribution_share?: Maybe<ScalarsEnums['numeric']>;
}

/**
 * aggregate var_pop on columns
 */
export interface user_contribution_var_pop_fields {
  __typename?: 'user_contribution_var_pop_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate var_samp on columns
 */
export interface user_contribution_var_samp_fields {
  __typename?: 'user_contribution_var_samp_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate variance on columns
 */
export interface user_contribution_variance_fields {
  __typename?: 'user_contribution_variance_fields';
  contribution_share?: Maybe<ScalarsEnums['Float']>;
}

/**
 * aggregate max on columns
 */
export interface user_max_fields {
  __typename?: 'user_max_fields';
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  did?: Maybe<ScalarsEnums['String']>;
  eth_address?: Maybe<ScalarsEnums['String']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * aggregate min on columns
 */
export interface user_min_fields {
  __typename?: 'user_min_fields';
  created_at?: Maybe<ScalarsEnums['timestamptz']>;
  did?: Maybe<ScalarsEnums['String']>;
  eth_address?: Maybe<ScalarsEnums['String']>;
  name?: Maybe<ScalarsEnums['String']>;
}

/**
 * response of any mutation on the table "user"
 */
export interface user_mutation_response {
  __typename?: 'user_mutation_response';
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums['Int'];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<user>;
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  contribution: contribution;
  contribution_aggregate: contribution_aggregate;
  contribution_aggregate_fields: contribution_aggregate_fields;
  contribution_max_fields: contribution_max_fields;
  contribution_min_fields: contribution_min_fields;
  contribution_mutation_response: contribution_mutation_response;
  contribution_rating: contribution_rating;
  contribution_rating_aggregate: contribution_rating_aggregate;
  contribution_rating_aggregate_fields: contribution_rating_aggregate_fields;
  contribution_rating_max_fields: contribution_rating_max_fields;
  contribution_rating_min_fields: contribution_rating_min_fields;
  contribution_rating_mutation_response: contribution_rating_mutation_response;
  dao: dao;
  dao_aggregate: dao_aggregate;
  dao_aggregate_fields: dao_aggregate_fields;
  dao_max_fields: dao_max_fields;
  dao_member: dao_member;
  dao_member_aggregate: dao_member_aggregate;
  dao_member_aggregate_fields: dao_member_aggregate_fields;
  dao_member_max_fields: dao_member_max_fields;
  dao_member_min_fields: dao_member_min_fields;
  dao_member_mutation_response: dao_member_mutation_response;
  dao_min_fields: dao_min_fields;
  dao_mutation_response: dao_mutation_response;
  rating: rating;
  rating_aggregate: rating_aggregate;
  rating_aggregate_fields: rating_aggregate_fields;
  rating_max_fields: rating_max_fields;
  rating_min_fields: rating_min_fields;
  rating_mutation_response: rating_mutation_response;
  skill: skill;
  skill_aggregate: skill_aggregate;
  skill_aggregate_fields: skill_aggregate_fields;
  skill_max_fields: skill_max_fields;
  skill_min_fields: skill_min_fields;
  skill_mutation_response: skill_mutation_response;
  user: user;
  user_aggregate: user_aggregate;
  user_aggregate_fields: user_aggregate_fields;
  user_contribution: user_contribution;
  user_contribution_aggregate: user_contribution_aggregate;
  user_contribution_aggregate_fields: user_contribution_aggregate_fields;
  user_contribution_avg_fields: user_contribution_avg_fields;
  user_contribution_max_fields: user_contribution_max_fields;
  user_contribution_min_fields: user_contribution_min_fields;
  user_contribution_mutation_response: user_contribution_mutation_response;
  user_contribution_skill: user_contribution_skill;
  user_contribution_skill_aggregate: user_contribution_skill_aggregate;
  user_contribution_skill_aggregate_fields: user_contribution_skill_aggregate_fields;
  user_contribution_skill_max_fields: user_contribution_skill_max_fields;
  user_contribution_skill_min_fields: user_contribution_skill_min_fields;
  user_contribution_skill_mutation_response: user_contribution_skill_mutation_response;
  user_contribution_stddev_fields: user_contribution_stddev_fields;
  user_contribution_stddev_pop_fields: user_contribution_stddev_pop_fields;
  user_contribution_stddev_samp_fields: user_contribution_stddev_samp_fields;
  user_contribution_sum_fields: user_contribution_sum_fields;
  user_contribution_var_pop_fields: user_contribution_var_pop_fields;
  user_contribution_var_samp_fields: user_contribution_var_samp_fields;
  user_contribution_variance_fields: user_contribution_variance_fields;
  user_max_fields: user_max_fields;
  user_min_fields: user_min_fields;
  user_mutation_response: user_mutation_response;
}
export type SchemaObjectTypesNames =
  | 'Mutation'
  | 'Query'
  | 'Subscription'
  | 'contribution'
  | 'contribution_aggregate'
  | 'contribution_aggregate_fields'
  | 'contribution_max_fields'
  | 'contribution_min_fields'
  | 'contribution_mutation_response'
  | 'contribution_rating'
  | 'contribution_rating_aggregate'
  | 'contribution_rating_aggregate_fields'
  | 'contribution_rating_max_fields'
  | 'contribution_rating_min_fields'
  | 'contribution_rating_mutation_response'
  | 'dao'
  | 'dao_aggregate'
  | 'dao_aggregate_fields'
  | 'dao_max_fields'
  | 'dao_member'
  | 'dao_member_aggregate'
  | 'dao_member_aggregate_fields'
  | 'dao_member_max_fields'
  | 'dao_member_min_fields'
  | 'dao_member_mutation_response'
  | 'dao_min_fields'
  | 'dao_mutation_response'
  | 'rating'
  | 'rating_aggregate'
  | 'rating_aggregate_fields'
  | 'rating_max_fields'
  | 'rating_min_fields'
  | 'rating_mutation_response'
  | 'skill'
  | 'skill_aggregate'
  | 'skill_aggregate_fields'
  | 'skill_max_fields'
  | 'skill_min_fields'
  | 'skill_mutation_response'
  | 'user'
  | 'user_aggregate'
  | 'user_aggregate_fields'
  | 'user_contribution'
  | 'user_contribution_aggregate'
  | 'user_contribution_aggregate_fields'
  | 'user_contribution_avg_fields'
  | 'user_contribution_max_fields'
  | 'user_contribution_min_fields'
  | 'user_contribution_mutation_response'
  | 'user_contribution_skill'
  | 'user_contribution_skill_aggregate'
  | 'user_contribution_skill_aggregate_fields'
  | 'user_contribution_skill_max_fields'
  | 'user_contribution_skill_min_fields'
  | 'user_contribution_skill_mutation_response'
  | 'user_contribution_stddev_fields'
  | 'user_contribution_stddev_pop_fields'
  | 'user_contribution_stddev_samp_fields'
  | 'user_contribution_sum_fields'
  | 'user_contribution_var_pop_fields'
  | 'user_contribution_var_samp_fields'
  | 'user_contribution_variance_fields'
  | 'user_max_fields'
  | 'user_min_fields'
  | 'user_mutation_response';

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  contribution_constraint: contribution_constraint | undefined;
  contribution_rating_constraint: contribution_rating_constraint | undefined;
  contribution_rating_select_column:
    | contribution_rating_select_column
    | undefined;
  contribution_rating_update_column:
    | contribution_rating_update_column
    | undefined;
  contribution_select_column: contribution_select_column | undefined;
  contribution_update_column: contribution_update_column | undefined;
  dao_constraint: dao_constraint | undefined;
  dao_member_constraint: dao_member_constraint | undefined;
  dao_member_select_column: dao_member_select_column | undefined;
  dao_member_update_column: dao_member_update_column | undefined;
  dao_select_column: dao_select_column | undefined;
  dao_update_column: dao_update_column | undefined;
  order_by: order_by | undefined;
  rating_constraint: rating_constraint | undefined;
  rating_select_column: rating_select_column | undefined;
  rating_update_column: rating_update_column | undefined;
  skill_constraint: skill_constraint | undefined;
  skill_select_column: skill_select_column | undefined;
  skill_update_column: skill_update_column | undefined;
  user_constraint: user_constraint | undefined;
  user_contribution_constraint: user_contribution_constraint | undefined;
  user_contribution_select_column: user_contribution_select_column | undefined;
  user_contribution_skill_constraint:
    | user_contribution_skill_constraint
    | undefined;
  user_contribution_skill_select_column:
    | user_contribution_skill_select_column
    | undefined;
  user_contribution_skill_update_column:
    | user_contribution_skill_update_column
    | undefined;
  user_contribution_update_column: user_contribution_update_column | undefined;
  user_select_column: user_select_column | undefined;
  user_update_column: user_update_column | undefined;
}
