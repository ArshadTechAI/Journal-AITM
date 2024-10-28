// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
// import { auth } from '../backend/firebase'; // Make sure you have this in firebase.js
// import { db } from '../backend/firebase';
// import { useNavigate } from 'react-router-dom'; // Ensure React Router is used for navigation
// import Header from '../components/header';
// import Footer from '../components/footer';
// import { Button } from 'react-bootstrap'; // Make sure you have react-bootstrap installed
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for icons
// import { faSignOut } from '@fortawesome/free-solid-svg-icons';

// function AdminPanel() {
//   const [papers, setPapers] = useState([]);
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);
//   const navigate = useNavigate(); // Use for routing after logout

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   useEffect(() => {
//     const fetchPapers = async () => {
//       const papersCollection = collection(db, 'PapersQueueCollection');
//       const papersSnapshot = await getDocs(papersCollection);
//       const papersList = papersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       const pendingPapers = papersList.filter((paper) => paper.status === 'pending');
//       setPapers(pendingPapers);
//     };
//     fetchPapers();
//   }, []);

//   const handleApprove = async (paper) => {
//     const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//     await updateDoc(paperRef, { status: 'approved' });
//     const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//     const currentData = currentDoc.data();
//     const volumeId = `Volume${currentData.volume}`;
//     const issueId = `Issue${currentData.issue}`;

//     const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
//     await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

//     setPapers(papers.map((p) => (p.id === paper.id ? { ...p, status: 'approved' } : p)));
//   };

//   const handleReject = async (paper) => {
//     const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//     await updateDoc(paperRef, { status: 'rejected' });

//     setPapers(papers.map((p) => (p.id === paper.id ? { ...p, status: 'rejected' } : p)));
//   };

//   const handleLogout = () => {
//     auth
//       .signOut()
//       .then(() => {
//         localStorage.removeItem('isAdminAuthenticated');
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error('Logout failed:', error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//         <center style={{ width: '100%', backgroundColor: '#D9E3F0' }}>
//           <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Admin Panel</h1>
//           <Button onClick={handleLogout}>
//             <FontAwesomeIcon icon={faSignOut} /> Logout
//           </Button>
//         </center>
//         <div style={{ height: '100px' }}></div>
//         <div>
//           {papers.map((paper) => (
//             <div key={paper.id} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
//               <h2>
//                 <a target='_blank' href={paper.fileURL} rel='noreferrer'>
//                   {paper.title}
//                 </a>
//               </h2>
//               <p>{paper.abstract}</p>
//               <button onClick={() => handleApprove(paper)} disabled={paper.status === 'approved'}>
//                 Approve
//               </button>
//               <button onClick={() => handleReject(paper)} disabled={paper.status === 'rejected'}>
//                 Reject
//               </button>
//             </div>
//           ))}
//         </div>
//         {papers.length === 0 ? <h3>No paper found</h3> : ''}
//       </div>
//       <div style={{ height: '100px' }}></div>
//       <Footer />
//     </>
//   );
// }

// export default AdminPanel;
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
// import { auth } from '../backend/firebase'; // Make sure you have this in firebase.js
// import { db } from '../backend/firebase';
// import { useNavigate } from 'react-router-dom'; // Ensure React Router is used for navigation
// import Header from '../components/header';
// import Footer from '../components/footer';
// import { Button } from 'react-bootstrap'; // Make sure you have react-bootstrap installed
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for icons
// import { faSignOut } from '@fortawesome/free-solid-svg-icons';

// function AdminPanel() {
//   const [papers, setPapers] = useState([]);
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);
//   const [rejectionMessage, setRejectionMessage] = useState(''); // New state for rejection message
//   const navigate = useNavigate(); // Use for routing after logout

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   useEffect(() => {
//     const fetchPapers = async () => {
//       const papersCollection = collection(db, 'PapersQueueCollection');
//       const papersSnapshot = await getDocs(papersCollection);
//       const papersList = papersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       const pendingPapers = papersList.filter((paper) => paper.status === 'pending');
//       setPapers(pendingPapers);
//     };
//     fetchPapers();
//   }, []);

//   const handleApprove = async (paper) => {
//     const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//     await updateDoc(paperRef, { status: 'approved' });
//     const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//     const currentData = currentDoc.data();
//     const volumeId = `Volume${currentData.volume}`;
//     const issueId = `Issue${currentData.issue}`;

//     const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
//     await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

//     setPapers(papers.map((p) => (p.id === paper.id ? { ...p, status: 'approved' } : p)));
//   };

//   const handleReject = async (paper) => {
//     const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//     await updateDoc(paperRef, { 
//         status: 'rejected',
//         rejectionMessage: rejectionMessage // Store the rejection message
//     });

//     setPapers(papers.map((p) => (p.id === paper.id ? { ...p, status: 'rejected' } : p)));
//     setRejectionMessage(''); // Clear rejection message after submission
//   };

//   const handleLogout = () => {
//     auth
//       .signOut()
//       .then(() => {
//         localStorage.removeItem('isAdminAuthenticated');
//         navigate('/');
//       })
//       .catch((error) => {
//         console.error('Logout failed:', error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//         <center style={{ width: '100%', backgroundColor: '#D9E3F0' }}>
//           <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Admin Panel</h1>
//           <Button onClick={handleLogout}>
//             <FontAwesomeIcon icon={faSignOut} /> Logout
//           </Button>
//         </center>
//         <div style={{ height: '100px' }}></div>
//         <div>
//           {papers.map((paper) => (
//             <div key={paper.id} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
//               <h2>
//                 <a target='_blank' href={paper.fileURL} rel='noreferrer'>
//                   {paper.title}
//                 </a>
//               </h2>
//               <p>{paper.abstract}</p>
//               <button onClick={() => handleApprove(paper)} disabled={paper.status === 'approved'}>
//                 Approve
//               </button>
//               <input
//                 type="text"
//                 value={rejectionMessage}
//                 onChange={(e) => setRejectionMessage(e.target.value)}
//                 placeholder="Enter rejection reason"
//                 style={{ marginLeft: '10px', marginBottom: '10px' }}
//               />
//               <button onClick={() => handleReject(paper)} disabled={paper.status === 'rejected'}>
//                 Reject
//               </button>
//             </div>
//           ))}
//         </div>
//         {papers.length === 0 ? <h3>No paper found</h3> : ''}
//       </div>
//       <div style={{ height: '100px' }}></div>
//       <Footer />
//     </>
//   );
// }

// export default AdminPanel;















// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
// import { db } from '../backend/firebase';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOut } from '@fortawesome/free-solid-svg-icons';
// import { Button } from 'react-bootstrap';
// import { auth } from '../backend/firebase';
// import { useNavigate } from 'react-router-dom';
// import emailjs from 'emailjs-com';
// import '../css/AdminPanel.css';

// function AdminPanel() {
//     const [papers, setPapers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showRejectReason, setShowRejectReason] = useState(false);
//     const [rejectReason, setRejectReason] = useState('');
//     const navigate = useNavigate();
//     const [currentData, setCurrentData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const currentDoc = await getDoc(doc(db, "Current", "current"));
//             setCurrentData(currentDoc.data());
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         const fetchPapers = async () => {
//             const papersCollection = collection(db, 'PapersQueueCollection');
//             const papersSnapshot = await getDocs(papersCollection);
//             const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             const pendingPapers = papersList.filter(paper => paper.status === 'pending');
//             setPapers(pendingPapers);
//         };
//         fetchPapers();
//     }, []);

//     const handleApprove = async (paper) => {
//         setLoading(true);
//         const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//         await updateDoc(paperRef, { status: 'approved' });

//         const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//         const currentData = currentDoc.data();
// const volumeId = `Volume${currentData.volume}`;
// const issueId = `Issue${currentData.issue}`;


//         const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
//         await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

//         setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'approved' } : p)));

//         // Send a confirmation email using EmailJS
//         await sendConfirmationEmail(paper.authors[0].name, paper.authors[0].email, paper.title);
//         setLoading(false);
//     };

//     const handleReject = (paper) => {
//         setShowRejectReason(true);
//     };

//     const handleRejection = async (paper) => {
//         setLoading(true);
//         await sendRejectionEmail(paper);
//         setLoading(false);
//     };

//     const handleLogout = () => {
//         auth.signOut().then(() => {
//             localStorage.removeItem('isAdminAuthenticated');
//             navigate('/');
//         }).catch((error) => {
//             console.error('Logout failed:', error);
//         });
//     };

//     const sendConfirmationEmail = async (name, email, paperTitle) => {
//         try {
//             await emailjs.send(
//                 'service_tl2k8ng',
//                 'template_l6c94mj',
//                 {
//                     to_name: name,
//                     to_email: email,
//                     paper_title: paperTitle,
//                     volume: currentData?.volume,
//                     issue: currentData?.issue
//                 },
//                 'McN8gFqdeF-Bmbn-E'
//             );
//             alert('Confirmation email sent.');
//         } catch (err) {
//             alert('Failed to send confirmation email.');
//         }
//     };

//     const sendRejectionEmail = async (paper) => {
//         try {
//             await emailjs.send(
//                 'service_tl2k8ng',
//                 'template_s4m95cn',
//                 {
//                     to_name: paper.authors[0].name,
//                     to_email: paper.authors[0].email,
//                     paper_title: paper.title,
//                     rejection_reason: rejectReason
//                 },
//                 'McN8gFqdeF-Bmbn-E'
//             );

//             const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//             await updateDoc(paperRef, { status: 'rejected', rejectReason });
//             setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'rejected' } : p)));
//             alert('Rejection email sent successfully.');
//         } catch (err) {
//             alert('Failed to send rejection email.');
//         }
//     };

//     return (
//         <>
//             {loading && (
//                 <div className="loading-overlay">
//                     <div className="loading-indicator">
//                         <div className="spinner"></div>
//                     </div>
//                 </div>
//             )}
//             <Header />
//             <div className="admin-panel-container">
//                 <div className="admin-header">
//                     <h1 className="admin-title">Admin Panel</h1>
//                     <Button className="admin-logout-btn" onClick={handleLogout}>
//                         <FontAwesomeIcon icon={faSignOut} /> Logout
//                     </Button>
//                 </div>
//                 <div className="paper-container">
//                     {papers.map((paper) => (
//                         <div key={paper.id} className="paper-card">
//                             <h2 className="paper-title">
//                                 <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">
//                                     {paper.title}
//                                 </a>
//                             </h2>
//                             <p className="paper-abstract">{paper.abstract}</p>
//                             <p className="author-name">Keywords: {paper.keywords}</p>
//                             <div className="action-buttons">
//                                 <Button
//                                     className="approve-btn"
//                                     onClick={() => handleApprove(paper)}
//                                     disabled={paper.status === "approved"}
//                                 >
//                                     Approve
//                                 </Button>
//                                 <Button
//                                     className="reject-btn"
//                                     onClick={() => handleReject(paper)}
//                                     disabled={paper.status === "rejected"}
//                                 >
//                                     Reject
//                                 </Button>
//                             </div>

//                             {showRejectReason && (
//                                 <div className="input-container">
//                                     <label className="reject-reason-label" htmlFor="reject-reason">
//                                         Reason for Rejection:
//                                     </label>
//                                     <textarea
//                                         className="reject-reason-input"
//                                         id="reject-reason"
//                                         value={rejectReason}
//                                         onChange={(e) => setRejectReason(e.target.value)}
//                                         placeholder="Provide the reason for rejection here..."
//                                     />
//                                     <Button
//                                         className="submit-reject-button"
//                                         onClick={() => handleRejection(paper)}
//                                     >
//                                         Submit Reason and Reject
//                                     </Button>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     {papers.length === 0 && (
//                         <div>
//                             <div style={{ height: '30px' }}></div>
//                             <center>
//                                 <h1 className="no-papers-message">No papers found</h1>
//                             </center>
//                             <div style={{ height: '30px' }}></div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default AdminPanel;






// 27/10/2024




// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
// import { db } from '../backend/firebase';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOut } from '@fortawesome/free-solid-svg-icons';
// import { Button } from 'react-bootstrap';
// import { auth } from '../backend/firebase';
// import { useNavigate } from 'react-router-dom';
// import emailjs from 'emailjs-com';
// import '../css/AdminPanel.css';

// function AdminPanel() {
//     const [papers, setPapers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showRejectReason, setShowRejectReason] = useState(false);
//     const [rejectReason, setRejectReason] = useState('');
//     const navigate = useNavigate();
//     const [currentData, setCurrentData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const currentDoc = await getDoc(doc(db, "Current", "current"));
//             setCurrentData(currentDoc.data());
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         const fetchPapers = async () => {
//             const papersCollection = collection(db, 'PapersQueueCollection');
//             const papersSnapshot = await getDocs(papersCollection);
//             const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             const pendingPapers = papersList.filter(paper => paper.status === 'pending');
//             setPapers(pendingPapers);
//         };
//         fetchPapers();
//     }, []);

//     const handleApprove = async (paper) => {
//         setLoading(true);
//         const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//         await updateDoc(paperRef, { status: 'approved' });

//         const currentDoc = await getDoc(doc(db, 'Current', 'current'));
//         const currentData = currentDoc.data();
//         const volumeId = `Volume${currentData.volume}`;
//         const issueId = `Issue${currentData.issue}`;

//         const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
//         await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

//         // Remove the paper from the list once approved
//         setPapers(papers.filter(p => p.id !== paper.id));

//         // Send a confirmation email using EmailJS
//         await sendConfirmationEmail(paper.authors[0].name, paper.authors[0].email, paper.title);
//         setLoading(false);
//     };

//     const handleReject = (paper) => {
//         setShowRejectReason(true);
//     };

//     const handleRejection = async (paper) => {
//         setLoading(true);
//         await sendRejectionEmail(paper);

//         const paperRef = doc(db, 'PapersQueueCollection', paper.id);
//         await updateDoc(paperRef, { status: 'rejected', rejectReason });
        
//         // Remove the paper from the list once rejected
//         setPapers(papers.filter(p => p.id !== paper.id));
//         setLoading(false);
//     };

//     const handleLogout = () => {
//         auth.signOut().then(() => {
//             localStorage.removeItem('isAdminAuthenticated');
//             navigate('/');
//         }).catch((error) => {
//             console.error('Logout failed:', error);
//         });
//     };

//     const sendConfirmationEmail = async (name, email, paperTitle) => {
//         try {
//             await emailjs.send(
//                 'service_tl2k8ng',
//                 'template_l6c94mj',
//                 {
//                     to_name: name,
//                     to_email: email,
//                     paper_title: paperTitle,
//                     volume: currentData?.volume,
//                     issue: currentData?.issue
//                 },
//                 'McN8gFqdeF-Bmbn-E'
//             );
//             alert('Confirmation email sent.');
//         } catch (err) {
//             alert('Failed to send confirmation email.');
//         }
//     };

//     const sendRejectionEmail = async (paper) => {
//         try {
//             await emailjs.send(
//                 'service_tl2k8ng',
//                 'template_s4m95cn',
//                 {
//                     to_name: paper.authors[0].name,
//                     to_email: paper.authors[0].email,
//                     paper_title: paper.title,
//                     rejection_reason: rejectReason
//                 },
//                 'McN8gFqdeF-Bmbn-E'
//             );
//             alert('Rejection email sent successfully.');
//         } catch (err) {
//             alert('Failed to send rejection email.');
//         }
//     };

//     return (
//         <>
//             {loading && (
//                 <div className="loading-overlay">
//                     <div className="loading-indicator">
//                         <div className="spinner"></div>
//                     </div>
//                 </div>
//             )}
//             <Header />
//             <div className="admin-panel-container">
//                 <div className="admin-header">
//                     <h1 className="admin-title">Admin Panel</h1>
//                     <Button className="admin-logout-btn" onClick={handleLogout}>
//                         <FontAwesomeIcon icon={faSignOut} /> Logout
//                     </Button>
//                 </div>
//                 <div className="paper-container">
//                     {papers.map((paper) => (
//                         <div key={paper.id} className="paper-card">
//                             <h2 className="paper-title">
//                                 <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">
//                                     {paper.title}
//                                 </a>
//                             </h2>
//                             <p className="paper-abstract">{paper.abstract}</p>
//                             <p className="author-name">Keywords: {paper.keywords}</p>
//                             <div className="action-buttons">
//                                 <Button
//                                     className="approve-btn"
//                                     onClick={() => handleApprove(paper)}
//                                     disabled={paper.status === "approved"}
//                                 >
//                                     Approve
//                                 </Button>
//                                 <Button
//                                     className="reject-btn"
//                                     onClick={() => handleReject(paper)}
//                                     disabled={paper.status === "rejected"}
//                                 >
//                                     Reject
//                                 </Button>
//                             </div>

//                             {showRejectReason && (
//                                 <div className="input-container">
//                                     <label className="reject-reason-label" htmlFor="reject-reason">
//                                         Reason for Rejection:
//                                     </label>
//                                     <textarea
//                                         className="reject-reason-input"
//                                         id="reject-reason"
//                                         value={rejectReason}
//                                         onChange={(e) => setRejectReason(e.target.value)}
//                                         placeholder="Provide the reason for rejection here..."
//                                     />
//                                     <Button
//                                         className="submit-reject-button"
//                                         onClick={() => handleRejection(paper)}
//                                     >
//                                         Submit Reason and Reject
//                                     </Button>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     {papers.length === 0 && (
//                         <div>
//                             <div style={{ height: '30px' }}></div>
//                             <center>
//                                 <h1 className="no-papers-message">No papers found</h1>
//                             </center>
//                             <div style={{ height: '30px' }}></div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default AdminPanel;

import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
import { db } from '../backend/firebase';
import Header from '../components/header';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import toast CSS
import '../css/AdminPanel.css';

function AdminPanel() {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showRejectReason, setShowRejectReason] = useState(false);
    const [rejectReason, setRejectReason] = useState('');
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const currentDoc = await getDoc(doc(db, "Current", "current"));
            setCurrentData(currentDoc.data());
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchPapers = async () => {
            const papersCollection = collection(db, 'PapersQueueCollection');
            const papersSnapshot = await getDocs(papersCollection);
            const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const pendingPapers = papersList.filter(paper => paper.status === 'pending');
            setPapers(pendingPapers);
        };
        fetchPapers();
    }, []);

    const handleApprove = async (paper) => {
        setLoading(true);
        const paperRef = doc(db, 'PapersQueueCollection', paper.id);
        await updateDoc(paperRef, { status: 'approved' });

        const currentDoc = await getDoc(doc(db, 'Current', 'current'));
        const currentData = currentDoc.data();
        const volumeId = `Volume${currentData.volume}`;
        const issueId = `Issue${currentData.issue}`;

        const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
        await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

        // Notify success
        toast.success("Paper approved successfully!", {
            position: "top-right",
            autoClose: 3000,
        });

        // Refresh papers
        fetchPapers();

        // Send a confirmation email using EmailJS
        await sendConfirmationEmail(paper.authors[0].name, paper.authors[0].email, paper.title);
        setLoading(false);
    };

    const handleReject = (paper) => {
        setShowRejectReason(true);
    };

    const handleRejection = async (paper) => {
        setLoading(true);
        await sendRejectionEmail(paper);

        const paperRef = doc(db, 'PapersQueueCollection', paper.id);
        await updateDoc(paperRef, { status: 'rejected', rejectReason });
        
        // Notify success
        toast.success("Paper rejected successfully!", {
            position: "top-right",
            autoClose: 3000,
        });

        // Refresh papers
        fetchPapers();
        setLoading(false);
    };

    const fetchPapers = async () => {
        const papersCollection = collection(db, 'PapersQueueCollection');
        const papersSnapshot = await getDocs(papersCollection);
        const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const pendingPapers = papersList.filter(paper => paper.status === 'pending');
        setPapers(pendingPapers);
    };

    const handleLogout = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('isAdminAuthenticated');
            navigate('/');
        }).catch((error) => {
            console.error('Logout failed:', error);
        });
    };

    const sendConfirmationEmail = async (name, email, paperTitle) => {
        try {
            await emailjs.send(
                'service_tl2k8ng',
                'template_l6c94mj',
                {
                    to_name: name,
                    to_email: email,
                    paper_title: paperTitle,
                    volume: currentData?.volume,
                    issue: currentData?.issue
                },
                'McN8gFqdeF-Bmbn-E'
            );
            // Notification
            toast.success('Confirmation email sent.');
        } catch (err) {
            // Notification
            toast.error('Failed to send confirmation email.');
        }
    };

    const sendRejectionEmail = async (paper) => {
        try {
            await emailjs.send(
                'service_tl2k8ng',
                'template_s4m95cn',
                {
                    to_name: paper.authors[0].name,
                    to_email: paper.authors[0].email,
                    paper_title: paper.title,
                    rejection_reason: rejectReason
                },
                'McN8gFqdeF-Bmbn-E'
            );
            // Notification
            toast.success('Rejection email sent successfully.');
        } catch (err) {
            // Notification
            toast.error('Failed to send rejection email.');
        }
    };

    return (
        <>

<ToastContainer /> {/* Add ToastContainer to render toasts */}
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-indicator">
                        <div className="spinner"></div>
                    </div>
                </div>
            )}
            <Header />
            <div className="admin-panel-container">
                <div className="admin-header">

                    
                
                    <h1 className="admin-title" >Admin Panel</h1>
                
                   
                    <Button className="admin-logout-btn" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOut} /> Logout
                    </Button>
                </div>
                <div className="paper-container">
                    {papers.map((paper) => (
                        <div key={paper.id} className="paper-card">
                            <h2 className="paper-title">
                                <a href={paper.fileURL} target="_blank" rel="noopener noreferrer">
                                    {paper.title}
                                </a>
                            </h2>
                            <p className="paper-abstract">{paper.abstract}</p>
                            <p className="author-name">Keywords: {paper.keywords}</p>
                            <div className="action-buttons">
                                <Button
                                    className="approve-btn"
                                    onClick={() => handleApprove(paper)}
                                    disabled={paper.status === "approved"}
                                >
                                    Approve
                                </Button>
                                <Button
                                    className="reject-btn"
                                    onClick={() => handleReject(paper)}
                                    disabled={paper.status === "rejected"}
                                >
                                    Reject
                                </Button>
                            </div>

                            {showRejectReason && (
                                <div className="input-container">
                                    <label className="reject-reason-label" htmlFor="reject-reason">
                                        Reason for Rejection:
                                    </label>
                                    <textarea
                                        className="reject-reason-input"
                                        id="reject-reason"
                                        value={rejectReason}
                                        onChange={(e) => setRejectReason(e.target.value)}
                                        placeholder="Provide the reason for rejection here..."
                                    />
                                    <Button
                                        className="submit-reject-button"
                                        onClick={() => handleRejection(paper)}
                                    >
                                        Submit Reason and Reject
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                    {papers.length === 0 && (
                        <div>
                            <div style={{ height: '30px' }}></div>
                            <center>
                                <h1 className="no-papers-message">No papers found</h1>
                            </center>
                            <div style={{ height: '30px' }}></div>
                        </div>
                    )}
                </div>
            </div>
           
            <Footer />
        </>
    );
}

export default AdminPanel;
