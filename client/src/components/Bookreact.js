import axios from "axios";
import React, { Component } from "react";
import UpdateForm from "./UpdateForm";
import UploadImg from "./Uploadimg";

class Bookreact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  deleteBookreact = async (id) => {
    try {
      const response = await axios.delete(`/bookreacts/${id}`);
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <h4
          class="results"
          onClick={() => window.open(this.props.bookreact.url)}
        >
          <div> Title: {this.props.bookreact.title} </div>
          <div> Sypnopsis: {this.props.bookreact.sypnopsis}</div>
          <div> Author: {this.props.bookreact.likeCount}</div>
        </h4>
        <UploadImg />
        <button className="edit-btn" onClick={this.toggleEdit}>
          {this.state.edit ? "Close" : "Edit"}
        </button>
        <button onClick={() => this.deleteBookreact(this.props.bookreact._id)}>
          Delete
        </button>
        <UpdateForm
          edit={this.state.edit}
          bookreact={this.props.bookreact}
          fetchdata={this.props.fetchdata}
          toggleEdit={this.toggleEdit}
        />
      </>
    );
  }
}
export default Bookreact;
