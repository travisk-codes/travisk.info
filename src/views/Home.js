import React, { Fragment } from 'react'
import styled from 'styled-components'
import showdown from 'showdown'
import purify from 'dompurify'

const copy = `
## what a world, to warp itself this way

someone, somewhere, has dug a hole through the center of the earth
and you decide to jump in it
it's a pretty nice hole
climate controlled, comfortable lighting
the wall is painted with alternating white and black stripes
they remind you of depth markers in a diving well
separating each stripe is a light
a thin sliver glowing white, wrapping all the way around
they appear as a quickening pulse as you fall further and faster
the air is getting pretty thin, not much of an atmosphere to slow you down
the stripes on the wall fly past you, blurring into a (pleasant) shade of gray
the pulses of light merge into a continuous glow
you wonder how far down you are
surely there's still a ways to go until you reach the center
you haven't been falling for *that* long, right?
in time, you begin to get the strange sense that you've begun slowing down
the (pleasant) gray blur surrounding you seems to be separating back into white and black stripes
they look thinner than before
the slivers of white light again appear, as if pulled apart from the steady glow
you peer down, and the slivers of light have become slightly blue
you gaze up, and they show a hint of red
you wonder if it's dinnertime back home
<br />
##### *this story is a continuous work in progress*
##### *please feel free to offer spelling and conceptual corrections and suggestions on its github page*
`

const sd = new showdown.Converter()
sd.setFlavor('github')
const html = purify.sanitize(sd.makeHtml(copy))

export default props => (
  <div dangerouslySetInnerHTML={ {__html: html} } />
)
