import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { id, name, email, address, phone, website } = props.friend;
    const url =`/friend/${id}`
    return (
        <div className="friend-container">
            <h3>I am {name}</h3>
            <h4>Call me {phone}</h4>
            <h4>Email me {email}</h4>
            <h4>Visit me {website}</h4>
            <h5>I live in {address.city}</h5>
            <Link to={url}>Visit Me</Link>
        </div>
    );
};

export default Friend;