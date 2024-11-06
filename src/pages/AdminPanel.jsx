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
import { collection, getDocs, doc, updateDoc, addDoc, getDoc, setDoc } from 'firebase/firestore/lite';
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

    const [editorialTeam, setEditorialTeam] = useState([]);
    const [assignedEditor, setAssignedEditor] = useState([]);
    const [selectedEditor, setSelectedEditor] = useState(null);
    const [selectedEditorId, setSelectedEditorId] = useState(null);

    const [isModalOpen, setModalOpen] = useState(false);


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

    useEffect(() => {
        const fetchEditorialTeam = async () => {
            try {
                const editorCollection = collection(db, 'EditorialTeam');
                const editorSnapshot = await getDocs(editorCollection);
                const editorList = editorSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setEditorialTeam(editorList);
            } catch (error) {
                console.error("Error fetching editors:", error);
            } finally {
            setLoading(false);
          }
        };
      
        fetchEditorialTeam(); // Corrected: invoke fetchAreas here
      }, []);


    //   let editorId;


       // Open the modal when Assign button is clicked
    // const handleAssignClick = () => {
    //     setModalOpen(true);
    // };

    // // Close the modal
    // const handleModalClose = () => {
    //     setModalOpen(false);
    // };

    //    // Handle selection of editor
    // const handleEditorSelection = (e) => {
    //     setSelectedEditor(e.target.value);
    // };

    const getAssignedEditorName = async (editorId) => {
        const docRef = await getDoc(doc(db, "EditorialTeam", editorId));
        const name = docRef.data().name;
        console.log(name);
    }

    const handleEditorChange = (e) => {
        setSelectedEditor(e.target.value); // Update selected editor
        setSelectedEditorId(e.target.id);  // Update selected editor ID (assuming the ID is in the target element)
    };

    // Assign editor and close the modal
    const handleAssign = async (paper) => {
        console.log(`Assigned to editor: ${selectedEditor}`);
        console.log(`Paper id: ${paper.id}`);

        const paperRef = doc(db, `EditorialTeam/${selectedEditor}/papersAssigned`, paper.id);
        const paperId = paper.id;
        // Adding the paperId to the papersAssigned subcollection for the selected editor
        await setDoc(paperRef, { paperId, completed: false });

        const currentDoc = await getDoc(doc(db, "EditorialTeam", selectedEditor));
        const editorialTeam = currentDoc.data().name;

        const paperIdRef = doc(db, 'PapersQueueCollection', paper.id);
        await updateDoc(paperIdRef, { asigned: true, assignedToId: selectedEditor, assignedToName: editorialTeam});

        console.log(`Assigned paper ${paperId} to editor: ${selectedEditor}`);
        // Add your Firebase logic here to assign editor in the database
        // handleModalClose();
    };

    

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

    const handleAcknowledgement = async (paper) => {
        setLoading(true);
        await sendAcknowledgementEmail(paper);

        const paperRef = doc(db, 'PapersQueueCollection', paper.id);
        await updateDoc(paperRef, { acknowledged: true });
        
        // // Notify success
        // toast.success("Acknowledgement sent successfully!", {
        //     position: "top-right",
        //     autoClose: 3000,
        // });

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
                'template_s4m95cn',
                {
                    to_name: name,
                    to_email: email,
                    message: `This is to inform you that your paper "${paperTitle}" has been successfully approved by IJESTM, in Volume ${currentData?.volume}, Issue ${currentData?.issue}.`,
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
                    message: `We regret to inform you that your paper titled "${paper.title}" has been rejected by IJESTM due to the following reasons: \n${rejectReason}`,
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

    const sendAcknowledgementEmail = async (paper) => {
        try {
            await emailjs.send(
                'service_tl2k8ng',
                // 'template_l6c94mj',
                'template_s4m95cn',
                {
                    to_name: paper.authors[0].name,
                    to_email: paper.authors[0].email,
                    message: `We would like to thank you for submitting your paper to IJESTM. We are pleased to inform you that we have successfully received your submission, titled "${paper.title}".\n\nOur editorial team will review your paper as soon as possible. Once the review process is complete, we will reach out to you with a confirmation email and further updates regarding the status of your submission.\n\nWe appreciate your interest in contributing to IJESTM and look forward to reviewing your work. If you have any questions or need further assistance, please feel free to reach out to us at info@ijestm.com.`,
                },
                'McN8gFqdeF-Bmbn-E'
            );
            // Notification
            toast.success('Acknowledgement sent successfully.');
        } catch (err) {
            // Notification
            toast.error('Failed to send Acknowledgement.');
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
                            <p className="author-name">Keywords: {paper.keywords.map((keyword) => (
                                <span> {keyword}, </span>
                            ))}</p>
                            <p className="assigned-to">Assigned To: {paper.assignedToName}</p>
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
                                <Button
                                    className="ack-btn"
                                    onClick={() => handleAcknowledgement(paper)}
                                    disabled={paper.acknowledged === true}
                                >
                                    Send Acknowledgement
                                </Button>
                                
                            </div>
                            <div>
                                <label htmlFor="editorDropdown">Assign Editor:</label>
                                <select
                                    id="editorDropdown"
                                    // value={selectedEditor}
                                    // onChange={(e) => setSelectedEditor(e.target.value)}
                                    onChange={handleEditorChange}
                                >
                                    <option value="">Select an editor</option>
                                    {editorialTeam.map((editor) => (
                                        <option id={editor.id} key={editor.id} value={editor.id}>
                                            {editor.name}
                                        </option>
                                        
                                    ))}
                                </select>

                                <button onClick={() => handleAssign(paper)}>Assign</button>
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
