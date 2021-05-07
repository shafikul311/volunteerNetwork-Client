import React from 'react';

const BookedEvent = (props) => {
    console.log(props.bookEvent._id)
    const { date , name ,description, email ,images,registerDate ,_id } = props.bookEvent

    const handleDelete=(_id)=>{
        fetch(`https://radiant-oasis-50414.herokuapp.com/delete/${_id}`,{
            method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data => {
                alert('delete success',data)
        })
// console.log(_id)

    }
    return (
      
                <div style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="col-md-5 m-5 d-flex p-2 text-center ">
                    <img style={{height:'150px'}} src={images} alt=""/>
                    <div className="p-2">
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <p>Email :{email}</p>
                        <p>Event Date: {date}</p>
                        <p>Event Registered Date :{registerDate}</p>
                        {/* <Link to="/"> */}
                        <button onClick={()=>handleDelete(_id)} className="end">Remove</button>
                        {/* </Link> */}
                    </div>
                  
                </div>
           
    );
};

export default BookedEvent;