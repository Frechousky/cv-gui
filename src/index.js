import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/components/App'
import { cvData } from './main/data'

ReactDOM.render(<App data={cvData} />, document.getElementById('root'))
