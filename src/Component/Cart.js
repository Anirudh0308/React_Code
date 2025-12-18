import React from "react";
import Awatar from './Awatar'


function Cart({name, ...props}){

    const cardStyle = {
        padding : '10px',
        border : '2px solid black',
        boxShadow: '2px 2px 2px gray'
    }

    return(
        <div style={cardStyle}>
            <Awatar image={props.image} name={name} />
            <h1>{name}</h1>
            <p>{props.email}</p>
        </div>
    );
}

export default Cart;