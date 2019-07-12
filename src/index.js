import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.css'

import Nav from './components/nav'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Reset from './pages/Reset'
import Donate from './pages/Donate'
import SignUpSuccess from './pages/SignUpSuccess'
import ResetSuccess from './pages/ResetSuccess'
import NotFoundPage from './pages/404'

const pages = {
  Nav,
  SignIn,
  SignUp,
  Reset,
  Donate,
  SignUpSuccess,
  ResetSuccess,
  NotFoundPage
}

ReactDOM.render(<Nav />, document.getElementById('Nav'))

for (const key in pages) {
  const element = document.getElementById(key)

  if (element) {
    const Element = pages[key]
    ReactDOM.render(<Element />, element)
  }
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
