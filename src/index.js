/*
 *  Tour of Heroes React By LancerComet at 16:13, 2016/9/10.
 *  # Carry Your World #
 *  ---
 *  Tours of Heroes (React).
 */

import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ReactDOM from 'react/lib/ReactDOM'

import ControlPanel from './views/control-panel'
import DashBoard from './views/dash-board'
import MyHeroes from './views/my-heroes'
import HeroDetail from './views/hero-detail'

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
      <IndexRoute component={DashBoard} />
      <Route path="/my-heroes" component={MyHeroes} />
      <Route path="/hero/:id" component={HeroDetail} />
    </Route>
  </Router>,
  document.querySelector('app')
)