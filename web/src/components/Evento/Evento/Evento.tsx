import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_EVENTO_MUTATION = gql`
  mutation DeleteEventoMutation($id: Int!) {
    deleteEvento(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Evento = ({ evento }) => {
  const [deleteEvento] = useMutation(DELETE_EVENTO_MUTATION, {
    onCompleted: () => {
      toast.success('Evento deleted')
      navigate(routes.eventos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete evento ' + id + '?')) {
      deleteEvento({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Evento {evento.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{evento.id}</td>
            </tr><tr>
              <th>Titulo</th>
              <td>{evento.titulo}</td>
            </tr><tr>
              <th>Acerca</th>
              <td>{evento.acerca}</td>
            </tr><tr>
              <th>Pelo</th>
              <td>{evento.pelo}</td>
            </tr><tr>
              <th>Altura</th>
              <td>{evento.altura}</td>
            </tr><tr>
              <th>Sexo</th>
              <td>{evento.sexo}</td>
            </tr><tr>
              <th>When</th>
              <td>{timeTag(evento.when)}</td>
            </tr><tr>
              <th>Prerequisitos</th>
              <td>{evento.prerequisitos}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(evento.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEvento({ id: evento.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(evento.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Evento
