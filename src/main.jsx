import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <HashRouter basename='/'>
    <App />
  </HashRouter>
  </Provider>
)