import React, { Component } from "react";
import axios from "axios";

export default class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      sypnopsis: "",
      url: "",
      likeCount: "",
    };
  }
  uploadImage = () => {
    // console.log(files[0]);
    // const formData = new FormData()
    // formData.append("file", this.imageSelected);
    // formData.append("upload_preset", "kfx9w1n8")

    // Axios.post("https://api.cloudinary.com/v1_1/dznvifj49/image/upload", formData).then((response)=> {
    // console.log(formData);
    // console.log(response);
    let formData = new FormData();
    console.log(this.state.imageSelected.name);
    formData.append("api_key", "292816617687926");
    formData.append("file", this.state.imageSelected);
    formData.append("public_id", this.state.imageSelected.name);
    // formData.append("timestamp", timeStamp);
    formData.append("upload_preset", "kfx9w1n8");
    axios
      .post("https://api.cloudinary.com/v1_1/dznvifj49/image/upload", formData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  createNewData = async () => {
    try {
      const response = await axios.post("/bookreacts", {
        title: this.state.title,
        sypnopsis: this.state.sypnopsis,
        url: this.state.url,
        likeCount: this.state.likeCount,
        email: this.props.email,
      });
      this.props.fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createNewData();
    this.setState({
      title: "",
      sypnopsis: "",
      url: "",
      likeCount: "",
    });
  };

  render() {
    return (
      <form class="create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          id="title"
          placeholder="title"
        />
        <input
          type="text"
          value={this.state.sypnopsis}
          onChange={this.handleChange}
          id="sypnopsis"
          placeholder="sypnopsis"
        />
        {/* <input
          type="url"
          value={this.state.url}
          onChange={this.handleChange}
          id="url"
          placeholder="url"
        /> */}

        <input
          type="file"
          onChange={(event) => {
            this.setState({ imageSelected: event.target.files[0] });
          }}
        />
        <input
          type="text"
          value={this.state.likeCount}
          onChange={this.handleChange}
          id="likeCount"
          placeholder="likeCount"
        />
        <input type="submit" value="Add books" onClick={this.uploadImage} />
      </form>
    );
  }
}
