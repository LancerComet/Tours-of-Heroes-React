import React from 'react'
import { Link } from 'react-router'

import { getHeroesList } from '../../services'


export default class MyHeroes extends React.Component {
  render () {
    return (
      <div className="my-heroes">
        <h3>MY Heroes</h3>
        <ul className="my-heroes-list">
          {
            getHeroesList().map((item, index) => {
              return (
                <Link to={ '/hero/' + item.id } key={item.id}>
                  <li>
                    <span>Lv.{item.level}</span>:
                    <span>{item.name}</span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    )
  }
}