import React from 'react'
import styled from 'styled-components'

import Project from '../components/Project'
import Page from '../components/Page'

import { projects as project_data } from '../personal.config'

const ProjectsPage = styled(Page)`
	/*  max-width: 70%;*/
	margin: 0 auto;
`

let projects = project_data.map(p => (
	<Project {...p} key={p.title} />
))
projects.splice(6, 0, [<h1>Webpages</h1>, <br />])

export default props => (
	<ProjectsPage palette={props.palette}>
		{projects}
	</ProjectsPage>
)
