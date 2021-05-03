import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddEvent = () => {
    const [image, setImage] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData  = {
            title:data.title,
            description:data.description,
            date:data.date,
            img:image
           
        }
        const url =`https://stark-reaches-61306.herokuapp.com/addEvents`
       
            fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(formData),
            }).then((res) => res.json());
            alert('Added New Event')
        
    };




    const handleImageSubmit = (event) => {

        const imgData = new FormData()
        

        imgData.set("key", "eaeada892240c3e78235aac2d3a8e400");
        imgData.append("image", event.target.files[0]);

        axios
        .post("https://api.imgbb.com/1/upload", imgData)
        .then(function (response) {

          setImage(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });



    }
    return (
        <div>

<form className="p-5" onSubmit={handleSubmit(onSubmit)}>
     
      <div className="row d-flex">
          <div className="col-md-6">
              <label>Title :</label>
              <br/>
                    <input className="form-control" defaultValue="Title" {...register("title", { required: true })} />
                    {errors.title && <span>This field is required</span>}
          </div>
          <div className="col-md-6">
                <label>Date :</label>
                <br/>
                <input className="form-control" type="date" {...register("date", { required: true })} />
                {errors.date && <span>This field is required</span>}
          </div>
      </div>
      <br/>


      <div className="row d-flex">
          <div className="col-md-6">
                    <label>Description :</label>
                    <br/>
                    <input className="form-control" defaultValue="Description" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}

          </div>
          <div className="col-md-6">
                 <label>Image :</label>
                 <br/>
                 <input type="file" onChange={handleImageSubmit} />
                
          </div>
      </div>
      <br/>
      
      <input className=" btn btn-primary pill" type="submit" />
    </form>
            
        </div>
    );
};

export default AddEvent;