import React from 'react'

function Container({children}) {
  return (
    <>
        <div className={`bg-white max-w-7xl w-full mx-auto relative`}>
            {children}
        </div>
    </>
  )
}

export default Container
