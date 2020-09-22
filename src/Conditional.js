import React from "react";

function Conditional() {
    // const isLogin = false;
    // const name = "Zulkifli";
    // if (isLogin) return <div>{name} sudah login</div>;
    // else return <div>Silakan login</div>;

    // const isLogin = true;
    // const name = "Zulkifli";
    // const message = isLogin && `${name} sudah login`;
    // return <div>{message}</div>;

    // const isLogin = false;
    // const message = isLogin ? "Anda sudah login" : "Anda belum login";
    // return <div>{message}</div>;

    // JSX
    const isLogin = false;
    return <div>{isLogin ? "Anda sudah Login" : "Anda belum Login!"}</div>;
}

export default Conditional;
