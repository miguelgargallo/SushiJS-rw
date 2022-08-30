import type { eventoQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query eventoQuery($id: Int!) {
    inscrito: evento(id: $id) {
      id
      titulo
      acerca
      pelo
      altura
      sexo
      when
      prerquisitos
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ evento }: CellSuccessProps<eventoQuery>) => {
  return JSON.stringify(evento)
}
