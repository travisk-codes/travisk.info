import React, { Component } from 'react'
import styled from 'styled-components'

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
//const Caption = styled.span`
//`
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
				{
					this.state.zoomed ? 
					<ZoomedImage 
						src={this.props.big ? this.props.big : this.props.src} 
					/> : 
					null 
				}
				<Image style={this.props.style} src={this.props.src} /> 
			</Frame>
    )
  }
}