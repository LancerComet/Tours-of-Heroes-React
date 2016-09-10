import React from 'react'
import { Link } from 'react-router'

import InfoRow from './component.info-row'
import InputRow from './component.input-row'

import { getHeroData, editHero } from '../../services'

const defaultValue = '--'

export default class HeroDetail extends React.Component {
  constructor () {
    super()

    this.state = {
      id: defaultValue,
      name: defaultValue,
      sex: defaultValue,
      type: defaultValue,
      level: defaultValue
    }
  }

  componentDidMount () {
    this.loadData()
  }

  loadData () {
    const heroId = this.props.params.id
    if (heroId) {
      const heroData = getHeroData(heroId)
      this.setState(heroData)
    }
  }

  changeName (event) {
    const newVal = event.target.value
    this.setState({ name: newVal })
  }

  editData () {
    editHero(this.state)
    this.props.history.goBack()
  }

  render () {
    return (
      <div className="hero-detail-panel">
        <h3 className="hero-name">{ this.state.name }</h3>
        <InputRow label="name" text={ this.state.name } onChange={this.changeName.bind(this)}/>
        <InfoRow label="id" text={ this.state.id }/>
        <InfoRow label="level" text={ this.state.level }/>
        <InfoRow label="sex" text={ this.state.sex }/>
        <InfoRow label="type" text={ this.state.type }/>
        <div>
          <button onClick={this.editData.bind(this)}>Back</button>
        </div>
      </div>
    )
  }
}