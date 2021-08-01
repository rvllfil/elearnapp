import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import store from './redux/store'
import { getAllBab } from './redux/actions/allMateriActions'
import { loadUser } from './redux/actions/authAction'
import { useEffect } from 'react'
import './App.css'

function App() {
  const user = store.dispatch(loadUser())
  const allBab = store.dispatch(getAllBab())
  useEffect(() => {
    return () => {
      store.dispatch(loadUser())
      store.dispatch(getAllBab())
    }
  },[user, allBab])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
