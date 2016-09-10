import React from 'react'
import { Link } from 'react-router'  // 路由跳转需要使用 Link 组件.

import appConfig from '../../app-config'

export default class ControlPanel extends React.Component {
  render () {
    return (
      <div className="control-panel">
        <h2>{appConfig.appName}</h2>
        <div>
          <Link to="/">
            <button>DashBoard</button>
          </Link>
          <Link to="/my-heroes">
            <button>Heroes</button>
          </Link>
        </div>
      </div>
    )
  }
}
