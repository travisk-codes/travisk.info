import React, { Component } from 'react'
import styled from 'styled-components'

import { tag_colors } from '../personal.config'

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

`
const Tags = styled.div`
  display: inline-flex;
  margin-left: 0.5em;

`
export const Tag = styled.button`
  border: none;
  margin-right: 0.5em;
  font-size: 0.6em;
  padding: 0.25em 0.5em;
  border-radius: 20em;
  color: white;
  background-color: ${props => props.color};
  cursor: pointer;
`
export default props => (
  <Container>
    <Title href={props.url}>{props.title}</Title>
    <br />
    <Site href={'http://' + props.site}>{props.site}</Site>
    <Tags>
      {props.tags.map((tag, i) => (
        <Tag 
          onClick={() => props.onClickTag(tag)} 
          color={tag_colors[tag]} 
          key={i}
        >
          {tag}
        </Tag>
      ))}
    </Tags>
  </Container>
)
