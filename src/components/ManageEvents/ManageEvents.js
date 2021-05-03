import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageEvents = (props) => {
    const {img, title, date, _id} = props.event
    const handleDelete= (_id) => {
        console.log(_id)

        fetch(`https://stark-reaches-61306.herokuapp.com/deleteEvent/${_id}`,{
            method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data => {
                alert('delete Event success',data)
        })
        
    }

    return (
        <tbody>
                        <tr>
                        <th scope="row">#</th>
                        <td ><img style={{height:'50px', width:'50px',borderRadius:'50%'}} src={img} alt=""/></td>
                        <td>{title}</td>
                        <td>{date}</td>
                        <td><button onClick={()=>handleDelete(_id)}><FontAwesomeIcon className="text-danger" icon={faTrashAlt}/></button></td>
                        </tr>
                    </tbody>
      
    );
};

export default ManageEvents;