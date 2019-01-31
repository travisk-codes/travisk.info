import React from 'react'
import showdown from 'showdown'

import Page from '../components/Page'

let about_md = `
## oh, hello there! thanks for stopping by

my name is travis

i like to work with numbers and build things
<br />
interested in hiring me for web development?
looking for a math tutor?
hit me up!

here's a list of projects i can contribute to possibly!
  * tridactyl
  * chunkwm
  * svgomg
  * phosphorjs
`


// DOMPurify
export default props => (
  <Page text_color={props.text_color} dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(about_md) }} />
)