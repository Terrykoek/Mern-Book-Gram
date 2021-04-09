import axios from 'axios'
import React, { Component } from 'react'

export default class UpdateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.bookreact.title,
      sypnopsis: this.props.bookreact.sypnopsis,
      url: this.props.bookreact.url,    
      likeCount: this.props.bookreact.likeCount,

    }
  }

  updateData = async () => {
    try {
      const response = await axios.put(`/bookreacts/${this.props.bookreact._id}`, {
        title: this.state.title,
        sypnopsis: this.state.sypnopsis,
        url: this.state.url,
        likeCount: this.state.likeCount,
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.updateData();
    await this.props.fetchdata();
    this.props.toggleEdit();
  }

  render() {
    return this.props.edit ? (
      <form className='toggle' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          id='title'
          placeholder='title'
        />
        <input
          type='text'
          value={this.state.sypnopsis}
          onChange={this.handleChange}
          id='sypnopsis'
          placeholder='sypnopsis'
        />
      
        <input
          type='text'
          value={this.state.likeCount}
          onChange={this.handleChange}
          id='likeCount'
          placeholder='likeCount'
        />
        <input type='submit' />
      </form>
    ) : ''
  }
}