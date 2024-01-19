import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Products = () => {
  const [data, setData] = useState([])
  const {addBasket} = useContext(BasketContext)
  const {addWishlist,checkWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.json())
      .then((api) => setData(api))
  }, [])

  return (
    <div className='products'>
      <p>OUR MENU</p>
      <h1>Discover Our Exclusive Menu</h1>
      <div className="buttons">
        <button><i class="fa-solid fa-pizza-slice"></i>Main</button>
        <button><i class="fa-solid fa-utensils"></i>Desert</button>
        <button><i class="fa-solid fa-martini-glass-citrus"></i>Main</button>
      </div>
      <div className="cards">
        {data.map(item => (
          <div className="card">
            <img src={item.img} alt="" />
            <div className="big">
              <div className="desc">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="cart">
             <Link to={`/${item._id}`}> <i class="fa-regular fa-eye"></i></Link>
                <i class={`${checkWishlist(item) ? 'fa-solid fa-heart': 'fa-regular fa-heart'}`} onClick={()=>addWishlist(item)}></i>
                <button onClick={()=>addBasket(item)}>Cart</button>
              </div>
            </div>
            <h1>$ {item.price}</h1>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Products