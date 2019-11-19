import React from 'react'
import showdown from 'showdown'

import Page from '../components/Page'

/*let about_md_OLD = `
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
`*/

const about_md = `
## Thanks for stopping by!

<br />
I am a novice web developer and designer looking for an entry-level position with opportunity to learn and grow. I work with standard web technologies, modern front-end tools & libraries, and server backends.

<br />
I work with code, but my degree is engineering, so I know how to solve problems and coordinate with teams.

<br />
I have experience working on enterprise codebases, fixing consumer-facing production code, and building internal tools for coworkers.

<br />
Other hobbies include learning about space & physics, popular auteur/indie films, writing, and mindfulness meditation.
`

// DOMPurify
export default props => (
	<Page
		palette={props.palette}
		style={{
			width: '30em',
			textAlign: 'justify',
			margin: '0 auto',
		}}
		dangerouslySetInnerHTML={{
			__html: new showdown.Converter().makeHtml(about_md),
		}}
	/>
)
