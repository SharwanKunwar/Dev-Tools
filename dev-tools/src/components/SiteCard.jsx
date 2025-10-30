import React from 'react'
import { Link } from 'react-router-dom'

function SiteCard(props) {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex justify-start items-center mb-2 gap-3'>
        <img src={props.logo} alt="img" className='w-9 h-9'/>
        <h1>{props.title}</h1>
      </div>
      <p className='mt-2 text-neutral-200'>{props.des}</p>
      <a target='_blank' href={props.link}>
          <button className=' w-full h-[33px] my-5 bg-linear-to-r from-indigo-400/30 hover:from-indigo-400 hover:to-orange-400  to-orange-400/30 via-pink-400/30 rounded-md border border-white/30 bg-white/30 backdrop-blur-2xl'>Visit Site</button>
      </a>
    </div>
  )
}

export default SiteCard
