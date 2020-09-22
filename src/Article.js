import React from "react";
import TitleArticle from "./TitleArticle";
import ContentArticle from "./ContentArticle";

function Article({ userLogin }) {
    return (
        <div style={{ margin: "5px" }}>
            <TitleArticle text="Learn Component with Props" />
            <ContentArticle statusLogin={userLogin}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla dolorum accusamus voluptate ducimus eos numquam illum
                    consequuntur, quasi libero blanditiis.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla dolorum accusamus voluptate ducimus eos numquam illum
                    consequuntur, quasi libero blanditiis.
                </p>
            </ContentArticle>
        </div>
    );
}

export default Article;
