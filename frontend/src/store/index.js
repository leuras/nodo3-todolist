import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'

const authPersistConfig = {
  key: 'authentication',
  storage,
  whitelist: ['auth']
}

const persistenceReducer = persistReducer(authPersistConfig, rootReducer)

const store = createStore(
  persistenceReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { persistor, store }