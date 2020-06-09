import React, { Component } from 'react'
import my from '../../personal.config.js'
import styled from 'styled-components'
import './Resume.css'

import Page from '../../components/Page'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
	faBookmark,
	faDatabase,
	faShareAlt,
	faRetweet,
	faCode,
	faSearch,
	faWrench,
	faDumbbell,
	faTaxi,
	faCog,
	faUserGraduate,
	faVideo,
} from '@fortawesome/free-solid-svg-icons'

const FAIcon = styled(Icon)`
	position: absolute;
	margin-left: -1.9em;
	margin-top: 0.2em;
`
const JobIcon = styled(Icon)`
	position: absolute;
	margin-left: 1em;
	margin-top: 0.2em;
`

const Header = () => (
	<div className='header'>
		<h1>Travis Kohlbeck</h1>
		<div className='contact-info'>
			<span>github.com/travisk-codes</span>
			<span>me@travisk.info</span>
			<br />
			<span>travisk.info/resume</span>
			<span>hire.travisk.info</span>
		</div>
	</div>
)

const Section = (props) => (
	<div className='section'>
		<h2 className='section title'>{props.title}</h2>
		{props.children}
	</div>
)

const Details = (props) => (
	<div className='details'>
		<span className='details_job-title'>{props.credential}</span>
		<div className='details_company-dates'>
			<span className='details_company'>
				<i>{props.organization}</i>
			</span>
			<span className='details_dates'>
				<i>
					<span>{props.start}—</span>
					<wbr />
					<span>{props.end}</span>
				</i>
			</span>
		</div>
	</div>
)

const Heart = styled.span`
	position: relative;
	font-size: 0.5em;
	color: ${(props) => (props.color ? props.color : '#1a1a1a')};
	top: -0.3em;
	padding: ${(props) => (props.first ? '.33em' : '1em')};
`
function HeartSeparatedList(list, color) {
	let items = list.map((item, i) =>
		i === 0 ? (
			<span style={{ overflowWrap: 'break-word' }} key={i}>
				<Heart color={color}></Heart>
				{item}
			</span>
		) : (
			<span style={{ overflowWrap: 'break-word' }} key={i}>
				<Heart color={color}>
					<span aria-label='heart' role='img'>
						⁕
					</span>
				</Heart>
				{item}
			</span>
		),
	)
	return <span>{items}</span>
}

const Li = styled.li`
	list-style: none;
`
const job_icons = [
	<JobIcon icon={faTaxi} />,
	<JobIcon icon={faSearch} />,
	<JobIcon icon={faCog} />,
]
class Resume extends Component {
	render() {
		return (
			<Page palette={this.props.palette}>
				<div className='resume'>
					<Header />
					<Section title='Portfolio'>
						<ul>
							<Li>
								<FAIcon icon={faVideo} />
								<b>{my.portfolio.names[0]}: </b>
								{my.portfolio.bullets[0]}
							</Li>
							<Li>
								<FAIcon icon={faBookmark} />
								<b>{my.portfolio.names[1]}: </b>
								{my.portfolio.bullets[1]}
							</Li>
							<Li>
								<FAIcon style={{ marginLeft: '-2em' }} icon={faDatabase} />
								<b>{my.portfolio.names[2]}: </b>
								{my.portfolio.bullets[2]}
							</Li>
							<Li>
								<FAIcon icon={faShareAlt} />
								<b>{my.portfolio.names[3]}: </b>
								{my.portfolio.bullets[3]}
							</Li>
						</ul>
					</Section>
					<Section title='Technical'>
						<ul>
							<Li>
								<FAIcon style={{ marginLeft: '-2.1em' }} icon={faCode} />
								<b>Languages: </b>
								{HeartSeparatedList(
									my.knowledge.languages,
									this.props.palette.text,
								)}
							</Li>
							<Li>
								<FAIcon style={{ marginLeft: '-2.1em' }} icon={faDumbbell} />
								<b>Practices: </b>
								{HeartSeparatedList(
									my.knowledge.practices,
									this.props.palette.text,
								)}
							</Li>
							<Li>
								<FAIcon icon={faWrench} />
								<b>Technologies: </b>
								{HeartSeparatedList(
									my.knowledge.technologies,
									this.props.palette.text,
								)}
							</Li>
						</ul>
					</Section>
					<Section title='Experience'>
						{my.jobs.map((job, i) => (
							<div style={{ paddingTop: i !== 0 ? '1em' : 0 }}>
								{job_icons[i]}
								<Details
									credential={job.title}
									organization={job.company}
									location={job.location}
									start={job.duration[0]}
									end={job.duration[1]}
								/>
								<ul>
									{job.bullets.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</Section>
					<Section title='Education'>
						<JobIcon icon={faUserGraduate} />
						<Details
							credential={my.education.degree}
							organization={my.education.institute}
							location={my.education.location}
							start={my.education.duration[0]}
							end={my.education.duration[1]}
						/>
						<ul>
							{my.education.bullets.map((bullet, i) => (
								<li key={i}>{bullet}</li>
							))}
						</ul>
					</Section>
				</div>
			</Page>
		)
	}
}

export default Resume
