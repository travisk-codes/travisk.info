import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Svg from '../svg'

const Block = styled.div`
  display: ${window.location.search? 'none' : 'flex'};
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
const StyledLink = styled(Link)`
  display: flex;
  transition: .05s linear;
  &:hover {
    transform: scale(1.1);
  }
  -webkit-tap-highlight-color: transparent;
`
const Logo = styled.svg`
  stroke: ${props => props.color};
  stroke-width: 10;
  fill: ${props => props.color};
  width: 7em;

  @media (max-width: 400px) {
    width: 6.5em;
  }
`
const NavItems = Block.extend`
  max-width: 20em;
  align-items: stretch;
`

export default props => (
  <Topbar shadow_color={props.shadow_color} left_color={props.left_color} right_color={props.right_color}>

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