import React from 'react'

function SiteCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className='mt-2'>{props.des}</p>
      <button className=' px-10 py-1 mt-3 rounded-md bg-indigo-400'>Visit Site</button>
    </div>
  )
}

export default SiteCard
