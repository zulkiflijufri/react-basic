import React from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "./Login";

const GuardRoute = ({ children, isLogin, ...rest }) => {
    return (
        <div>
            <Route {...rest}>
                {isLogin ? (
                    children
                ) : (
                    <Redirect to="/login">
                        <Login />
                    </Redirect>
                )}
            </Route>
        </div>
    );
};

export default GuardRoute;
