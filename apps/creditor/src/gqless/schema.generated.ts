/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamptz: string;
  uuid: string;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
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

/** order by aggregate values of table "contribution_votes" */
export interface contribution_votes_aggregate_order_by {
  count?: Maybe<order_by>;
  max?: Maybe<contribution_votes_max_order_by>;
  min?: Maybe<contribution_votes_min_order_by>;
}

/** Boolean expression to filter rows from the table "contribution_votes". All fields are combined with a logical 'AND'. */
export interface contribution_votes_bool_exp {
  _and?: Maybe<Array<contribution_votes_bool_exp>>;
  _not?: Maybe<contribution_votes_bool_exp>;
  _or?: Maybe<Array<contribution_votes_bool_exp>>;
  contribution_id?: Maybe<uuid_comparison_exp>;
  rating?: Maybe<String_comparison_exp>;
  user?: Maybe<users_bool_exp>;
  user_id?: Maybe<uuid_comparison_exp>;
}

/** order by max() on columns of table "contribution_votes" */
export interface contribution_votes_max_order_by {
  contribution_id?: Maybe<order_by>;
  rating?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** order by min() on columns of table "contribution_votes" */
export interface contribution_votes_min_order_by {
  contribution_id?: Maybe<order_by>;
  rating?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** Ordering options when selecting data from "contribution_votes". */
export interface contribution_votes_order_by {
  contribution_id?: Maybe<order_by>;
  rating?: Maybe<order_by>;
  user?: Maybe<users_order_by>;
  user_id?: Maybe<order_by>;
}

/** select columns of table "contribution_votes" */
export enum contribution_votes_select_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  rating = 'rating',
  /** column name */
  user_id = 'user_id',
}

/** Boolean expression to filter rows from the table "contributions". All fields are combined with a logical 'AND'. */
export interface contributions_bool_exp {
  _and?: Maybe<Array<contributions_bool_exp>>;
  _not?: Maybe<contributions_bool_exp>;
  _or?: Maybe<Array<contributions_bool_exp>>;
  artifact?: Maybe<String_comparison_exp>;
  author?: Maybe<users_bool_exp>;
  category?: Maybe<String_comparison_exp>;
  contributors?: Maybe<contributors_bool_exp>;
  created_at?: Maybe<timestamptz_comparison_exp>;
  created_by?: Maybe<uuid_comparison_exp>;
  date?: Maybe<date_comparison_exp>;
  description?: Maybe<String_comparison_exp>;
  effort?: Maybe<String_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  impact?: Maybe<String_comparison_exp>;
  title?: Maybe<String_comparison_exp>;
  votes?: Maybe<contribution_votes_bool_exp>;
  weight?: Maybe<Int_comparison_exp>;
}

/** Ordering options when selecting data from "contributions". */
export interface contributions_order_by {
  artifact?: Maybe<order_by>;
  author?: Maybe<users_order_by>;
  category?: Maybe<order_by>;
  contributors_aggregate?: Maybe<contributors_aggregate_order_by>;
  created_at?: Maybe<order_by>;
  created_by?: Maybe<order_by>;
  date?: Maybe<order_by>;
  description?: Maybe<order_by>;
  effort?: Maybe<order_by>;
  id?: Maybe<order_by>;
  impact?: Maybe<order_by>;
  title?: Maybe<order_by>;
  votes_aggregate?: Maybe<contribution_votes_aggregate_order_by>;
  weight?: Maybe<order_by>;
}

/** select columns of table "contributions" */
export enum contributions_select_column {
  /** column name */
  artifact = 'artifact',
  /** column name */
  category = 'category',
  /** column name */
  created_at = 'created_at',
  /** column name */
  created_by = 'created_by',
  /** column name */
  date = 'date',
  /** column name */
  description = 'description',
  /** column name */
  effort = 'effort',
  /** column name */
  id = 'id',
  /** column name */
  impact = 'impact',
  /** column name */
  title = 'title',
  /** column name */
  weight = 'weight',
}

/** order by aggregate values of table "contributors" */
export interface contributors_aggregate_order_by {
  avg?: Maybe<contributors_avg_order_by>;
  count?: Maybe<order_by>;
  max?: Maybe<contributors_max_order_by>;
  min?: Maybe<contributors_min_order_by>;
  stddev?: Maybe<contributors_stddev_order_by>;
  stddev_pop?: Maybe<contributors_stddev_pop_order_by>;
  stddev_samp?: Maybe<contributors_stddev_samp_order_by>;
  sum?: Maybe<contributors_sum_order_by>;
  var_pop?: Maybe<contributors_var_pop_order_by>;
  var_samp?: Maybe<contributors_var_samp_order_by>;
  variance?: Maybe<contributors_variance_order_by>;
}

/** order by avg() on columns of table "contributors" */
export interface contributors_avg_order_by {
  contribution_share?: Maybe<order_by>;
}

/** Boolean expression to filter rows from the table "contributors". All fields are combined with a logical 'AND'. */
export interface contributors_bool_exp {
  _and?: Maybe<Array<contributors_bool_exp>>;
  _not?: Maybe<contributors_bool_exp>;
  _or?: Maybe<Array<contributors_bool_exp>>;
  contribution?: Maybe<contributions_bool_exp>;
  contribution_id?: Maybe<uuid_comparison_exp>;
  contribution_share?: Maybe<numeric_comparison_exp>;
  user?: Maybe<users_bool_exp>;
  user_id?: Maybe<uuid_comparison_exp>;
}

/** order by max() on columns of table "contributors" */
export interface contributors_max_order_by {
  contribution_id?: Maybe<order_by>;
  contribution_share?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** order by min() on columns of table "contributors" */
export interface contributors_min_order_by {
  contribution_id?: Maybe<order_by>;
  contribution_share?: Maybe<order_by>;
  user_id?: Maybe<order_by>;
}

/** Ordering options when selecting data from "contributors". */
export interface contributors_order_by {
  contribution?: Maybe<contributions_order_by>;
  contribution_id?: Maybe<order_by>;
  contribution_share?: Maybe<order_by>;
  user?: Maybe<users_order_by>;
  user_id?: Maybe<order_by>;
}

/** select columns of table "contributors" */
export enum contributors_select_column {
  /** column name */
  contribution_id = 'contribution_id',
  /** column name */
  contribution_share = 'contribution_share',
  /** column name */
  user_id = 'user_id',
}

/** order by stddev() on columns of table "contributors" */
export interface contributors_stddev_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by stddev_pop() on columns of table "contributors" */
export interface contributors_stddev_pop_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by stddev_samp() on columns of table "contributors" */
export interface contributors_stddev_samp_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by sum() on columns of table "contributors" */
export interface contributors_sum_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by var_pop() on columns of table "contributors" */
export interface contributors_var_pop_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by var_samp() on columns of table "contributors" */
export interface contributors_var_samp_order_by {
  contribution_share?: Maybe<order_by>;
}

/** order by variance() on columns of table "contributors" */
export interface contributors_variance_order_by {
  contribution_share?: Maybe<order_by>;
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

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: Maybe<Array<users_bool_exp>>;
  _not?: Maybe<users_bool_exp>;
  _or?: Maybe<Array<users_bool_exp>>;
  eth_address?: Maybe<String_comparison_exp>;
  id?: Maybe<uuid_comparison_exp>;
  name?: Maybe<String_comparison_exp>;
}

/** Ordering options when selecting data from "users". */
export interface users_order_by {
  eth_address?: Maybe<order_by>;
  id?: Maybe<order_by>;
  name?: Maybe<order_by>;
}

/** select columns of table "users" */
export enum users_select_column {
  /** column name */
  eth_address = 'eth_address',
  /** column name */
  id = 'id',
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

export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
  contribution_votes_select_column: true,
  contributions_select_column: true,
  contributors_select_column: true,
  date: true,
  numeric: true,
  order_by: true,
  timestamptz: true,
  users_select_column: true,
  uuid: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    contribution_votes: {
      __type: '[contribution_votes!]!',
      __args: {
        distinct_on: '[contribution_votes_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_votes_order_by!]',
        where: 'contribution_votes_bool_exp',
      },
    },
    contribution_votes_by_pk: {
      __type: 'contribution_votes',
      __args: { contribution_id: 'uuid!', user_id: 'uuid!' },
    },
    contributions: {
      __type: '[contributions!]!',
      __args: {
        distinct_on: '[contributions_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contributions_order_by!]',
        where: 'contributions_bool_exp',
      },
    },
    contributions_by_pk: { __type: 'contributions', __args: { id: 'uuid!' } },
    contributors: {
      __type: '[contributors!]!',
      __args: {
        distinct_on: '[contributors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contributors_order_by!]',
        where: 'contributors_bool_exp',
      },
    },
    contributors_by_pk: {
      __type: 'contributors',
      __args: { contribution_id: 'uuid!', user_id: 'uuid!' },
    },
    users: {
      __type: '[users!]!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
    users_by_pk: { __type: 'users', __args: { id: 'uuid!' } },
  },
  mutation: {},
  subscription: {
    __typename: { __type: 'String!' },
    contribution_votes: {
      __type: '[contribution_votes!]!',
      __args: {
        distinct_on: '[contribution_votes_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_votes_order_by!]',
        where: 'contribution_votes_bool_exp',
      },
    },
    contribution_votes_by_pk: {
      __type: 'contribution_votes',
      __args: { contribution_id: 'uuid!', user_id: 'uuid!' },
    },
    contributions: {
      __type: '[contributions!]!',
      __args: {
        distinct_on: '[contributions_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contributions_order_by!]',
        where: 'contributions_bool_exp',
      },
    },
    contributions_by_pk: { __type: 'contributions', __args: { id: 'uuid!' } },
    contributors: {
      __type: '[contributors!]!',
      __args: {
        distinct_on: '[contributors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contributors_order_by!]',
        where: 'contributors_bool_exp',
      },
    },
    contributors_by_pk: {
      __type: 'contributors',
      __args: { contribution_id: 'uuid!', user_id: 'uuid!' },
    },
    users: {
      __type: '[users!]!',
      __args: {
        distinct_on: '[users_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[users_order_by!]',
        where: 'users_bool_exp',
      },
    },
    users_by_pk: { __type: 'users', __args: { id: 'uuid!' } },
  },
  Int_comparison_exp: {
    _eq: { __type: 'Int' },
    _gt: { __type: 'Int' },
    _gte: { __type: 'Int' },
    _in: { __type: '[Int!]' },
    _is_null: { __type: 'Boolean' },
    _lt: { __type: 'Int' },
    _lte: { __type: 'Int' },
    _neq: { __type: 'Int' },
    _nin: { __type: '[Int!]' },
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
  contribution_votes: {
    __typename: { __type: 'String!' },
    contribution_id: { __type: 'uuid!' },
    rating: { __type: 'String!' },
    user: { __type: 'users!' },
    user_id: { __type: 'uuid!' },
  },
  contribution_votes_aggregate_order_by: {
    count: { __type: 'order_by' },
    max: { __type: 'contribution_votes_max_order_by' },
    min: { __type: 'contribution_votes_min_order_by' },
  },
  contribution_votes_bool_exp: {
    _and: { __type: '[contribution_votes_bool_exp!]' },
    _not: { __type: 'contribution_votes_bool_exp' },
    _or: { __type: '[contribution_votes_bool_exp!]' },
    contribution_id: { __type: 'uuid_comparison_exp' },
    rating: { __type: 'String_comparison_exp' },
    user: { __type: 'users_bool_exp' },
    user_id: { __type: 'uuid_comparison_exp' },
  },
  contribution_votes_max_order_by: {
    contribution_id: { __type: 'order_by' },
    rating: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  contribution_votes_min_order_by: {
    contribution_id: { __type: 'order_by' },
    rating: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  contribution_votes_order_by: {
    contribution_id: { __type: 'order_by' },
    rating: { __type: 'order_by' },
    user: { __type: 'users_order_by' },
    user_id: { __type: 'order_by' },
  },
  contributions: {
    __typename: { __type: 'String!' },
    artifact: { __type: 'String' },
    author: { __type: 'users!' },
    category: { __type: 'String' },
    contributors: {
      __type: '[contributors!]!',
      __args: {
        distinct_on: '[contributors_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contributors_order_by!]',
        where: 'contributors_bool_exp',
      },
    },
    created_at: { __type: 'timestamptz!' },
    created_by: { __type: 'uuid!' },
    date: { __type: 'date!' },
    description: { __type: 'String' },
    effort: { __type: 'String' },
    id: { __type: 'uuid!' },
    impact: { __type: 'String' },
    title: { __type: 'String!' },
    votes: {
      __type: '[contribution_votes!]!',
      __args: {
        distinct_on: '[contribution_votes_select_column!]',
        limit: 'Int',
        offset: 'Int',
        order_by: '[contribution_votes_order_by!]',
        where: 'contribution_votes_bool_exp',
      },
    },
    weight: { __type: 'Int' },
  },
  contributions_bool_exp: {
    _and: { __type: '[contributions_bool_exp!]' },
    _not: { __type: 'contributions_bool_exp' },
    _or: { __type: '[contributions_bool_exp!]' },
    artifact: { __type: 'String_comparison_exp' },
    author: { __type: 'users_bool_exp' },
    category: { __type: 'String_comparison_exp' },
    contributors: { __type: 'contributors_bool_exp' },
    created_at: { __type: 'timestamptz_comparison_exp' },
    created_by: { __type: 'uuid_comparison_exp' },
    date: { __type: 'date_comparison_exp' },
    description: { __type: 'String_comparison_exp' },
    effort: { __type: 'String_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    impact: { __type: 'String_comparison_exp' },
    title: { __type: 'String_comparison_exp' },
    votes: { __type: 'contribution_votes_bool_exp' },
    weight: { __type: 'Int_comparison_exp' },
  },
  contributions_order_by: {
    artifact: { __type: 'order_by' },
    author: { __type: 'users_order_by' },
    category: { __type: 'order_by' },
    contributors_aggregate: { __type: 'contributors_aggregate_order_by' },
    created_at: { __type: 'order_by' },
    created_by: { __type: 'order_by' },
    date: { __type: 'order_by' },
    description: { __type: 'order_by' },
    effort: { __type: 'order_by' },
    id: { __type: 'order_by' },
    impact: { __type: 'order_by' },
    title: { __type: 'order_by' },
    votes_aggregate: { __type: 'contribution_votes_aggregate_order_by' },
    weight: { __type: 'order_by' },
  },
  contributors: {
    __typename: { __type: 'String!' },
    contribution: { __type: 'contributions!' },
    contribution_id: { __type: 'uuid!' },
    contribution_share: { __type: 'numeric!' },
    user: { __type: 'users!' },
    user_id: { __type: 'uuid!' },
  },
  contributors_aggregate_order_by: {
    avg: { __type: 'contributors_avg_order_by' },
    count: { __type: 'order_by' },
    max: { __type: 'contributors_max_order_by' },
    min: { __type: 'contributors_min_order_by' },
    stddev: { __type: 'contributors_stddev_order_by' },
    stddev_pop: { __type: 'contributors_stddev_pop_order_by' },
    stddev_samp: { __type: 'contributors_stddev_samp_order_by' },
    sum: { __type: 'contributors_sum_order_by' },
    var_pop: { __type: 'contributors_var_pop_order_by' },
    var_samp: { __type: 'contributors_var_samp_order_by' },
    variance: { __type: 'contributors_variance_order_by' },
  },
  contributors_avg_order_by: { contribution_share: { __type: 'order_by' } },
  contributors_bool_exp: {
    _and: { __type: '[contributors_bool_exp!]' },
    _not: { __type: 'contributors_bool_exp' },
    _or: { __type: '[contributors_bool_exp!]' },
    contribution: { __type: 'contributions_bool_exp' },
    contribution_id: { __type: 'uuid_comparison_exp' },
    contribution_share: { __type: 'numeric_comparison_exp' },
    user: { __type: 'users_bool_exp' },
    user_id: { __type: 'uuid_comparison_exp' },
  },
  contributors_max_order_by: {
    contribution_id: { __type: 'order_by' },
    contribution_share: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  contributors_min_order_by: {
    contribution_id: { __type: 'order_by' },
    contribution_share: { __type: 'order_by' },
    user_id: { __type: 'order_by' },
  },
  contributors_order_by: {
    contribution: { __type: 'contributions_order_by' },
    contribution_id: { __type: 'order_by' },
    contribution_share: { __type: 'order_by' },
    user: { __type: 'users_order_by' },
    user_id: { __type: 'order_by' },
  },
  contributors_stddev_order_by: { contribution_share: { __type: 'order_by' } },
  contributors_stddev_pop_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  contributors_stddev_samp_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  contributors_sum_order_by: { contribution_share: { __type: 'order_by' } },
  contributors_var_pop_order_by: { contribution_share: { __type: 'order_by' } },
  contributors_var_samp_order_by: {
    contribution_share: { __type: 'order_by' },
  },
  contributors_variance_order_by: {
    contribution_share: { __type: 'order_by' },
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
  users: {
    __typename: { __type: 'String!' },
    eth_address: { __type: 'String!' },
    id: { __type: 'uuid!' },
    name: { __type: 'String!' },
  },
  users_bool_exp: {
    _and: { __type: '[users_bool_exp!]' },
    _not: { __type: 'users_bool_exp' },
    _or: { __type: '[users_bool_exp!]' },
    eth_address: { __type: 'String_comparison_exp' },
    id: { __type: 'uuid_comparison_exp' },
    name: { __type: 'String_comparison_exp' },
  },
  users_order_by: {
    eth_address: { __type: 'order_by' },
    id: { __type: 'order_by' },
    name: { __type: 'order_by' },
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

export interface Query {
  __typename: 'Query' | undefined;
  contribution_votes: (args?: {
    distinct_on?: Maybe<Array<contribution_votes_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_votes_order_by>>;
    where?: Maybe<contribution_votes_bool_exp>;
  }) => Array<contribution_votes>;
  contribution_votes_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
  }) => Maybe<contribution_votes>;
  contributions: (args?: {
    distinct_on?: Maybe<Array<contributions_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contributions_order_by>>;
    where?: Maybe<contributions_bool_exp>;
  }) => Array<contributions>;
  contributions_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<contributions>;
  contributors: (args?: {
    distinct_on?: Maybe<Array<contributors_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contributors_order_by>>;
    where?: Maybe<contributors_bool_exp>;
  }) => Array<contributors>;
  contributors_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
  }) => Maybe<contributors>;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  users_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<users>;
}

export interface Mutation {
  __typename: 'Mutation' | undefined;
}

export interface Subscription {
  __typename: 'Subscription' | undefined;
  contribution_votes: (args?: {
    distinct_on?: Maybe<Array<contribution_votes_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contribution_votes_order_by>>;
    where?: Maybe<contribution_votes_bool_exp>;
  }) => Array<contribution_votes>;
  contribution_votes_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
  }) => Maybe<contribution_votes>;
  contributions: (args?: {
    distinct_on?: Maybe<Array<contributions_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contributions_order_by>>;
    where?: Maybe<contributions_bool_exp>;
  }) => Array<contributions>;
  contributions_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<contributions>;
  contributors: (args?: {
    distinct_on?: Maybe<Array<contributors_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<contributors_order_by>>;
    where?: Maybe<contributors_bool_exp>;
  }) => Array<contributors>;
  contributors_by_pk: (args: {
    contribution_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
  }) => Maybe<contributors>;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  users_by_pk: (args: { id: Scalars['uuid'] }) => Maybe<users>;
}

/**
 * columns and relationships of "contribution_votes"
 */
export interface contribution_votes {
  __typename: 'contribution_votes' | undefined;
  contribution_id: ScalarsEnums['uuid'];
  rating: ScalarsEnums['String'];
  /**
   * An object relationship
   */
  user: users;
  user_id: ScalarsEnums['uuid'];
}

/**
 * columns and relationships of "contributions"
 */
export interface contributions {
  __typename: 'contributions' | undefined;
  artifact?: Maybe<ScalarsEnums['String']>;
  /**
   * An object relationship
   */
  author: users;
  category?: Maybe<ScalarsEnums['String']>;
  /**
   * fetch data from the table: "contributors"
   */
  contributors: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contributors_select_column>>;
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
    order_by?: Maybe<Array<contributors_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contributors_bool_exp>;
  }) => Array<contributors>;
  created_at: ScalarsEnums['timestamptz'];
  created_by: ScalarsEnums['uuid'];
  date: ScalarsEnums['date'];
  description?: Maybe<ScalarsEnums['String']>;
  effort?: Maybe<ScalarsEnums['String']>;
  id: ScalarsEnums['uuid'];
  impact?: Maybe<ScalarsEnums['String']>;
  title: ScalarsEnums['String'];
  /**
   * An array relationship
   */
  votes: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<contribution_votes_select_column>>;
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
    order_by?: Maybe<Array<contribution_votes_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<contribution_votes_bool_exp>;
  }) => Array<contribution_votes>;
  weight?: Maybe<ScalarsEnums['Int']>;
}

/**
 * columns and relationships of "contributors"
 */
export interface contributors {
  __typename: 'contributors' | undefined;
  /**
   * An object relationship
   */
  contribution: contributions;
  contribution_id: ScalarsEnums['uuid'];
  contribution_share: ScalarsEnums['numeric'];
  /**
   * An object relationship
   */
  user: users;
  user_id: ScalarsEnums['uuid'];
}

/**
 * columns and relationships of "users"
 */
export interface users {
  __typename: 'users' | undefined;
  eth_address: ScalarsEnums['String'];
  id: ScalarsEnums['uuid'];
  name: ScalarsEnums['String'];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  contribution_votes: contribution_votes;
  contributions: contributions;
  contributors: contributors;
  users: users;
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'contribution_votes'
  | 'contributions'
  | 'contributors'
  | 'users';

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  contribution_votes_select_column:
    | contribution_votes_select_column
    | undefined;
  contributions_select_column: contributions_select_column | undefined;
  contributors_select_column: contributors_select_column | undefined;
  order_by: order_by | undefined;
  users_select_column: users_select_column | undefined;
}
