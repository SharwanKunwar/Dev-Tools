import React from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <div className='bg-gray-300'>
        <Container>
          <Navbar/>
          <Outlet/>
        </Container>
      </div>
    </>
  )
}

export default App
