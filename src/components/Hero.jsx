import React, { useState } from 'react'

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(initialState= 1);
  const [clicked, setClicked] = useState(initialState= false);
  const [loading, setLoading] = useState(initialState=true);

  const totalVideo = 4;
  const nextVdRef = useRef(NULL);
  
  const handleMiniVdClick = () => {
  }
  
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
             I am Hero
          </div>
      </div>
    </div>
  )
}

export default Hero