import React from 'react'

export const BackgroundVideo = ({srcFile,  children }) => {
    return (
      <div className='w-screen  flex justify-center relative    ' style={{backgroundColor:'black'}}>
        <video autoPlay controls loop muted className='w-screen rounded-xl shadowbox ' style={{backgroundPosition:'center', opacity:.6}}  playsInline>
          <source src={srcFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='content'>
          {children}
        </div>
      </div>
    );
  };