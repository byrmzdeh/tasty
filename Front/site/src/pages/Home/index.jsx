import React from 'react'
import SliderSlick from '../../components/Slider'
import Chef from '../../components/Chef'
import Products from '../../components/Products'
import CardSlide from '../../components/CardSlider'
import Blog from '../../components/Blog'

const Home = () => {
  return (
    <div>
        <SliderSlick/>
        <Chef/>
        <Products/>
        <CardSlide/>
        <Blog/>
        
    </div>
  )
}

export default Home