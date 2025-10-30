import React from 'react'
import TopBanner from '../Components/TopBanner'
import topbanner3 from '../assets/topbanner3.jpg'
import GalleryComp from '../Components/GalleryComp'

const Gallery = () => {
  return (
    <>
  <TopBanner text='Gallery' image={topbanner3}/>
      <GalleryComp/>
    </>
  )
}

export default Gallery
