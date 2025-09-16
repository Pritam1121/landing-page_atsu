import React, { useState } from 'react';

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="relative flex items-center justify-center bg-black overflow-hidden rounded-xl"
      style={{ width: '300px', height: '200px' }}
    >
      {isPlaying && (
        <iframe
          className="absolute inset-0 rounded-md z-0 muted"
          style={{ width: '300px', height: '200px' }}
          src="https://www.youtube.com/embed/gvuQY6GNigc?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {!isPlaying && (
        <button
          onClick={toggleVideo}
          className="relative z-10 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <span className="absolute w-40 h-40 rounded-full bg-black opacity-10 z-0"></span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-red-500 z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PlayButton;
