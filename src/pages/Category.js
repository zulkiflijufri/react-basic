import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <h2>Category Page</h2>
            <ul>
                <li>
                    <Link to="/category/foods">Foods</Link>
                </li>
                <li>
                    <Link to="/category/drinks">Drinks</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path="/category/foods">
                    List foods: nasi goreng, mie goreng, ayam goreng
                </Route>
                <Route path="/category/drinks">
                    List drinks: jus alpukat, jus mangga, jus jeruk
                </Route>
            </Switch>
        </div>
    );
};

export default Category;
