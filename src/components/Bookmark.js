import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 1em;
`
const Title = styled.a`
  text-decoration: none;
  color: unset;
  padding-bottom: .1em;
  &:hover {
    border-bottom: 1px dashed;
  }
`
const Site = Title.extend`
  color: grey;
  font-weight: 100;
  font-size: .8em;
  padding-left: 0.5em;
`
const Tags = styled.div`
  display: inline-flex;
`
export const Tag = styled.button`
  border: none;
  margin-right: 0.5em;
  font-size: 0.6em;
  padding: 0.25em 0.5em;
  border-radius: 20em;
  color: ${props => props.text_color};
  background-color: ${props => props.color};
  cursor: pointer;
`
export default props => (
  <Container style={props.style}>
    <Title 
      style={{backgroundColor: (props.is_highlighted ? props.highlight_color || 'yellow' : 'none')}} 
      href={props.url}
      target='_blank'
    >
      {props.title}
      </Title>
    <Site href={'http://' + props.site} target='_blank'>{props.site}</Site>
    <br />
    <Tags>
      {props.children}
    </Tags>
  </Container>
)
