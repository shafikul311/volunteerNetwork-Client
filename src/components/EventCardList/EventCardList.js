import React from "react";
import { Link } from "react-router-dom";
import './EventCardList.css'

const EventCardList = (props) => {

  const { img, title, _id } = props.event;
  return (
            <Link style={{ color: "grey" ,textDecooration: "naone"}} to={`/register/${_id}`}>
            <div className="col mb-3 text-center card-style">
                <div className="card">
                <img
                    src={img}
                    style={{ height: "250px" }}
                    className="card-img-top img-fluid"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                </div>
            </div>
            </Link>
  );
};

export default EventCardList;
