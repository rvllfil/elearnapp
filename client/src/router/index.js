import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import LogRoute from './LogRoute'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'


const Router = () => {
  return (
    <Switch>
      <Route path='/daftar'>
        <Register />
      </Route>
      <LogRoute path='/login' comp={Login} />
      <PrivateRoute exact path='/home' comp={Home} />
    </Switch> 
  )
}


export default Router