import FAQCard from '@/components/UI/FAQCard'
import { faqs } from '@/data/FAQ/data'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <FAQCard faqs={faqs}/>
    </div>
  )
}

export default page
