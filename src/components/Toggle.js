import React from 'react'
import styled, { css } from 'styled-components'

const Toggle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 5em;
  height: 3em;
  margin: 2em;
  background-color: ${props => props.isDarkModeOn ? '#fafafa' : '#1a1a1a'};
  border-radius: 1.5em;
  cursor: pointer;
  box-shadow: 0 .2em hsl(0, 0%, 50%) inset;
`

const Button = styled.div`
  position: absolute;
  left: .5em;
  top: .5em;
  width: 2em;
  height: 2em;
  border-radius: 1.5em;
  background-color: ${props => props.isDarkModeOn ? '#1a1a1a' : 'whitesmoke'};
  transition: 0.1s linear;
  box-shadow: 0 .2em hsl(0, 0%, 50%);
  ${props => props.isDarkModeOn && css`
    transform: translateX(2em)
  `}

`
export default props => (
  <Toggle onClick={props.toggle} isDarkModeOn={props.isDarkModeOn}>
    <Button isDarkModeOn={props.isDarkModeOn} />
  </Toggle>
)