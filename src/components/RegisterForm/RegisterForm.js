import React, { useEffect,useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const RegisterForm = () => {
    const [event  ,setEvent] = useState();

    const {_id} = useParams();
    // console.log(_id)

    useEffect(()=>{
        const url = `http://localhost5080/event/${_id}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setEvent(data))
    },[]);

    // console.log(event[0].img)
   



    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        const volunteerData = {
            name: data.name,
            email:data.email,
            description:data.description,
            date:data.date,
            registerDate: new Date().toDateString(),
            images:event[0].img
        };
        console.log(volunteerData)
        const url = `https://stark-reaches-61306.herokuapp.com/addVolunteer`
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-type': 'Application/json'
            },
            body:JSON.stringify(volunteerData)
            
        })
        .then(res => res.json())
        
        alert('Event Booked')
    }
  
    return (
      <div className="justify-content-center m-3 p-3">
          <form className="pl-5" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="pb-3">Register As A  Volunteer</h2>
      
                <input className="form-control w-75" placeholder="Name" type="text" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">This field is required</span>}
                <br/>
                <input className="form-control w-75" placeholder="Email" type="email" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">This field is required</span>}
                <br/>
                <input className="form-control w-75" type="date" {...register("date", { required: true })} />
                {errors.date && <span className="text-danger">This field is required</span>}
                <br/>
                <input className="form-control w-75" placeholder="Description" type="text" {...register("description", { required: true })} />
                {errors.description && <span className="text-danger">This field is required</span>}
                <br/>
                <input className="form-control w-75" placeholder="Organize by book library" type="text" {...register("organize", { required: true })} />
                {errors.organize && <span className="text-danger">This field is required</span>}
                <br/>
                
                <input type="submit" />
    </form>
      </div>
       
    );
};

export default RegisterForm;