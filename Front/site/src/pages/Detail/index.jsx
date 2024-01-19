import React, { useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()
    const [detail,setDetail] = useState([])

    fetch('http://localhost:5000/' +id)
    .then((res) => res.json())
    .then((api) => setDetail(api))
  return (
    <div className='detail'>
        <img src={detail.img} alt="" />
        <div className="write">
            <h1>{detail.name}</h1>
            <p>{detail.desc}</p>
            <h2>$ {detail.price}</h2>
            <button>Add to Cart</button>
        </div>

    </div>
  )
}

export default Detail