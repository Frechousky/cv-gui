import React from 'react'
import { capitalize, titleize } from 'underscore.string'

import RightPanelBlock from './RightPanelBlock'

export default class ProjectsBlock extends RightPanelBlock {
  constructor (props) {
    super(props)
    this.title = 'Projects'
  }

  // overload
  renderInnerBlock () {
    const projectList = this.props.projects.map((project, i) => (
      <ProjectItem key={i} project={project} />
    ))
    return <div>{projectList}</div>
  }
}

function ProjectItem (props) {
  const descriptionList = props.project.description.map(
    (descriptionItem, i) => <li key={i}>{capitalize(descriptionItem)}</li>
  )
  const urlAttributes = {
    href: props.project.url
  }
  return (
    <div className='row project-item'>
      <div className='col-12 project-item-title'>
        <a {...urlAttributes}>{titleize(props.project.title)}</a>
      </div>
      <div className='col-12 project-item-year'>{props.project.year}</div>
      <div className='col-12 project-item-description'>
        <ul className='list-unstyled'>{descriptionList}</ul>
      </div>
    </div>
  )
}
