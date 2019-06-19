import React from "react"

function Product(props) {

    const { product: { id, name, price, description } } = props

    return (
        <div>
            <h2><font color="#3AC1EF">{id}. {name}</font></h2>
            <p>{price.toLocaleString("de-DE", { style: "currency", currency: "GBP" })} - {description}</p>
        </div>
    )
}

export default Product