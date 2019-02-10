import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Img from '../components/ImageZoomable'

const Page = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  padding: 1em;
  background-color: ${props => props.bg_color};
`
const PicFrame = styled.div`
  position: relative;
  width: 10em;
  flex: 1 1 auto;
  margin: 1em;
  overflow: hidden;
  border-radius: .25em;
  &:hover {
    box-shadow: 0em 0.25em 1.5em #999;
  }
`
const ZoomedFrame = PicFrame.extend`
  display: none;
    ${props => props.zoomed && css`
    display: block;
    position: fixed;
    cursor: pointer;
    width: auto;
    background-color: hsla(0, 0%, 0%, 0.8);
    padding: 1.5em;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin: 0;
    border-radius: 0;
    &:hover {
      box-shadow: none;
      cursor: pointer;
      transform: none;
    }
  `}
`

export default props => {
  let Pics = new Array(14).fill().map((_, i) => (
    <PicFrame key={i}>
      <Img src={`cat-thumbnails/${i+1}.jpg`} big={`cat-pics/${i+1}.jpg`} />
    </PicFrame>
  ))
  return (
    <Page bg_color={props.palette.bg}>
      {Pics}
    </Page>
  )
}