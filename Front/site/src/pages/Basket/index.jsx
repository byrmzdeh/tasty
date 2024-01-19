import React, { useContext } from 'react'
import './style.scss'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
    const { decreaseCount, increaseCount, remove, basket } = useContext(BasketContext)
    return (
        <div className='basket'>
            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Delete</th>

                </tr>
                {basket.map(item => (
                    <tr>
                        <td><img width={80} src={item.img} alt="" /></td>
                        <td>{item.name}</td>
                        <td>$ {item.price*item.count}</td>
                        <td>
                        <i class="fa-solid fa-caret-up" onClick={()=>increaseCount(item)}></i>
                        <h2>{item.count}</h2>
                        <i class="fa-solid fa-caret-down" onClick={()=>decreaseCount(item)}></i>
                        </td>
                        <td onClick={() => remove(item)}><button>X</button></td>

                    </tr>
                ))}


            </table>
        </div>
    )
}

export default Basket