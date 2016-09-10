/*
 *  Tour of Heroes React By LancerComet at 16:13, 2016/9/10.
 *  # Carry Your World #
 *  ---
 *  Tours of Heroes (React).
 */

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react/lib/ReactDOM'

import ControlPanel from './views/control-panel'
import DashBoard from './views/dash-board'
import MyHeroes from './views/my-heroes'

class App extends React.Component {
  render () {
    return (
      <div>
        <ControlPanel />
        <div className="subroute-ctnr">{ this.props.children }</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/" component={DashBoard} />
      <Route path="/my-heroes" component={MyHeroes} />
    </Route>
  </Router>,
  document.querySelector('app')
)