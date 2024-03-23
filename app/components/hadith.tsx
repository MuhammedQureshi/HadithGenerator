'use client'
import React from 'react'


const Hadith = ({data}:any) => {

  return (
    <div className='pt-[5rem] pb-[5rem]'>
      <div className='px-5 text-2xl tracking-normal'>
        <h1>{data.header}</h1>
      </div>
      <div className=' pt-10 px-8 text-3xl tracking-normal leading-[50px]'>
        <p>{data.hadith_english}</p>
      </div>
      <div className='flex justify-end pt-10 px-8 text-3xl tracking-normal leading-[50px]'>
        <p>({data.refno})</p>
      </div>
    </div>
  )
}

export default Hadith