// // // import React from 'react';
// // // import '../css/Indexing.css'; // Importing CSS for styling
// // // import Header from '../components/header';
// // // import Footer from '../components/footer';

// // // const logos = [
// // //   { id: 1, src: '/images/1.png', alt: 'Logo 1', name: 'World Cat' },
// // //   { id: 2, src: '/images/2.png', alt: 'Logo 2', name: 'Google Scholar' },
// // //   { id: 3, src: '/images/3.png', alt: 'Logo 3', name: 'CiteFactor' },
// // //   { id: 4, src: '/images/4.png', alt: 'Logo 4', name: 'Index Copernicus' },
// // //   { id: 5, src: '/images/5.png', alt: 'Logo 5', name: 'International Scientific Indexing' },
// // //   { id: 6, src: '/images/6.jpg', alt: 'Logo 6', name: 'DRJI' },
// // //   { id: 7, src: '/images/7.png', alt: 'Logo 7', name: 'Root Indexing' },
// // //   { id: 8, src: '/images/8.png', alt: 'Logo 8', name: 'Scientific Journal Impact Factor' },
// // // ];

// // // const Indexing = () => {
// // //   return (
// // //     <>
// // //       <Header />
// // //       <div className="indexing-page">
// // //         <h1 className="indexing-title">Our Indexing Partners</h1>
// // //         <p className="indexing-description">
// // //           Our journal is proudly indexed by renowned partners who ensure the global visibility of our research.
// // //         </p>
// // //         <div className="logo-grid">
// // //           {logos.map((logo) => (
// // //             <div className="logo-item" key={logo.id}>
// // //               <img src={logo.src} alt={logo.alt} />
// // //               <p>{logo.name}</p> {/* Display the name below the logo */}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // // export default Indexing;
// // import React from 'react';
// // import '../css/Indexing.css'; // Importing CSS for styling
// // import Header from '../components/header';
// // import Footer from '../components/footer';

// // const logos = [
// //   { id: 1, src: '/images/1.png'},
// //   { id: 2, src: '/images/2.png'},
// //   { id: 3, src: '/images/3.png'},
// //   { id: 4, src: '/images/4.png'},
// //   { id: 5, src: '/images/5.png'},
// //   { id: 6, src: '/images/6.jpg'},
// //   { id: 7, src: '/images/7.png'},
// //   { id: 8, src: '/images/8.png'},
// //   // Add more logos if needed
// // ];

// // const Indexing = () => {
// //   return (
// //     <>
// //       <Header />
// //       <div className="indexing-page">
// //         <h1 className="indexing-title">Our Indexing Partners</h1>
// //         <p className="indexing-intro">
// //           We are proud to be indexed by these prestigious platforms. Explore the partners that help to increase the visibility and credibility of our journal.
// //         </p>
// //         <div className="logo-grid">
// //           {logos.map((logo) => (
// //             <div className="logo-item" key={logo.id}>
// //               <img src={logo.src} alt={logo.alt} />
// //               <h3>{logo.name}</h3>
// //               <p className="logo-description">{logo.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Indexing;
// import React from 'react';
// import '../css/Indexing.css'; // Importing CSS for styling
// import Header from '../components/header';
// import Footer from '../components/footer';

// const logos = [
//   { id: 1, src: '/images/1.png', alt: 'Logo 1'},
//   { id: 2, src: '/images/2.png', alt: 'Logo 2'},
//   { id: 3, src: '/images/3.png', alt: 'Logo 3'},
//   { id: 4, src: '/images/4.png', alt: 'Logo 4'},
//   { id: 5, src: '/images/5.png', alt: 'Logo 5'},
//   { id: 6, src: '/images/6.jpg', alt: 'Logo 6'},
//   { id: 7, src: '/images/7.png', alt: 'Logo 7'},
//   { id: 8, src: '/images/8.png', alt: 'Logo 8'},
// ];

// const Indexing = () => {
//   return (
//     <>
//       <Header />
//       <div className="indexing-page">
//         <h1 className="indexing-title">Our Indexing Partners</h1>
//         <p className="indexing-intro">
//           We are proud to be indexed by these prestigious platforms. Explore the partners that help to increase the visibility and credibility of our journal.
//         </p>
//         <div className="logo-grid">
//           {logos.map((logo) => (
//             <div className="logo-item" key={logo.id}>
//               <img src={logo.src} alt={logo.alt} />
//               <h3>{logo.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Indexing;
import React from 'react';
import '../css/Indexing.css'; // Importing CSS for styling
import Header from '../components/header';
import Footer from '../components/footer';

const logos = [
  { id: 1, src: '/images/1.png', alt: 'Logo 1'},
  { id: 2, src: '/images/2.png', alt: 'Logo 2'},
  { id: 3, src: '/images/3.png', alt: 'Logo 3'},
  { id: 4, src: '/images/4.png', alt: 'Logo 4'},
  { id: 5, src: '/images/5.png', alt: 'Logo 5'},
  { id: 6, src: '/images/6.jpg', alt: 'Logo 6'},
  { id: 7, src: '/images/7.png', alt: 'Logo 7'},
  { id: 8, src: '/images/8.png', alt: 'Logo 8'},
];

const Indexing = () => {
  return (
    <>
      <Header />
      <div className="indexing-page">
  <h1 className="indexing-title">Our Indexing Partners</h1>
  <p className="indexing-intro">
    We are proud to be indexed by these prestigious platforms. Explore the partners that help to increase the visibility and credibility of our journal.
  </p>
  <div className="logo-grid">
    {logos.map((logo) => (
      <div className="logo-item" key={logo.id}>
        <img src={logo.src} alt={logo.alt} className="logo-image" />
        <h3>{logo.name}</h3>
        <p className="logo-description">{logo.description}</p>
      </div>
    ))}
  </div>
  <div className="indexing-footer">
    <h2>Why Indexing Matters?</h2>
    <p>
      Indexing is crucial for the visibility and credibility of academic journals. It allows researchers to easily find our publications, thus increasing citation rates and enhancing the impact of our research. We are committed to maintaining high standards of quality to remain indexed by these prestigious platforms.
    </p>
    <h2>Join Us in Our Journey!</h2>
    <p>
      If you're a researcher looking to publish, we invite you to submit your work to our journal. Let’s work together to advance knowledge and contribute to the academic community.
    </p>
  </div>
</div>

      <Footer />
    </>
  );
}

export default Indexing;
