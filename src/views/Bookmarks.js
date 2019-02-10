import React, { Component } from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import Bookmark, { Tag } from '../components/Bookmark'

import { bookmarks, tag_colors } from '../personal.config'
import { getRandomHslColorScheme } from '../utils'

const BookmarksPage = Page.extend`
  margin: 0 auto;
`
const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.5em;

  button {
    flex: 1 1 auto;
    border-radius: 1em;
    font-size: 0.9em;
    margin-bottom: 0.5em;
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
function get_color_scheme(is_dark_mode_on) {
  let tag_names = Object.keys(tag_colors)
  let colors = getRandomHslColorScheme(
    tag_names.length,
    is_dark_mode_on,
    80,
    'random',
    80,
    30,
  )
  let new_tag_name_color_pairs = {}
  tag_names.map((tag_name, i) => (
    new_tag_name_color_pairs[tag_name] = colors[i]
  ))
  return new_tag_name_color_pairs
}

class Bookmarks extends Component {
  constructor() {
    super()
    this.state = {
      visible_tags: Object.keys(tag_colors),
    }
    this.light_colors = get_color_scheme(false)
    this.dark_colors = get_color_scheme(true)
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

  get_list_of_tags
    
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
            color={this.props.palette.theme === 'dark' ? this.dark_colors[tag_name] : this.light_colors[tag_name]}
            onClick={() => this.toggle(tag_name)}
            style={{opacity: (this.state.visible_tags.includes(tag_name) ? 1 : 0.33), color: this.props.palette.bg}} 
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
            bookmark.tags.filter(t => this.state.visible_tags.includes(t)).length
            ?
            <Bookmark 
              {...bookmark}
              is_highlighted={bookmark.tags.sort().toString() === this.state.visible_tags.sort().toString()}
              highlight_color={this.props.palette.theme === 'dark' ? 'blue' : 'yellow'}
              key={i}>
              {bookmark.tags.map((tag, i) => (
                <Tag
                  onClick={() => this.toggle_only(tag)}
                  color={this.props.palette.theme === 'dark' ? this.dark_colors[tag] : this.light_colors[tag] }
                  text_color={this.props.palette.bg}
                  key={i}
                  style={{ opacity: (this.state.visible_tags.includes(tag) ? 1 : 0.25)}}
                >
                  {tag}
                </Tag>
              ))}

            </Bookmark> 
            :
            null
          ))
        }
      </BookmarksPage>
    )
  }
}

export default Bookmarks;