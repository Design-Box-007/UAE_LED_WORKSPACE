import FAQCard from '@/components/UI/FAQCard'
import { faqs } from '@/data/FAQ/data'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
       <FAQCard faqs={faqs} title="Frequently Asked Questions" />
    </div>
  )
}

export default page
