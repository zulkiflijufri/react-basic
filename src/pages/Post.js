import React from "react";
import { useHistory, useParams } from "react-router-dom";

export default function Post() {
    const { id } = useParams();
    const history = useHistory();

    return (
        <div>
            <h4>Post ke-{id}</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                eum unde repellat reprehenderit asperiores exercitationem at
                excepturi eveniet amet consectetur.
            </p>
            <button onClick={() => history.push("/")}>Back</button>
        </div>
    );
}
