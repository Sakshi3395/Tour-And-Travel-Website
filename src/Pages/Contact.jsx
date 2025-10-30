import React from 'react'
import ContactComp from '../Components/ContactComp.jsx'
import TopBanner from '../Components/TopBanner.jsx'
import topbanner4 from '../assets/topbanner4.jpg'

const Contact = () => {
  return (
    <>
  <TopBanner text='Contact' image={topbanner4}/>
      <ContactComp/>
    </>
  )
}

export default Contact
