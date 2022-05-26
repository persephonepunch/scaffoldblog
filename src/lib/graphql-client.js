import { GraphQLClient } from 'graphql-request';
const VITE_GRAPHQL_API = process.env['VITE_GRAPHQL_API']

export const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);