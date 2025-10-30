import React from 'react'

function Container({children}) {
  return (
    <>
        <div className={`bg-white w-full mx-auto relative`}>
            {children}
        </div>
    </>
  )
}

export default Container
