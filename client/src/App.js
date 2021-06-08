import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import store from './redux/store'
import { getAllBab } from './redux/actions/babActions'
import { loadUser } from './redux/actions/authAction'
import { useEffect } from 'react'
import './App.css'

function App() {
  const allBab = store.dispatch(getAllBab())
  const user = store.dispatch(loadUser())
  useEffect(() => {
    return () => {
      store.dispatch(getAllBab())
      store.dispatch(getAllBab())
    }
  },[allBab, user])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
