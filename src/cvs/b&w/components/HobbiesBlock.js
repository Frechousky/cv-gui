import React from 'react'
import { capitalize } from 'underscore.string'

import LeftPanelBlock from './LeftPanelBlock'

export default class HobbiesBlock extends LeftPanelBlock {
  constructor (props) {
    super(props)
    this.title = 'Hobbies'
  }

  // overload
  renderInnerBlock () {
    const hobbyList = this.props.hobbies.map((hobby, i) => (
      <HobbyItem key={i} hobby={hobby} />
    ))
    return <div>{hobbyList}</div>
  }
}

function HobbyItem (props) {
  return (
    <div className='row'>
      <div className='col-12 hobby-item'>{capitalize(props.hobby)}</div>
    </div>
  )
}
