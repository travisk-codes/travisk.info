import React from 'react'
import styled, { css } from 'styled-components'

import Img from '../components/ImageZoomable'

const Container = styled.div`
  position: relative;

  width: 100%;
  padding: 1em 0;
  overflow: auto; /* stretch to whatever height the biggest child is */
  display: flex;
  flex-wrap: wrap;
`
const Image = styled.div`
  position: relative;
  width: 10em;
  flex: 0 0 auto;
  height: 10em;

  float: left;
  margin-right: 1em;
  overflow: hidden;
`
const Text = styled.div`
  position: relative;

  width: 10em;
  flex: 1 1 auto;
`
const Title = styled.span`
  font-size: 2em;
`
const Description = styled.span`

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
  <Container>
    <Image><Img style={{width: '100%'}}src={props.img} /></Image>
    <Text>
      <Title>{props.title}</Title>
      <br />
      <Description>{props.description}</Description>
    </Text>
  </Container>
)