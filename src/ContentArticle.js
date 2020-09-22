import React from "react";

function ContentArticle({ children, statusLogin }) {
    return (
        <div style={{ textAlign: "justify" }}>
            {children}
            <p style={{ color: "green" }}>{statusLogin}</p>
        </div>
    );
}

export default ContentArticle;
