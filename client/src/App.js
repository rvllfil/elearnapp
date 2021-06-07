import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import store from './redux/store'
import { getAllBab } from './redux/actions/babActions'
import { useEffect } from 'react'

function App() {
  const allBab = store.dispatch(getAllBab())
  useEffect(() => {
    return () => {
      store.dispatch(getAllBab())
    }
  },[allBab])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
