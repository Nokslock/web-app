import React from "react";

const AuthButton = ({
    type,
    loading

}: {
    type: "login" | "register" | "reset-pwd" | "forgot-pwd";
    loading: boolean;
}) => {
    return (
        <>
          <button>Auth</button> 
        </>
    )
}

export default AuthButton;