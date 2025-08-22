import React from 'react'
 
import Explore from '../UI/ExploreCard'
import { Bloginsights } from '@/data/Explore/data'
import HeroSection from './Hero'

const Blog = () => {
  return (
    <div>
      <HeroSection/>
      <Explore insights={Bloginsights} heading="Recent News Post"/>
    </div>
  )
}

export default Blog
