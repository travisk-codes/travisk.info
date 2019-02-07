import React, { Component } from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import Bookmark, { Tag } from '../components/Bookmark'

import { bookmarks, tag_colors } from '../personal.config'

const BookmarksPage = Page.extend`
  margin: 0 auto;
`
const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;


  button {
    flex: 1 1 auto;
    border-radius: 0.25em;
    font-size: 0.9em;
    margin-bottom: 1em;
  }
`
const ToggleAllButtonContainer = styled.div`
  display: flex;
  flex: 5 1 4em;
`
const EmptySpace = styled.div`
  display: flex;
  flex: 10 1 auto;
`


class Bookmarks extends Component {
  constructor() {
    super()
    this.state = {
      visible_tags: Object.keys(tag_colors),
    }
    this.toggle = this.toggle.bind(this)
    this.toggle_all = this.toggle_all.bind(this)
    this.toggle_only = this.toggle_only.bind(this)
  }
  
  toggle(tag) {
    let visible = this.state.visible_tags
    this.setState({
      visible_tags: ( 
        visible.includes(tag) ?
        visible.filter(t => t !== tag) :
        visible.concat(tag)
        )
      })
    }
  
  toggle_all() {
    this.state.visible_tags.length ? 
    this.setState({visible_tags: []}) :
    this.setState({visible_tags: Object.keys(tag_colors)})
  }

  toggle_only(tag) {
    this.setState({visible_tags: [tag]})
  }
    
  render() {
    const TagBar = props => {
      const ToggleAllButton = props => (
        <Tag
          onClick={this.toggle_all}
          color={this.props.palette.bg}
          style={{
            flex: '1 1 4em',
            fontWeight: 'bold',
            border: '1px solid' + this.props.palette.text,
            color: this.props.palette.text,
          }}>
          {(this.state.visible_tags.length ? 'NONE' : 'ALL')}
        </Tag>
      )
      const tags = []
      for (const tag_name in tag_colors) {
        tags.push(
          <Tag 
            key={tag_name}
            color={tag_colors[tag_name]}
            onClick={() => this.toggle(tag_name)}
            style={{opacity: (this.state.visible_tags.includes(tag_name) ? 1 : 0.33)}} 
          >
            {tag_name}
          </Tag>
        )
      }
      tags.push((
        <ToggleAllButtonContainer>
          <EmptySpace />
          <ToggleAllButton />
        </ToggleAllButtonContainer>
      ))
      return (
        <Bar>
          {tags}
        </Bar>
      )
    }
    return (
      <BookmarksPage palette={this.props.palette}>
        <TagBar />
        {
          bookmarks.map((bookmark, i) => (
            bookmark.tags.filter(t => this.state.visible_tags.includes(t)).length ?
            <Bookmark 
              {...bookmark}
              onClickTag={this.toggle_only}
            /> :
            null
          ))
        }
      </BookmarksPage>
    )
  }
}

export default Bookmarks;