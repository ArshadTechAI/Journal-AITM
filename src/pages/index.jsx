// import React, { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { db } from "../backend/firebase";
// import {
//   collection,
//   getDocs,
//   doc,
//   getDoc,
//   query,
// } from "firebase/firestore/lite";
// import Header from "../components/header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGlobe,
//   faLanguage,
//   faRocket,
//   faClock,
//   faEnvelope,
//   faHeadset,
//   faFilePdf,
// } from "@fortawesome/free-solid-svg-icons";
// import { FaGlobe, FaHandshake, FaUsers, FaFileAlt } from "react-icons/fa"; // Import some icons
// import {
//   FaAward,
//   FaGlobeAmericas,
//   FaUsersCog,
//   FaUnlockAlt,
// } from "react-icons/fa"; // Import additional icons

// import "../css/style.css";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import Footer from "../components/footer";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

// function Index() {
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
//   const navi = useNavigate();

//   const handleSubmit = () => {
//     navi("/submissions");
//   };

//   // for current volume and issue
//   const [currentData, setCurrentData] = useState(null);

//   let volume = "";
//   let issue = "";

//   useEffect(() => {
//     const fetchData = async () => {
//       // Fetch current document
//       const currentDoc = await getDoc(doc(db, "Current", "current"));
//       const currentData = currentDoc.data();
//       volume = currentData.volume;
//       issue = currentData.issue;
//       // console.log(currentData);
//       setCurrentData(currentData);
//     };
//     fetchData();
//   }, []);

//   const formatDateRange = (issueId) => {
//     const dateRanges = {
//       Issue1: "January-March 2024",
//       Issue2: "April-June 2024",
//       Issue3: "July-September 2024",
//       Issue4: "Octorber-December 2024",
//       // Add more mappings here
//     };
//     return dateRanges[issueId] || "Unknown Date Range";
//   };

//   // Browse journal by decipline
//   const [areas, setAreas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loading2, setLoading2] = useState(false); // Change default to false
//   const [papers, setPapers] = useState([]);
//   const [paperId, setPaperId] = useState([]);
//   const [selectedArea, setSelectedArea] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAreas = async () => {
//       try {
//         const docRef = doc(db, "Research_Areas", "research_areas");
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setAreas(docSnap.data().areas);
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching document: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAreas();
//   }, []);

//   const fetchPapersByArea = async (area) => {
//     try {
//       setLoading2(true);
//       const papersData = [];
//       const volumesCollectionRef = collection(db, "PapersCollection");
//       const volumesSnapshot = await getDocs(volumesCollectionRef);

//       // Use Promise.all to wait for all issue fetches to complete
//       await Promise.all(
//         volumesSnapshot.docs.map(async (volumeDoc) => {
//           const volumeId = volumeDoc.id;
//           const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

//           await Promise.all(
//             issues.map(async (issue) => {
//               const issueRef = collection(
//                 db,
//                 "PapersCollection",
//                 volumeId,
//                 issue
//               );
//               // const q = query(issueRef, limit(8));

//               // const issueSnapshot = await getDocs(q);
//               const issueSnapshot = await getDocs(issueRef);

//               issueSnapshot.forEach((paperDoc) => {
//                 const paperData = paperDoc.data();
//                 const paperId = paperDoc.id; // Get the ID of the current document

//                 // Only add if the research area matches
//                 if (paperData.researchArea === area) {
//                   console.log(paperId);
//                   papersData.push({
//                     ...paperData, // Spread the existing paper data
//                     id: paperId, // Add the document ID
//                   });
//                 }
//               });
//             })
//           );
//         })
//       );

//       setPapers(papersData.slice(0, 8));
//       setSelectedArea(area);
//     } catch (error) {
//       console.error("Error fetching papers: ", error);
//     } finally {
//       setLoading2(false);
//     }
//   };

//   const handlePaperClick = (paper) => {
//     console.log("clicked");
//     console.log(paperId);
//     navigate("/paper-detail-page", { state: { paper } });
//   };

//   const checkScreenSize = () => {
//     setIsSmallScreen(window.innerWidth <= 768);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", checkScreenSize);
//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../backend/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLanguage, faRocket, faClock, faEnvelope, faHeadset, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FaGlobe, FaHandshake, FaUsers, FaFileAlt, FaAward, FaGlobeAmericas, FaUsersCog, FaUnlockAlt } from "react-icons/fa"; 
import "../css/style.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';






function Index() {

  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const handleCardClick = (index, area) => {
    if (isSmallScreen) {
      // Temporarily set the clicked card index
      setClickedCardIndex(index);
      fetchPapersByArea(area);

      // Reset the clicked card index after a short delay to collapse the card
      setTimeout(() => {
        setClickedCardIndex(null);
      }, 500); // Adjust duration as needed
    } else {
      fetchPapersByArea(area); // Directly fetch on larger screens
    }
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = () => {
    navigate("/submissions");
  };

  // State and logic for current volume and issue
  const [currentData, setCurrentData] = useState(null);
  let volume = "";
  let issue = "";

  useEffect(() => {
    const fetchData = async () => {
      const currentDoc = await getDoc(doc(db, "Current", "current"));
      const currentData = currentDoc.data();
      volume = currentData.volume;
      issue = currentData.issue;
      setCurrentData(currentData);
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

  // Logic for browsing journal by discipline
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [papers, setPapers] = useState([]);
  const [paperId, setPaperId] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const docRef = doc(db, "Research_Areas", "research_areas");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAreas(docSnap.data().areas);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAreas();
  }, []);

  const fetchPapersByArea = async (area) => {
    try {
      setLoading2(true);
      const papersData = [];
      const volumesCollectionRef = collection(db, "PapersCollection");
      const volumesSnapshot = await getDocs(volumesCollectionRef);

      await Promise.all(
        volumesSnapshot.docs.map(async (volumeDoc) => {
          const volumeId = volumeDoc.id;
          const issues = ["Issue1", "Issue2", "Issue3", "Issue4"];

          await Promise.all(
            issues.map(async (issue) => {
              const issueRef = collection(db, "PapersCollection", volumeId, issue);
              const issueSnapshot = await getDocs(issueRef);

              issueSnapshot.forEach((paperDoc) => {
                const paperData = paperDoc.data();
                const paperId = paperDoc.id;

                if (paperData.researchArea === area) {
                  papersData.push({ ...paperData, id: paperId });
                }
              });
            })
          );
        })
      );

      setPapers(papersData.slice(0, 8));
      setSelectedArea(area);
    } catch (error) {
      console.error("Error fetching papers: ", error);
    } finally {
      setLoading2(false);
    }
  };

  const handlePaperClick = (paper) => {
    navigate("/paper-detail-page", { state: { paper } });
  };

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <>
      <Header />

      <Container fluid>
        {/* <Row className='section1'>
                    <Col xs={12} md={9}>
                        <div className="info">
                            <h1 style={{color: '#0072b1'}}>International Journal of Enginering, Science Technology and Management (IJESTM)</h1>
                            <p>
                                <span ><b>International Journal of Enginerring, Science Technology and Management (IJESTM) </b></span>
                                is a leading international multi-disciplinary journal dedicated to advancing research and knowledge across various fields. With a commitment to excellence, innovation, and inclusivity, our journal serves as a platform for researchers, scholars, and professionals from diverse disciplines to share their valuable insights and discoveries. The journal accepts the original research and review articles and extended version of the conference and journal papers from Scientists, Industrialists, Academicians, Engineers and Students in all the fields of electrical and computer system designs.
                                <br />The journal has high visibility on the articles from the scientific and research communities around the world. The researchers can access the articles and utilize for the development of scientific and research proposals on engineering and technology.
                            </p>

                            <h1>Our Mission</h1>
                            <p>
                                <span><b>Foster interdisciplinary collaboration:</b></span>
                                We believe that the most groundbreaking discoveries often occur at the intersections of different disciplines. We encourage researchers to explore innovative connections between fields and promote a holistic approach to problem-solving.
                            </p>
                            <p>
                                <span><b>Disseminate high-quality research:</b></span>
                                We are committed to maintaining rigorous peer-review standards to ensure the publication of only the most credible and impactful research.
                            </p>
                            <p>
                                <span><b>Facilitate global knowledge exchange:</b></span>
                                We aim to connect researchers from around the world, fostering a global community dedicated to advancing human knowledge.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} className='d-none d-md-block'>
                        <div className="author_desk_container">
                            <div className="author_desk">
                                <h1>Author Desk</h1>
                                <hr />
                                <ul>
                                    <li><a href="/current">Current Issue</a></li>
                                    <li><a href="/indexing">Indexing</a></li>
                                    <li><a href="">Open Access</a></li>
                                    <li><a href="/publication-ethics">Author's Guidelines</a></li>
                                    <li><a href="/contact-us">Call For Paper</a></li>
                                    <li><a href="/submissionss">Online Submission</a></li>
                                    <li><a href="/publication-ethics">Reviewer Policy</a></li>
                                    <li><a href="/publication-ethics">Reviewer Guidelines</a></li>
                                    <li><a href="/publication-ethics">Plagiarism Policies</a></li>
                                    <li><a href="/publication-ethics">Withdrawal Policies</a></li>
                                </ul>


                                <button className='submit' onClick={handleSubmit}>Submit Article</button>
                            </div>
                        </div>
                    </Col>
                </Row> */}

        {/* <Row className='section1'>
    <Col xs={12} md={9}>
        <div className="info">
            <h1 style={{ color: '#0072b1', fontWeight: 'bold', marginBottom: '20px' }}>
                International Journal of Engineering, Science Technology and Management (IJESTM)
            </h1>
            <p className="intro-text">
                <FaGlobe style={{ marginRight: '8px' }} />
                <span><b>International Journal of Engineering, Science Technology and Management (IJESTM)</b></span>
                is a leading international multi-disciplinary journal dedicated to advancing research and knowledge across various fields. With a commitment to excellence, innovation, and inclusivity, our journal serves as a platform for researchers, scholars, and professionals from diverse disciplines to share their valuable insights and discoveries. The journal accepts the original research and review articles and extended versions of the conference and journal papers from Scientists, Industrialists, Academicians, Engineers, and Students in all the fields of electrical and computer system designs.
                <br />
                The journal has high visibility within the scientific and research communities worldwide. Researchers can access articles and utilize them for the development of scientific and research proposals in engineering and technology.
            </p>

            <h1>Our Mission</h1>
            <p className="mission-text">
                <FaUsers style={{ marginRight: '8px' }} />
                <span><b>Foster interdisciplinary collaboration:</b></span>
                We believe that the most groundbreaking discoveries often occur at the intersections of different disciplines. We encourage researchers to explore innovative connections between fields and promote a holistic approach to problem-solving.
            </p>
            <p className="mission-text">
                <FaFileAlt style={{ marginRight: '8px' }} />
                <span><b>Disseminate high-quality research:</b></span>
                We are committed to maintaining rigorous peer-review standards to ensure the publication of only the most credible and impactful research.
            </p>
            <p className="mission-text">
                <FaGlobe style={{ marginRight: '8px' }} />
                <span><b>Facilitate global knowledge exchange:</b></span>
                We aim to connect researchers from around the world, fostering a global community dedicated to advancing human knowledge.
            </p>
        </div>
    </Col>
    <Col md={3} className='d-none d-md-block'>
        <div className="author_desk_container">
            <div className="author_desk">
                <h1>Author Desk</h1>
                <hr />
                <ul>
                    <li><a href="/current">Current Issue</a></li>
                    <li><a href="/indexing">Indexing</a></li>
                    <li><a href="">Open Access</a></li>
                    <li><a href="/publication-ethics">Author's Guidelines</a></li>
                    <li><a href="/contact-us">Call For Paper</a></li>
                    <li><a href="/submissions">Online Submission</a></li>
                    <li><a href="/publication-ethics">Reviewer Policy</a></li>
                    <li><a href="/publication-ethics">Reviewer Guidelines</a></li>
                    <li><a href="/publication-ethics">Plagiarism Policies</a></li>
                    <li><a href="/publication-ethics">Withdrawal Policies</a></li>
                </ul>

                <button className='submit' onClick={handleSubmit}>Submit Article</button>
            </div>
        </div>
    </Col>
</Row> */}

        <Row className="section1">
          <Col xs={12} md={9}>
            <div className="info">
            <div  data-aos="fade-left" className="benefit-text">

              <h1
                style={{
                  color: "#0072b1",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                International Journal of Engineering, Science Technology and
                Management (IJESTM)
              </h1>
              </div>
              <p className="intro-text">
              <div  data-aos="fade-up" className="benefit-text">

                <FaGlobe style={{ color: "#0085FF", marginRight: "8px" }} />{" "}
                {/* Globe icon in blue */}
                <span>
                  <b>
                    International Journal of Engineering, Science Technology and
                    Management (IJESTM){" "}
                  </b>
                </span>
                is a leading international multi-disciplinary journal dedicated
                to advancing research and knowledge across various fields. With
                a commitment to excellence, innovation, and inclusivity, our
                journal serves as a platform for researchers, scholars, and
                professionals from diverse disciplines to share their valuable
                insights and discoveries. The journal accepts the original
                research and review articles and extended versions of the
                conference and journal papers from Scientists, Industrialists,
                Academicians, Engineers, and Students in all the fields of
                electrical and computer system designs.
                <br />
                The journal has high visibility within the scientific and
                research communities worldwide. Researchers can access articles
                and utilize them for the development of scientific and research
                proposals in engineering and technology.
                </div>
              </p>
<div  data-aos="fade-up" className="benefit-text">
              <h1
                style={{
                  color: "#0072b1",
                  //   fontWeight: "bold",
                  marginBottom: "20px",
                  fontSize: "43px",
                }}
              >
                Our Mission
              </h1>
              </div>
              <p className="mission-text">
              <div  data-aos="fade-up" className="benefit-text">
                <FaHandshake
                  style={{
                    color: "#17a2b8",
                    marginRight: "8px",
                    fontSize: "24px",
                  }}
                />{" "}
                {/* Handshake icon in cyan and larger size */}
                <span>
                  <b>Foster interdisciplinary collaboration: </b>
                </span>
                We believe that the most groundbreaking discoveries often occur
                at the intersections of different disciplines. We encourage
                researchers to explore innovative connections between fields and
                promote a holistic approach to problem-solving.
                </div>
              </p>
              <p className="mission-text">
              <div  data-aos="fade-up" className="benefit-text">
                <FaFileAlt style={{ color: "#FFC107", marginRight: "8px" }} />{" "}
                {/* File icon in yellow */}
                <span>
                  <b>Disseminate high-quality research: </b>
                </span>
                We are committed to maintaining rigorous peer-review standards
                to ensure the publication of only the most credible and
                impactful research.
                </div>
              </p>
              <p className="mission-text">
              <div  data-aos="fade-up" className="benefit-text">
                <FaGlobe
                  style={{
                    color: "#DC3545",
                    marginRight: "8px",
                    fontSize: "20px",
                  }}
                />{" "}
                {/* Globe icon in red */}
                <span>
                  <b>Facilitate global knowledge exchange: </b>
                </span>
                We aim to connect researchers from around the world, fostering a
                global community dedicated to advancing human knowledge.
                </div>
              </p>
            </div>
          </Col>
          <Col md={3} className="d-none d-md-block">
            <div className="author_desk_container">
              <div className="author_desk">
                <h1>Author Desk</h1>
                <hr />
                <ul>
                  <li>
                    <a href="/current">Current Issue</a>
                  </li>
                  <li>
                    <a href="/indexing">Indexing</a>
                  </li>
                  <li>
                    <a href="">Open Access</a>
                  </li>
                  <li>
                    <a href="/publication-ethics">Author's Guidelines</a>
                  </li>
                  <li>
                    <a href="/contact-us">Call For Paper</a>
                  </li>
                  <li>
                    <a href="/submissions">Online Submission</a>
                  </li>
                  <li>
                    <a href="/publication-ethics">Reviewer Policy</a>
                  </li>
                  <li>
                    <a href="/publication-ethics">Reviewer Guidelines</a>
                  </li>
                  <li>
                    <a href="/publication-ethics">Plagiarism Policies</a>
                  </li>
                  <li>
                    <a href="/publication-ethics">Withdrawal Policies</a>
                  </li>
                </ul>

                <button className="submit" onClick={handleSubmit}>
                  Submit Article
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <hr />
        <Row className="section2a">
          {/* <Col xs={12} md={9}>
                        <div className="info">
                            <h1>Why Choose IJESTM?</h1>

                            <p>
                                <span><b>Peer-Reviewed Excellence:</b></span>
                                Every article submitted to [Journal Name] undergoes a rigorous peer-review process to ensure the highest quality standards.
                            </p>
                            <p>
                                <span><b>Global Reach:</b></span>
                                Our journal is read by researchers, academics, and professionals from around the world, making it an excellent platform to reach a diverse audience.
                            </p>
                            <p>
                                <span><b>Interdisciplinary Focus:</b></span>
                                IJESTM encourages cross-disciplinary collaboration, providing a unique space for innovative research.
                            </p>
                            <p>
                                <span><b>Open Access:</b></span>
                                We believe in open access to knowledge. Many of our articles are freely accessible to all, promoting the widespread dissemination of research.
                            </p>
                        </div>
                    </Col> */}
          <Col xs={12} md={9}>
            <div className="info" data-aos="fade-up">
              <h1
                style={{
                  color: "#0072b1",
                  //   fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Why Choose IJESTM?
              </h1>

              <p className="benefit-text">
                <div data-aos="fade-up" className="benefit-text">
                <FaAward style={{ color: "#ff8c00", marginRight: "8px" }} />{" "}
                {/* Color for the icon */}
                <span
                  style={{
                    color: "#0072B1",
                    font: '17.6px system-ui, -apple-system, "Segoe"',
                    fontWeight: "600",
                  }}
                >
                  Peer-Reviewed Excellence:
                </span>
                <div className="">
                  Every article submitted to IJESTM undergoes a rigorous
                  peer-review process to ensure the highest quality standards.
                </div>
                </div>
              </p>
              
              <p className="benefit-text">
<div data-aos="fade-up" className="benefit-text">
                <FaGlobeAmericas
                  style={{ color: "#28a745", marginRight: "8px" }}
                />{" "}
                {/* Color for the icon */}
                <span
                  style={{
                    color: "#0072B1",
                    font: '17.6px system-ui, -apple-system, "Segoe"',
                    fontWeight: "600",
                  }}
                >
                  Global Reach:{" "}
                </span>
                
                <div className="custom-text">
                  Our journal is read by researchers, academics, and
                  professionals from around the world, making it an excellent
                  platform to reach a diverse audience.
                </div>
                </div>
              </p>
              <p className="benefit-text">
                <div data-aos="fade-up" className="benefit-text">
                <FaUsersCog style={{ color: "#007bff", marginRight: "8px" }} />{" "}
                {/* Color for the icon */}
                <span
                  style={{
                    color: "#0072B1",
                    font: '17.6px system-ui, -apple-system, "Segoe"',
                    fontWeight: "600",
                  }}
                >
                  Interdisciplinary Focus:{" "}
                </span>
                <div className="custom-text">
                  IJESTM encourages cross-disciplinary collaboration, providing
                  a unique space for innovative research.
                </div>
                </div>
              </p>

              <p className="benefit-text">

                <div data-aos="fade-up" className="benefit-text">
                <FaUnlockAlt style={{ color: "#dc3545", marginRight: "8px" }} />{" "}
                {/* Color for the icon */}
                <span
                  style={{
                    color: "#0072B1", // Corrected this line
                    font: '17.6px system-ui, -apple-system, "Segoe"',
                    fontWeight: "600",
                  }}
                >
                  Open Access:{" "}
                </span>
                <div className="custom-text">
                  We believe in open access to knowledge. Many of our articles
                  are freely accessible to all, promoting the widespread
                  dissemination of research.
                </div>
                </div>
              </p>
            </div>
          </Col>

          <Col md={3} className="d-none d-md-block" data-aos="fade-up" >
            <div className="download_box" data-aos="fade-up" >
              <h1 data-aos="fade-up" >Downloads</h1>
              <hr data-aos="fade-up"  />
              <ul >
                <li data-aos="fade-up" >
                  <a href="/publication-ethics">Menuscript Template</a>
                </li>
                <li data-aos="fade-up" >
                  <a href="/publication-ethics">Copyright Form</a>
                </li>
                <li data-aos="fade-up" >
                  <a href="/publication-ethics">Cover Page</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <Container
          fluid
          className="container"
          style={{
            backgroundColor: "#EFEFEF",
            backgroundImage: isSmallScreen ? "none" : "url(images/image2.png)",
            backgroundSize: "contain", // This will make sure the image covers the entire container
            backgroundPosition: "right", // This centers the image
            backgroundRepeat: "no-repeat",
            width: "auto",
            height: "300px", // Set the height to the full viewport height (optional)
            padding: "20px",
            borderRadius: "12px",
            // margin: '0px 50px 0px 50px',
          }}
        >
          <h1>
            <b>IJESTM</b> Open Access
          </h1>
          <h3>IJESTM empowers researchers & readers through:</h3>
          <ul>
            <li>Open access publishing options</li>
            <li>Open access agreements</li>
            <li>Author support and information</li>
          </ul>
        </Container> */}
        <Container
          fluid
          className="open-access-container"
          style={{
            backgroundColor: "#EFEFEF",
            backgroundImage: isSmallScreen ? "none" : "url(images/image2.png)",
            backgroundSize: "cover", // Ensure the image covers the entire container
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            padding: "40px", // Increased padding for better spacing
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow for depth
            margin: "20px auto", // Center the container and add margin
            maxWidth: "1100px", // Limit the maximum width of the container
          }}
        >
          <div  data-aos="fade-up" className="benefit-text">

          <h1 className="open-access-title">
            
            <b>IJESTM</b> Open Access
          </h1>
          </div>
          <div  data-aos="fade-up" className="benefit-text">

          <h3 className="open-access-subtitle">
            IJESTM empowers researchers & readers through:
          </h3>
          </div>
          
          <ul className="open-access-list">
          <div  data-aos="fade-up" className="benefit-text">

            <li>Open access publishing options</li>
            </div>
            <div  data-aos="fade-up" className="benefit-text">

            <li>Open access agreements</li>
            </div>
            <div  data-aos="fade-up" className="benefit-text">

            <li>Author support and information</li>
            </div>
          </ul>
        </Container>

        <div style={{ height: "30px" }}></div>

        <Container
  fluid
  className="container"
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center', // Ensures text is also centered
  }}
>
  <h1 style={{ color: "white", fontSize: "3rem", marginTop: "10px "}} data-aos="fade-up">
    <b>Current Issue</b>
  </h1>

  <h3 style={{ color: "white", fontSize: "3rem"}} data-aos="fade-up">
    Volume {currentData != null ? currentData.volume : ""}, Issue{" "}
    {currentData != null ? currentData.issue : ""}
  </h3>

  <h3 style={{ color: "white", fontSize: "2rem", margin: "10px 0" }} data-aos="fade-up">
    {currentData != null ? formatDateRange("Issue" + currentData.issue) : ""}
  </h3>

  <hr
    style={{ width: "50%", margin: "30px auto", borderColor: "white" }}
    data-aos="fade-up"
  />

  <Button
    style={{
      backgroundColor: "#0085FF",
      padding: "10px 30px",
      borderRadius: "50px",
      border: "1px solid white",
      cursor: "pointer",
      color: "white", // Button text color
      marginTop: "15px",
    }}
    data-aos="fade-up"
    onClick={handleSubmit}
  >
    Submit Paper
  </Button>
</Container>


        <hr style={{ marginTop: "50px" }} />
        {/* Browse journals by descipline */}
        <section style={{ width: "100%", marginTop: "30px" }}>
      <center>
        <div
          style={{
            width: isSmallScreen ? "100%" : "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div data-aos="fade-up" className="benefit-text">
            <h2 style={{ color: "#0072b1" }}>Browse journals by discipline</h2>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            {loading ? <center>Loading...</center> : ""}
            {areas.map((area, index) => (
              <div
                key={index}
                onMouseEnter={(e) => {
                  if (!isSmallScreen) {
                    e.currentTarget.style.width = "210px";
                    e.currentTarget.style.height = "110px";
                    e.currentTarget.style.boxShadow = "0px 0px 8px grey";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = "200px";
                  e.currentTarget.style.height = "100px";
                  e.currentTarget.style.boxShadow = "0px 0px 6px lightGrey";
                }}
                onClick={() => handleCardClick(index, area)}
                style={{
                  cursor: "pointer",
                  boxShadow: "0px 0px 6px lightGrey",
                  borderTop: "4px solid #003366",
                  width: isSmallScreen ? "48%" : "200px",
                  height: "100px",
                  borderRadius: "2px",
                  margin: "8px",
                  transition: "all 0.3s ease",
                  ...(isSmallScreen && clickedCardIndex === index
                    ? { width: "210px", height: "110px", boxShadow: "0px 0px 8px grey" }
                    : {}),
                }}
              >
                <div style={{ padding: "10px" }} />
                <div>
                  <p>{area}</p>
                  <hr style={{ width: "60%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Papers Section */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div data-aos="fade-up" className="benefit-text">
            <h2 style={{ color: "#0072b1" }}>
              {selectedArea
                ? `Papers in ${selectedArea}`
                : !loading
                ? "Select a discipline to see papers"
                : ""}
            </h2>
          </div>
          <div
            style={{
              width: isSmallScreen ? "100%" : "80%",
              display: papers.length > 2 ? "grid" : "block",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "30px",
              marginTop: "30px",
            }}
          >
            {loading2 ? <center>Loading...</center> : ""}
            {papers.length > 0 && !loading2
              ? papers.map((paper) => (
                  <div
                    key={paper.id}
                    onClick={() => handlePaperClick(paper)}
                    onMouseEnter={(e) => {
                      if (!isSmallScreen) {
                        e.currentTarget.style.boxShadow = "0px 0px 8px grey";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0px 0px 6px lightGrey";
                    }}
                    style={{
                      cursor: "pointer",
                      boxShadow: "0px 0px 6px lightGrey",
                      borderTop: "4px solid #003366",
                      borderRadius: "4px",
                      padding: "16px",
                      margin: "0 10px 16px 10px",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <a
                        style={{
                          fontFamily: "Metrophobic, Forum, Helvetica, Ubuntu, Arial, sans-serif",
                          fontSize: isSmallScreen ? "18px" : "25px",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1.2em",
                          maxHeight: "2.4em",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {paper.title}
                      </a>
                    </div>
                    <div style={{ height: "20px" }}></div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      {/* Author and Research Area */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <b style={{ fontSize: isSmallScreen ? "12px" : "16px", marginRight: "5px" }}>Author(s):</b>
                          <b style={{ fontSize: isSmallScreen ? "12px" : "16px", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {paper.authors.map((author, index) => (
                              <span key={index}> Dr. {author.name}, </span>
                            ))}
                          </b>
                        </div>
                        <div>
                          <b style={{ fontSize: isSmallScreen ? "12px" : "16px" }}>Country:</b>{" "}
                          <b style={{ fontSize: isSmallScreen ? "12px" : "16px" }}>India</b>
                        </div>
                        <div>
                          <b style={{ fontSize: isSmallScreen ? "12px" : "16px" }}>Research Area:</b>{" "}
                          <b style={{ fontSize: isSmallScreen ? "12px" : "16px" }}>{paper.researchArea}</b>
                        </div>
                      </div>
                      {/* PDF Button */}
                      <span
                        onMouseEnter={(e) => {
                          if (!isSmallScreen) {
                            e.currentTarget.style.border = "1px solid lightGrey";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.border = "none";
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(paper.fileURL, "_blank", "noopener,noreferrer");
                        }}
                        style={{
                          backgroundColor: "#D9E3F0",
                          borderRadius: "4px",
                          padding: "8px 16px",
                          color: "black",
                          fontSize: "14px",
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon icon={faFilePdf} color="red" size="lg" />
                        {isSmallScreen ? "" : " View PDF"}
                      </span>
                    </div>
                    <div style={{ height: "10px" }}></div>
                    <hr style={{ width: "50%" }} />
                    <div style={{ height: "10px" }}></div>
                  </div>
                ))
              : !loading2 && selectedArea
              ? "No papers found"
              : ""}
          </div>
        </div>
      </center>
    </section>
        <hr />
        <Row className="section2a">
          <Col xs={12} md={9}>
            <div className="info">
            <div  data-aos="fade-up" className="benefit-text">

              <h1
                style={{
                  marginBottom: "20px",
                  fontSize: "43px",
                  color: "#0072b1",
                }}
              >
                Join us
              </h1>
              </div>
              <div  data-aos="fade-up" className="benefit-text">

              <p>
                <div className="custom-text">
                  We invite <span className="highlight">Researchers</span> and{" "}
                  <span className="highlight">Scholars</span> to be part of our
                  vibrant community. Whether you are an author, reviewer, or
                  reader, IJESTM offers you the opportunity to contribute to the
                  advancement of knowledge in your field. Explore the latest
                  research in our Current Issue or delve into our Archives to
                  discover a wealth of knowledge. For more information about
                  submitting your work or becoming a reviewer, please visit our
                  Submission Guidelines page. Kindly share the manuscript to{" "}
             

                  <a  data-aos="fade-left" href="mailto:aitm@ijestm.com" className="email-link">
                    aitm@ijestm.com
                  </a>
                  
                  .
                </div>
              </p>
              </div>
            </div>
          </Col>

          <Col md={3} className="d-none d-md-block" data-aos="fade-up" >
            <div className="download_box">
              <h1 data-aos="fade-up" >Contact Us</h1>
              <hr data-aos="fade-up"  />
              <ul>
                <p data-aos="fade-up" >Contact us for inquiries or assistance at</p>
                <li>
                  <a href="tel:9945387216" className="text-reset" data-aos="fade-up" >
                    9945387216
                  </a>
                  <a href="mailto:aitm@ijestm.com" className="text-reset" data-aos="fade-up" >
                    aitm@ijestm.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div style={{ height: "30px" }}></div>
      </Container>

      <Footer />
    </>
  );
}

export default Index;