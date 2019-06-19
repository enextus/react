import React from "react"

function ContactCard(props) {
    console.log('props = ', props)

    const { contact: { imgUrl = 'None', name = 'Anonymous', phone = 'Unknown', email = 'Unknown', }, } = props;

    return (
        <div className="contact-card">
            <img align="center" src={imgUrl}/>
            <h3><font color="#3AC1EF">▍{name}</font></h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default ContactCard