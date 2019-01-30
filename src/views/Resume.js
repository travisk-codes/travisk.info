import React, { Component } from 'react'
import my from '../personal.config.js'
import styled from 'styled-components'
import './Resume.css';

const Header = () => (
  <div className='header'>
    <h1>Travis Kohlbeck</h1>
    <div className='contact-info'>
      <span>{`${my.address[0]} ${my.address[1]}`}</span>
      <span>{my.phone}</span>
      <br />
      <span>github.com/tdkohlbeck</span>
      <span>me@travisk.com</span>
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
    <span className='left'>
      <b>{props.credential}</b>
      <br />
      <span>{props.organization}, </span><wbr />
      <span>{props.location}</span>
    </span>
    <span className='right'>
      <i>
        <span>{props.start}—</span>
        <wbr />
        <span>{props.end}</span>
      </i>
    </span>
  </div>
)

const Heart = styled.span`
  position: relative;
  font-size: 0.4em;
  color: ${props => props.color ? props.color : '#1a1a1a'};
  top: -0.5em;
  padding: ${props => props.first ? '.33em' : '1em'};
`
function HeartSeparatedList(list) {
  let items = list.map( (item, i) => (
    i === 0 ? <span><Heart first></Heart>{item}</span> :
      <span><Heart><span aria-label='heart'role='img'>🖤</span></Heart>{item}</span>
  ))
  return (
    <span>
      {items}
    </span>
  )
}

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Header />
        <Section title='Experience'>
          <Details
            credential={my.job.title}
            organization={my.job.company}
            location={my.job.location}
            start={my.job.duration[0]}
            end={my.job.duration[1]}
          />
          <ul>
            {my.job.bullets.map( item => <li>{item}</li>)}
          </ul>
        </Section>
        <Section title='Portfolio'>
          <ul>
            <li><b>{my.portfolio.names[0]}: </b>{my.portfolio.bullets[0]}</li>
            <li><b>{my.portfolio.names[1]}: </b>{my.portfolio.bullets[1]}</li>
            <li>{my.portfolio.bullets[2]}</li>
            <li>{my.portfolio.bullets[3]}</li>
          </ul>
        </Section>
        <Section title='Technical'>
          <ul>
            <li>
              <b>Languages: </b>{HeartSeparatedList(my.knowledge.languages)}
            </li>
            <li><b>Practices: </b>{HeartSeparatedList(my.knowledge.practices)}</li>
            <li><b>Technologies: </b>{HeartSeparatedList(my.knowledge.technologies)}</li>
          </ul>
        </Section>
        <Section title='Education'>
          <Details
            credential={my.education.degree}
            organization={my.education.institute}
            location={my.education.location}
            start={my.education.duration[0]}
            end={my.education.duration[1]}
          />
          <ul>
            {my.education.bullets.map( bullet => <li>{bullet}</li>)}
          </ul>
        </Section>
        <br />
        {'[1] Print-friendly version and annotations go here'}
      </div>
    );
  }
}

export default Resume;
