import React from 'react';

const BroadcastViewVideo = (props) => {
  return (
    <iframe
      width="204" height="126"
      src={`https://www.youtube.com/embed/live_stream?channel=${props.video}&autoplay=1`}
      frameBorder="0"
      allowFullScreen>
    </iframe>
  )
}

export default BroadcastViewVideo;