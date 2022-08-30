import { Router, Route, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import CampaignLayout from 'src/layouts/CampaignLayout'
import EventosLayout from 'src/layouts/EventosLayout'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={EventosLayout}>
        <Route path="/eventos/new" page={EventoNewEventoPage} name="newEvento" />
        <Route path="/eventos/{id:Int}/edit" page={EventoEditEventoPage} name="editEvento" />
        <Route path="/eventos/{id:Int}" page={EventoEventoPage} name="evento" />
        <Route path="/eventos" page={EventoEventosPage} name="eventos" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
      <Set wrap={CampaignLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
    </Router>
  )
}

export default Routes
