import React from 'react'
import { Link } from 'react-router'

import appConfig from '../../app-config'

export default class ControlPanel extends React.Component {
  render () {
    return (
      <div className="control-panel">
        <h2>{appConfig.appName}</h2>
        <div>
          <Link to="/">DashBoard</Link>
          <Link to="/my-heroes">Heroes</Link>
        </div>
      </div>
    )
  }
}
