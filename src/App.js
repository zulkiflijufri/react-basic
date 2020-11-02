import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Post from "./pages/Post";
import GuardRoute from "./components/GuardRoute";
import Login from "./components/Login";
import Member from "./components/Member";

function App() {
    const [isLogin, setLogin] = React.useState(false);

    return (
        <div className="App">
            <ul className="menu">
                <li>
                    <NavLink to="/" activeClassName="active" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category" activeClassName="active">
                        Category
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/member" activeClassName="active">
                        Member
                    </NavLink>
                </li>
                <li>
                    {isLogin ? (
                        <NavLink
                            to="/logout"
                            onClick={(e) => {
                                e.preventDefault();
                                setLogin(false);
                            }}
                        >
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to="/login" activeClassName="active">
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/category">
                        <Category />
                    </Route>
                    <Route path="/post/:id">
                        <Post />
                    </Route>
                    <Route path="/login">
                        <Login setLogin={setLogin} />
                    </Route>
                    <GuardRoute path="/member" isLogin={isLogin}>
                        <Member />
                    </GuardRoute>
                </Switch>
            </div>
        </div>
    );
}

export default App;
