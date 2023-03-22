import React, { useEffect, useRef } from 'react'

const Video = ({ page, data, inlineStyle }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.pause();
  }, [page]);

  return (
    <div style={inlineStyle} className="containerVideo page">
      <video ref={videoRef} src={data.video} controls autoplay muted>
        <track default kind="captions" srclang="en" src={data.video} />
        <track default kind="descriptions" srclang="en" src={data.video} />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  )
}

export default Video