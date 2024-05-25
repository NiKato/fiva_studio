// // src/components/Geolocation.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Geolocation = () => {
//   const [location, setLocation] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://ipapi.co/json/')
//       .then(response => {
//         const country = response.data.country;

//         if (country === 'FR') {
//           setLocation('France');
//         } else if (country === 'RS') {
//           setLocation('Serbia');
//         } else {
//           setLocation('Unknown');
//         }
//       })
//       .catch(error => setError('Error fetching location data'));
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to our website!</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div>
//           {location === 'France' && <p>Bienvenue sur notre site!</p>}
//           {location === 'Serbia' && <p>Добродошли на наш вебсајт!</p>}
//           {location === 'Unknown' && <p>Welcome to our site!</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Geolocation;
