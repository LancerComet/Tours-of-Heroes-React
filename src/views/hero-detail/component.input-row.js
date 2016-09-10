import React from 'react'

export default class InputRow extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="input-row">
        <span className="label">{ this.props.label }: </span>
        <input type="text" value={ this.props.text } onChange={ this.props.onChange }/>
      </div>
    )
  }
}