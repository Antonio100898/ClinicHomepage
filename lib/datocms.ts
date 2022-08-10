import { GraphQLClient } from 'graphql-request'

export function request({ query, variables, preview }: any) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer c0cfdff95f3ad1f284e28d7e998026`,
    },
  })

  return client.request(query, variables)
}
