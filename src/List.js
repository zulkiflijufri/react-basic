import React from "react";

function List({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    );
}

export default List;
