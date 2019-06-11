import React from 'react'

export default function User(props) {

    console.log(props);

    const { userData: { name = 'Anonymous', nickname = 'Anonymous', surname = 'Anonymous', age = 'Unknown', children = 'Unknown' }, rating, } = props;

    // const { childOne = 'Anonymous', childTwo = 'Anonymous', childThree = 'Anonymous', } = children;
    
    const arr = [];

    if (children !== 'Unknown') {
        for (const [key, value] of Object.entries(children)) {
            arr.push(key, value);
        }
    }

    return (
        <div id='main'>
            <h3>My name: {name}</h3>
            <h3>My nickname: {nickname}</h3>
            <h3>My surname: {surname}</h3>
            <h3>My age: {age}</h3>
            <h3>My rating: {rating}</h3>
            {  arr.map(   (n) => ([<h3>{n}</h3>])    )  }
        </div>
    )
}
