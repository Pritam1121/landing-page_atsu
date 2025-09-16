import { useState } from 'react';

function CircularVideoToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div
      className="relative flex items-center justify-center bg-black overflow-hidden"
      style={{ width: '300px', height: '300px', borderRadius: '50%' }}
    >
      {isPlaying ? (
        <video
          className="absolute inset-0 z-0 cursor-pointer"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          autoPlay
          loop
          muted
          playsInline
          onClick={toggleVideo}
        >
          <source
            src="https://media.istockphoto.com/id/1469875556/nl/video/4k-abstract-lines-background-loopable.mp4?s=mp4-640x640-is&k=20&c=A3BJ3DgcTPQfolWfj2BYRm0Xrw0ho3QZM8c0XvEJQBo="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
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
}

export default CircularVideoToggle;
