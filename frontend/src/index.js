import React from 'react'
import ReactDOM from 'react-dom'
import { Provider  } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store'

import App from './App'
import Loader from './components/loader'

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ <Loader /> } persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
