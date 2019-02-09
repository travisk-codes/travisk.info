import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'

import { contact_info } from '../personal.config'

const ContactPage = styled(Page)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`
const Link = styled.a`
  display: flex;
  flex: 0 1 auto;
  color: ${props => props.text_color};
  background-color: ${props => props.bg_color};
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.25em;
  justify-content: center;
  border-radius: 0.25em;
  width: 9em;
  text-decoration: none;
  letter-spacing: 0.025em;
  &:hover {
    box-shadow: 0em 0.25em 1.5em #999;
    transform: scale(1.05);
  }
`



export default props => (
  <ContactPage palette={props.palette}>
    {contact_info.map((info, i) => (
      <Link 
        key={i} 
        href={info.url}
        text_color={ i ? info.color1 : props.palette.bg}
        bg_color={ i ? info.color2 : props.palette.text}>
        {info.name}
      </Link>
    ))}
  </ContactPage>
)