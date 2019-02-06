import React from 'react'
import showdown from 'showdown'

import Page from '../components/Page'

let about_md_OLD = `
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

const about_md = `
## Thanks for stoping by!
<br />
My name is Travis. I like building things and working with numbers. Please feel free to hire me.
<br />
<br />
I live and grew up in Raleigh, North Carolina, and studied Mechanical Engineering at Georgia Tech in Atlanta. I pivoted to web development after working at a tech company in Silicon Valley.
<br />
<br />
I otherwise enjoy physics, running, and keeping up with current events.
`


// DOMPurify
export default props => (
  <Page palette={props.palette} dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(about_md) }} />
)