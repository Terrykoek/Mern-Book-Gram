import React, { Component } from 'react'
import axios from 'axios';

export default class CreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      sypnopsis: '',
      url: '',
      likeCount: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  createNewData = async () => {
    try {
      const response = await axios.post('/bookreacts', {
        title: this.state.title,
        sypnopsis: this.state.sypnopsis,
        url: this.state.url,
        likeCount: this.state.likeCount,
      });
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createNewData();
    this.setState({
        title: '',
      sypnopsis: '',
      url: '',
      likeCount: '',
    })
  }

  render() {
    return (
      <form class="create" onSubmit={this.handleSubmit}>
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
          type='url'
          value={this.state.url}
          onChange={this.handleChange}
          id='url'
          placeholder='url'
        />
        <input
          type='text'
          value={this.state.likeCount}
          onChange={this.handleChange}
          id='likeCount'
          placeholder='likeCount'
        />
        <input type='submit' value='Add books' />
      </form>
    )
  }
}