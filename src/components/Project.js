import React from 'react'
import styled from 'styled-components'

import Img from '../components/ImageZoomable'

const Image = styled(Img)`
  width: 100%;
`
const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 1em;
  overflow: auto; /* stretch to whatever height the biggest child is */
  display: flex;
  flex-wrap: wrap;
  font-size: .9em;
`
const ImageFrame = styled.div`
  position: relative;
  width: 10em;
  flex: 0 0 auto;
  height: 10em;
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
  overflow: hidden;
  border-radius: .25em;
`
const Text = styled.div`
  position: relative;
  width: 10em;
  flex: 1 1 auto;
  margin-top: -.5em;
`
const Title = styled.span`
  font-size: 2em;
  padding-right: .25em;
`
const Subtitle = styled.span`
  font-size: 1.5em;
  color: grey;
  font-weight: 100;
`
const Description = styled.span`
`
const Link = styled.a`
  text-decoration: none;
  font-size: 1.125em;
  font-weight: 100;
  color: grey;
  padding-bottom: .1em;
  margin-right: .5em;
  border-bottom: 1px dashed;
  &:hover {
    border-bottom: 1px dashed white;
  }
`
export default props => (
  <Container>

    <ImageFrame>
      <Image style={props.style} src={props.img} big={props.big} />
    </ImageFrame>

    <Text>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <br />
      <Description>{props.description}</Description>
      <br />
      {
        props.links ?
        props.links.map(l => (<Link target='_blank' href={l.url}>{l.name}</Link>)) :
        ''
      }
    </Text>

  </Container>
)