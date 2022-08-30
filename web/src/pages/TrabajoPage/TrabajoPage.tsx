import { MetaTags } from '@redwoodjs/web'

import EventoCell from 'src/components/EventoCell'

interface Props {
  id: number
}

const TrabajoPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Trabajo" description="Trabajo page" />

      <EventoCell id={id} />
    </>
  )
}

export default TrabajoPage
