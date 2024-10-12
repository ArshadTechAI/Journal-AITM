import React from 'react';
import '../css/EditorialPage.css';
import Header from '../components/header';
import Footer from '../components/footer';

const EditorialTeam = () => {
  return (
    <>
      <Header />
      <div className="editorial-page">
      <div style={{height: '30px'}}></div>
        <h1>Editorial Team</h1>
        <div className="editorial-content">
          <p>
            The Editorial Board of IJESTM comprises distinguished scholars, researchers, and industry professionals with extensive expertise in their respective fields. Our editorial team is dedicated to ensuring the highest standards of peer review, editorial integrity, and content quality in each published issue. Their collective knowledge and experience guide the journal in its mission to publish cutting-edge, impactful research that advances academic discourse across diverse disciplines.

            <b>Role of the Editorial Board</b>
            The Editorial Board plays a pivotal role in maintaining the journal's reputation for academic excellence and intellectual rigor. The key responsibilities of the board members include:

            <ul>
              <li>Manuscript Review: Each submission is thoroughly reviewed by experts in the field to ensure that it meets the journal's standards for originality, methodology, and relevance.</li>
              <li>Editorial Decisions: The board members are responsible for making informed decisions regarding the acceptance, revision, or rejection of manuscripts based on peer review feedback and their expert judgment.</li>
              <li>Ethical Oversight: The editorial team ensures that all submissions comply with ethical guidelines concerning research integrity, plagiarism, conflicts of interest, and proper attribution of work.</li>
              <li>Guiding Journal Policy: The board provides strategic direction for the journal’s scope, special issues, and publication policies to ensure that it continues to evolve and respond to emerging trends in academia and research.</li>
              <li>Promoting the Journal: Editorial board members actively promote the journal within their academic communities, encouraging high-quality submissions and expanding the journal’s reach and influence.</li>
            </ul>
          </p>


          
        </div>

        <div className="editorial_team">
          <h1>Meet the Editorial Team</h1>
          <p>
            Our editorial board is composed of internationally recognized leaders across various academic disciplines. Their expertise ensures that the journal remains a respected and reliable source of knowledge.
          </p>

          <div className="team" >
            {/* <div className="profile_container">
              <div className="profile_img" style={{ width: '100px', height: '100px'}}>
                <img src="/images/Anwar_sathik_sir.jpeg" alt="Editor1" style={{ position: 'relative', objectFit: 'cover'}}/>
              </div>
              <h3>Prof. Dr. John Doe</h3>
              <p>Editor-in-Chief</p>
            </div> */}
            <div className="profile_container" >
              <div className="profile_img">
                <img className='img' src="/images/Anwar_sathik_sir.jpeg" alt="Editor1"/>
              </div>
              <h3>Dr. Anwar Sathik</h3>
              <p>HOD - CSE, AITM</p>
            </div>

            <div className="profile_container" >
              <div className="profile_img">
                <img className='img' src="/images/Anwar_sathik_sir.jpeg" alt="Editor1"/>
              </div>
              <h3>Dr. Anwar Sathik</h3>
              <p>HOD - CSE, AITM</p>
            </div>

            <div className="profile_container" >
              <div className="profile_img">
                <img className='img' src="/images/Anwar_sathik_sir.jpeg" alt="Editor1"/>
              </div>
              <h3>Dr. Anwar Sathik</h3>
              <p>HOD - CSE, AITM</p>
            </div>

            <div className="profile_container" >
              <div className="profile_img" >
                <img className='img' src="/images/Anwar_sathik_sir.jpeg" alt="Editor1"/>
              </div>
              <h3>Dr. Anwar Sathik</h3>
              <p>HOD - CSE, AITM</p>
            </div>

          </div>
        </div>

        <div style={{ height: '20px'}}></div>
        {/* Join Us Section */}
        <div className="join-us-section">
          <h2>Join Us</h2>
          <p>
            If you are passionate about contributing to our journal, we’d love to hear from you! Whether you want to write articles, assist in peer reviews, or contribute to editorial tasks, we welcome experts from diverse fields to join our team. Become a part of our mission to promote knowledge sharing and field-based activities.
          </p>
          <button className="join-us-button">Join Our Team</button>
        </div>
      </div>
      <div style={{height: '30px'}}></div>
      <Footer />
    </>
  );
}

export default EditorialTeam;
