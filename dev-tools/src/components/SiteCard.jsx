import React from 'react'
import { Link } from 'react-router-dom'

function SiteCard(props) {
  return (
    <div className='flex flex-col'>
      {/* top title  */}
      <div className='flex justify-start items-center mb-2 gap-3 h-[10%]'>
        <img src={props.logo} alt="img" className='w-9 h-9 rounded-md'/>
        <h1 className='font-bold text-lg'>{props.title}</h1>
      </div>

      {/* description  */}
      <div className="h-[170px]">
        <p className="mt-2 text-neutral-200 font-medium">{props.des}</p>
      </div>

    {/* button  */}
      <div className=' w-full h-[40%] flex justify-center items-center'>
        <a target='_blank' href={props.link} className='w-full'>
          <button className=' w-full  h-[33px] bg-linear-to-r from-indigo-400/30 hover:from-indigo-400 hover:to-orange-400  to-orange-400/30 via-pink-400/30 rounded-md border border-white/30 bg-white/30 backdrop-blur-2xl'>Visit Site</button>
      </a>
      </div>
    </div>
  )
}

export default SiteCard
