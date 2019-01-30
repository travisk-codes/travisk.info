import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import showdown from 'showdown'
import { Route, Link, Switch } from 'react-router-dom'

import Svg from './svg'
import Resume from './views/Resume'
import Home from './views/Home'
import Projects from './views/Projects'
import Cats from './views/Cats'
import Bookmarks from './views/Bookmarks'
import { getRandomHslColorScheme } from './utils'

import './App.css'
 
const light_palette = {
  primary: '#fafafa',
  secondary: 'whitesmoke',
  top_bar_shadow: 'lightgrey',
  signature: '#1a1a1a',
  bg: 'white',

}

const dark_palette = {
  primary: '#1a1a1a',
  secondary: '#1a1a1a',
  top_bar_shadow: '#1a1a1a',
  signature: '#fafafa',
  bg: '#1a1a1a',
}

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

  background: linear-gradient(to right, ${props => props.left_color}, ${props => props.right_color});
  box-shadow: 0 1px 1px ${props => props.shadow_color};
  overflow: visible;
  align-items: stretch;
`
const Logo = styled.svg`
  stroke: ${props => props.color};
  stroke-width: 10;
  fill: ${props => props.color};
  width: 7em;
`
const StyledLink = styled(Link)`
  display: flex;
  transition: .05s linear;
  &:hover {
    transform: rotate(${() => (Math.random() * 10 - 5)}deg) scale(1.1);
  }
`
const Icon = styled.svg`
  display: flex;
  margin: 1em;
  fill: ${props => props.fill ? props.fill : '#1a1a1a'};
  width: ${props => props.width ? props.width : '4em'};
`
const NavItems = Block.extend`
  max-width: 20em;
  align-items: stretch;
`
const Content = Block.extend`
  position: relative;
  display: block;
  height: 100%;
  font-size: 1.25em;
  padding-top: 4em;
  background-color: ${props => props.bg_color}
`
// padding: 6.5em 2em 2em 2em;

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

const Navbar = props => (
  <Topbar shadow_color={props.shadow_color}left_color={props.left_color} right_color={props.right_color}>

    <StyledLink to='/'>
      <Logo viewBox={Svg.signature.viewbox} color={props.logo_color}>
        <path d={Svg.signature.path} />
      </Logo>
    </StyledLink>

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
  constructor() {
    super()
    this.colors = getRandomHslColorScheme(4)
    this.state = {
      darkMode: false,
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    const palette = this.state.darkMode ? dark_palette : light_palette
    return (
      <Fragment>
        <Content bg_color={palette.bg}>
          <Switch>
            <Route exact path='/'>
              <Home colors={this.colors} />
            </Route>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/cat-pics' component={Cats} />
            <Route path='/links' component={Bookmarks} />
          </Switch>
        </Content>
        <Navbar 
          left_color={palette.primary} 
          right_color={palette.secondary}
          logo_color={palette.signature}
          shadow_color={palette.top_bar_shadow}>
          <StyledLink to='/about'><Icon
            width={Svg.about.width}
            fill={this.colors[0]}
            viewBox={Svg.about.viewbox}>
            <path d={Svg.about.path} />
            </Icon>
          </StyledLink>
          <StyledLink to='/contact'><Icon
            width={Svg.contact.width}
            fill={this.colors[1]}
            viewBox={Svg.contact.viewbox}>
            <path d={Svg.contact.path} />
          </Icon></StyledLink>
          <StyledLink to='/projects'><Icon
            width={Svg.projects.width}
            fill={this.colors[2]}
            viewBox={Svg.projects.viewbox}>
            <path d={Svg.projects.path} />
          </Icon></StyledLink>
          <StyledLink to='/resume'><Icon
            width={Svg.resume.width}
            fill={this.colors[3]}
            viewBox={Svg.resume.viewbox}>
            <path d={Svg.resume.path} />
          </Icon></StyledLink>
        </Navbar>
        <DarkModeToggle toggle={this.toggleDarkMode} isDarkModeOn={this.state.darkMode} />
      </Fragment>
    )
  }
}

export default App;

const Toggle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 5em;
  height: 3em;
  margin: 2em;
  background-color: hsl(0, 0%, 20%);
  border-radius: 1.5em;
  cursor: pointer;
  box-shadow: 0 .2em hsl(0, 0%, 40%) inset;
`

const Button = styled.div`
  position: absolute;
  left: .5em;
  top: .5em;
  width: 2em;
  height: 2em;
  border-radius: 1.5em;
  background-color: whitesmoke;
  transition: 0.1s linear;
  box-shadow: 0 .2em grey;
  ${props => props.isDarkModeOn && css`
    transform: translateX(2em)
  `}

`

const DarkModeToggle = props => (
  <Toggle onClick={props.toggle}>
    <Button isDarkModeOn={props.isDarkModeOn} />
  </Toggle>
)