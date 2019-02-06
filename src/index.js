import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import { configureStore, history } from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

const store = configureStore()

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', function () {
    registerServiceWorker()
  })
}
