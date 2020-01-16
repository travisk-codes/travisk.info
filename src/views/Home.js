import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Svg from '../svg'

const LinkRowContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`
const Title = styled.div`
	font-size: 2.5em;
	font-family: Ubuntu;
	color: #fafafa
	&:hover {
		text-decoration: underline dotted #fafafa;
	}
`
const Icon = styled.svg`
	display: flex;
	margin: 0em 1em;
	fill: ${props => (props.fill ? props.fill : '#fafafa')};
	width: ${props => (props.width ? props.width : '4em')};
	height: ${props => (props.width ? props.width : '4em')};
	padding-left: ${props => props.paddingLeft}
`
function LinkRow(props) {
	return (
		<LinkRowContainer>
			<Title>{props.to}</Title> 
			<Icon>{props.children}</Icon>
		</LinkRowContainer>
	)
}

const Page = styled.div`
position: relative;
top: 0;
bottom: 0;
z-index: 1;
display: flex;
flex: 0 1 60em;
flex-direction: column;
align-items: flex-end;
justify-content: flex-start;
background-color: #1a1a1a;
`
const A = styled.a`
	outline: none;
	text-decoration: none;
`
const SLink = styled(Link)`
	outline: none;
	text-decoration: none;
`
const Signature = styled(Icon)`
	align-self: flex-start;
	margin-left: 1em;
	margin-top: -1em;
	stroke-width: 5;
	stroke: #fafafa;
	fill: #fafafa;
`
const PageMaxWidthConstraint = styled.div`
	background-color: #1a1a1a;
	position: fixed;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`

function Home(props) {
	const unbalanced = true

	return (
		<PageMaxWidthConstraint>
		<Page>
			<Signature
				width={Svg.signature.width}
				viewBox={Svg.signature.viewbox}>
				<path d={Svg.signature.path} />
			</Signature>

			<A href='https://hire.travisk.info'>
				<LinkRow to='About'>
					<Icon
						width={Svg.about.width}
						fill={props.palette}
						paddingLeft='0.3em'
						viewBox={Svg.about.viewbox}>
						<path d={Svg.about.path} />
					</Icon>
				</LinkRow>
			</A>

			<SLink to='/projects'>
				<LinkRow to='Projects'>
					<Icon
						width={Svg.projects.width}
						fill={props.palette}
						paddingLeft='0.15em'
						viewBox={Svg.projects.viewbox}>
						<path d={Svg.projects.path} />
					</Icon>
				</LinkRow>
			</SLink>

			<A href='/resume?noheader'>
				<LinkRow to='Resume'>
					<Icon
						width={Svg.resume.width}
						fill={props.palette}
						viewBox={Svg.resume.viewbox}>
						<path d={Svg.resume.path} />
					</Icon>
				</LinkRow>
			</A>

			<SLink to='/contact'>
				<LinkRow style={{paddingLeft: '0.5em'}} to='Contact'>
					<Icon
						width={Svg.contact.width}
						fill={props.palette}
						paddingLeft='0.3em'
						viewBox={Svg.contact.viewbox}>
						<path d={Svg.contact.path} />
					</Icon>
				</LinkRow>
			</SLink>
		</Page>
		</PageMaxWidthConstraint>
	)
}

export default Home
