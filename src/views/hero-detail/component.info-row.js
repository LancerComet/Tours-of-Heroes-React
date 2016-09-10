import React from 'react'

export default class InfoRow extends React.Component {
  render () {
    return (
      <div className="info-row">
        <span className="label">{ this.props.label }: </span>
        <span className="text">{ this.props.text }</span>
      </div>
    )
  }
}