import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/Home'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
    </Switch> 
  )
}

export default Router