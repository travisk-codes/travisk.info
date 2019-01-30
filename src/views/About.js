import React, { Component, Fragment } from 'react'
import showdown from 'showdown'

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
  <div dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(about_md) }} />
)