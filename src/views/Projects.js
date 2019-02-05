import React from 'react'
import showdown from 'showdown'
import purify from 'dompurify'

import Project from '../components/Project'

const copy = `
### Apps
* Random Notes
* Datum
  * CLI program
  * SMS hook
* Bag 'n Fits
<br />
### Pages
* Mindful Guide
* Magic Car Wash
`

const sd = new showdown.Converter()
sd.setFlavor('github')
const html = purify.sanitize(sd.makeHtml(copy))

export default props => (
  <div>
    <div dangerouslySetInnerHTML={ {__html: html} } />
    <Project title='Datum' img='datum.jpg' />
  </div>
)
