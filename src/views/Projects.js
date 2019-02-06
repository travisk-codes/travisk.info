import React from 'react'
import showdown from 'showdown'
import purify from 'dompurify'
import styled from 'styled-components'

import Project from '../components/Project'
import Page from '../components/Page'

/*const Page = styled.div`
  position: relative;
  padding: 1em;
  h1 {
    margin: .5em;
  }

  @media (max-width: 450px) {
    font-size: 0.85em;
  }
`*/

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

const datum_description = `
A personal metrics management platform. Currently features easy tag-value entry, tag name auto-complete, and entry edit & deletion
`

const sd = new showdown.Converter()
sd.setFlavor('github')
const html = purify.sanitize(sd.makeHtml(copy))

export default props => (
  <Page palette={props.palette}>
    <Project title='Datum (web app)' img='datum.jpg' description={datum_description} />
    <Project title='Datum (CLI)' img='cat-pics/2.jpg' description={datum_description} />
    <Project title={`"Bag 'n Fits"`} img='cat-pics/2.jpg' description={datum_description} />
    <Project title='React-Random-Notes' img='cat-pics/3.jpg' description={datum_description} />
    <h1>Webpages</h1>
    <Project title='Math Tutoring' img='cat-pics/4.jpg' description={datum_description} />
    <Project title='Magic Car Wash' img='cat-pics/5.jpg' description={datum_description} />
    <Project title='Mindful Guide' img='cat-pics/6.jpg' description={datum_description} />

  </Page>
)
//<div dangerouslySetInnerHTML={ {__html: html} } />
