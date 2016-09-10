import React from 'react'
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
                <li key={index}>
                  <span>{item.level}</span>
                  <span>{item.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}