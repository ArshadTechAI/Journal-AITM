import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, addDoc, getDoc } from 'firebase/firestore/lite';
import {db} from '../backend/firebase'
import Header from '../components/header'
import Footer from '../components/footer'

function AdminPanel() {
    const [papers, setPapers] = useState([]);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

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
    const paperRef = doc(db, 'PapersQueueCollection', paper.id);
    await updateDoc(paperRef, { status: 'approved' });
    const currentDoc = await getDoc(doc(db, 'Current', 'current'));
    const currentData = currentDoc.data();
    const volumeId = `Volume${currentData.volume}`; // Fixed line
    const issueId = `Issue${currentData.issue}`;   // Fixed line

    const papersCollectionRef = collection(db, 'PapersCollection', volumeId, issueId);
    await addDoc(papersCollectionRef, { ...paper, status: 'approved' });

    setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'approved' } : p)));
};


  const handleReject = async (paper) => {
    const paperRef = doc(db, 'PapersQueueCollection', paper.id);
    await updateDoc(paperRef, { status: 'rejected' });

    setPapers(papers.map(p => (p.id === paper.id ? { ...p, status: 'rejected' } : p)));
  };

  return (
    <>
        <Header/>
        <div style={{width: '100%', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {/* <h1>Admin Panel</h1> */}
            <center style={{width: '100%', backgroundColor: '#D9E3F0' }}>
            <h1 style={{ paddingTop: '8px', paddingBottom: '8px' }}>Admin Panel</h1>
            </center>
            <div style={{height: '100px'}}></div>
            <div >
            {papers.map((paper) => (
                <div key={paper.id} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
                <h2>{paper.title}</h2>
                <p>{paper.abstract}</p>
                {/* Render PDF using react-pdf */}
                {/* <div style={{ height: '500px', width: '500px' }}>
                    <Document file={paper.fileURL} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={index} pageNumber={index + 1} />
                    ))}
                    </Document>
                </div> */}
                <button onClick={() => handleApprove(paper)} disabled={paper.status === 'approved'}>
                    Approve
                </button>
                <button onClick={() => handleReject(paper)} disabled={paper.status === 'rejected'}>
                    Reject
                </button>
                </div>
            ))}
            </div>
            {papers.length === 0 ? <h3>No paper found</h3> : ''}
        </div>
        <div style={{ height: '100px'}}></div>
        <Footer/>
    </>
  )
}
  export default AdminPanel;