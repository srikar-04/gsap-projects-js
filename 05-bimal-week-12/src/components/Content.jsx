import React from 'react'
import ContentCard from './ContentCard'

function Content() {
  return (
    <section className='flex flex-col py-6 px-4 gap-6 md:gap-12 items-center justify-between max-full md:py-16 md:px-22 md:mx-6 bg-orange-50 rounded-4xl'>

      <div className='flex flex-col gap-2 items-center max-w-sm md:max-w-md text-center'>
        <h1 className='text-2xl font-bold text-orange-950 lg:text-4xl tracking-tight'>Cancerous Products</h1>
        <div className='text-orange-950'>Discover an extensive selection of highly cancerous products designed specifically for you!</div>
      </div>

      <div className=''>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>

    </section>
  )
}

export default Content