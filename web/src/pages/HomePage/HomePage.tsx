import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import InscritosCell from 'src/components/InscritosCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
      <InscritosCell />
    </>
  )
}

export default HomePage
