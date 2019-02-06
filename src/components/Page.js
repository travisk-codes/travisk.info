import styled from 'styled-components'

const Page = styled.div`
  color: ${props => props.palette.text};
  background-color: ${props => props.palette.bg};
  padding: 1.5em;

  @media (min-width: 900px) {
    padding: 1.5em 5em;
  }
`

export default Page