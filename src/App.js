import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import showdown from 'showdown'
import { Route, Link, Switch } from 'react-router-dom'

import Svg from './svg'
import Resume from './views/Resume'
import Home from './views/Home'
import Projects from './views/Projects'

import './App.css'


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
  padding-top: 0.4em;
`
const Icon = styled.svg`
  display: flex;
  margin: 1em;
  fill: ${props => props.fill ? props.fill : '#1a1a1a'};
  width: ${props => props.width ? props.width : '4em'};
`
const NavItems = Block.extend`
  max-width: 20em;
`
const Content = Block.extend`
  display: block;
  font-size: 1.25em;
  padding: 6.5em 2em 2em 2em;
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

let home_md = `
# oh shit this is markdown
check out this list:
1. here's an item
2. oh shit here's another
`
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
let contact_md = `
##I can be found all across the world wide web
###Please feel free to stop on by!
<br />
* me @ travisk.com
* tdkohlbeck on github
* tdkohlbeck on soundcloud
* ...and many more!
`
const converter = new showdown.Converter()
const htmlBlogPost = converter.makeHtml(about_md)
const home_html = converter.makeHtml(home_md)
const contact_html = converter.makeHtml(contact_md)

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
    <Link to='/'><Logo viewBox={Svg.signature.viewbox}>
      <path d={Svg.signature.path} />
    </Logo></Link>
    <NavItems>
      {props.children}
    </NavItems>
  </Topbar>
)

// DOMPurify
const About = props => (
  <div dangerouslySetInnerHTML={{__html: htmlBlogPost }} />
)

const Contact = props => (
  <div>
    <div dangerouslySetInnerHTML={{__html: contact_html}} />
  </div>
)

class App extends Component {
  render() {
    const colors = getRandomHslColorScheme(4)
    return (
      <Fragment>
        <Navbar>
          <Link to='/about'><Icon
            width={Svg.about.width}
            fill={colors[0]}
            viewBox={Svg.about.viewbox}>
            <path d={Svg.about.path} />
          </Icon></Link>
        <Link to='/contact'><Icon
            width={Svg.contact.width}
            fill={colors[1]}
            viewBox={Svg.contact.viewbox}>
            <path d={Svg.contact.path} />
          </Icon></Link>
        <Link to='/projects'><Icon
            width={Svg.projects.width}
            fill={colors[2]}
            viewBox={Svg.projects.viewbox}>
            <path d={Svg.projects.path} />
          </Icon></Link>
        <Link to='/resume'><Icon
            width={Svg.resume.width}
            fill={colors[3]}
            viewBox={Svg.resume.viewbox}>
            <path d={Svg.resume.path} />
          </Icon></Link>
        </Navbar>
        <Content>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
          </Switch>
        </Content>
      </Fragment>
    )
  }
}

export default App;
