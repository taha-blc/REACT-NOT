import React from 'react'

const Product = ({ product, price }) => {
    // console.log(props.product)
    return (
        <>

            <div>
                <div>İsim : {product}</div>
                <div>Fiyat : {price} TL</div>
            </div>
        </>
    )
}

export default Product