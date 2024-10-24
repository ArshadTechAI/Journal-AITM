import React from 'react';
import Header from '../components/header';
import { Button } from 'react-bootstrap';
import Footer from '../components/footer';
import './AimScope.css';
import 'font-awesome/css/font-awesome.min.css';



const AimScope = () => {
  return (
    <>
      <Header />
      {/* <div className="aim-scope-page" style={{ padding: '20px 50px 20px 50px' }}>
        <div style={{ height: '30px' }}></div>
        <center>
          <h1>Aim & Scope</h1>
        </center>
        <div style={{ height: '30px' }}></div>

        {/* <h1>Our Aim & Scope</h1> */}
      {/* <p>
          Journal of AITM, IJESTM is a peer-reviewed, open-access journal dedicated to advancing the frontiers of interdisciplinary knowledge through high-quality research publications. Our mission is to provide a global platform for researchers, academicians, industry experts, and students to disseminate original and significant findings that impact both theoretical knowledge and practical application in diverse fields. <br /> We aim to foster a collaborative environment where innovation, creativity, and scholarly excellence thrive. By bridging the gap between theory and practice, our journal seeks to address complex challenges faced by society today, promoting interdisciplinary approaches that enhance understanding and drive sustainable solutions.
        </p> */}

      {/* <section className="donation-section">
          <h2 className="center-text">Aim</h2>
          <p>
            The journal is designed to bridge the gap between academia, industry, and society by promoting groundbreaking research that addresses real-world challenges. Our key aims are:
            <ol>
              <li>
                <b>To Promote Cutting-Edge Research: </b>
                We encourage the publication of new research that explores innovative ideas, methodologies, and technologies that contribute to the growth of science and technology.
              </li>
              <li><b>To Foster Knowledge Exchange: </b>
                We serve as a conduit for scholars from different disciplines and geographies to share their insights, encouraging collaboration and multi-disciplinary approaches to complex issues.
              </li>
              <li><b>To Support Academic Development: </b>
                By publishing high-quality papers from diverse contributors, we strive to support the academic community, helping researchers refine their work through peer review and exposure to global audiences.
              </li>
              <li><b>To Influence Policy and Practice: </b>
                Our journal seeks to impact real-world decision-making by publishing research that is both academically rigorous and practically applicable, influencing industry standards, public policy, and societal development.
              </li>
              <li><b>To Ensure Open Access to Knowledge: </b>
                We are committed to the principles of open access publishing, ensuring that knowledge is freely available to everyone, breaking down barriers to academic research and ensuring wide dissemination.
              </li>

            </ol>

          </p> */}

      {/* <h3>How to Donate</h3>
          <p>
            Consider sponsoring a specific field or issue—such as health systems, rural development, or environmental protection—where your contributions will directly support the publication of critical insights from the field.
          </p>

          <Button>Donate</Button> */}
      {/* </section> */}


      {/* <section className="donation-section">
          <h2 className="center-text">Scope</h2>
          <p>
            The scope of <b>Journal of IJESTM</b> is broad and inclusive, reflecting our commitment to embracing the diversity of research across multiple fields. We welcome original research articles, review papers, case studies, technical reports, and opinion pieces in the following domains (but not limited to):
            <ol>
              <li>
                <b>Engineering and Technology</b>
                <ul>
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Cybersecurity and Information Technology</li>
                  <li>Internet of Things (IoT) and Smart Systems</li>
                  <li>Renewable Energy Technologies</li>
                  <li>Robotics and Automation</li>
                  <li>Big Data Analytics and Cloud Computing</li>
                  <li>Blockchain and FinTech Innovations</li>
                </ul>
              </li>
              <li>
                <b>Sciences</b>
                <ul>
                  <li>Biotechnology and Biomedical Sciences</li>
                  <li>Environmental Science and Sustainable Development</li>
                  <li>Nanotechnology and Materials Science</li>
                  <li>Climate Science and Renewable Energy</li>
                  <li>Physics, Chemistry, and Mathematics</li>
                  <li>Space Science and Astrophysics</li>
                </ul>
              </li>
              <li>
                <b>Social Sciences and Humanities</b>
                <ul>
                  <li>Sociology, Anthropology, and Political Science</li>
                  <li>Educational Research and Pedagogy</li>
                  <li>Psychology and Behavioral Sciences</li>
                  <li>Cultural Studies, Language, and Literature</li>
                  <li>Public Health, Policy, and Ethics</li>
                  <li>Law, Human Rights, and Governance</li>
                </ul>
              </li>
              <li>
                <b>Business and Economics</b>
                <ul>
                  <li>Business Management and Strategy</li>
                  <li>Financial Markets and Risk Management</li>
                  <li>Entrepreneurship and Start-Up Culture</li>
                  <li>Global Trade, Economics, and Development</li>
                  <li>Marketing Trends and Consumer Behavior</li>
                  <li>Corporate Social Responsibility (CSR)</li>
                </ul>
              </li>
              <li>
                <b>Medical and Health Sciences</b>
                <ul>
                  <li>Public Health and Epidemiology</li>
                  <li>Medical Research and Clinical Studies</li>
                  <li>Health Informatics and Medical Technology</li>
                  <li>Nutrition and Preventive Medicine</li>
                  <li>Mental Health and Wellness</li>
                  <li>Pharmacology and Drug Development</li>
                </ul>
              </li>
            </ol>
          </p>
        </section>


        <h1 className="center-text">Focus and Values</h1>
        <p>
          Our journal prides itself on maintaining the highest standards of academic integrity, inclusivity, and scholarly excellence. We value:

          <ol>
            <li>
              <b>Interdisciplinary Research:</b>
              As the challenges we face are increasingly interconnected, we encourage papers that take interdisciplinary approaches, combining multiple fields of study to offer holistic solutions.
            </li>
            <li>
              <b>Global Collaboration:</b>
              We aim to provide a platform for researchers from around the globe to present their work, fostering international dialogue and cooperation.
            </li>
            <li>
              <b>Innovation and Creativity:</b>
              Research that challenges conventional thinking and offers fresh perspectives is highly valued. We actively seek groundbreaking studies that propose new frameworks, models, or applications.
            </li>
            <li>
              <b>Ethical Standards:</b>
              Ethical research practices are paramount to us. We require authors to follow strict guidelines concerning ethical considerations in research, including human and animal welfare, conflict of interest, and data integrity.
            </li>
          </ol>
        </p>

        <h1>Article type</h1>
        <p>
          We accept the following types of submissions:
          <ul>
            <li>
              <b>Research Articles:</b>
              These are original articles presenting new data, theory, or analysis.
            </li>
            <li>
              <b>Review Papers:</b>
              Comprehensive reviews that synthesize current research, highlight trends, and propose future research directions.
            </li>
            <li>
              <b>Case Studies:</b>
              Detailed studies of specific real-life scenarios that offer insights into applied research and solutions.
            </li>
            <li>
              <b>Technical Reports:</b>
              In-depth reports on technical projects, methodologies, and innovations.
            </li>
            <li>
              <b>Commentaries and Perspectives:</b>
              Opinion pieces that discuss emerging trends, ethical issues, or future directions in the field.
            </li>
            <li>
              <b>Special Issues:</b>
              We periodically publish special issues focused on specific themes of contemporary importance, inviting contributions from experts and thought leaders.
            </li>
          </ul>
        </p>

        <h1>Audience and Readership</h1>
        <p>
          Our journal caters to a wide audience, including:
          <ul>
            <li>Academic researchers, professors, and students seeking to publish and access the latest findings in their field.</li>
            <li>Industry professionals and practitioners looking for cutting-edge research applicable to their work.</li>
            <li>Policymakers and thought leaders who use academic research to inform decisions and shape policy.</li>
            <li>General readers with an interest in scientific, technological, and societal advancements.</li>
          </ul>
        </p>

        <h1>Peer Review and Publication Process</h1>
        <p>
          Our peer review process ensures that every article published meets the highest standards of quality, relevance, and accuracy. Manuscripts submitted to <b>Journal of IJESTM</b> undergo:

          <ol>
            <li>
              <b>Initial Screening:</b>
              Manuscripts are screened for basic compliance with submission guidelines and relevance to the journal’s scope.
            </li>
            <li>
              <b>Double-Blind Peer Review:</b>
              Each manuscript is reviewed by two or more independent experts in the field, ensuring objectivity and fairness.
            </li>
            <li>
              <b>Revision and Resubmission:</b>
              Authors are provided with constructive feedback, and revisions may be requested before final acceptance.
            </li>
            <li>
              <b>Final Decision:</b>
              The editorial board makes the final decision regarding publication based on peer review and revisions.
            </li>
          </ol>
        </p>

        <div style={{ height: '30px' }}></div>
      </div> */}
      <div className="aim-scope-page">
        <div className="spacing"></div>
        <center>
          <h1 className="title">Aim & Scope</h1>
        </center>
        <div className="spacing"></div>

        <p className="introduction" style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}>
          Journal of AITM, IJESTM is a peer-reviewed, open-access journal dedicated to advancing the frontiers of interdisciplinary knowledge through high-quality research publications. Our mission is to provide a global platform for researchers, academicians, industry experts, and students to disseminate original and significant findings that impact both theoretical knowledge and practical application in diverse fields.
          <br />
          We aim to foster a collaborative environment where innovation, creativity, and scholarly excellence thrive. By bridging the gap between theory and practice, our journal seeks to address complex challenges faced by society today, promoting interdisciplinary approaches that enhance understanding and drive sustainable solutions.
        </p>

        <section className="aim-scope-section">
          <h2 className="section-title" style={{ color: '#0072b1' }}>
          <i className="fa fa-bullseye" aria-hidden="true"></i> Aim</h2>
          <p style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}>
            The journal is designed to bridge the gap between academia, industry, and society by promoting groundbreaking research that addresses real-world challenges. Our key aims are:
            <ol className="aim-list">
              <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>
  Peer-Reviewed Excellence: </b>
 We encourage the publication of new research that explores innovative ideas, methodologies, and technologies that contribute to the growth of science and technology.
              </li>
              <li>
                <b style={{ color: '#0072b1', fontWeight: '600' }}>To Foster Knowledge Exchange:</b> We serve as a conduit for scholars from different disciplines and geographies to share their insights, encouraging collaboration and multi-disciplinary approaches to complex issues.
              </li>
              <li>
                <b style={{ color: '#0072b1', fontWeight: '600' }}>To Support Academic Development:</b> By publishing high-quality papers from diverse contributors, we strive to support the academic community, helping researchers refine their work through peer review and exposure to global audiences.
              </li>
              <li>
                <b style={{ color: '#0072b1', fontWeight: '600' }}>To Influence Policy and Practice:</b> Our journal seeks to impact real-world decision-making by publishing research that is both academically rigorous and practically applicable, influencing industry standards, public policy, and societal development.
              </li>
              <li>
                <b style={{ color: '#0072b1', fontWeight: '600' }}>To Ensure Open Access to Knowledge:</b> We are committed to the principles of open access publishing, ensuring that knowledge is freely available to everyone, breaking down barriers to academic research and ensuring wide dissemination.
              </li>
            </ol>
          </p>
        </section>

        <section className="aim-scope-section">
          <h2 className="section-title" style={{ color: '#0072b1' }}>
          <i className="fa fa-clipboard" aria-hidden="true"></i> Scope</h2>
          <p style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}>
            The scope of <b>Journal of IJESTM</b> is broad and inclusive, reflecting our commitment to embracing the diversity of research across multiple fields. We welcome original research articles, review papers, case studies, technical reports, and opinion pieces in the following domains (but not limited to):
            <div className="scope-flex-container">
  <ol className="scope-list">
    <li>
      <center>
        <b className='center'>Engineering and Technology</b>
      </center>
      <ul className="nested-list left1">
        <li>&nbsp;&nbsp;Artificial Intelligence and Machine Learning</li>
        <li>&nbsp;&nbsp;Cybersecurity and Information Technology</li>
        <li>&nbsp;&nbsp;Internet of Things (IoT) and Smart Systems</li>
        <li>&nbsp;&nbsp;Renewable Energy Technologies</li>
        <li>&nbsp;&nbsp;Robotics and Automation</li>
        <li>&nbsp;&nbsp;Big Data Analytics and Cloud Computing</li>
        <li>&nbsp;&nbsp;Blockchain and FinTech Innovations</li>
      </ul>
    </li>
  </ol>
  <ol className="scope-list">
    <li>
      <center>
        <b className='center'>Sciences</b>
      </center>
      <ul className="nested-list left1">
        <li>&nbsp;&nbsp;Biotechnology and Biomedical Sciences</li>
        <li>&nbsp;&nbsp;Environmental Science and Development</li>
        <li>&nbsp;&nbsp;Nanotechnology and Materials Science</li>
        <li>&nbsp;&nbsp;Climate Science and Renewable Energy</li>
        <li>&nbsp;&nbsp;Physics, Chemistry, and Mathematics</li>
        <li>&nbsp;&nbsp;Space Science</li>
        <li>&nbsp;&nbsp;Astrophysics</li>
      </ul>
    </li>
  </ol>
</div>


            <div className="scope-flex-container">
  <ol className="scope-list">
    <li>
      <center> 
        <b className='center'>Social Sciences and Humanities</b>
      </center>
      <ul className="nested-list left1">
        <li>&nbsp;&nbsp;Sociology, Anthropology, and Science</li>
        <li>&nbsp;&nbsp;Educational Research and Pedagogy</li>
        <li>&nbsp;&nbsp;Psychology and Behavioral Sciences</li>
        <li>&nbsp;&nbsp;Cultural Studies, Language, and Literature</li>
        <li>&nbsp;&nbsp;Public Health, Policy, and Ethics</li>
        <li>&nbsp;&nbsp;Law, Human Rights, and Governance</li>
      </ul>
    </li>
  </ol>

  <ol className="scope-list">
    <li>
      <center> 
        <b className='center'>Business and Economics</b>
      </center>
      <ul className="nested-list left1">
        <li>&nbsp;&nbsp;Business Management and Strategy</li>
        <li>&nbsp;&nbsp;Financial Markets and Risk Management</li>
        <li>&nbsp;&nbsp;Entrepreneurship and Start-Up Culture</li>
        <li>&nbsp;&nbsp;Global Trade, Economics, and Development</li>
        <li>&nbsp;&nbsp;Marketing Trends and Consumer Behavior</li>
        <li>&nbsp;&nbsp;Corporate Social Responsibility (CSR)</li>
      </ul>
    </li>
  </ol>
</div>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <ol className="scope-list">
                <li>
                  <center> 
                    <b className='center'>Medical and Health Sciences</b>
                  </center>
                  {/* <b className='left'>Medical and Health Sciences</b> */}
                  <ul className="nested-list left1">
                    <li>&nbsp;&nbsp;Public Health and Epidemiology</li>
                    <li>&nbsp;&nbsp;Medical Research and Clinical Studies</li>
                    <li>&nbsp;&nbsp;Health Informatics and Medical Technology</li>
                    <li>&nbsp;&nbsp;Nutrition and Preventive Medicine</li>
                    <li>&nbsp;&nbsp;Mental Health and Wellness</li>
                    <li>&nbsp;&nbsp;Pharmacology and Drug Development</li>
                  </ul>
                </li>
              </ol>&nbsp;&nbsp;
            </div>






            {/* <ol className="scope-list">
              <li>
                <b className='left'></b>
                <ul className="nested-list left1">
                  
                </ul>
              </li>
            </ol>
            <ol className="scope-list">
              <li className="right-align">
                <b className='left_right1'></b>
                <ul className="nested-list right1">
                  
                </ul>
              </li>
            </ol> */}


            {/* <ol className="scope-list">
              <li>
                <b className='left'>Medical and Health Sciences</b>
                <ul className="nested-list left1">
                  <li>Public Health and Epidemiology</li>
                  <li>Medical Research and Clinical Studies</li>
                  <li>Health Informatics and Medical Technology</li>
                  <li>Nutrition and Preventive Medicine</li>
                  <li>Mental Health and Wellness</li>
                  <li>Pharmacology and Drug Development</li>
                </ul>
              </li>
            </ol> */}

          </p>
        </section>

        <h1
  className="center-text"
  style={{
    color: '#0072b1',
    borderBottom: '2px solid #0072b1', // Line below the text
    display: 'inline-block', // Keeps the line width same as the text
    paddingBottom: '5px', // Space between the text and the border
    textAlign: 'center', // Centers the text within the element
  }}
>
  Focus and Values
</h1>




        <p style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}>
          Our journal prides itself on maintaining the highest standards of academic integrity, inclusivity, and scholarly excellence. We value:
          <ol className="focus-values-list">
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Interdisciplinary Research:</b> As the challenges we face are increasingly interconnected, we encourage papers that take interdisciplinary approaches, combining multiple fields of study to offer holistic solutions.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Global Collaboration:</b> We aim to provide a platform for researchers from around the globe to present their work, fostering international dialogue and cooperation.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Innovation and Creativity:</b> Research that challenges conventional thinking and offers fresh perspectives is highly valued. We actively seek groundbreaking studies that propose new frameworks, models, or applications.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Ethical Standards:</b> Ethical research practices are paramount to us. We require authors to follow strict guidelines concerning ethical considerations in research, including human and animal welfare, conflict of interest, and data integrity.
            </li>
          </ol>
        </p>

        <h1
         className="center-text"
         style={{
           color: '#0072b1',
           borderBottom: '2px solid #0072b1', // Line below the text
           display: 'inline-block', // Keeps the line width same as the text
           paddingBottom: '5px', // Space between the text and the border
           textAlign: 'center', // Centers the text within the element
         }}
       >Article Type</h1>
        <p style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}>
          We accept the following types of submissions:
          <ul className="article-types-list">
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Research Articles:</b> These are original articles presenting new data, theory, or analysis.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Review Papers:</b> Comprehensive reviews that synthesize current research, highlight trends, and propose future research directions.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Case Studies:</b> Detailed studies of specific real-life scenarios that offer insights into applied research and solutions.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Technical Reports:</b> In-depth reports on technical projects, methodologies, and innovations.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Commentaries and Perspectives:</b> Opinion pieces that discuss emerging trends, ethical issues, or future directions in the field.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Special Issues:</b> We periodically publish special issues focused on specific themes of contemporary importance, inviting contributions from experts and thought leaders.
            </li>
          </ul>
        </p>

        <h1  className="center-text"
  style={{
    color: '#0072b1',
    borderBottom: '2px solid #0072b1', // Line below the text
    display: 'inline-block', // Keeps the line width same as the text
    paddingBottom: '5px', // Space between the text and the border
    textAlign: 'center', // Centers the text within the element
  }}
>Audience and Readership</h1>
        <p style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}>
          Our journal caters to a wide audience, including:
          <ul className="audience-list">
            <li>Academic researchers, professors, and students seeking to publish and access the latest findings in their field.</li>
            <li>Industry professionals and practitioners looking for cutting-edge research applicable to their work.</li>
            <li>Policymakers and thought leaders who use academic research to inform decisions and shape policy.</li>
            <li>General readers with an interest in scientific, technological, and societal advancements.</li>
          </ul>
        </p>

        <h1  className="center-text"
  style={{
    color: '#0072b1',
    borderBottom: '2px solid #0072b1', // Line below the text
    display: 'inline-block', // Keeps the line width same as the text
    paddingBottom: '5px', // Space between the text and the border
    textAlign: 'center', // Centers the text within the element
  }}
>Peer Review and Publication Process</h1>
        <p 
        style={{
          marginTop: 0, // Use camelCase
          marginBottom: '1rem', // Use quotes for string values
          color: '#4D4D4D',
          fontSize: '17.6px', // Use camelCase
          fontFamily: 'system-ui, -apple-system, "Segoe UI"',}}
        
        
        
        
        
        
        
        
        
        >
          Our peer review process ensures that every article published meets the highest standards of quality, relevance, and accuracy. Manuscripts submitted to <b>Journal of IJESTM</b> undergo:
          <ol className="peer-review-list">
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Initial Screening:</b> Manuscripts are screened for basic compliance with submission guidelines and relevance to the journal’s scope.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Double-Blind Peer Review:</b> Each manuscript is reviewed by two or more independent experts in the field, ensuring objectivity and fairness.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Revision and Resubmission:</b> Authors may be invited to revise their manuscript based on reviewer feedback and resubmit for further evaluation.
            </li>
            <li>
              <b style={{ color: '#0072b1', fontWeight: '600' }}>Final Decision:</b> Based on reviewer recommendations, the editorial board makes the final decision regarding publication.
            </li>
          </ol>
        </p>

        <h1 style={{ color: '#0072b1' }}>Conclusion</h1>
        <p style={{
    marginTop: 0, // Use camelCase
    marginBottom: '1rem', // Use quotes for string values
    color: '#4D4D4D',
    fontSize: '17.6px', // Use camelCase
    fontFamily: 'system-ui, -apple-system, "Segoe UI"', // Use camelCase
}}>

        The Journal of <b>IJESTM</b> is dedicated to advancing interdisciplinary research and fostering a vibrant community of scholars and practitioners. We invite you to join us in our mission to explore new frontiers in science, technology, and society. Together, let us contribute to knowledge creation, dissemination, and the pursuit of innovative solutions for global challenges.
<br />
      In an ever-evolving world, the need for innovative thinking and collaborative approaches has never been more crucial. Our journal aims to bridge the gap between theory and practice, encouraging contributions that not only push the boundaries of academic research but also address real-world problems. We seek to publish high-quality articles, case studies, and reviews that provide insights into emerging trends, technologies, and methodologies across various disciplines.


        </p>

        <div className="spacing"></div>
      </div>

      <Footer />
    </>
  );
}

export default AimScope;