// import React, { useState, useEffect } from 'react';

// interface CarouselItem {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
// }

// const carouselData: CarouselItem[] = [
//   {
//     id: 1,
//     title: "Innovating the Future",
//     subtitle: "Embracing cutting-edge technology for tomorrow.",
//     description: "We specialize in creating innovative solutions that push the boundaries of technology and make an impact on the future.",
//   },
//   {
//     id: 2,
//     title: "Tailored Solutions",
//     subtitle: "Providing custom software solutions for your business.",
//     description: "Our team works closely with clients to deliver custom software solutions that meet their specific business needs and objectives.",
//   },
//   {
//     id: 3,
//     title: "Collaborative Excellence",
//     subtitle: "Working together for optimal outcomes.",
//     description: "We believe in collaboration, teamwork, and building long-lasting partnerships that lead to success for all parties involved.",
//   },
//   {
//     id: 4,
//     title: "Business Success",
//     subtitle: "Helping your business reach new heights.",
//     description: "We provide innovative solutions that help businesses grow, succeed, and thrive in a competitive market.",
//   },
// ];

// const Carousal: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change slides every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="relative w-full max-w-3xl overflow-hidden">
//         <div className="relative flex justify-center items-center">
//           {/* Card Display */}
//           <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
//             <h2 className="text-2xl font-bold text-gray-900">{carouselData[currentIndex].title}</h2>
//             <p className="text-lg text-gray-600 mt-2">{carouselData[currentIndex].subtitle}</p>
//             <p className="text-base text-gray-500 mt-4">{carouselData[currentIndex].description}</p>
//             <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousal;



// import React, { useState, useEffect } from 'react';

// interface CarouselItem {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
// }

// const carouselData: CarouselItem[] = [
//   {
//     id: 1,
//     title: "Innovating the Future",
//     subtitle: "Embracing cutting-edge technology for tomorrow.",
//     description: "We specialize in creating innovative solutions that push the boundaries of technology and make an impact on the future.",
//   },
//   {
//     id: 2,
//     title: "Tailored Solutions",
//     subtitle: "Providing custom software solutions for your business.",
//     description: "Our team works closely with clients to deliver custom software solutions that meet their specific business needs and objectives.",
//   },
//   {
//     id: 3,
//     title: "Collaborative Excellence",
//     subtitle: "Working together for optimal outcomes.",
//     description: "We believe in collaboration, teamwork, and building long-lasting partnerships that lead to success for all parties involved.",
//   },
//   {
//     id: 4,
//     title: "Business Success",
//     subtitle: "Helping your business reach new heights.",
//     description: "We provide innovative solutions that help businesses grow, succeed, and thrive in a competitive market.",
//   },
// ];

// const Carousal: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change slides every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="relative w-full h-full overflow-hidden">
//         <div className="relative flex justify-center items-center w-full h-full">
//           {/* Card Display - Expanded horizontally */}
//           <div className="bg-white shadow-lg rounded-lg w-full max-w-screen-lg p-6">
//             <h2 className="text-3xl font-bold text-gray-900">{carouselData[currentIndex].title}</h2>
//             <p className="text-xl text-gray-600 mt-2">{carouselData[currentIndex].subtitle}</p>
//             <p className="text-lg text-gray-500 mt-4">{carouselData[currentIndex].description}</p>
//             <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousal;



// import React, { useState, useEffect } from 'react';

// interface CarouselItem {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
// }

// const carouselData: CarouselItem[] = [
//   {
//     id: 1,
//     title: "Innovating the Future",
//     subtitle: "Embracing cutting-edge technology for tomorrow.",
//     description: "We specialize in creating innovative solutions that push the boundaries of technology and make an impact on the future.",
//   },
//   {
//     id: 2,
//     title: "Tailored Solutions",
//     subtitle: "Providing custom software solutions for your business.",
//     description: "Our team works closely with clients to deliver custom software solutions that meet their specific business needs and objectives.",
//   },
//   {
//     id: 3,
//     title: "Collaborative Excellence",
//     subtitle: "Working together for optimal outcomes.",
//     description: "We believe in collaboration, teamwork, and building long-lasting partnerships that lead to success for all parties involved.",
//   },
//   {
//     id: 4,
//     title: "Business Success",
//     subtitle: "Helping your business reach new heights.",
//     description: "We provide innovative solutions that help businesses grow, succeed, and thrive in a competitive market.",
//   },
// ];

// const Carousal: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change slides every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="relative w-full h-full overflow-hidden">
//         <div className="relative flex justify-center items-center w-full h-full">
//           {/* Card Display - Expanded horizontally with border and smaller text */}
//           <div className="bg-white border border-gray-300 shadow-lg rounded-lg w-full max-w-screen-lg p-6">
//             <h2 className="text-xl font-bold text-gray-900">{carouselData[currentIndex].title}</h2>
//             <p className="text-sm text-gray-600 mt-2">{carouselData[currentIndex].subtitle}</p>
//             <p className="text-sm text-gray-500 mt-4">{carouselData[currentIndex].description}</p>
//             <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousal;





import React, { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Innovating the Future",
    subtitle: "Embracing cutting-edge technology for tomorrow.",
    description: "We specialize in creating innovative solutions that push the boundaries of technology and make an impact on the future.",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    subtitle: "Providing custom software solutions for your business.",
    description: "Our team works closely with clients to deliver custom software solutions that meet their specific business needs and objectives.",
  },
  {
    id: 3,
    title: "Collaborative Excellence",
    subtitle: "Working together for optimal outcomes.",
    description: "We believe in collaboration, teamwork, and building long-lasting partnerships that lead to success for all parties involved.",
  },
  {
    id: 4,
    title: "Business Success",
    subtitle: "Helping your business reach new heights.",
    description: "We provide innovative solutions that help businesses grow, succeed, and thrive in a competitive market.",
  },
];

const Carousal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      {/* Heading above the carousel */}
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore the innovative solutions we offer for your business needs.
        </p>
      </div>
      
      {/* Carousel Section */}
      <div className="relative w-full max-w-screen-lg overflow-hidden">
        <div className="relative flex justify-center items-center w-full h-full">
          {/* Card Display */}
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900">{carouselData[currentIndex].title}</h2>
            <p className="text-sm text-gray-600 mt-2">{carouselData[currentIndex].subtitle}</p>
            <p className="text-sm text-gray-500 mt-4">{carouselData[currentIndex].description}</p>
            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
