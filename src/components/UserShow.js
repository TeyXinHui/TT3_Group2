import React from "react";

const UserShow = (props) => {

    // note: this is a dumb component, pass "user" props in to use 
    // json object returned from techtrek/login endpoint

    return(
    <div>
        <h2>{props.user.username}</h2>
        <p>Full name: {props.user.lastName}, {props.user.firstName}</p>
        <p>NRIC: {props.user.nric}</p>
        <p>Email: {props.user.email}</p>
        <p>Phone number: {props.user.phoneNumber}</p>
        <p>Address: {props.user.address}</p>
    </div>
    )
}

export default UserShow;