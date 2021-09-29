import React from 'react';
import './Friend.css';

const Friend = (props) => {
    const { name, email, address, phone, website } = props.friend;
    return (
        <div className="friend-container">
            <h3>I am {name}</h3>
            <h4>Call me {phone}</h4>
            <h4>Email me {email}</h4>
            <h4>Visit me {website}</h4>
            <h5>I live in {address.city}</h5>
        </div>
    );
};

export default Friend;