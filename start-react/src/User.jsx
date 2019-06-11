import React from 'react'

export default function User(props) {

    const { userData: { name = 'Anonymous', nickname = 'Anonymous', surname = 'Anonymous', age = 'Unknown', children = 'Unknown' }, rating, } = props;

    let childrenList;

    if (children !== 'Unknown') {
        childrenList = Object.values(children).map((key, values) => ( [<h3>Child {values + 1}: {key}</h3>] ));
    }
    
    return (
        <div id='main'>
            <h3>My name: {name}</h3>
            <h3>My nickname: {nickname}</h3>
            <h3>My surname: {surname}</h3>
            <h3>My age: {age}</h3>
            <h3>My rating: {rating}</h3>
            {childrenList}
        </div>
    )
}
