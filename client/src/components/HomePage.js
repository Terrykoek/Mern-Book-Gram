import React, { Component,} from 'react';
import Bookreact from './Bookreact';
import CreateForm from './CreateForm';
// import UpdateForm from './UpdateForm';
import Axios from 'axios'
import {Image} from 'cloudinary-react'
import UploadImg from './Uploadimg';


const axios = require('axios');

export class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          bookreacts: [],
          userEmail: '',
          imageSelected:'',
        };
       
    }


//logout function to clear localstorage of data to logout
    logOut = () => {
      localStorage.clear();
      window.location.href = '/';
         };


  uploadImage = () => {
    // console.log(files[0]);
    // const formData = new FormData()
    // formData.append("file", this.imageSelected);
    // formData.append("upload_preset", "kfx9w1n8")

    // Axios.post("https://api.cloudinary.com/v1_1/dznvifj49/image/upload", formData).then((response)=> {
    // console.log(formData);
    // console.log(response);
    let formData = new FormData();
    console.log(this.state.imageSelected);
    formData.append("api_key",'292816617687926');
    formData.append("file", this.state.imageSelected);
    // formData.append("public_id", "sample_image");
    // formData.append("timestamp", timeStamp);
    formData.append("upload_preset", "kfx9w1n8");
    axios
    .post("https://api.cloudinary.com/v1_1/dznvifj49/image/upload", formData)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    }) 

  };

//getting useremail to set state of bookreacts
    fetchdata = async () => {
        try {
          const response = await axios.get(`/bookreacts/${this.state.userEmail}`);
          this.setState({
            bookreacts: response.data,
          });
        } catch (err) {
          console.log(err);
        }
      };

     
    //to update state of component
        
      componentDidMount = () => {
        this.fetchdata();
       
      };

      componentDidMount = () => {
          const userData = JSON.parse(localStorage.getItem('login'));
          this.setState({
              userEmail: userData.email
          })
        
      };

     
    
      render() {
        return (
          <>
          <div className='home'>
          <button className="logout" onClick={this.logOut}> Logout </button>
          <CreateForm fetchdata={this.fetchdata} email={this.state.userEmail} />
          {this.state.bookreacts.map((bookreact, index) => {
              return <Bookreact bookreact={bookreact} key={bookreact._id} fetchdata={this.fetchdata}  />;
          })}
           
            </div>
           
          </>
        );
      }
    }

export default HomePage
