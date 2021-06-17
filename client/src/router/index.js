import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import LogRoute from './LogRoute'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import Materi from '../pages/Materi'
import Profil from '../pages/Profil'
import SubBab from '../pages/SubBab'
import SoalQuiz from '../pages/SoalQuiz'

const Router = () => {
  return (
    <Switch>
      <Route path='/daftar'>
        <Register />
      </Route>
      <LogRoute path='/login' comp={Login} />
      <PrivateRoute exact path='/home' comp={Home} />
      <PrivateRoute exact path='/profil' comp={Profil} />
      <PrivateRoute exact path='/materi/:bab_id/:sub_bab_id' comp={SubBab} />
      <PrivateRoute exact path='/quiz/:bab_id/:sub_bab_id' comp={SoalQuiz} />
      
    </Switch> 
  )
}


export default Router