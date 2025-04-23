import React, { use } from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import DoctorsBoard from '../components/HomePage/DoctorsBoard'
import StatCounter from '../components/HomePage/StatCounter'
import { useLoaderData } from 'react-router'
import ChangeTitle from '../components/Global/ChangeTitle'

function HomePage() {
  const doctors = useLoaderData();
  return (
    <>
      <ChangeTitle title="Home" />
      <HeroSection />
      <DoctorsBoard doctors={doctors} />
      <StatCounter />
    </>
  )
}

export default HomePage