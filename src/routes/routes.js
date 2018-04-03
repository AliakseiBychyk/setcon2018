import App from '../components/App'
import Agenda from '../components/Agenda'
import Speakers from '../components/Speakers'

const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/agenda',
    component: Agenda
  },
  {
    path: '/speakers',
    component: Speakers
  }
]

export default routes
