import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getRandomHslColorScheme } from '../utils'

const Page = styled.div`
  padding: 1.25em;
`
const RightMenu = styled.div`
  z-index: 1;
  position: absolute;
  top: 4em;
  right: 0;
  padding: 1.25em;
`
const LeftMenu = styled.div`

`
const Slink = styled(Link).attrs(({ color }) => ({
  color: color || 'red',
}))`
  position: relative;
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    color: white;
    > * {
      padding: 0 0.5em;
      background-color: ${props => props.color };
      border-radius: .1em;
      width: fit-content;
    }
  }
`
const RightLink = Slink.extend`
  text-align: right;
`

class Home extends Component {
  render() {
    const colors = getRandomHslColorScheme(4, (this.props.palette.theme === 'dark' ? true : false))
    return (
      <Page>
        <RightMenu>
          <RightLink color={this.props.colors[0]} to='/about'>
            <h2>About Me</h2>
          </RightLink>
          <RightLink color={this.props.colors[1]} to='/contact'>
            <h2>Contact</h2>
          </RightLink>
          <RightLink color={this.props.colors[2]} to='/projects'>
            <h2>Projects</h2>
          </RightLink>
          <RightLink color={this.props.colors[3]} to='/resume'>
            <h2>Resume</h2>
          </RightLink>
        </RightMenu>
        <LeftMenu>
        <Slink color={colors[0]} to='/cat-pics'>
          <h2>Cat Pictures</h2>
        </Slink>
        <Slink color={colors[1]} to='/links'>
          <h2>Bookmarks</h2>
        </Slink>
        <Slink color={colors[2]} to='/backgrounds'>
          <h2>Wallpapers</h2>
        </Slink>
        <Slink color={colors[3]} to='/math-tutor'>
          <h2>Math Tutoring</h2>
        </Slink>
      </LeftMenu>


      </Page>
    )
  }
}

export default Home;