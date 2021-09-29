import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [users, setUsers] = useState({});
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Friend Detail of {friendId}</h2>
            <h3>Name: {users.name}</h3>
            <h4>Email: {users.email}</h4>
            <h4>Phone: {users.phone}</h4>
            <h4>Website: {users.website}</h4>
            <h4>Company: {users.company?.name}</h4>
            <h4>Address: {users.address?.city}</h4>
        </div>
    );
};

export default FriendDetail;