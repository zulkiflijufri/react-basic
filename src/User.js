import React from "react";
import List from "./List";

function User() {
    const users = ["Zulkifli", "Farid", "Kalsum", "Fakhri"];
    return (
        <div>
            <List users={users} />
        </div>
    );
}

export default User;
