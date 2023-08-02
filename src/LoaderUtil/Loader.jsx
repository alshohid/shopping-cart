import React from 'react'

const Loader = () => {
  return (
    <div className="container h-screen  flex items-center bg-white ">
      <span className="loading loading-ring ring-offset-orange-600 bg-red-600 h-20 loading-lg mx-auto"></span>
    </div>
  )
}

export default Loader
