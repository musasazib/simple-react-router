import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { id, name, email, address, phone, website } = props.friend;
    const history = useHistory();
    const url = `/friend/${id}`;
    const handleUserClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div className="friend-container">
            <h3>I am - {name}</h3>
            <h4>Call me - {phone}</h4>
            <h4>Email me - {email}</h4>
            <h4>Visit me - {website}</h4>
            <h5>I live in - {address.city}</h5>
            <Link to={url}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleUserClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;