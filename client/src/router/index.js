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
import AdminHome from '../pages/admin/Home'
import AdminBab from '../pages/admin/Bab'
import AdminSubbab from '../pages/admin/Subbab'
import AdminMateri from '../pages/admin/Materi'
import AdminQuiz from '../pages/admin/Quiz'
import Sertifikat from '../pages/Sertifikat'
import Landing from '../pages/Landing'
import DetailQuiz from '../pages/admin/DetailQuiz'
import LiveCode from '../components/LiveCode'

const Router = () => {
  return (
    <Switch>
      <Route path='/daftar'>
        <Register />
      </Route>
      <Route exact path='/'>
        <Landing />
      </Route>
      <LogRoute path='/login' comp={Login} />
      <PrivateRoute exact path='/home' comp={Home} />
      <PrivateRoute exact path='/live-code' comp={LiveCode} />
      <PrivateRoute exact path='/profil' comp={Profil} />
      <PrivateRoute exact path='/sertifikat' comp={Sertifikat} />
      <PrivateRoute exact path='/materi/:bab_id/:sub_bab_id' comp={SubBab} />
      <PrivateRoute exact path='/quiz/:bab_id/:sub_bab_id' comp={SoalQuiz} />
      
      <AdminRoute exact path="/admin" comp={AdminHome}/>
      <AdminRoute path="/admin/bab" comp={AdminBab}/>
      <AdminRoute path="/admin/sub-bab" comp={AdminSubbab}/>
      <AdminRoute path="/admin/materi" comp={AdminMateri}/>
      <AdminRoute exact path="/admin/quiz" comp={AdminQuiz}/>
      <AdminRoute path="/admin/quiz/:quiz_id" comp={DetailQuiz}/>
    
    </Switch> 
  )
}


export default Router