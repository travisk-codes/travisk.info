import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Route, Redirect, Link, Switch } from 'react-router-dom'

import { getRandomHslColorScheme } from '../utils'

const Page = styled.div`
  padding: 1.25em;
`

const Slink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    color: white;
    > * {
      padding-left: 0.5em;
      background-color: ${props => props.color };
      border-radius: .1em;
    }
  }
`

class Bookmarks extends Component {
  render() {
    return (
      <Page>
        <ul>
          <li><h2>yey</h2></li>
          <li>bravo</li>
          <li><ul>
            <li>ayyy</li>  
            <li>bbbby</li>
            <li>
              <ul>
                <li>one</li>
                <li>two</li>
              </ul>
            </li>
          </ul></li>
        </ul>
      </Page>
    )
  }
}

export default Bookmarks;