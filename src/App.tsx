// Router
import { AppRouter } from './routers/AppRouter'

// Redux
import { Provider } from 'react-redux'
import store from './stores/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}

export default App
