/* eslint-disable require-jsdoc */
import React from 'react'
import { titleize } from 'underscore.string'

import LeftPanelBlock from './LeftPanelBlock'

export default class EducationBlock extends LeftPanelBlock {
  constructor (props) {
    super(props)
    this.title = 'Educational Background'
  }

  // overload
  renderInnerBlock () {
    const educationList = this.props.studies.map((education, i) => (
      <EducationItem key={i} education={education} />
    ))
    return <div>{educationList}</div>
  }
}

function EducationItem (props) {
  const urlAttributes = {
    href: props.education.url
  }
  return (
    <div className='row education-item'>
      <div className='col-12 education-item-title'>
        <a {...urlAttributes}>
          {titleize(props.education.degree)} in{' '}
          {titleize(props.education.field)}
          <br />
          specialization {titleize(props.education.specialization)}
        </a>
      </div>
      <div className='col-12 education-item-school'>
        {titleize(props.education.school)} ({titleize(props.education.city)})
      </div>
      <div className='col-12 education-item-period'>
        {props.education.start} - {props.education.end}
      </div>
    </div>
  )
}
