import React from 'react'
import BannerComp from '../Hero/BannerComp'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import OurTeam from '../OurTeam/OurTeam'
import { Team } from '../OurTeam/Team'

const HomePage = () => {
  return (
    <main>
      <BannerComp />
      <OurTeam />
      <Team />
    </main>
  )
}

export default HomePage
