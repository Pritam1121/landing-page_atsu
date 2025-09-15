// import React, { useState } from 'react';

// const PlayButton = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleVideo = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="relative w-full h-[400px] flex items-center justify-center bg-black overflow-hidden rounded-xl">
//       {/* Video iframe */}
//       {isPlaying && (
//         <iframe
//           className="absolute top-0 left-0 w-50% h-auto z-0"
//           src="https://www.youtube.com/embed/gvuQY6GNigc?autoplay=1&mute=1"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//         ></iframe>
//       )}

//       {/* Play Button */}
//       <button
//         onClick={toggleVideo}
//         className="relative z-10 w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
//       >
//         {/* Halo effect */}
//         <span className="absolute w-36 h-36 rounded-full bg-black opacity-10 z-0"></span>

//         {/* Icon */}
//         {isPlaying ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-8 h-8 text-red-500 z-10"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M6 6h4v12H6zm8 0h4v12h-4z" />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-8 h-8 text-red-500 z-10"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M8 5v14l11-7z" />
//           </svg>
//         )}
//       </button>
//     </div>
//   );
// };

// export default PlayButton;


import React, { useState } from 'react';

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(true); 
  };

  return (
    <div className="relative w-1/2 h-[200px] flex items-center justify-center bg-black overflow-hidden rounded-xl">
 
      {isPlaying && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-md z-0"
          src="https://www.youtube.com/embed/gvuQY6GNigc?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* Play Button – only visible before video starts */}
      {!isPlaying && (
        <button
          onClick={toggleVideo}
          className="relative z-10 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          {/* Halo effect */}
          <span className="absolute w-40 h-40 rounded-full bg-black opacity-10 z-0"></span>

          {/* Play icon */}
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
