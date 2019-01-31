import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  padding: 1em;
  overflow: auto; /* stretch to whatever height the biggest child is */
`
const Image = styled.div`
  position: relative;
  width: 10em;
  height: 10em;
  background-color: green;
  float: left;
  margin-right: 1em;
`
const Text = styled.div`
  position: relative;
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
    <Image />
    <Text>
      <Title>Project</Title>
      <br />
      <Description>
        This is a longer description of what this project is and what it does
      </Description>
    </Text>
  </Container>
)