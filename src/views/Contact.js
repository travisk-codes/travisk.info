import React from 'react'
import showdown from 'showdown'

let contact_md = `
##I can be found all across the world wide web
###Please feel free to stop on by!
<br />
* me @ travisk.com
* tdkohlbeck on github
* tdkohlbeck on soundcloud
* ...and many more!
`

export default props => (
  <div dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(contact_md) }} />
)