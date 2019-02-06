import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom'

import Resume from './views/Resume'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Projects from './views/Projects'
import Cats from './views/Cats'
import Bookmarks from './views/Bookmarks'

import DarkModeToggle from './components/Toggle'
import Navbar from './components/NavBar'

import Svg from './svg'
import { getRandomHslColorScheme } from './utils'

import './App.css'
import { pathToFileURL } from 'url';
 
const light_palette = {
  theme: 'light',
  primary: '#fafafa',
  secondary: 'whitesmoke',
  top_bar_shadow: 'lightgrey',
  signature: '#1a1a1a',
  bg: '#fafafa',
  text: '#1a1a1a',
}
const dark_palette = {
  theme: 'dark',
  primary: '#1a1a1a',
  secondary: '#1a1a1a',
  top_bar_shadow: '#1a1a1a',
  signature: '#fafafa',
  bg: '#1a1a1a',
  text: '#fafafa',
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`
const StyledLink = styled(Link)`
  display: flex;
  transition: .05s linear;
  &:hover {
    transform: scale(1.15);
  }
`
const Icon = styled.svg`
  display: flex;
  margin: 1em;
  fill: ${props => props.fill ? props.fill : '#1a1a1a'};
  width: ${props => props.width ? props.width : '4em'};
  @media (max-width: 350px) {
    margin: 1em 0.5em;
  }
`
const Content = Block.extend`
  position: relative;
  display: block;
  height: 100%;
  font-size: 1.25em;
  padding-top: 4em;
  background-color: ${props => props.bg_color}
`
class App extends Component {
  constructor() {
    super()
    this.state = {
      darkMode: true,
      colors: getRandomHslColorScheme(4)
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode,
      colors: getRandomHslColorScheme(4, !this.state.darkMode)
    })
  }

  render() {
    const palette = this.state.darkMode ? dark_palette : light_palette
    return (
      <Fragment>
        <Content bg_color={palette.bg}>
          <Switch>
            <Route exact path='/'><Home palette={palette} colors={this.state.colors} /></Route>
            <Route path='/about'><About palette={palette}/></Route>
            <Route path='/contact'><Contact palette={palette} /></Route>
            <Route path='/projects'><Projects palette={palette} /></Route>
            <Route path='/resume'><Resume palette={palette} /></Route>
            <Route path='/cat-pics'><Cats palette={palette} /></Route>
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
            fill={this.state.colors[0]}
            viewBox={Svg.about.viewbox}>
            <path d={Svg.about.path} />
            </Icon>
          </StyledLink>
          <StyledLink to='/contact'><Icon
            width={Svg.contact.width}
            fill={this.state.colors[1]}
            viewBox={Svg.contact.viewbox}>
            <path d={Svg.contact.path} />
          </Icon></StyledLink>
          <StyledLink to='/projects'><Icon
            width={Svg.projects.width}
            fill={this.state.colors[2]}
            viewBox={Svg.projects.viewbox}>
            <path d={Svg.projects.path} />
          </Icon></StyledLink>
          <StyledLink to='/resume'><Icon
            width={Svg.resume.width}
            fill={this.state.colors[3]}
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