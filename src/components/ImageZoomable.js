import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Image = styled.img`
	display: block;
	position: relative;
	max-width: 100%;
	cursor: pointer;
`
const ZoomedImage = Image.extend`
	position: fixed;
	display: inline;
	left: 0;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding: 2em;
	background-color: hsla(0, 100%, 0%, 0.67);
	z-index: 1;
	object-fit: contain;
	animation:
`
const Caption = styled.span`

`

const Frame = styled.div`
	position: relative;
	object-fit: contain;	
`

export default class ImageZoomable extends Component {
  constructor() {
    super()
    this.state = {
			zoomed: false,
		}
		this.toggle_zoom = this.toggle_zoom.bind(this)
	}
	
	toggle_zoom() {
		this.setState({
			zoomed: !this.state.zoomed,
		})
	}

  render() {
    return (
			<Frame onClick={this.toggle_zoom}>
				{ this.state.zoomed ? <ZoomedImage src={this.props.src} /> : null }
				<Image src={this.props.src} /> 
			</Frame>
    )
  }
}

const ProjFrame = styled.div`
  position: relative;
  width: 10em;
  flex: 0 0 auto;
  height: 10em;

  float: left;
  margin-right: 1em;
`
const CatsFrame = styled.div`
  position: relative;
  width: 10em;
  flex: 1 1 auto;
  margin: 1em;
  overflow: hidden;
  border-radius: .25em;
  &:hover {
    box-shadow: 0em 0.25em 1.5em #999;
    cursor: pointer;
		transform: scale(1.01);
  }
`