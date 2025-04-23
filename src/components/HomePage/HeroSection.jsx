import React from 'react'
import banner from '../../assets/images/banner-img-1.png'

function HeroSection() {
  return (
    <div className='hero-section container w-[90%] mx-auto mt-10'>
      <div className="hero-text text-center w-[70%] mx-auto">
        <h1 className='text-5xl font-bold'>Dependable Care, Backed by Trusted Professionals.</h1>
        <p className='py-5'>An ideal online health portal provides seamless access to medical expertise, personalized care, and reliable health resources. It empowers users with tools to manage their health efficiently, ensuring convenience, privacy, and trust.</p>
      </div>
      <div className="hero-form w-[60%] mx-auto">
        <input className='border h-10 px-2 mr-3 bg-white w-[80%] rounded-3xl' type="text" placeholder='Search Any Doctor' />
        <button className='bg-primary h-10 rounded-3xl text-white px-4 py-2'>Search Now</button>
      </div>
      <div className="hero-img px-10 w-[90%] mx-auto flex justify-between mt-5">
        <img className='inline w-[49%] rounded-md shadow-sm' src={banner} alt="banner image" />
        <img className='inline w-[49%] rounded-md shadow-sm' src={banner} alt="banner image" />
      </div>
    </div>
  )
}

export default HeroSection