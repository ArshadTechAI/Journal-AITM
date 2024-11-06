import React, { useEffect, useState, useRef } from "react"; // Step 1: Create the ref
import { db, storage } from '../backend/firebase'; // Adjust the import path as necessary
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore/lite";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import Header from "../components/header";
import '../css/Submissions.css';
import Footer from "../components/footer";
import { Button } from "react-bootstrap";
import AOS from 'aos';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

function Submissions() {


    // State to hold address details

  const [address, setAddress] = useState({
    country: '',
    state: '',
    city: '',
    postalCode: '',
  });
  // Function to handle input changes
  const handleAddressChange = (field, value) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [field]: value,
    }));
  };









    // State to hold authors' details
    const [authors, setAuthors] = useState([
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
    ]);
    const handleeInputChange = (index, field, value) => {
      const updatedAuthors = [...authors];
      updatedAuthors[index][field] = value;
      setAuthors(updatedAuthors);
    };











  const fileInputRef = useRef(null); // Step 1: Create the ref

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    researchArea: '',
    researchPaper: '',
    message: '',
    author: {
      name: '',
      designation: '',
      organization: '',
      email: '',
      mobile: ''
    },
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAuthorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      author: {
        ...prevData.author,
        [name]: value
      }
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthors([
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
      { name: '', designation: '', organization: '', email: '', mobile: '' },
    ]);



      // Reset address details
      setAddress({
        country: '',
        state: '',
        city: '',
        postalCode: '',
      });


  
    if (!formData.file) {
      toast.error('Please upload a file');
      return;
    }
  
    setLoading(true);
    try {
      const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim());
      const authorArray = [
        ...Array.from(document.querySelectorAll('.custom-table tbody tr'))
          .map((row) => ({
            name: row.querySelector('.name-input').value.trim(),
            designation: row.querySelector('.designation-input').value.trim(),
            organization: row.querySelector('.organization-input').value.trim(),
            email: row.querySelector('.email-input').value.trim(),
            mobile: row.querySelector('.mobile-input').value.trim(),
          }))
          .filter((author) =>
            author.name && author.designation && author.organization && author.email && author.mobile
          ),
      ];
  
      const country = document.querySelector('input[name="country"]').value.trim();
      const state = document.querySelector('input[name="state"]').value.trim();
      const city = document.querySelector('input[name="city"]').value.trim();
      const postalCode = document.querySelector('input[name="postal_code"]').value.trim();
      const author_address = [{
        country,
        state,
        city,
        postal_code: postalCode,
      }];
      const reviewer_referral_id = document.querySelector('input[name="reviewerReferralId"]').value.trim();
  
      const currentDoc = await getDoc(doc(db, 'Current', 'current'));
      if (!currentDoc.exists()) {
        throw new Error('Current document does not exist');
      }
      const currentData = currentDoc.data();
      const volumeId = `Volume${currentData.volume}`;
      const issueId = `Issue${currentData.issue}`;
  
      const timestamp = Date.now();
      const storageRef = ref(storage, `papers/${timestamp}_${formData.file.name}`);
      await uploadBytes(storageRef, formData.file);
      const fileURL = await getDownloadURL(storageRef);
  
      const paperData = {
        title: formData.title,
        abstract: formData.abstract,
        keywords: keywordsArray,
        researchArea: formData.researchArea,
        message: formData.message,
        authors: authorArray,
        fileURL: fileURL,
        status: 'pending',
        timestamp: serverTimestamp(),
        authorAddress: author_address,
        reviewerReferralId: reviewer_referral_id
      };
  
      const papersQueueCollectionRef = collection(db, 'PapersQueueCollection');
      await addDoc(papersQueueCollectionRef, paperData);
  
      toast.success('Journal submitted successfully!');
  
      // Clear form fields
      setFormData({
        title: '',
        abstract: '',
        keywords: '',
        researchArea: '',
        researchPaper: '',
        message: '',
        author: {
          name: '',
          designation: '',
          organization: '',
          email: '',
          mobile: ''
        },
        file: null
      });

      // Clear the file input
      fileInputRef.current.value = null; // Reset the file input

    } catch (error) {
      console.error("Error submitting journal: ", error);
      toast.error('Error submitting journal: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
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
  
    fetchAreas(); // Corrected: invoke fetchAreas here
  }, []);
  
  return (
    <>
      <ToastContainer />
      <Header/>
      <div className="body">
        {loading && (
          <div className="loading-overlay">
            <div className="loading-indicator">
              <div className="spinner"></div>
            </div>
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '3rem', color: '#005b8c' }} data-aos="fade-up">Submit Research Paper</h1>
        </div>
        <hr />
        <h3 data-aos="fade-up"><b style={{ color: "rgb(0, 91, 140)" }}>Important Instructions</b></h3>
        <form onSubmit={handleSubmit}>
          <ul>
            <li data-aos="fade-up">We recommend reading the publication guidelines/process, Fees & Payment, and FAQs before submitting your research paper.</li>
            <li data-aos="fade-up">Kindly fill in all the details properly as the certificate will be generated based on the information provided below.</li>
            <li data-aos="fade-up">All input fields marked with a red left border are mandatory; they must be filled in.</li>
            <li data-aos="fade-up">It is important that you provide a functioning email address and mobile number of the first author correctly because all communication will occur on those email address and/or mobile number.</li>
            <li data-aos="fade-up">Details of the paper (Title, Abstract, Keywords, Author Name(s), Designation(s), Organization Name(s)) must be the same as mentioned in the research paper you are submitting.</li>
            <li data-aos="fade-up">Please write the Abstract in Sentence case, the email address in lower case, and all other fields in Title Case (capitalize the first character of each word). It's better NOT to write in UPPER CASE.</li>
          </ul>
          <center>
            <h3 className='text_with_background' data-aos="fade-up">Please fill in the details of the research paper.</h3>
          </center>
          <div className='input_container'>
            <div className='row_input_component' data-aos="fade-up">
              <label htmlFor="title">Title:</label>
              <input
                className='red_border_input'
                placeholder='Please write in title case (Not in CAPITAL CASE)'
                type="text"
                id="title"
                name="title"
                value={formData.title}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='row_input_component' data-aos="fade-up" data-aos-delay="100">
              <label htmlFor="abstract">Abstract:</label>
              <input
                className='red_border_input'
                placeholder='Short background information about the research'
                type="text"
                id="abstract"
                name="abstract"
                value={formData.abstract}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='row_input_component' data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="keywords">Keywords:</label>
              <input
                className='red_border_input'
                placeholder='Keywords should be comma-separated'
                type="text"
                id="keywords"
                name="keywords"
                value={formData.keywords}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='row_input_component' data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="researchArea">Research Area:</label>
              <select
                className='red_border_input'
                id="researchArea"
                name="researchArea"
                value={formData.researchArea}
                required
                onChange={handleInputChange}
              >
                <option value="">Select Research Area</option>
                {areas.map((area, index) => (
                  <option key={index} value={area}>{area}</option>
                ))}
              </select>
            </div>
            <div className='row_input_component' data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="researchPaper">Select Research Paper:</label>
              <input
                className='red_border_input'
                type="file"
                id="researchPaper"
                name="researchPaper"
                accept=".pdf"
                onChange={handleFileChange}
                required
                ref={fileInputRef} // Attach ref here
              />
            </div>
  <div className='row_input_component' data-aos="fade-up" data-aos-delay="500">
    <label htmlFor="message">Message to Editor or Reviewer:</label>
    <input
      className='red_border_input not_required_field'
      placeholder='Enter your message here...'
      type="text"
      id="message"
      name="message"
      value={formData.message}

      onChange={handleInputChange}
    />
  </div>
</div>

<form onSubmit={handleSubmit}>
      <center data-aos="fade-up">
        <h3 className='text_with_background'>Authors' Details</h3>
        <p>Don't write Dr. Prof. Mr. Mrs. Miss etc. salutations before authors' names, these will be removed, these are against international standard.</p>
      </center>
      
      <table className="custom-table" data-aos="fade-up">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Organization</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td data-label="#">{index + 1}.</td>
              <td data-label="Name">
                <input
                  type="text"
                  placeholder="In title case"
                  className="table-input name-input required_field"
                  value={author.name}
                  onChange={(e) => handleeInputChange(index, 'name', e.target.value)}
                  required
                />
              </td>
              <td data-label="Designation">
                <input
                  type="text"
                  placeholder="In title case"
                  className="table-input designation-input required_field"
                  value={author.designation}
                  onChange={(e) => handleeInputChange(index, 'designation', e.target.value)}
                  required
                />
              </td>
              <td data-label="Organization">
                <input
                  type="text"
                  placeholder="In title case"
                  className="table-input organization-input required_field"
                  value={author.organization}
                  onChange={(e) => handleeInputChange(index, 'organization', e.target.value)}
                  required
                />
              </td>
              <td data-label="Email Address">
                <input
                  type="email"
                  placeholder="e.g. example@example.com"
                  className="table-input email-input required_field"
                  value={author.email}
                  onChange={(e) => handleeInputChange(index, 'email', e.target.value)}
                  required
                />
              </td>
              <td data-label="Mobile Number">
                <input
                  type="text"
                  placeholder="+91 0000000000"
                  className="table-input mobile-input required_field"
                  value={author.mobile}
                  onChange={(e) => handleeInputChange(index, 'mobile', e.target.value)}
                  required
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      

    </form>
<div>
  <div>
    <div style={{marginTop: "10px"}}>
            <center><p>Are there more authors? Don't worry; just write the five authors' names and we will add other author(s) from your uploaded research paper's file.</p></center>

            </div>
            </div>
            </div>
            <form onSubmit={handleSubmit}>
      <center data-aos="fade-up">
        <h3 className='text_with_background'>Address for Communication</h3>
      </center>

      <div style={{ alignItems: 'center', justifyContent: 'space-between' }} data-aos="fade-up">
        <div className='column_input_component'>
          <label htmlFor="country">Country:</label>
          <input
            className='small_input'
            type="text"
            placeholder='Enter Country Name'
            id="country"
            name="country"
            value={address.country}
            onChange={(e) => handleAddressChange('country', e.target.value)}
            required
          />
        </div>

        <div className='column_input_component'>
          <label htmlFor="state">State:</label>
          <input
            className='small_input'
            type="text"
            placeholder='Enter State Name'
            id="state"
            name="state"
            value={address.state}
            onChange={(e) => handleAddressChange('state', e.target.value)}
            required
          />
        </div>

        <div className='column_input_component'>
          <label htmlFor="city">City/District:</label>
          <input
            className='small_input'
            type="text"
            placeholder='Enter City Name'
            id="city"
            name="city"
            value={address.city}
            onChange={(e) => handleAddressChange('city', e.target.value)}
            required
          />
        </div>

        <div className='column_input_component'>
          <label htmlFor="postal_code">Postal Code:</label>
          <input
            className='small_input'
            type="text"
            placeholder='Enter Postal Code'
            id="postal_code"
            name="postal_code"
            value={address.postalCode}
            onChange={(e) => handleAddressChange('postalCode', e.target.value)}
            required
          />
        </div>
      </div>

     
    </form>

            <center>
                    <div className='column_input_component' style={{ width: '40%', display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="title">Reviewer Referral Id :</label>
                        <input className='small_input not_required_field' type="text" placeholder='Enter reviewer referral Id ' id="reviewerReferralId" name="reviewerReferralId"/>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
  <input 
    type="checkbox" 
    id="privacy_policy" 
    style={{ width: '16px', height: '16px', verticalAlign: 'middle' }} 
  />
 <label 
    htmlFor="privacy_policy" 
    style={{ marginLeft: '10px', verticalAlign: 'middle' }} 
    
>
    I agree with the <a href="/publication-ethics">journal/website's policies</a>
</label>

</div>



                    {/* </div> */}

                    <div style={{ height: '20px'}}></div>

                    <div style={{ display: 'flex', width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                        {/* <button type="submit" className="submit_button">Submit</button> */}
                        <Button 
        onClick={handleSubmit} 
        style={{
            padding: '10px 20px',
            backgroundColor: '#005b8c',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: '0.4s',
        }}
       
    >
        Submit
    </Button>                    </div>
                    <div style={{marginBottom: '50px'}}></div>
            </center>
          </form>

          
        </div>
        <Footer/>
      </>
    )
}

export default Submissions;


















// // import React from 'react'

// // function Submissions() {
// //   return (
// //     <div>Submissions</div>
// //   )
// // }

// // export default Submissions


// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Submissions.css'; // Custom CSS for the red border
// import Footer from '../components/footer';
// import Header from '../components/header';

// const Submissions = () => {
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions before submitting.");
//       return;
//     }
//     // Handle the form submission logic here
//   };

//   return (
//     <>
//     <Header/>
//     <Container className="mt-4">
//       <h1>Research Paper Submission</h1>
//       <p className="instructions">
//         We recommend reading the <a href="#">publication guidelines/process</a>, 
//         <a href="#"> Fees & Payment</a>, and <a href="#">FAQs</a> before submitting your research paper. <br />
//         Kindly fill all the details properly as certificates will be generated based on the information provided below. <br />
//         Fields marked with a red left border are mandatory. Ensure your email and mobile number are functioning, as all communication will be done via these details.
//       </p>
//       <Form onSubmit={handleSubmit}>

//         {/* Paper Details */}
//         <h3>Paper Details</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="title" className="required-field">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" placeholder="Enter paper title" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="keywords" className="required-field">
//               <Form.Label>Keywords</Form.Label>
//               <Form.Control type="text" placeholder="Enter keywords" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="abstract" className="required-field">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter abstract" required />
//         </Form.Group>

//         <Form.Group controlId="researchArea" className="required-field">
//           <Form.Label>Research Area</Form.Label>
//           <Form.Control type="text" placeholder="Enter research area" required />
//         </Form.Group>

//         <Form.Group controlId="researchPaper" className="required-field">
//           <Form.Label>Research Paper (File Upload)</Form.Label>
//           <Form.Control type="file" required />
//         </Form.Group>

//         <Form.Group controlId="messageToEditor">
//           <Form.Label>Message to Editor (Optional)</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Write a message (optional)" />
//         </Form.Group>

//         {/* Author Details */}
//         <h3>Author Details</h3>
//         {[...Array(5)].map((_, i) => (
//           <Row key={i} className="mb-3">
//             <Col md={6}>
//               <Form.Group controlId={`authorName${i + 1}`} className={i === 0 ? 'required-field' : ''}>
//                 <Form.Label>Author {i + 1} Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter author name" required={i === 0} />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorDesignation${i + 1}`}>
//                 <Form.Label>Designation</Form.Label>
//                 <Form.Control type="text" placeholder="Enter designation" />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorOrganization${i + 1}`}>
//                 <Form.Label>Organization</Form.Label>
//                 <Form.Control type="text" placeholder="Enter organization" />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorEmail${i + 1}`}>
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group controlId={`authorPhone${i + 1}`}>
//                 <Form.Label>Phone</Form.Label>
//                 <Form.Control type="tel" placeholder="Enter phone number" />
//               </Form.Group>
//             </Col>
//           </Row>
//         ))}

//         {/* Contact Address */}
//         <h3>Contact Address</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="country" className="required-field">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="text" placeholder="Enter country" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="state" className="required-field">
//               <Form.Label>State</Form.Label>
//               <Form.Control type="text" placeholder="Enter state" required />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="district" className="required-field">
//               <Form.Label>District</Form.Label>
//               <Form.Control type="text" placeholder="Enter district" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="postalCode" className="required-field">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" placeholder="Enter postal code" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Referral ID */}
//         <Form.Group controlId="referralId">
//           <Form.Label>Referral ID (Optional)</Form.Label>
//           <Form.Control type="text" placeholder="Enter referral ID" />
//         </Form.Group>

//         {/* Terms & Conditions */}
//         <Form.Group controlId="terms" className="required-field">
//           <Form.Check 
//             type="checkbox" 
//             label="I accept the terms and conditions" 
//             required 
//             checked={acceptedTerms}
//             onChange={() => setAcceptedTerms(!acceptedTerms)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Paper
//         </Button>
//       </Form>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default Submissions;

// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Submissions.css';

// const Submissions = () => {
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions before submitting.");
//       return;
//     }
//     // Handle the form submission logic here
//   };

//   return (
//     <Container className="mt-4">
//       <h1>Research Paper Submission</h1>
//       <p className="instructions">
//         We recommend reading the <a href="#">publication guidelines/process</a>, 
//         <a href="#"> Fees & Payment</a>, and <a href="#">FAQs</a> before submitting your research paper. <br />
//         Kindly fill all the details properly as certificates will be generated based on the information provided below. <br />
//         Fields marked with a red left border are mandatory. Ensure your email and mobile number are functioning, as all communication will be done via these details.
//       </p>
//       <Form onSubmit={handleSubmit}>

//         {/* Paper Details */}
//         <h3>Paper Details</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="title" className="required-field">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" placeholder="Enter paper title" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="keywords" className="required-field">
//               <Form.Label>Keywords</Form.Label>
//               <Form.Control type="text" placeholder="Enter keywords" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="abstract" className="required-field">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter abstract" required />
//         </Form.Group>

//         <Form.Group controlId="researchArea" className="required-field">
//           <Form.Label>Research Area</Form.Label>
//           <Form.Control type="text" placeholder="Enter research area" required />
//         </Form.Group>

//         <Form.Group controlId="researchPaper" className="required-field">
//           <Form.Label>Research Paper (File Upload)</Form.Label>
//           <Form.Control type="file" required />
//         </Form.Group>

//         <Form.Group controlId="messageToEditor">
//           <Form.Label>Message to Editor (Optional)</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Write a message (optional)" />
//         </Form.Group>

//         {/* Author Details - Accordion Dropdowns */}
//         <h3>Author Details</h3>
//         <Accordion>
//           {[...Array(5)].map((_, i) => (
//             <Card key={i}>
//               <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
//                 Author {i + 1} Details
//               </Accordion.Toggle>
//               <Accordion.Collapse eventKey={String(i)}>
//                 <Card.Body>
//                   <Row className="mb-3">
//                     <Col md={6}>
//                       <Form.Group controlId={`authorName${i + 1}`} className={i === 0 ? 'required-field' : ''}>
//                         <Form.Label>Author {i + 1} Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter author name" required={i === 0} />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorDesignation${i + 1}`}>
//                         <Form.Label>Designation</Form.Label>
//                         <Form.Control type="text" placeholder="Enter designation" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorOrganization${i + 1}`}>
//                         <Form.Label>Organization</Form.Label>
//                         <Form.Control type="text" placeholder="Enter organization" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorEmail${i + 1}`}>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorPhone${i + 1}`}>
//                         <Form.Label>Phone</Form.Label>
//                         <Form.Control type="tel" placeholder="Enter phone number" />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           ))}
//         </Accordion>

//         {/* Contact Address */}
//         <h3>Contact Address</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="country" className="required-field">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="text" placeholder="Enter country" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="state" className="required-field">
//               <Form.Label>State</Form.Label>
//               <Form.Control type="text" placeholder="Enter state" required />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="district" className="required-field">
//               <Form.Label>District</Form.Label>
//               <Form.Control type="text" placeholder="Enter district" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="postalCode" className="required-field">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" placeholder="Enter postal code" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Referral ID */}
//         <Form.Group controlId="referralId">
//           <Form.Label>Referral ID (Optional)</Form.Label>
//           <Form.Control type="text" placeholder="Enter referral ID" />
//         </Form.Group>

//         {/* Terms & Conditions */}
//         <Form.Group controlId="terms" className="required-field">
//           <Form.Check 
//             type="checkbox" 
//             label="I accept the terms and conditions" 
//             required 
//             checked={acceptedTerms}
//             onChange={() => setAcceptedTerms(!acceptedTerms)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Paper
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Submissions;



// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Submissions.css';

// export const Submissions = () => {
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert("Please accept the terms and conditions before submitting.");
//       return;
//     }
//     // Proceed with submission if terms are accepted
//     console.log("Form submitted successfully!");
//   };

//   return (
//     <Container className="mt-4">
//       <h1>Research Paper Submission</h1>
//       <p className="instructions">
//         We recommend reading the <a href="#">publication guidelines/process</a>, 
//         <a href="#"> Fees & Payment</a>, and <a href="#">FAQs</a> before submitting your research paper. <br />
//         Fields marked with a red left border are mandatory. Ensure your email and mobile number are functioning, as all communication will be done via these details.
//       </p>
//       <Form onSubmit={handleSubmit}>
//         {/* Paper Details */}
//         <h3>Paper Details</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="title" className="required-field">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="text" placeholder="Enter paper title" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="keywords" className="required-field">
//               <Form.Label>Keywords</Form.Label>
//               <Form.Control type="text" placeholder="Enter keywords" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="abstract" className="required-field">
//           <Form.Label>Abstract</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter abstract" required />
//         </Form.Group>

//         <Form.Group controlId="researchArea" className="required-field">
//           <Form.Label>Research Area</Form.Label>
//           <Form.Control type="text" placeholder="Enter research area" required />
//         </Form.Group>

//         <Form.Group controlId="researchPaper" className="required-field">
//           <Form.Label>Research Paper (File Upload)</Form.Label>
//           <Form.Control type="file" required />
//         </Form.Group>

//         <Form.Group controlId="messageToEditor">
//           <Form.Label>Message to Editor (Optional)</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Write a message (optional)" />
//         </Form.Group>

//         {/* Author Details */}
//         <h3>Author Details</h3>
//         <Accordion>
//           {[...Array(5)].map((_, i) => (
//             <Card key={i}>
//               <Accordion.Toggle as={Card.Header} eventKey={String(i)}>
//                 Author {i + 1} Details
//               </Accordion.Toggle>
//               <Accordion.Collapse eventKey={String(i)}>
//                 <Card.Body>
//                   <Row className="mb-3">
//                     <Col md={6}>
//                       <Form.Group controlId={`authorName${i + 1}`} className={i === 0 ? 'required-field' : ''}>
//                         <Form.Label>Author {i + 1} Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter author name" required={i === 0} />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorDesignation${i + 1}`}>
//                         <Form.Label>Designation</Form.Label>
//                         <Form.Control type="text" placeholder="Enter designation" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorOrganization${i + 1}`}>
//                         <Form.Label>Organization</Form.Label>
//                         <Form.Control type="text" placeholder="Enter organization" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorEmail${i + 1}`}>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group controlId={`authorPhone${i + 1}`}>
//                         <Form.Label>Phone</Form.Label>
//                         <Form.Control type="tel" placeholder="Enter phone number" />
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           ))}
//         </Accordion>

//         {/* Contact Address */}
//         <h3>Contact Address</h3>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="country" className="required-field">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="text" placeholder="Enter country" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="state" className="required-field">
//               <Form.Label>State</Form.Label>
//               <Form.Control type="text" placeholder="Enter state" required />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="district" className="required-field">
//               <Form.Label>District</Form.Label>
//               <Form.Control type="text" placeholder="Enter district" required />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="postalCode" className="required-field">
//               <Form.Label>Postal Code</Form.Label>
//               <Form.Control type="text" placeholder="Enter postal code" required />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Referral ID */}
//         <Form.Group controlId="referralId">
//           <Form.Label>Referral ID (Optional)</Form.Label>
//           <Form.Control type="text" placeholder="Enter referral ID" />
//         </Form.Group>

//         {/* Terms & Conditions */}
//         <Form.Group controlId="terms" className="required-field">
//           <Form.Check 
//             type="checkbox" 
//             label="I accept the terms and conditions" 
//             required 
//             checked={acceptedTerms}
//             onChange={() => setAcceptedTerms(!acceptedTerms)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit Paper
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Submissions;




  {/* <table className="custom-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Organization</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                       <tr>
                            <td>1.</td>
                            <td><input type="text" placeholder="In title case" className="table-input name-input required_field" required/></td>
                            <td><input type="text" placeholder="In title case" className="table-input designation-input required_field" required/></td>
                            <td><input type="text" placeholder="In title case" className="table-input organization-input required_field" required /></td>
                            <td><input type="email" placeholder="e.g. example@example.com" className="table-input email-input required_field" required /></td>
                            <td><input type="text" placeholder="+91 0000000000" className="table-input mobile-input required_field" required /></td>
                       </tr>
                    {Array.from({ length: 4 }, (_, index) => (
                    <tr key={index}>
                        <td>{index + 2}.</td>
                        <td><input type="text" placeholder="In title case" className="table-input name-input" /></td>
                        <td><input type="text" placeholder="In title case" className="table-input designation-input" /></td>
                        <td><input type="text" placeholder="In title case" className="table-input organization-input" /></td>
                        <td><input type="email" placeholder="e.g. example@example.com" className="table-input email-input" /></td>
                        <td><input type="text" placeholder="+91 0000000000" className="table-input mobile-input" /></td>
                    </tr>
                    ))}
                </tbody>
            </table> */}