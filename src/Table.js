import React from "react";

function Table() {
    const users = [
        { id: 1, name: "Albert", gender: "male" },
        { id: 2, name: "Romy", gender: "male" },
        { id: 3, name: "Shinta", gender: "female" },
        { id: 4, name: "Hendra", gender: "male" },
        { id: 5, name: "Fenny", gender: "female" },
        { id: 6, name: "Desta", gender: "male" },
    ];
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    const { id, name, gender } = user;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
