import { Link, routes } from '@redwoodjs/router'
import { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query eventosQuery {
    inscritos: eventos {
      id
      titulo
      acerca
      pelo
      altura
      sexo
      when
      prerequisitos
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ inscritos }: CellSuccessProps<inscritosQuery>) => {
  return (
    <>
      {inscritos.map((eventos) => (
        <inscritos key={eventos.id}>
          <header>
            <h2>
              {' '}
              <Link to={routes.eventos()}>{eventos.titulo}</Link>
            </h2>
          </header>
          <p>{eventos.acerca}</p>
          <p>{eventos.pelo}</p>
          <p>{eventos.altura}</p>
          <p>{eventos.sexo}</p>
          <p>{eventos.when}</p>
          <p>{eventos.prerequisitos}</p>
          <div>Posted at: {eventos.createdAt}</div>
        </inscritos>
      ))}
    </>
  )
}
