import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EventoLayoutProps = {
  children: React.ReactNode
}

const EventosLayout = ({ children }: EventoLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.eventos()}
            className="rw-link"
          >
            Eventos
          </Link>
        </h1>
        <Link
          to={routes.newEvento()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Evento
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EventosLayout
