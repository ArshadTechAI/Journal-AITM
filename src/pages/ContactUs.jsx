
// import React from 'react'
// import Header from '../components/header'
// import Footer from '../components/footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/ContactUs.css'

// // service_tl2k8ng
// // template_s4m95cn
// function ContactUs() {
//   return (
//     <>
//       <Header />
//       <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
//         <center>
//           <h1>Contact Us</h1>
//         </center>
//         <hr />
//         <h4>
//           <b>Journal: </b>
//           Anjuman Institute of Technology and Mangement
//         </h4>
//         <h4>
//           <b>Publisher: </b>
//           International Journal of Engineering, Science Technology and Management
//         </h4>
//         <h4>
//           <b>Address: </b>
//           Belalkanda Bhatkal, Karnataka 581 320, India
//         </h4>
//         <hr />
//         <h4>
//           If you have any question, please check the frequently asked question (FAQs) first. If your question has no answer there then please contact us through your comfortable method from the below available options:
//         </h4>

//         <div style={{ marginTop: '10px' }}>
//           <FontAwesomeIcon icon={faEnvelope} />
//           <b style={{ marginLeft: '10px' }}>Email Address:</b> editor@ijestm.com
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           <FontAwesomeIcon icon={faPhone} />
//           <b style={{ marginLeft: '10px' }}>Contact Number:</b>+91 8385 226214     Call Time: 10 am to 7 pm IST (Monday to Saturday)
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           <b>Also available on :</b>
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faWhatsapp} size='xl' />
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faFacebook} size='xl' />
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faTwitter} size='xl' />
//           <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faLinkedin} size='xl' />

//         </div>

//         <hr />

//         <h3 style={{ textAlign: 'center' }}>You can also send a message to us by submitting the below form.</h3>

//         <form className="contact-form">
//           <label for="name">Name:</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" required />

//           <label for="phone">Phone:</label>
//           <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" required />

//           <label for="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" required />

//           <label for="place">Place:</label>
//           <input type="text" id="place" name="place" placeholder="Enter your place" required />

//           <label for="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>

//           <button type="submit">Submit</button>
//         </form>

//         <div style={{ margin: '30px' }}></div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default ContactUs

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-solid-svg-icons';
// import emailjs from 'emailjs-com';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         place: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Sending the email
//         // // service_tl2k8ng
//         // // template_s4m95cn
//         emailjs.send('service_tl2k8ng', 'template_s4m95cn', formData, 'YOUR_USER_ID')
//             .then((response) => {
//                 console.log('Email sent successfully!', response.status, response.text);
//                 // Optionally reset the form
//                 setFormData({ name: '', phone: '', email: '', place: '', message: '' });
//                 alert('Your message has been sent!');
//             })
//             .catch((error) => {
//                 console.error('Error sending email:', error);
//                 alert('There was an error sending your message. Please try again later.');
//             });
//     };

//     return (
//         <>
//             <Header />
//             <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
//                 <center>
//                     <h1>Contact Us</h1>
//                 </center>
//                 <hr />
//                 <h4>
//                     <b>Journal: </b>
//                     Anjuman Institute of Technology and Management
//                 </h4>
//                 <h4>
//                     <b>Publisher: </b>
//                     International Journal of Engineering, Science Technology and Management
//                 </h4>
//                 <h4>
//                     <b>Address: </b>
//                     Belalkanda Bhatkal, Karnataka 581 320, India
//                 </h4>
//                 <hr />
//                 <h4>
//                     If you have any question, please check the frequently asked question (FAQs) first. If your question has no answer there then please contact us through your comfortable method from the below available options:
//                 </h4>

//                 <div style={{ marginTop: '10px' }}>
//                     <FontAwesomeIcon icon={faEnvelope} />
//                     <b style={{ marginLeft: '10px' }}>Email Address:</b> editor@ijestm.com
//                 </div>

//                 <div style={{ marginTop: '10px' }}>
//                     <FontAwesomeIcon icon={faPhone} />
//                     <b style={{ marginLeft: '10px' }}>Contact Number:</b> +91 8385 226214    Call Time: 10 am to 7 pm IST (Monday to Saturday)
//                 </div>

//                 <div style={{ marginTop: '10px' }}>
//                     <b>Also available on :</b>
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faWhatsapp} size='xl' />
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faFacebook} size='xl' />
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faTwitter} size='xl' />
//                     <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faLinkedin} size='xl' />
//                 </div>

//                 <hr />

//                 <h3 style={{ textAlign: 'center' }}>You can also send a message to us by submitting the below form.</h3>

//                 <form className="contact-form" onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="Enter your name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="phone">Phone:</label>
//                     <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         placeholder="Enter your phone number"
//                         pattern="[0-9]{10}"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="place">Place:</label>
//                     <input
//                         type="text"
//                         id="place"
//                         name="place"
//                         placeholder="Enter your place"
//                         value={formData.place}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         placeholder="Enter your message"
//                         rows="4"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                     ></textarea>

//                     <button type="submit">Submit</button>
//                 </form>

//                 <div style={{ margin: '30px' }}></div>
//             </div>
//         </>
//     );
// };

// export default ContactUs;

// import React, { useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser'; // Import EmailJS library
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/ContactUs.css'
// import { useForm, ValidationError } from '@formspree/react';
// import Header from '../components/header';
// import Footer from '../components/footer';

// const ContactUs = () => {

//   const [state, handleSubmit] = useForm("mpwzardb");
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         place: '',
//         message: ''
//     });

//     useEffect(() => {
//         emailjs.init('McN8gFqdeF-Bmbn-E'); // Initialize EmailJS with your public key
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     // Send email using EmailJS
//     //     // service_tl2k8ng
//     //     // template_s4m95c
//     //     emailjs.send('service_tl2k8ng', 'template_s4m95c', formData)
//     //         .then((response) => {
//     //             console.log('Email sent successfully!', response.status, response.text);
//     //             alert('Your message has been sent!');
//     //             // Optionally reset the form
//     //             setFormData({ name: '', phone: '', email: '', place: '', message: '' });
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error sending email:', error);
//     //             alert('There was an error sending your message. Please try again later.');
//     //         });
//     // };

//     if (state.succeeded) {
//       alert('Message sent successfully');
//     }

//     return (
//       <>
//       <Header/>
//         <div style={{ marginTop: '30px', paddingLeft: '30px', paddingRight: '30px' }}>
//             <center>
//                 <h1>Contact Us</h1>
//             </center>
//             <div style={{ margin: '30px' }}></div>

//             <hr />
//             <h4><b>Journal:</b> Anjuman Institute of Technology and Management</h4>
//             <h4><b>Publisher:</b> International Journal of Engineering, Science Technology and Management</h4>
//             <h4><b>Address:</b> Belalkanda Bhatkal, Karnataka 581 320, India</h4>
//             <hr />
//             <h4>If you have any questions, please check the frequently asked questions (FAQs) first. If your question has no answer there then please contact us through your comfortable method from the below available options:</h4>
//             <div style={{ marginTop: '10px' }}>
//                 <FontAwesomeIcon icon={faEnvelope} />
//                 <b style={{ marginLeft: '10px' }}>Email Address:</b> editor@ijestm.com
//             </div>
//             <div style={{ marginTop: '10px' }}>
//                 <FontAwesomeIcon icon={faPhone} />
//                 <b style={{ marginLeft: '10px' }}>Contact Number:</b> +91 8385 226214 Call Time: 10 am to 7 pm IST (Monday to Saturday)
//             </div>
//             <div style={{ marginTop: '10px' }}>
//                 <b>Also available on:</b>
//                 <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faWhatsapp} size='xl' />
//                 <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faFacebook} size='xl' />
//                 <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faTwitter} size='xl' />
//                 <FontAwesomeIcon style={{ marginLeft: '10px', marginRight: '10px' }} icon={faLinkedin} size='xl' />
//             </div>
//             <hr />
//             <h3 style={{ textAlign: 'center' }}>You can also send a message to us by submitting the below form.</h3>
//             <form className="contact-form" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
//                 <ValidationError
//                   prefix="Name"
//                   field="name"
//                   errors={state.errors}
//                 />
//                 <label htmlFor="phone">Phone:</label>
//                 <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" value={formData.phone} onChange={handleInputChange} required />
//                 <ValidationError
//                   prefix="Phone"
//                   field="phone"
//                   errors={state.errors}
//                 />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
//                 <ValidationError
//                   prefix="Email"
//                   field="email"
//                   errors={state.errors}
//                 />
//                 <label htmlFor="place">Place:</label>
//                 <input type="text" id="place" name="place" placeholder="Enter your place" value={formData.place} onChange={handleInputChange} required />
//                 <ValidationError
//                   prefix="Place"
//                   field="place"
//                   errors={state.errors}
//                 />
//                 <label htmlFor="message">Message:</label>
//                 <textarea id="message" name="message" placeholder="Enter your message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
//                 <ValidationError
//                   prefix="Message"
//                   field="message"
//                   errors={state.errors}
//                 />
//                 <button type="submit" disabled={state.submitting}>Submit</button>
//             </form>

//             <div style={{ margin: '30px' }}></div>
//         </div>
//         <Footer/>
//         </>
//     );
// };

// export default ContactUs;

// import React, { useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/ContactUs.css';
// import { useForm, ValidationError } from '@formspree/react';
// import Header from '../components/header';
// import Footer from '../components/footer';

// const ContactUs = () => {
//   const [state, handleSubmit] = useForm("mpwzardb");
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     place: '',
//     message: ''
//   });

//   useEffect(() => {
//     emailjs.init('McN8gFqdeF-Bmbn-E');
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   if (state.succeeded) {
//     alert('Message sent successfully');
//   }

//   return (
//     <>
//       <Header />
//       <div className="contact-container">
//         <h1 className="contact-title">Contact Us</h1>
//         <div className="contact-info">
//           <h4><b>Journal:</b> Anjuman Institute of Technology and Management</h4>
//           <h4><b>Publisher:</b> International Journal of Engineering, Science Technology and Management</h4>
//           <h4><b>Address:</b> Belalkanda Bhatkal, Karnataka 581 320, India</h4>
//         </div>

//         <div className="contact-details">
//           <h4>If you have any questions, please check the FAQs first. If your question is not answered, please contact us using the options below:</h4>
//           <div className="contact-method">
//             <FontAwesomeIcon icon={faEnvelope} />
//             <b>Email:</b> editor@ijestm.com
//           </div>
//           <div className="contact-method">
//             <FontAwesomeIcon icon={faPhone} />
//             <b>Contact Number:</b> +91 8385 226214 (10 am to 7 pm IST, Mon-Sat)
//           </div>
//           <div className="social-icons">
//             <b>Also available on:</b>
//             <FontAwesomeIcon icon={faWhatsapp} size='xl' />
//             <FontAwesomeIcon icon={faFacebook} size='xl' />
//             <FontAwesomeIcon icon={faTwitter} size='xl' />
//             <FontAwesomeIcon icon={faLinkedin} size='xl' />
//           </div>
//         </div>

//         <h3 className="form-title">Send us a message by submitting the form below:</h3>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
//           <ValidationError prefix="Name" field="name" errors={state.errors} />

//           <label htmlFor="phone">Phone:</label>
//           <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" value={formData.phone} onChange={handleInputChange} required />
//           <ValidationError prefix="Phone" field="phone" errors={state.errors} />

//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
//           <ValidationError prefix="Email" field="email" errors={state.errors} />

//           <label htmlFor="place">Place:</label>
//           <input type="text" id="place" name="place" placeholder="Enter your place" value={formData.place} onChange={handleInputChange} required />
//           <ValidationError prefix="Place" field="place" errors={state.errors} />

//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Enter your message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
//           <ValidationError prefix="Message" field="message" errors={state.errors} />

//           <button type="submit" disabled={state.submitting}>Submit</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactUs;

// import React, { useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/ContactUs.css';
// import { useForm, ValidationError } from '@formspree/react';
// import Header from '../components/header';
// import Footer from '../components/footer';

// const ContactUs = () => {
//     const [state, handleSubmit] = useForm("mpwzardb");
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         place: '',
//         message: ''
//     });

//     useEffect(() => {
//         emailjs.init('McN8gFqdeF-Bmbn-E');
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     if (state.succeeded) {
//         alert('Message sent successfully');
//     }

//     return (
//         <>
//             <Header />
//             <div className="contact-container">
//                 <h1>Contact Us</h1>
//                 <div className="contact-info">
//     <h4><b>Journal:</b> Anjuman Institute of Technology and Management</h4>
//     <h4><b>Publisher:</b> International Journal of Engineering, Science Technology and Management</h4>
//     <h4><b>Address:</b> Belalkanda Bhatkal, Karnataka 581 320, India</h4>
//     <hr className="divider" />
//     <h4 className="faq-note">
//         If you have any questions, please check the frequently asked questions (FAQs) first. If your question has no answer there, please contact us through your comfortable method from the below available options:
//     </h4>
//     <div className="contact-methods">
//         <div className="method">
//             <FontAwesomeIcon icon={faEnvelope} />
//             <b>Email:</b> <span>aitm@ijestm.com</span>
//         </div>
//         <div className="method">
//             <FontAwesomeIcon icon={faPhone} />
//             <b>Contact Number:</b> <span>+91 9945387216 (10 am to 7 pm IST)</span>
//         </div>
//         <div className="method">
//             <b>Also available on: </b>
//             <div className="social-icons">
//                 <FontAwesomeIcon icon={faWhatsapp} size='lg' />
//                 <FontAwesomeIcon icon={faFacebook} size='lg' />
//                 <FontAwesomeIcon icon={faTwitter} size='lg' />
//                 <FontAwesomeIcon icon={faLinkedin} size='lg' />
//             </div>
//         </div>
//     </div>
// </div>

//                 <div className="editorial-guidelines">
//                     <h2>Editorial Guidelines</h2>
//                     <p>For authors interested in submitting their research, please review our <a href="/editorial-guidelines" className="guidelines-link">Editorial Guidelines</a> for formatting and submission standards.</p>
//                 </div>

//                 <div className="submission-inquiries">
//                     <h2>Submission Inquiries</h2>
//                     <p>If you have questions regarding the submission process or need assistance, feel free to reach out to us via email. We are here to help!</p>
//                 </div>

//                 <div className="research-support">
//                     <h2>Research Support</h2>
//                     <p>Our team is dedicated to supporting researchers. For inquiries about research collaborations, please contact us directly.</p>
//                 </div>

//                 <hr />
//                 <h3>Send us a message</h3>
//                 <form className="contact-form" onSubmit={handleSubmit}>
//                     <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
//                     <ValidationError prefix="Name" field="name" errors={state.errors} />
//                     <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange} required />
//                     <ValidationError prefix="Phone" field="phone" errors={state.errors} />
//                     <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
//                     <ValidationError prefix="Email" field="email" errors={state.errors} />
//                     <input type="text" name="place" placeholder="Your Place" value={formData.place} onChange={handleInputChange} required />
//                     <ValidationError prefix="Place" field="place" errors={state.errors} />
//                     <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
//                     <ValidationError prefix="Message" field="message" errors={state.errors} />
//                     <button type="submit" disabled={state.submitting}>Send Message</button>
//                 </form>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default ContactUs;

// --------------------------------------------------------------------------
//

// import React, { useEffect, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/ContactUs.css';
// import { useForm, ValidationError } from '@formspree/react';
// import Header from '../components/header';
// import Footer from '../components/footer';

// const ContactUs = () => {
//     const [state, handleSubmit] = useForm("mpwzardb");
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         place: '',
//         message: ''
//     });

//     useEffect(() => {
//         emailjs.init('McN8gFqdeF-Bmbn-E');
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     if (state.succeeded) {
//         alert('Message sent successfully');
//     }

//     return (
//         <>
//             <Header />

//             {/* Hero Section */}
//             <div className="hero-section">
//                 <div className="overlay">
//                     <h1 className="hero-title">Get in Touch with Us</h1>
//                     <p className="hero-subtitle">We're here to answer your questions and assist with your inquiries.</p>
//                 </div>
//             </div>

//             <div className="contact-container">
//                 <h1 className="contact-heading">Contact Us</h1>

//                 <div className="contact-info">
//                     <h4><b className="label">Journal:</b>
//                         <span className="info-text">
//                             Anjuman Institute of Technology and Management.
//                         </span>
//                     </h4>
//                     <h4><b className="label">Publisher:</b>
//                         <span className="info-text">International Journal of Engineering, Science, Technology and Management.</span>
//                     </h4>
//                     <h4><b className="label">Address:</b>
//                         <span className="info-text">Belalkanda, Bhatkal, Karnataka 581 320, India.</span>
//                     </h4>

//                     <hr className="divider" />

//                     <h4 className="faq-note">For any inquiries, please reach out through the following methods:</h4>

//                     <div className="contact-methods">
//                         <div className="method">
//                             <FontAwesomeIcon icon={faEnvelope} className="icon" />
//                             <b className="label">Email:</b>
//                             <span className="info-text">&nbsp;aitm@ijestm.com</span>
//                         </div>

//                         <div className="method">
//                             <FontAwesomeIcon icon={faPhone} className="icon" />
//                             <b className="label">Contact Number:</b>
//                             <span className="info-text">&nbsp;+91 9945387216 (10 am to 7 pm IST)</span>
//                         </div>

//                         <div className="method">
//                             <h3 className="social-label">Follow us on:</h3>
//                             <div className="social-icons">
//                                 <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: '#25D366' }} />
//                                 <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: '#1877F2' }} />
//                                 <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: '#1DA1F2' }} />
//                                 <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: '#0A66C2' }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <hr />

//                 <h3 className="contact-form-title">Send us a message</h3>
//                 <form className="contact-form" onSubmit={handleSubmit}>
//                     <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
//                     <ValidationError prefix="Name" field="name" errors={state.errors} />

//                     <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange} required />
//                     <ValidationError prefix="Phone" field="phone" errors={state.errors} />

//                     <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
//                     <ValidationError prefix="Email" field="email" errors={state.errors} />

//                     <input type="text" name="place" placeholder="Your Place" value={formData.place} onChange={handleInputChange} required />
//                     <ValidationError prefix="Place" field="place" errors={state.errors} />

//                     <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
//                     <ValidationError prefix="Message" field="message" errors={state.errors} />

//                     <button type="submit" disabled={state.submitting}>Send Message</button>
//                 </form>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default ContactUs;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons
import {
  faWhatsapp,
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons"; // Brand icons

import Header from "../components/header";
import Footer from "../components/footer";
import "../css/ContactUs.css"; // Custom CSS for further 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";



function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation occurs only once when scrolled into view
    });
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mvgoglbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      
      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send the message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }
 






  return (
    <>
      <Header />

      <Container fluid className="contact-container my-5" data-aos="fade-up">
        <Row>
          <Col lg={12} className="text-center">
          <h2 className="main-title" data-aos="zoom-in">Contact Us</h2>
          <p
              style={{
                maxWidth: "1050px", // Adjust the maximum width as needed
                margin: "0 auto", // Center the text
                padding: "10px", // Add some padding
                lineHeight: "1.6", // Improve readability
                textAlign: "justify", // Justify the text
                marginTop: "0px", // Set top margin
                marginBottom: "1rem", // Set bottom margin
                color: "rgb(77, 77, 77)", // Set text color
                fontSize: "17.6px", // Set font size
                fontFamily: 'system-ui, -apple-system, "Segoe UI"', // Set font family
              }}
            >
              We truly value your input and are eager to connect. Whether you
              have questions about our services, feedback on your experience, or
              suggestions for improvement, we want to hear from you. Your
              thoughts and feedback are important to us and play a vital role in
              shaping our offerings.
              <br />
              If you're curious about how our services can benefit you, need
              assistance navigating our offerings, or have any specific
              inquiries, please don't hesitate to reach out. Our dedicated team
              is here to assist you and ensure that your experience is positive
              and fulfilling.
              <br />
              Your satisfaction is our priority, and we are committed to
              providing you with the best possible support. We encourage you to
              share your thoughts or any challenges you may be facing, as this
              helps us improve and serve you better.
              <br />
              Feel free to contact us anytime through the channels provided
              below. We look forward to connecting with you and assisting you on
              your journey!
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
  <Col xs={12} md={10} className="mx-auto mb-4">
    <Card
      className="contact-card shadow-lg"
      style={{
        borderRadius: "20px",
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        padding: "30px",
        marginTop: "-40px",
      }}
      data-aos="fade-right"
    >
      <Card.Body>
        <Card.Title className="section-title text-center mb-4">
        <h3
  data-aos="zoom-in"
  style={{
    color: "#0072b1",
    fontSize: "26px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    wordWrap: "break-word",  // Allows text to wrap to the next line if necessary
    hyphens: "auto",         // Adds hyphenation for better word-breaking in long words (optional)
    whiteSpace: "normal",    // Ensures that the text wraps within the container
    margin: "0",             // Prevents unwanted spacing around the heading
    lineHeight: "1.3",       // Improves the line spacing for wrapping
  }}
>
  Our Contact Information
</h3>

        </Card.Title>

        {/* Introduction Text */}
        <p
          className="text-center"
          style={{
            color: "#555",
            fontSize: "18px",
            fontFamily: 'system-ui, -apple-system, "Segoe UI"',
            lineHeight: "1.6",
          }}
        >
          We value your feedback and inquiries. Please feel free to reach out to
          us through any of the following contact methods or send us a message
          using the form below.
        </p>

        {/* Contact Info */}
        <div
          className="contact-info d-flex flex-column align-items-start"
          style={{
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {[
            {
              icon: faEnvelope,
              label: "Email",
              value: "aitm@gmail.com",
              color: "#DB4437",
            },
            {
              icon: faPhone,
              label: "Phone",
              value: "+9945387216",
              color: "#00AFF0",
            },
            {
              icon: faMapMarkerAlt,
              label: "Address",
              value: "XHW5+H22, Belalkanda, Bhatkal, Karnataka 581320",
              color: "#00B140",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-start"
              style={{
                fontSize: "17px",
                fontFamily: 'system-ui, -apple-system, "Segoe UI"',
                alignItems: "flex-start", // Ensures everything is aligned
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  color: item.color,
                  marginRight: "12px",
                  fontSize: "20px",
                }}
              />
              <div>
                <strong
                  style={{
                    color: "#0072B1",
                    fontSize: "18px",
                    marginRight: "5px",
                  }}
                >
                  {item.label}:
                </strong>
                <span style={{ color: "#333", fontSize: "18px" }}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
       {/* Social Media */}
{/* Social Media */}
<div className="social-media mt-4">
  <p
    style={{
      fontWeight: "600",
      color: "#4d4d4d",
      fontSize: "20px",
      marginBottom: "15px",
    }}
  >
    We are also available at :&nbsp;&nbsp;
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "10px",
    }}
  >
    {[{
        link: "https://wa.me/9945387216", 
        icon: faWhatsapp, 
        color: "#25D366", 
        animation: "fade-up"
      },
      {
        link: "https://twitter.com/anjumanitm", 
        icon: faTwitter, 
        color: "#1DA1F2", 
        animation: "fade-up"
      },
      {
        link: "https://www.instagram.com/anjumanitm", 
        icon: faInstagram, 
        color: "#E1306C", 
        animation: "fade-up"
      },
      {
        link: "https://www.facebook.com/anjumanitm", 
        icon: faFacebook, 
        color: "#1877F2", 
        animation: "fade-up"
      },
      {
        link: "https://www.linkedin.com/school/anjumanitm", 
        icon: faLinkedin, 
        color: "#0077B5", 
        animation: "fade-up"
      }
    ].map((social, index) => (
      <a
        key={index}
        href={social.link}
        target="_blank"
        rel="noreferrer"
        style={{
          fontSize: "24px", 
          color: social.color,
        }}
        data-aos={social.animation}
        data-aos-delay={`${index * 100}`} // Delay each icon slightly for a staggered effect
      >
        <FontAwesomeIcon icon={social.icon} />
      </a>
    ))}
  </div>
</div>



        {/* Closing Statement */}
        <p
          className="mt-4"
          style={{
            color: "#4d4d4d",
            fontSize: "17px",
            fontFamily: 'system-ui, -apple-system, "Segoe UI"',
          }}
        >
          We look forward to hearing from you and will respond to your inquiries
          as soon as possible!
        </p>
      </Card.Body>
    </Card>
  </Col>
</Row>

{/* Custom Media Query */}
<style>
  {`
    @media (min-width: 1024px) and (max-width: 1366px) {
      .contact-info {
        display: flex;
        flex-direction: column; /* Stack items */
        align-items: flex-start; /* Align vertically */
      }
    }
  `}
</style>


        <Row className="mt-5">
          <Col lg={12} className="text-center">
          <h3 className="section-title"  style={{ color: "#0072b1", fontSize: "25px", marginBottom: "20px", marginTop: "10px" }}>Our Location</h3>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.349964395168!2d74.55493267360927!3d13.997251391566385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc43cbcb19531b%3A0x6181fa5597aa1e88!2sAnjuman%20Institute%20of%20Technology%20and%20Management%20(AITM)!5e0!3m2!1sen!2sin!4v1729571948569!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
               data-aos="fade-up"
            ></iframe>
          </Col>
        </Row>

        <Row className="mt-5">
  <Col lg={12}>
    <h3 className="section-title" style={{ color: "#0072b1", fontSize: "25px", marginBottom: "20px" }}data-aos="fade-left">
      Send Us a Message
    </h3>
    <ToastContainer /> 
  
    <Form  onSubmit={handleSubmit} method="POST" style={{ maxWidth: "700px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}data-aos="fade-up">
  <Row className="mb-3">
    <Col md={12}>
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control 
          type="text" 
          name="name"  // Name attribute added here
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name" 
          required 
          style={{ borderRadius: "5px", borderColor: "#0072b1" }} 
        />
      </Form.Group>
    </Col>
  </Row>

  <Row className="mb-3">
    <Col md={12}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control 
          type="email" 
          name="email"  
          value={formData.email}
          onChange={handleChange}

          placeholder="Enter your email" 
          required 
          style={{ borderRadius: "5px", borderColor: "#0072b1" }} 
        />
      </Form.Group>
    </Col>
  </Row>

  {/* <Form.Group controlId="formMessage">
    <Form.Label>Message:</Form.Label>
    <Form.Control 
      as="textarea" 
      name="message" 
      value={formData.subject}
      onChange={handleChange}
      rows={4} 
      placeholder="Type your message here..." 
      required 
      style={{ borderRadius: "5px", borderColor: "#0072b1" }} 
    />
  </Form.Group> */}
  <Form.Group controlId="formMessage">
  <Form.Label>Message:</Form.Label>
  <Form.Control 
    as="textarea" 
    name="message" 
    value={formData.message}  // Updated to 'message'
    onChange={handleChange}
    rows={4} 
    placeholder="Type your message here..." 
    required 
    style={{ borderRadius: "5px", borderColor: "#0072b1" }} 
  />
</Form.Group>


  <Button variant="primary" type="submit" className="mt-3" style={{ borderRadius: "5px", backgroundColor: "#0072b1", border: "none" }}>
    Send Message
  </Button>
</Form>

  </Col>
</Row>

      </Container>

      <Footer />
    </>
  );
}

export default ContactUs;







