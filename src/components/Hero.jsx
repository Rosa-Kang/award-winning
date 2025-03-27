import React, { useState,  useRef } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) +1
  
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    console.log(upcomingVideoIndex, currentIndex);
    setCurrentIndex(upcomingVideoIndex);
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
          <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg bg-blue-75">
                <div 
                  onClick={handleMiniVideoClick}
                  className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100">
                    <video 
                      ref = {nextVideoRef}
                      src = {getVideoSrc(upcomingVideoIndex)}
                      loop
                      muted
                      id='current-video'
                      className='size-64 origin-center scale-150 object-cover object-center'
                      onLoadedData = {handleVideoLoad}
                    />
                </div>
            </div>
          </div>

          <vide
            id='next-video'
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
          />

          <video 
            id=''
            className="absolute left-0 top-0 size-full object-cover object-center"
            src={getVideoSrc(currentIndex === totalVideos -1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
          >

          </video>
      </div>
    </div>
  )
}

export default Hero