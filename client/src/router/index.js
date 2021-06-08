import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router = () => {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/daftar'>
        <Register />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
    </Switch> 
  )
}

export default Router