import React from 'react'

import Project from '../components/Project'
import Page from '../components/Page'

const datum_description = `
A personal metrics management platform. Currently features easy tag-value entry, tag name auto-complete, and entry edit & deletion
`

export default props => (
  <Page palette={props.palette}>
    <Project title='Datum (web app)' style={{maxWidth: 'unset', width: '18em'}} img='datum.jpg' description={datum_description} />
    <Project title='Datum (CLI)' img='cat-pics/2.jpg' description={datum_description} />
    <Project title={`"Bag 'n Fits"`} img='cat-pics/2.jpg' description={datum_description} />
    <Project title='React-Random-Notes' img='cat-pics/3.jpg' description={datum_description} />
    <h1>Webpages</h1>
    <br />
    <Project title='Math Tutoring' img='cat-pics/4.jpg' description={datum_description} />
    <Project title='Magic Car Wash' img='cat-pics/5.jpg' description={datum_description} />
    <Project title='Mindful Guide' img='cat-pics/6.jpg' description={datum_description} />

  </Page>
)
//<div dangerouslySetInnerHTML={ {__html: html} } />
