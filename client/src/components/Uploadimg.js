import React, { useEffect, useState } from "react";

function UploadImg () {
   
    const [loading,setLoading] = useState(false);
    const [image,setImage] = useState("");
    
    const uploadImage = async e =>{  
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','mernbook')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/dfz76cs2a/image/upload",
        {method:"post",
        body:data
        })
        const file = await res.json()
        console.log(file)
        setImage(file.secure_url)
        setLoading(false)
      }
      return (
         <div className='Img'>
             <input type='file' name="file" placeholder="Upload an Img"
             onChange={uploadImage}/>
             {
                 loading?(
                     <h3>Loading</h3>
                 ):(
                     <img src={image} style={{width:'300px'}}/>
                 )
             }
         </div>
        )
    }

    export default UploadImg;