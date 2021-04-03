import axios from 'axios'
import React, { Component } from 'react'
import UpdateForm from './UpdateForm';

class Bookreact extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  deleteBookreact = async (id) => {
    try {
      const response = await axios.delete(`/bookreacts/${id}`)
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <h4 onClick={() => window.open(this.props.bookreact.url)}>
         <ul> {this.props.bookreact.title} </ul>
         <ul>  {this.props.bookreact.sypnopsis}</ul>
         <ul>  {this.props.bookreact.url}</ul>
         <ul>  {this.props.bookreact.likeCount}</ul>
        </h4>
        <button 
          className='edit-btn'
          onClick={this.toggleEdit}
        >
          {this.state.edit ? 'Close' : 'Edit'}
        </button>
        <button 
          onClick={() => this.deleteBookreact(this.props.bookreact._id)}
        >
          Delete
        </button>
        <UpdateForm
          edit={this.state.edit}
          bookreact={this.props.bookreact} 
          fetchdata={this.props.fetchdata}
          toggleEdit={this.toggleEdit} 
        />
          </>
    )
  }
}
export default Bookreact