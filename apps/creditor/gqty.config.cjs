/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string', uuid: 'string', numeric: 'number', timestamptz: 'string' },
  introspection: {
    endpoint: 'http://localhost:8080/v1/graphql',
    headers: {
      'X-Hasura-Admin-Secret': 'admin-secret'
    },
  },
  destination: './src/gqty/index.ts',
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
