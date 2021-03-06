import React from 'react'

export default class DumbComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const mood = this.state.mood
    mood === 'happy' ? this.setState({ mood: 'sad' }) : this.setState({ mood: 'happy' }) 
  }
  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
