import React from 'react'
import ReactDOM from 'react-dom'
//REACT ROUTER
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

import "./styles/general.scss"
import Home from './views/Home'

const App = () =>
  <Router history={history}>
    <Home/>
  </Router>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))