import React from 'react'
import './User.css';

export default function User(props) {
    
    const { userData: { name = 'Anonymous', nickname = 'Anonymous', surname = 'Anonymous', age = 'Unknown', еyeColor = 'Unknown', children = 'Unknown' }, rating, } = props;

    let childrenList;

    if (children !== 'Unknown') {
        childrenList = Object.entries(children).map( ([key, values]) => ( [key, Object.entries(values).map( ([key, values]) => ([<h3>{key}: {values};</h3>]) )] ) );
    }
    
    return (
        <div class='user'>
            <h3>My name: {name};</h3>
            <h3>My nickname: {nickname};</h3>
            <h3>My surname: {surname};</h3>
            <h3>My age: {age};</h3>
            <h3>My еye color: {еyeColor};</h3>
            <h3>My rating: {rating.toFixed(2)};</h3>
            <br />
            {childrenList}
        </div>
    )
}
