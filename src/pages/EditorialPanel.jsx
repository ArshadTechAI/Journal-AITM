
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
// import { ToastContainer, toast } from "react-toastify";  // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css';  // Import toast CSS
// import '../css/AdminPanel.css';

// function EditorialPanel() {
//     const [papers, setPapers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showRejectReason, setShowRejectReason] = useState(false);
//     const [rejectReason, setRejectReason] = useState('');
//     const navigate = useNavigate();
//     const [currentData, setCurrentData] = useState(null);


//     ////////////////////////////////////
//     const [uid, setUid] = useState(null);
//     const [papersAssigned, setPapersAssigned] = useState([]);
//     const [paperDetails, setPaperDetails] = useState([]);

//     useEffect(() => {
//         // Fetch the list of papers assigned to the current user
//         const fetchAssignedPapers = async () => {
//             const user = auth.currentUser;
//             if (user) {
//                 setUid(user.uid);

//                 try {
//                     const papersCollectionRef = collection(db, `EditorialTeam/${user.uid}/papersAssigned`);
//                     const papersSnapshot = await getDocs(papersCollectionRef);

//                     // Retrieve the list of assigned paper IDs
//                     const papersList = papersSnapshot.docs.map(doc => doc.id);
//                     setPapersAssigned(papersList);

//                 } catch (error) {
//                     console.error("Error fetching assigned papers:", error);
//                 }
//             }
//         };

//         fetchAssignedPapers();
//     },);

//     useEffect(() => {
//         // Fetch paper details from PapersQueueCollection based on assigned paper IDs
//         const fetchPaperDetails = async () => {
//             try {
//                 const paperDetailsList = await Promise.all(
//                     papersAssigned.map(async (paperId) => {
//                         const paperRef = doc(db, `PapersQueueCollection/${paperId}`);
//                         const paperSnap = await getDoc(paperRef);
//                         if (paperSnap.exists()) {
//                             return { id: paperId, ...paperSnap.data() };
//                         } else {
//                             console.log(`Paper with ID ${paperId} not found`);
//                             return null;
//                         }
//                     })
//                 );

//                 // Filter out any null results (in case some IDs don't match any documents)
//                 setPaperDetails(paperDetailsList.filter(paper => paper !== null));
//             } catch (error) {
//                 console.error("Error fetching paper details:", error);
//             }
//         };

//         if (papersAssigned.length > 0) {
//             fetchPaperDetails();
//         }
//     },);
//     // const [uid, setUid] = useState(null);
//     // const [papersAssigned, setPapersAssigned] = useState([]);
//     // const auth = getAuth();
//     // const db = getFirestore();

//     // useEffect(() => {
//     //     // Get the current user's UID
//     //     const fetchUserData = async () => {
//     //         const user = auth.currentUser;
//     //         if (user) {
//     //             setUid(user.uid); // Set the user's UID in state

//     //             // Fetch papers assigned based on UID
//     //             // try {
//     //             //     const papersRef = doc(db, `EditorialTeam/${user.uid}/papersAssigned`);
//     //             //     const papersSnap = await getDoc(papersRef);

//     //             //     if (papersSnap.exists()) {
//     //             //         setPapersAssigned(papersSnap.data().papers || []); // Set papersAssigned in state
//     //             //     } else {
//     //             //         console.log("No papers assigned found!");
//     //             //     }
//     //             // } catch (error) {
//     //             //     console.error("Error fetching papers assigned:", error);
//     //             // }
//     //             // Fetch papers assigned based on UID
//     //             try {
//     //                 const papersCollectionRef = collection(db, `EditorialTeam/${user.uid}/papersAssigned`);
//     //                 const papersSnapshot = await getDocs(papersCollectionRef);

//     //                 // Map through the snapshot to get individual documents
//     //                 const papersList = papersSnapshot.docs.map(doc => ({
//     //                     id: doc.id,
//     //                     ...doc.data(),
//     //                 }));
//     //                 setPapersAssigned(papersList); // Set papersAssigned in state
//     //             } catch (error) {
//     //                 console.error("Error fetching papers assigned:", error);
//     //             }
//     //         }
//     //     };

//     //     fetchUserData();
//     // },);

//     ////////////////////////////////////

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

//         const ref = doc(db, `EditorialTeam/${uid}/papersAssigned`, paper.id);
//         await updateDoc(ref, { completed: true });

//         // Notify success
//         toast.success("Paper approved successfully!", {
//             position: "top-right",
//             autoClose: 3000,
//         });

//         // Refresh papers
//         fetchPapers();

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

//         const ref = doc(db, `EditorialTeam/${uid}/papersAssigned`, paper.id);
//         await updateDoc(ref, { completed: true });
        
//         // Notify success
//         toast.success("Paper rejected successfully!", {
//             position: "top-right",
//             autoClose: 3000,
//         });

//         // Refresh papers
//         fetchPapers();
//         setLoading(false);
//     };

//     const fetchPapers = async () => {
//         const papersCollection = collection(db, 'PapersQueueCollection');
//         const papersSnapshot = await getDocs(papersCollection);
//         const papersList = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         const pendingPapers = papersList.filter(paper => paper.status === 'pending');
//         setPapers(pendingPapers);
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
//                 'template_s4m95cn',
//                 {
//                     to_name: name,
//                     to_email: email,
//                     message: `This is to inform you that your paper "${paperTitle}" has been successfully approved by IJESTM, in Volume ${currentData?.volume}, Issue ${currentData?.issue}.`,
//                 },
//                 'McN8gFqdeF-Bmbn-E'
//             );
//             // Notification
//             toast.success('Confirmation email sent.');
//         } catch (err) {
//             // Notification
//             toast.error('Failed to send confirmation email.');
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
//                     message: `We regret to inform you that your paper titled "${paper.title}" has been rejected by IJESTM due to the following reasons: \n${rejectReason}`,
//                 },
//                 'McN8gFqdeF-Bmbn-E'
//             );
//             // Notification
//             toast.success('Rejection email sent successfully.');
//         } catch (err) {
//             // Notification
//             toast.error('Failed to send rejection email.');
//         }
//     };


//     return (
//         <>

// <ToastContainer /> {/* Add ToastContainer to render toasts */}
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

                    
                
//                     <h1 className="admin-title" >Editorial Panel</h1>
                
                   
//                     <Button className="admin-logout-btn" onClick={handleLogout}>
//                         <FontAwesomeIcon icon={faSignOut} /> Logout
//                     </Button>
//                 </div>
//                 <div className="paper-container">
//                     {paperDetails.map((paper) => (
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
//                     {paperDetails.length === 0 && (
//                         <div>
//                             <div style={{ height: '30px' }}></div>
//                             <center>
//                                 <h1 className="no-papers-message">No papers found</h1>
//                             </center>
//                             <div style={{ height: '30px' }}></div>
//                         </div>
//                     )}
//                     {/* <h2>Assigned Papers</h2>
//                     <ul> */}
//                         {/* {papersAssigned.map((paper, index) => (
//                             <li key={index}>{paper.paperId}</li> // Adjust as per your paper structure
//                         ))} */}
//                         {/* {paperDetails.map((paper) => (
//                             <li key={paper.id}>{paper.title} - {paper.author}</li> // Adjust based on paper structure
//                         ))} */}
//                     {/* </ul> */}
//                 </div>
//             </div>
           
//             <Footer />
//         </>
//     );
// }

// export default EditorialPanel;
