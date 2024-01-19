import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import './style.scss'

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext)
    const {addBasket} = useContext(BasketContext)
    return (
        <div className='wishlist'>
            {wishlist.map(item => (
                <div className="card">
                    <img src={item.img} alt="" />
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <button onClick={()=>addBasket(item)}>Add to Cart</button>
                </div>
            ))}

        </div>
    )
}

export default Wishlist