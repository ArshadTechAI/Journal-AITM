// import React, { useState, useEffect } from 'react';
// import { db } from "../backend/firebase";
// import { collection, getDocs, doc, getDoc, query } from "firebase/firestore/lite";
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import './Current.css';

// function Current() {

//   // for current volume and issue
//   const [currentData, setCurrentData] = useState(null);

//   let volume = '';
//   let issue = '';

//   useEffect(() => {
//       const fetchData = async () => {
//       // Fetch current document
//       const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//       const currentData = currentDoc.data();
//       volume = currentData.volume;
//       issue = currentData.issue;
//       // console.log(currentData);
//       setCurrentData(currentData);
//       };
//       fetchData();
//   }, []);

//   const formatDateRange = (issueId) => {
//       const dateRanges = {
//       'Issue1': 'January-March 2024',
//       'Issue2': 'April-June 2024',
//       'Issue3': 'July-September 2024',
//       'Issue4': 'Octorber-December 2024',
//       // Add more mappings here
//       };
//       return dateRanges[issueId] || 'Unknown Date Range';
//   };

//   return (

//     <>
//       <Header/>

//       <div style={{height: '30px'}}></div>

//       <div style={{height: '30px'}}></div>
//       <div>
//         <h1> Explore the Latest Research</h1>
//         <p>The *Current Issue* of <b>IJESTM</b> brings together a diverse range of studies and research articles from leading experts in the field. This issue offers fresh perspectives, innovative methodologies, and groundbreaking discoveries that contribute to the advancement of knowledge in various domains. Our goal is to provide readers with timely, relevant research that addresses both emerging challenges and long-standing questions. Each article in this issue has been carefully selected through a rigorous peer-review process to ensure it meets the highest standards of academic excellence.</p>
//       </div>

//         <h3>Key Highlights of the Current Issue: </h3>
//         <ul>
//         <li><b>Innovative Research :</b>Learn about the latest trends and breakthroughs in [specific field], pushing the boundaries of what's possible.
//         </li>
//         <li><b>Global Perspectives :</b>Discover research from scholars worldwide, providing a global outlook on issues ranging from all the topics.</li>
//         <li><b>Multidisciplinary Focus : </b>The articles span multiple disciplines, offering insights that can apply across various fields of study.</li>

//       </ul>

//         <h3>About the Current Issue</h3>

//       <p>At <b>IJESTM </b>, we are committed to publishing high-quality, peer-reviewed research that advances knowledge across various disciplines. Each issue reflects our dedication to promoting innovative and impactful research that addresses contemporary challenges and contributes to academic and scientific progress.
//       <br />

//       In this issue, we present a diverse range of studies and articles from researchers around the world. These works explore both established fields and emerging trends, offering readers the opportunity to engage with the latest discoveries, methodologies, and perspectives
//       </p>

//         <h3>What You’ll Find in This Issue: </h3>
//         <ul>
//           <li><b>Cutting-Edge Research :</b>This issue showcases groundbreaking studies that push the boundaries of knowledge in their respective fields.</li>
//           <li><b>Interdisciplinary Insights :</b> Our journal encourages interdisciplinary research, and this issue is no exception, featuring papers that bridge multiple areas of study.</li>
//           <li><b>Global Contributions :</b>Researchers from diverse institutions and regions contribute to each issue, ensuring a rich and varied selection of articles.</li>
//           <li><b>Practical Applications :</b>Many of the articles offer insights that can be applied in real-world contexts, providing value beyond academia.</li>

//           <p>Whether you are a researcher, practitioner, or student, we hope this issue provides you with valuable insights and sparks further exploration in your area of interest. Our carefully curated articles are designed to present the latest advancements, thought-provoking discussions, and innovative solutions that address both emerging trends and longstanding challenges in the field. We encourage you to delve into the diverse perspectives and methodologies showcased here, which have been contributed by leading experts and passionate scholars from around the world. As you engage with this content, we hope it not only broadens your knowledge but also inspires new ideas and collaboration within the academic and professional communities.</p>
//         </ul>

//       <center>
//         <h1>
//         Current
//         </h1>
//       </center>
//       <div style={{height: '30px'}}></div>
//       <Container fluid className='current-issue-banner'>
//     <h1 style={{ color: 'white' }}><b>Current Issue</b></h1>
//     <h3 style={{ color: 'white' }}>Volume {currentData != null ? currentData.volume : ''}, Issue {currentData != null ? currentData.issue : ''}</h3>
//     <h3 style={{ color: 'white' }}>{currentData != null ? formatDateRange('Issue ' + currentData.issue) : ''}</h3>

//     <hr style={{ width: '50%', margin: '50px 0', borderColor: 'white' }} />

//     <Button
//         style={{
//             backgroundColor: '#0085FF',
//             padding: '10px 30px',
//             borderRadius: '50px',
//             border: '1px solid white',
//             cursor: 'pointer',
//             color: 'white', // Button text color
//         }}
//     >
//         Submit Paper
//     </Button>
// </Container>

//       <h3>How to Engage with the Content:</h3>
//       <ul>
//         <li><b>Read Full Articles :</b>Each research paper is available for full access. Simply click on the article title to view the full text or download it in PDF format.</li>
//         <li><b>Stay Updated :</b>Subscribe to our newsletter to receive updates on new issues, featured articles, and special collections.</li>
//         <li><b>Submit Your Work :</b> If you are interested in contributing to future issues, visit our <span style={{ color: '#005b8c' }}>Submission Guidelines </span>

//         learn more about how you can share your research with our audience.</li>
//       </ul>

//       <Footer/>
//     </>
//   )
// }

// export default Current

// import React, { useState, useEffect } from 'react';
// import { db } from "../backend/firebase";
// import { collection, getDocs, doc, getDoc, query } from "firebase/firestore/lite";
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import Header from '../components/header';
// import Footer from '../components/footer';

// function Current() {

//   // for current volume and issue
//   const [currentData, setCurrentData] = useState(null);

//   let volume = '';
//   let issue = '';

//   useEffect(() => {
//       const fetchData = async () => {
//         const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//         const currentData = currentDoc.data();
//         volume = currentData.volume;
//         issue = currentData.issue;
//         setCurrentData(currentData);
//       };
//       fetchData();
//   }, []);

//   const formatDateRange = (issueId) => {
//       const dateRanges = {
//         'Issue1': 'January-March 2024',
//         'Issue2': 'April-June 2024',
//         'Issue3': 'July-September 2024',
//         'Issue4': 'October-December 2024',
//       };
//       return dateRanges[issueId] || 'Unknown Date Range';
//   };

//   return (
//     <>
//       <Header />

//       <Container fluid className="content-container mt-5">
//         <Row>
//           <Col lg={15} className="text-center">
//             <h1 className="main-title">Explore the Latest Research</h1>
//             <p className="intro-text">
//               The <strong>Current Issue</strong> of <strong>IJESTM</strong> brings together a diverse range of studies and research articles
//               from leading experts in the field. This issue offers fresh perspectives, innovative methodologies, and groundbreaking discoveries
//               that contribute to the advancement of knowledge in various domains. Our goal is to provide readers with timely, relevant research
//               that addresses both emerging challenges and long-standing questions. Each article in this issue has been carefully selected
//               through a rigorous peer-review process to ensure it meets the highest standards of academic excellence.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">Key Highlights of the Current Issue:</h3>
//             <ul className="highlight-list">
//               <li><strong>Innovative Research:</strong> Learn about the latest trends and breakthroughs in [specific field], pushing the boundaries of what's possible.</li>
//               <li><strong>Global Perspectives:</strong> Discover research from scholars worldwide, providing a global outlook on issues ranging from all the topics.</li>
//               <li><strong>Multidisciplinary Focus:</strong> The articles span multiple disciplines, offering insights that can apply across various fields of study.</li>
//             </ul>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">About the Current Issue</h3>
//             <p className="about-text">
//               At <strong>IJESTM</strong>, we are committed to publishing high-quality, peer-reviewed research that advances knowledge across various disciplines.
//               Each issue reflects our dedication to promoting innovative and impactful research that addresses contemporary challenges and contributes to academic
//               and scientific progress.
//               <br /><br />
//               In this issue, we present a diverse range of studies and articles from researchers around the world. These works explore both established fields
//               and emerging trends, offering readers the opportunity to engage with the latest discoveries, methodologies, and perspectives.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">What You’ll Find in This Issue:</h3>
//             <ul className="highlight-list">
//               <li><strong>Cutting-Edge Research:</strong> This issue showcases groundbreaking studies that push the boundaries of knowledge in their respective fields.</li>
//               <li><strong>Interdisciplinary Insights:</strong> Our journal encourages interdisciplinary research, and this issue is no exception, featuring papers that bridge multiple areas of study.</li>
//               <li><strong>Global Contributions:</strong> Researchers from diverse institutions and regions contribute to each issue, ensuring a rich and varied selection of articles.</li>
//               <li><strong>Practical Applications:</strong> Many of the articles offer insights that can be applied in real-world contexts, providing value beyond academia.</li>
//             </ul>
//             <p className="about-text">
//               Whether you are a researcher, practitioner, or student, we hope this issue provides you with valuable insights and sparks further exploration in your
//               area of interest. Our carefully curated articles are designed to present the latest advancements, thought-provoking discussions, and innovative solutions
//               that address both emerging trends and longstanding challenges in the field.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-5 text-center">
//           <Col>
//             <Container fluid className="current-issue-banner">
//               <h1 className="banner-title">Current Issue</h1>
//               <h3 className="banner-volume">Volume {currentData ? currentData.volume : ''}, Issue {currentData ? currentData.issue : ''}</h3>
//               <h3 className="banner-date">{currentData ? formatDateRange('Issue' + currentData.issue) : ''}</h3>

//               <Button className="submit-btn">
//                 Submit Paper
//               </Button>
//             </Container>
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col lg={12}>
//             <h3 className="section-title">How to Engage with the Content:</h3>
//             <ul className="highlight-list">
//               <li><strong>Read Full Articles:</strong> Each research paper is available for full access. Simply click on the article title to view the full text or download it in PDF format.</li>
//               <li><strong>Stay Updated:</strong> Subscribe to our newsletter to receive updates on new issues, featured articles, and special collections.</li>
//               <li><strong>Submit Your Work:</strong> If you are interested in contributing to future issues, visit our <span className="submission-link">Submission Guidelines</span> to learn more about how you can share your research with our audience.</li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>

//       <Footer />
//     </>
//   );
// }

// export default Current;

// import React, { useState, useEffect } from 'react';
// import { db } from "../backend/firebase";
// import { doc, getDoc } from "firebase/firestore/lite";
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import './Current.css';  // Ensure to add custom CSS for further styling

// function Current() {
//   const [currentData, setCurrentData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//       setCurrentData(currentDoc.data());
//     };
//     fetchData();
//   }, []);

//   const formatDateRange = (issueId) => {
//     const dateRanges = {
//       'Issue1': 'January-March 2024',
//       'Issue2': 'April-June 2024',
//       'Issue3': 'July-September 2024',
//       'Issue4': 'October-December 2024',
//     };
//     return dateRanges[issueId] || 'Unknown Date Range';
//   };

//   return (
//     <>
//       <Header />

//       <Container fluid className="content-container my-5">
//         <Row>
//           <Col lg={12} className="text-center">
//             <h1 className="main-title mb-4">Explore the Latest Research</h1>
//             <p className="intro-text">
//               The <strong>Current Issue</strong> of <strong>IJESTM</strong> brings together a diverse range of studies and research articles from leading experts. This issue offers fresh perspectives, innovative methodologies, and groundbreaking discoveries that contribute to the advancement of knowledge in various domains. Each article has been rigorously peer-reviewed to ensure the highest standards of academic excellence.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">Key Highlights of the Current Issue:</h3>
//             <ul className="highlight-list">
//               <li><strong>Innovative Research:</strong> Learn about the latest trends and breakthroughs in [specific field].</li>
//               <li><strong>Global Perspectives:</strong> Discover research from scholars worldwide, offering a global outlook.</li>
//               <li><strong>Multidisciplinary Focus:</strong> The articles span multiple disciplines with insights across fields.</li>
//             </ul>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">About the Current Issue</h3>
//             <p className="about-text">
//               At <strong>IJESTM</strong>, we publish high-quality, peer-reviewed research. This issue presents a diverse range of studies from researchers globally, exploring both established fields and emerging trends, offering the latest discoveries and perspectives.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">What You’ll Find in This Issue:</h3>
//             <ul className="highlight-list">
//               <li><strong>Cutting-Edge Research:</strong> Showcasing groundbreaking studies that push the boundaries of knowledge.</li>
//               <li><strong>Interdisciplinary Insights:</strong> Featuring papers that bridge multiple areas of study.</li>
//               <li><strong>Global Contributions:</strong> Researchers from diverse institutions contribute to a varied selection of articles.</li>
//               <li><strong>Practical Applications:</strong> Articles offer real-world insights beyond academia.</li>
//             </ul>
//           </Col>
//         </Row>

//         <Row className="mt-5 text-center">
//           <Col>
//             <div className="current-issue-banner">
//               <h1 className="banner-title">Current Issue</h1>
//               <h3 className="banner-volume">Volume {currentData?.volume}, Issue {currentData?.issue}</h3>
//               <h3 className="banner-date">{formatDateRange('Issue' + currentData?.issue)}</h3>

//               <Button className="submit-btn mt-4">
//                 Submit Paper
//               </Button>
//             </div>
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col lg={12}>
//             <h3 className="section-title">How to Engage with the Content:</h3>
//             <ul className="highlight-list">
//               <li><strong>Read Full Articles:</strong> Click on the article title to view or download in PDF format.</li>
//               <li><strong>Stay Updated:</strong> Subscribe to our newsletter for updates on new issues and special collections.</li>
//               <li><strong>Submit Your Work:</strong> Visit our <a href="#" className="submission-link">Submission Guidelines</a> to contribute to future issues.</li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>

//       <Footer />
//     </>
//   );
// }

// export default Current;
// import React, { useState, useEffect } from 'react';
// import { db } from "../backend/firebase";
// import { doc, getDoc } from "firebase/firestore/lite";
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import './Current.css';  // Ensure to add custom CSS for further styling

// function Current() {
//   const [currentData, setCurrentData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//       setCurrentData(currentDoc.data());
//     };
//     fetchData();
//   }, []);

//   const formatDateRange = (issueId) => {
//     const dateRanges = {
//       'Issue1': 'January-March 2024',
//       'Issue2': 'April-June 2024',
//       'Issue3': 'July-September 2024',
//       'Issue4': 'October-December 2024',
//     };
//     return dateRanges[issueId] || 'Unknown Date Range';
//   };

//   return (
//     <>
//       <Header />

//       <Container fluid className="content-container my-5">
//         <Row>
//           <Col lg={12} className="text-center">
//             <h1 className="main-title mb-4">Explore the Latest Research</h1>
//             <p className="intro-text">
//               The <strong>Current Issue</strong> of <strong>IJESTM</strong> brings together a diverse range of studies and research articles from leading experts. This issue offers fresh perspectives, innovative methodologies, and groundbreaking discoveries that contribute to the advancement of knowledge in various domains. Each article has been rigorously peer-reviewed to ensure the highest standards of academic excellence.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">Key Highlights of the Current Issue:</h3>
//             <ul className="highlight-list">
//               <li><strong>Innovative Research:</strong> Learn about the latest trends and breakthroughs in [specific field].</li>
//               <li><strong>Global Perspectives:</strong> Discover research from scholars worldwide, offering a global outlook.</li>
//               <li><strong>Multidisciplinary Focus:</strong> The articles span multiple disciplines with insights across fields.</li>
//             </ul>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">About the Current Issue</h3>
//             <p className="about-text">
//               At <strong>IJESTM</strong>, we publish high-quality, peer-reviewed research. This issue presents a diverse range of studies from researchers globally, exploring both established fields and emerging trends, offering the latest discoveries and perspectives.
//             </p>
//           </Col>
//         </Row>

//         <Row className="mt-4">
//           <Col lg={12}>
//             <h3 className="section-title">What You’ll Find in This Issue:</h3>
//             <ul className="highlight-list">
//               <li><strong>Cutting-Edge Research:</strong> Showcasing groundbreaking studies that push the boundaries of knowledge.</li>
//               <li><strong>Interdisciplinary Insights:</strong> Featuring papers that bridge multiple areas of study.</li>
//               <li><strong>Global Contributions:</strong> Researchers from diverse institutions contribute to a varied selection of articles.</li>
//               <li><strong>Practical Applications:</strong> Articles offer real-world insights beyond academia.</li>
//             </ul>
//           </Col>
//         </Row>

//         <Row className="mt-5 text-center">
//           <Col>
//             <div className="current-issue-banner">
//               <h1 className="banner-title">Current Issue</h1>
//               <h3 className="banner-volume">Volume {currentData?.volume}, Issue {currentData?.issue}</h3>
//               <h3 className="banner-date">{formatDateRange('Issue' + currentData?.issue)}</h3>

//               <Button className="submit-btn mt-4">
//                 Submit Paper
//               </Button>
//             </div>
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col lg={12}>
//             <h3 className="section-title">How to Engage with the Content:</h3>
//             <ul className="highlight-list">
//               <li><strong>Read Full Articles:</strong> Click on the article title to view or download in PDF format.</li>
//               <li><strong>Stay Updated:</strong> Subscribe to our newsletter for updates on new issues and special collections.</li>
//               <li><strong>Submit Your Work:</strong> Visit our <a href="#" className="submission-link">Submission Guidelines</a> to contribute to future issues.</li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>

//       <Footer />
//     </>
//   );
// }

// export default Current;
import React, { useState, useEffect } from "react";
import { db } from "../backend/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import Header from "../components/header";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/footer";
import "./Current.css"; // Ensure to add custom CSS for further styling
import { FaBookOpen, FaLeaf, FaLaptopCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Current() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust for speed of animations
      easing: 'ease-in-out',
      once: true       // Animation occurs only once as you scroll
    });
  }, []);
  
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentDoc = await getDoc(doc(db, "Current", "current"));
      setCurrentData(currentDoc.data());
    };
    fetchData();
  }, []);

  const formatDateRange = (issueId) => {
    const dateRanges = {
      Issue1: "January-March 2024",
      Issue2: "April-June 2024",
      Issue3: "July-September 2024",
      Issue4: "October-December 2024",
    };
    return dateRanges[issueId] || "Unknown Date Range";
  };

  return (
    <>
    
      <Header />

      <Container fluid className="content-container my-5 px-5">
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="main-title" data-aos="fade-up" style={{ animation: 'fadeIn 1s ease-out' }}>Explore the Latest Research</h2>
            <p
  className="intro-text"
  style={{
    fontSize: '17.6px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: 'rgb(77, 77, 77)',
    lineHeight: '1.6',
    textAlign: 'justify',
    margin: '0px -1rem',
    

  }}
  data-aos= "fade-up"
>
              The <strong>Current Issue</strong> of <strong>IJESTM</strong>{" "}
              brings together a diverse range of studies and research articles
              from leading experts. This issue offers fresh perspectives,
              innovative methodologies, and groundbreaking discoveries that
              contribute to the advancement of knowledge in various domains.
              Each article has been rigorously peer-reviewed to ensure the
              highest standards of academic excellence.
              <br /> <br /> It brings forth fresh perspectives that challenge
              conventional paradigms, accompanied by cutting-edge methodologies
              that enhance research rigor and applicability. Readers will find
              groundbreaking discoveries that hold the potential to impact both
              theoretical frameworks and real-world applications across multiple
              disciplines. Each article has undergone a thorough peer-review
              process, ensuring that only the highest quality of academic work
              is presented, maintaining the journal's long-standing tradition of
              excellence. This issue is not just a repository of knowledge, but
              a catalyst for future research and innovation, offering insights
              that can inspire both seasoned scholars and emerging researchers
              alike.
            </p>
          </Col>
        </Row>

{/* card */}
<div style={{ marginTop: '30px' }}>
  <div>
    <div className="card-container" style={{ marginTop: "10px" }}>
      {/* First Card */}
      <div className="card" data-aos="fade-right">
        <div className="card-body">
        <h3 className="card-title" style={{ color: "rgb(0, 114, 177)" }}>Innovative Research</h3>
        <p className="card-text">
            <FaBookOpen style={{ color: '#6A5ACD', marginRight: '8px' }} />
            Learn about the latest trends and breakthroughs in the Science field.
            Discover how groundbreaking research is transforming industries and
            paving the way for future advancements.
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="card" data-aos="fade-up">
        <div className="card-body">
          <h3 className="card-title" style={{ color: "rgb(0, 114, 177)" }}>Cutting-Edge Tech</h3>
          <p className="card-text">
            <FaLaptopCode style={{ color: '#FFA500', marginRight: '8px' }} />
            Explore the latest advancements in AI, Blockchain, and other cutting-edge technologies that are revolutionizing industries and shaping the future of innovation.

          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="card" data-aos="fade-left">
        <div className="card-body">
          <h3 className="card-title" style={{ color: "rgb(0, 114, 177)" }}>Sustainable Tech</h3>
          <p className="card-text">
            <FaLeaf style={{ color: '#32CD32', marginRight: '8px' }} />
            Learn about the latest trends and breakthroughs in the Science field. Discover how groundbreaking research is transforming industries and paving the way for future advancements.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>




   

 
        <Row className="mt-5">
        <Col lg={11.5} className="text-center section-container" style={{ margin: 'auto' }}>  <h2
  className="section-title mb-4"
  style={{
    fontSize: '25px',
    fontFamily: 'Merriweather, serif',
    color: 'rgb(0, 114, 177)',
    marginTop: '-5px',
  }}
  data-aos= "fade-up"

>
  About the Current Issue
</h2>

<p
  className="about-text"
  style={{
    fontSize: '17.6px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: 'rgb(77, 77, 77)',
    lineHeight: '1.6',
    textAlign: 'justify',
    margin: '0 0 0 1rem', // Only left margin
    width: '100%', // Ensures full width
    //  padding: '1rem',
      maxWidth: '1050px',
       margin: 'auto'
  }}
  data-aos= "fade-up"

>
  At <strong>IJESTM</strong>, we are committed to publishing high-quality, peer-reviewed research that makes a lasting impact. This issue presents studies from top-tier researchers exploring both established fields and emerging trends, offering groundbreaking discoveries and innovative perspectives that push the boundaries of knowledge.
  <br />
  Our latest issue showcases a diverse array of studies conducted by top-tier researchers, each contributing valuable insights into their respective fields. This issue presents a thorough exploration of both established domains and emerging trends, highlighting the dynamic nature of contemporary research.
</p>

  </Col>
</Row>





{/* <Row className="mt-4 text-center">
  <Col>
  <div
  className="current-issue-banner py-5"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bulb_bg.png)`,
    backgroundSize: '90%', // Adjust to the desired percentage
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    color: '#fff',
    borderRadius: '30px',
    marginTop: '30px',
    padding: '20px', // Optional: Add padding for inner content spacing
    overflow: 'hidden', // Ensures content does not spill over rounded corners
  }}
>
      <h1 className="banner-title"   data-aos= "fade-up"
      >Current Issue</h1>
      <h3 className="banner-volume"   data-aos= "fade-up"
      >
        Volume {currentData?.volume}, Issue {currentData?.issue}
      </h3>
      <h3 className="banner-date"   data-aos= "fade-up"
      >
        {formatDateRange("Issue" + currentData?.issue)}
      </h3>

      <Button
      className="submit-btn mt-4"
      style={{
        backgroundColor: "#007bff",
        border: "none",
        padding: "10px 30px",
        borderRadius: "50px",
      }}
      data-aos= "fade-up"

      onClick={() => navigate('/submissions')} // Inline onClick handler
    >
      Submit Paper
    </Button>
    </div>
  </Col>
</Row> */}
<Row className="mt-4 text-center">
  <Col>
    <div
      className="current-issue-banner py-5"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bulb_bg.png)`,
        backgroundSize: 'cover', // Use 'cover' for better responsiveness
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        borderRadius: '30px',
        marginTop: '30px',
        padding: '20px',
        overflow: 'hidden',
      }}
      data-aos="fade-up"
    >
      <h1
        className="banner-title responsive-title"
        style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
        data-aos="fade-up"
      >
        Current Issue
      </h1>
      <h3
        className="banner-volume responsive-volume"
        style={{ fontSize: '1.8rem', marginTop: '10px' }}
        data-aos="fade-up"
      >
        Volume {currentData?.volume}, Issue {currentData?.issue}
      </h3>
      <h3
        className="banner-date responsive-date"
        style={{ fontSize: '1.5rem', marginTop: '5px' }}
        data-aos="fade-up"
      >
        {formatDateRange('Issue' + currentData?.issue)}
      </h3>
      <hr
        style={{
          width: '50%',
          margin: '30px auto', // centers the hr element horizontally
          borderColor: 'white',
          textAlign: 'center',
        }}
        data-aos="fade-up"
      />
      <Button
        className="submit-btn mt-4 responsive-button"
        style={{ fontSize: '1.2rem', padding: '0.75rem 1.5rem' }}
        data-aos="fade-up"
        onClick={() => navigate('/submissions')}
      >
        Submit Paper
      </Button>
    </div>
  </Col>
</Row>




















<Row className="mt-5">
  <Col lg={12} className="text-left">
  <h3 
  className="section-title" 
  style={{
    fontSize: '25px',
    fontFamily: 'Merriweather, serif',
    color: 'rgb(0, 114, 177)',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    textAlign: 'left',
    whiteSpace: 'normal', // Ensure text wraps normally
  }} 
  data-aos="fade-up"
>
  How to Engage with the Content:
</h3>

    <ul className="highlight-list" style={{ paddingLeft: '20px' }}>
      <li className="list-item" data-aos="fade-up">
        <strong 
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600"
          }}
        >
          Read Full Articles:
        </strong> 
        Click on the article title to view or download in PDF format.
      </li>
      <li className="list-item" data-aos="fade-up">
        <strong 
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600"
          }}
        >
          Stay Updated:
        </strong> 
        Subscribe to our newsletter for updates on new issues and special collections.
      </li>
      <li className="list-item" data-aos="fade-up">
        <strong 
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600"
          }}
        >
          Submit Your Work:
        </strong> 
        Visit our{" "}
        <a href="/submissions" className="submission-link">
          Submission Guidelines
        </a>{" "}
        to contribute to future issues.
      </li>
    </ul>
  </Col>
</Row>





      </Container>

      <Footer />
    </>
  );
}

export default Current;
