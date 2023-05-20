import React, { useState } from 'react'

// App components
import Header from './Header'
import LoadingAnimation from './LoadingAnimation'

// CVs
import CvBlackAndWhite from '../../cvs/b&w/components/CvBlackAndWhite'
import CvMinimalist from '../../cvs/minimalist/components/CvMinimalist'

import 'bootstrap/dist/css/bootstrap.min.css'

const CVs = [
  { label: 'Minimalist', component: CvMinimalist },
  { label: 'Black & White', component: CvBlackAndWhite }
]

export default function App (props) {
  const [state, setState] = useState({
    selectedCv: 0,
    cvGuiLoading: false,
    cvData: props.data
  })
  const onClickCvLink = i => {
    if (state.selectedCv === i) {
      // click on already selected cv, do nothing
      return
    }
    // set loading screen for several ms then display new CV gui
    setState({ ...state, selectedCv: i, cvGuiLoading: true })
    setTimeout(() => {
      setState({ ...state, selectedCv: i, cvGuiLoading: false })
    }, 500)
  }

  const generateSelectedCvHtml = () => {
    return React.createElement(CVs[state.selectedCv].component, {
      data: state.cvData
    })
  }

  return (
    <div className='row'>
      <div className='col-12'>
        <Header
          cvs={CVs}
          selectedCv={state.selectedCv}
          onClickCvLink={onClickCvLink}
          disabled={state.cvGuiLoading}
        />
      </div>
      <div className='col-12' style={{ marginTop: '2rem' }}>
        {state.cvGuiLoading ? <LoadingAnimation /> : generateSelectedCvHtml()}
      </div>
    </div>
  )
}
