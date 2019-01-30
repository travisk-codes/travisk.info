import React, { Component } from 'react'
import styled from 'styled-components'

// import { getRandomHslColorScheme } from '../utils'

const Page = styled.div`
  padding: 1.25em;
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