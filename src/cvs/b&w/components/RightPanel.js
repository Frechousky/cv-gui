import React from 'react'

import WorkExperiencesBlock from './WorkExperiencesBlock'
import ProjectsBlock from './ProjectsBlock'

export default function RightPanel (props) {
  return (
    <div className='col-8' id='rightPanel'>
      <WorkExperiencesBlock workExperiences={props.data.workExperiences} />
      <ProjectsBlock projects={props.data.projects} />
    </div>
  )
}
