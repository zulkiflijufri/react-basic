import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            List of Post
            <ul>
                <li>
                    <Link to="/post/1">Post 1</Link>
                </li>
                <li>
                    <Link to="/post/2">Post 2</Link>
                </li>
                <li>
                    <Link to="/post/3">Post 3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
