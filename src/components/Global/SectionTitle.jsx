import React from 'react'

function SectionTitle({title, subtitle}) {
  return (
    <div className='section-title text-center py-10'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className=''>{subtitle}</p>
    </div>
  )
}

export default SectionTitle