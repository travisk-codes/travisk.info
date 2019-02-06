import React from 'react'
import styled from 'styled-components'

import Pg from '../components/Page'

const Page = styled(Pg)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

let contact_md = `
##I can be found all across the world wide web
###Please feel free to stop on by!
<br />
* me @ travisk.com
* tdkohlbeck on github
* tdkohlbeck on soundcloud
* ...and many more!
`

const Link = styled.a`
  display: inline-flex;
  flex: 1 1 auto;
  color: ${props => props.text_color};
  background-color: ${props => props.bg_color};
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.25em;
  justify-content: center;
  border-radius: 0.25em;
  width: 10em;
  text-decoration: none;
  letter-spacing: 0.025em;
  &:hover {
    box-shadow: 0em 0.25em 1.5em #999;
    transform: scale(1.05);
  }
`

const info = [
  {
    name: 'email',
    color1: 'black',
    color2: 'white',
    url: 'me@travisk.info',
  },
  {
    name: 'github',
    color1: '#0062d9',
    color2: '#f6f8fa',
    url: 'https://github.com/tdkohlbeck',
  },
  {
    name: 'facebook',
    color1: 'white',
    color2: '#4a65a2',
    url: 'https://www.facebook.com/travisdkohlbeck',
  },
  {
    name: 'twitter',
    color1: 'white',
    color2: '#039ff5',
    url: 'https://twitter.com/good_travisk',
  },
  {
    name: 'linkedIn',
    color1: 'white',
    color2: '#0073bb',
    url: 'https://www.linkedin.com/in/traviskohlbeck',
  },
  {
    name: 'twitch',
    color1: 'white',
    color2: '#4b347d',
    url: 'https://www.twitch.tv/watch_travisk_do_',
  },
  {
    name: 'soundcloud',
    color1: 'white',
    color2: '#ff5400',
    url: 'https://soundcloud.com/tdkohlbeck',
  },
  {
    name: 'last.fm',
    color1: 'white',
    color2: '#bc0000',
    url: 'https://www.last.fm/user/Thadius_Dean',
  },
]

export default props => (
  <Page palette={props.palette}>
    {info.map((info, i) => (
      <Link href={info.url} text_color={ i ? info.color1 : props.palette.bg} bg_color={ i ? info.color2 : props.palette.text}>{info.name}</Link>
    ))}
  </Page>
)