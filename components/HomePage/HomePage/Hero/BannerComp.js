import React from 'react'
import { Carousel } from 'antd'
import Hero from './Hero'
import Hero1 from './Hero1'
import Hero2 from './Hero2'

const BannerComp = () => {
  return (
    <Carousel autoplay effect='fade'>
      <div>
        <Hero />
      </div>
      <div>
        <Hero1 />
      </div>
      <div>
        <Hero2 />
      </div>
    </Carousel>
  )
}

export default BannerComp
