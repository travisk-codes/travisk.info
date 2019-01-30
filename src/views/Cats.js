import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'

const Page = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  padding: 1em;
  background-color: ${props => props.bg_color};
`
const Pic = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
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
    cursor: pointer;
    transform: scale(1.01);
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

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPic: 1,
      zoomed: false,
    }
    this.selectPic = this.selectPic.bind(this)
  }

  selectPic(i) {
    this.setState({
      selectedPic: i,
      zoomed: !this.state.zoomed,
    })
  }

  render() {
    let Pics = new Array(14).fill().map((_, i) => (
      <PicFrame onClick={() => this.selectPic(i+1)}>
        <Pic src={`cat-pics/${i+1}.jpg`} />
      </PicFrame>
    ))
    /*let Pics = []
    for (let i = 0; i < 14; i++) {
      Pics.push(
        <PicFrame onClick={() => this.selectPic(i+1)}>
          <Pic src={`cat-pics/${i+1}.jpg`} />
        </PicFrame>
      )
    }*/
    console.log(Pics)
    let { selectedPic, zoomed } = this.state
    return (
      <Page bg_color={this.props.palette.bg}>
        {Pics}
        <ZoomedFrame zoomed={this.state.zoomed} onClick={() => this.selectPic(0)}>
          <Pic src={`cat-pics/${this.state.selectedPic}.jpg`} />
        </ZoomedFrame>
      </Page>
    )
  }
}

export default Home;
