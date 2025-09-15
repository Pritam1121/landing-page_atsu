import React from 'react';
import featureData from '../data/Features_Data';
const FeatureApp = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {featureData.map((value, index) => (
        <div key={index} className="flex items-center justify-center">
          <div className="grid grid-cols-2 items-center w-full">
            <div>
              <img
                src={value.image}
                alt={value.title}
                className="p-0 w-20px h-auto"
              />
            </div>
            <div>
              <h2 className="text-white w-60">{value.title}</h2>
              <p className="text-gray-500 w-60">{value.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureApp;









// import React from 'react';
// import featureData from '../data/Features_Data';
// const FeatureApp = () => {
//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {featureData.map((val, index) => (
//         <div key={index} className="flex items-center justify-center">
//           <div className='flex'>
//             <img
//               src={val.image}
//               alt={val.title}
//               className="p-0 w-20px h-auto"
//             />
//             <h2 className="text-white w-60">{val.title}</h2>
//             {/* <h2 className="text-white w-60">{val.description}</h2> */}

//           </div>
//           {/* <div>
//             <h2 className="text-white w-60">{val.title}</h2>
//             <p className="text-gray-500 w-60">{val.description}</p>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeatureApp;