import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Team from './views/team'
import Blog from './views/blog'
import Software from './views/software'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Team} exact path="/team" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Software} exact path="/software" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
