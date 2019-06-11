import React from 'react'

// export default function User(props) {

//     console.log(props);

//     return (
//         <div>
//             <h3>My Name is {props.userData.name}</h3>
//             <h3>My surname is {props.userData.surname}</h3>
//             <h3>My surname is {props.userData.age}</h3>
//             <h3>My surname is {props.rating}</h3>
//         </div>
//     )
// }

export default function User(props) {

    console.log(props);

    const { userData: { name = 'Anonymous', othername = 'Anonymous', surname = 'Anonymous', age = '29' }, rating } = props;

    return (
        <div>
            <h3>My Name is {name}</h3>
            <h3>My othername is {othername}</h3>
            <h3>My surname is {surname}</h3>
            <h3>My surname is {age}</h3>
            <h3>My rating is {rating}</h3>
        </div>
    )
}
