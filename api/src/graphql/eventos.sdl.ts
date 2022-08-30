export const schema = gql`
  type Evento {
    id: Int!
    titulo: String!
    acerca: String!
    pelo: String!
    altura: String!
    sexo: String!
    when: DateTime!
    prerequisitos: String!
    createdAt: DateTime!
  }

  type Query {
    eventos: [Evento!]! @requireAuth
    evento(id: Int!): Evento @requireAuth
  }

  input CreateEventoInput {
    titulo: String!
    acerca: String!
    pelo: String!
    altura: String!
    sexo: String!
    when: DateTime!
    prerequisitos: String!
  }

  input UpdateEventoInput {
    titulo: String
    acerca: String
    pelo: String
    altura: String
    sexo: String
    when: DateTime
    prerequisitos: String
  }

  type Mutation {
    createEvento(input: CreateEventoInput!): Evento! @requireAuth
    updateEvento(id: Int!, input: UpdateEventoInput!): Evento! @requireAuth
    deleteEvento(id: Int!): Evento! @requireAuth
  }
`
