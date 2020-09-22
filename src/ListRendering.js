import React from "react";

function ListRendering() {
    const users = ["Zulkifli", "Farid", "Kalsum"];
    // const displayUsers = users.map((user) => <li key={user}>{user}</li>);
    // return (
    //     <div>
    //         <ul>{displayUsers}</ul>
    //     </div>
    // );

    // JSX
    return (
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    );
}

export default ListRendering;
