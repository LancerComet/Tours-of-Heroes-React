/*
 *  DashBoard By LancerComet at 16:43, 2016/9/10.
 *  # Carry Your World #
 *  ---
 *  DashBoard 组件.
 */
'use strict'

import React from 'react'
import { getTopHeroes } from '../../services'

export default class DashBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      topHeroes: []
    }
  }

  componentDidMount () {
    const topHeroes = getTopHeroes()
    this.setState({ topHeroes: topHeroes })
  }

  render () {
    return (
      <div className="dashborad">
        <h3>Top Heroes</h3>
        <ul className="top-hero-list">
          {
            this.state.topHeroes.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }
}