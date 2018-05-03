import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import showdown from 'showdown'

import Svg from './svg'
import Resume from './Resume'

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`
const Topbar = Block.extend`
  position: fixed;
  justify-content: space-between;

  top: 0;
  width: 100%;
  height: 5em;
  padding: 0 1em;

  background: linear-gradient(to right, #fafafa, whitesmoke);
  box-shadow: 0 1px 1px lightgrey;
  overflow: visible;
`
const Logo = styled.svg`
  stroke: #1a1a1a;
  stroke-width: 10;
  fill: #1a1a1a;
  width: 7em;
`
const Link = styled.a`
  display: flex;
  height: 100%;
`
const Icon = styled.svg`
  margin: 1em;
  fill: ${props => props.fill ? props.fill : '#1a1a1a'};
  width: ${props => props.width ? props.width : '4em'};
`
const NavItems = Block.extend`
  max-width: 20em;
`
const Content = Block.extend`
  display: block;

  padding: 5.5em 1em 1em 1em;
`
const PostTitle = Block.extend`
  justify-content: flex-start;

  font-size: 2em;
  font-weight: bold;
`
const PostDateTime = Block.extend`
  justify-content: flex-start;

  font-size: 1.25em;
`
const HeartSeparator = styled.span`
  font-size: 1em
  color: red;
`


let markdown = `
here's a list of projects i can contribute to possibly!
  * tridactyl
  * chunkwm
  * svgomg
  * phosphorjs
`
const converter = new showdown.Converter()
const htmlBlogPost = converter.makeHtml(markdown)

function getRandomHslColorScheme(colorCount) {
  const
    hue = Math.floor( Math.random() * 360 ),
    shift = Math.floor( 150 / colorCount ),
    values = []
  for ( let i = 0; i < colorCount; i++ ) {
    let color = hue + shift * i
    if (color > 360) color = color - 360
    values.push(
      `hsl( ${color}, 80%, 50%)`,
    )
  }
  console.log(values[3])
  return values
}

function timeNow() {
  const now = new Date()
  return `
    ${now.toLocaleDateString()} ♥ ${now.toLocaleTimeString()}
  `
}

const Navbar = props => (
  <Topbar>
    <Link href='/'><Logo viewBox={Svg.signature.viewbox}>
      <path d={Svg.signature.path} />
    </Logo></Link>
    <NavItems>
      {props.children}
    </NavItems>
  </Topbar>
)

// DOMPurify
const About = props => (
  <Content>
    <PostTitle>sup</PostTitle>
    <PostDateTime>{timeNow()}</PostDateTime>
    <div dangerouslySetInnerHTML={{__html: htmlBlogPost }} />
  </Content>
)

class App extends Component {
  render() {
    const colors = getRandomHslColorScheme(4)
    return (
      <Fragment>
        <Navbar>
          <Link href='about'><Icon
            width={Svg.about.width}
            fill={colors[0]}
            viewBox={Svg.about.viewbox}>
            <path d={Svg.about.path} />
          </Icon></Link>
          <Link href='contact'><Icon
            width={Svg.contact.width}
            fill={colors[1]}
            viewBox={Svg.contact.viewbox}>
            <path d={Svg.contact.path} />
          </Icon></Link>
        <Link href='projects'><Icon
            width={Svg.projects.width}
            fill={colors[2]}
            viewBox={Svg.projects.viewbox}>
            <path d={Svg.projects.path} />
          </Icon></Link>
        <Link href='resume'><Icon
            width={Svg.resume.width}
            fill={colors[3]}
            viewBox={Svg.resume.viewbox}>
            <path d={Svg.resume.path} />
          </Icon></Link>
        </Navbar>
        <Resume />
      </Fragment>
    )
  }
}

export default App;
