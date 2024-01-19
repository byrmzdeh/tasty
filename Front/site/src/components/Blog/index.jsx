import React from 'react'
import './style.scss'

const Blog = () => {
    return (
        <div className='blog'>
            <p>BLOG</p>
            <h1>Recent Blog</h1>
            <div className="cards">
                <div className="card">
                    <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg" alt="" />
                    <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
                    <h3>Even the all-powerful Pointing has no control about the blind texts</h3>
                    <p>Read more</p>
                </div>

                <div className="card">
                    <img src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg" alt="" />
                    <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
                    <h3>Even the all-powerful Pointing has no control about the blind texts</h3>
                    <p>Read more</p>
                </div>

                <div className="card">
                    <img src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg" alt="" />
                    <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
                    <h3>Even the all-powerful Pointing has no control about the blind texts</h3>
                    <p>Read more</p>
                </div>
            </div>
        </div>
    )
}

export default Blog