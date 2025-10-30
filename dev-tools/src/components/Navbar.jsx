import React from 'react'
import Container from './Container'

function Navbar() {
  return (
    <>
        <Container>
            <div className='bg-black/30 text-white backdrop-blur-2xl h-[60px] fixed top-0 w-7xl z-10 flex justify-start items-center p-2'>
                <div className=' flex justify-between items-center gap-2'>
                    <a href="/">
                    <img src="/focus.png" alt="logo" className='w-[45px] h-[45px] lg:ml-10' />
                    </a>
                    <h1 className='font-medium'>Dev Tools</h1>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Navbar
