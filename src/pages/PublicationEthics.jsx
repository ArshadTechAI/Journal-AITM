import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { FaPenNib, FaShieldAlt, FaBook, FaBalanceScale, FaHandshake, FaEye } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

function PublicationEthics() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div style={{ margin: '50px' }}></div>

      {/* Main container */}
      <center>
  


<div
  style={{
    background: 'linear-gradient(135deg, #f7f9fc, #ffffff)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    maxWidth: '1160px',
    padding: '40px',
    margin: '0 auto',
    fontFamily: "'Roboto', sans-serif",
  
  }}
>
  <h1
    style={{
      fontSize: '3rem',
      color: '#005B8c',
      fontFamily: "'Merriweather', serif",
      margin: '20px 0',
      textAlign: 'center',
      marginTop: '-30px',
    }}
  >
    Publication Ethics
  </h1>
  <p
  style={{
    fontSize: '17.6px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#4d4d4d',
    lineHeight: 1.6,
    textAlign: 'justify',
    margin: '0 1rem',
  }}
>
    We are committed to maintaining the highest standards of ethics in academic publishing. To foster a culture of integrity and trust, all manuscripts submitted to this journal must adhere to established ethical guidelines. These principles are designed to ensure fairness, accuracy, and transparency in the publication process, protecting the rights of authors, reviewers, and readers alike. By following these ethical guidelines, we aim to promote a responsible and respectful exchange of knowledge while upholding the credibility and reputation of the academic community. It is our collective responsibility to ensure that all research is presented honestly, free from bias or manipulation, and that proper credit is given to all contributors. This helps in fostering a scholarly environment where ideas are shared with the utmost trust and professionalism.
  </p>

  {/* Section content */}
  <div
    style={{
      lineHeight: '1.8',
      fontSize: '16px',
      color: '#2C3E50',
      marginTop: '40px',
      textAlign: 'left',
    }}
  >
    {/* Responsibilities of Authors */}
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '26px',
          color: '#2980B9',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaPenNib style={{ marginRight: '10px', color: '#3498db' }} /> 1. Responsibilities of Authors
      </h2>
      <p 
  style={{
    fontSize: '17.6px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#4d4d4d',
    lineHeight: 1.6,
    textAlign: 'justify',
    margin: '0 1rem',
  }}
>
        Authors are expected to present an accurate and comprehensive account of the work performed, detailing not only the methodology and results but also providing a thoughtful and objective discussion of the significance of their findings in relation to existing literature. This thoroughness ensures that the research contributes meaningfully to the academic community and allows for replication and verification by others in the field. 
        <br />
        Furthermore, it is essential that authors uphold the highest ethical standards by avoiding any form of deception or misrepresentation. <strong>Fraudulent or knowingly inaccurate statements</strong>, including the manipulation of data or the omission of critical information, constitute unethical behavior and are unacceptable in our commitment to fostering a culture of integrity and trust within the scholarly community. Such practices not only jeopardize the credibility of the research but also diminish the collective efforts of those striving for transparency and ethical rigor in academic publishing.
      </p>
    </section>

    {/* Plagiarism and Originality */}
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '26px',
          color: '#2980B9',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaShieldAlt style={{ marginRight: '10px', color: '#e67e22' }} /> 2. Plagiarism and Originality
      </h2>
      <p
      style={{
        fontSize: '17.6px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        color: '#4d4d4d',
        lineHeight: 1.6,
        textAlign: 'justify',
        margin: '0 1rem',
      }}>
        Authors should ensure that they have written entirely <strong>original works</strong>, demonstrating their unique contributions to the field. If they have utilized the work, ideas, or words of others, it is imperative that they provide appropriate citations and quotations to give credit to the original sources. <br />
        This not only acknowledges the intellectual property of fellow researchers but also enriches the integrity and depth of their own work. Plagiarism, in any form—whether it involves copying text, ideas, images, or data without proper attribution—is considered a serious ethical violation and is unacceptable in our commitment to upholding the highest standards of academic honesty. Such practices undermine the trust that is foundational to scholarly communication and can have severe consequences for authors, including retraction of published work, damage to their reputations, and potential legal ramifications. Therefore, maintaining originality and ensuring proper citation practices are essential responsibilities for all authors in the pursuit of knowledge and advancement within their respective fields.
      </p>
    </section>

    {/* Confidentiality */}
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '26px',
          color: '#2980B9',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaBook style={{ marginRight: '10px', color: '#16a085' }} /> 3. Confidentiality
      </h2>
      <p
      style={{
        fontSize: '17.6px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        color: '#4d4d4d',
        lineHeight: 1.6,
        textAlign: 'justify',
        margin: '0 1rem',
      }}>
        The editors and any editorial staff are obligated to uphold the highest standards of confidentiality regarding all submitted manuscripts. They must not disclose any information pertaining to a manuscript, including its status, content, or any associated discussions, to anyone outside of the designated parties—namely, the corresponding author, reviewers, and other editorial advisors involved in the review process. <br />
        This commitment to confidentiality is crucial in maintaining the integrity of the editorial process, fostering trust between authors and the editorial team. By ensuring that all processes remain strictly confidential, we protect the intellectual property rights of authors and uphold the reputation of the journal. Any breach of confidentiality not only jeopardizes the author’s trust but also undermines the entire peer review process, potentially deterring high-quality submissions in the future. Therefore, it is essential that all editorial personnel adhere strictly to these confidentiality guidelines to promote an atmosphere of respect and professionalism within the academic publishing landscape.
      </p>
    </section>

    {/* Fair Play */}
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '26px',
          color: '#2980B9',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaBalanceScale style={{ marginRight: '10px', color: '#f39c12' }} /> 4. Fair Play
      </h2>
      <p
      style={{
        fontSize: '17.6px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        color: '#4d4d4d',
        lineHeight: 1.6,
        textAlign: 'justify',
        margin: '0 1rem',
      }}>
        An editor will evaluate manuscripts based on their <strong>intellectual content</strong> and merit, ensuring that the assessment is conducted without regard to the authors' race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy. This commitment to impartiality is fundamental to fostering a fair and equitable publishing environment. By focusing solely on the quality and originality of the work, editors uphold the principles of justice and integrity in the peer review process. This approach not only promotes diversity within the academic community but also enhances the overall quality of published research by allowing innovative ideas and voices from various backgrounds to emerge. It is essential that all editorial decisions are made transparently and objectively, contributing to a scholarly landscape where contributions are recognized solely on their academic merit and the potential impact they may have on the field.
      </p>
    </section>

    {/* Conflict of Interest */}
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '26px',
          color: '#2980B9',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaHandshake style={{ marginRight: '10px', color: '#8e44ad' }} /> 5. Conflict of Interest
      </h2>
      <p style={{
    fontSize: '17.6px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#4d4d4d',
    lineHeight: 1.6,
    textAlign: 'justify',
    margin: '0 1rem',
  }}>
        Authors should disclose any financial or other substantive conflicts of interest that might be construed to influence the results or interpretation of their manuscript. This includes any relationships, funding sources, or affiliations that could be perceived as potential biases affecting the research. <br />
        Transparency in this regard is essential to maintaining the integrity of the scholarly publication process and fostering trust among readers, reviewers, and the broader academic community. By openly acknowledging these conflicts, authors not only uphold ethical standards but also contribute to a more informed evaluation of their work. Such disclosures allow for a comprehensive understanding of the research context, ensuring that readers can critically assess the validity and reliability of the findings presented. Ultimately, this commitment to transparency enhances the credibility of the publication and supports the ethical exchange of knowledge within the academic community.
      </p>
    </section>

    {/* Ethical Oversight */}
    <section>
      <h2
        style={{
          fontSize: '26px',
          color: '#2980B9',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaEye style={{ marginRight: '10px', color: '#d35400' }} /> 6. Ethical Oversight
      </h2>
      <p style={{
    fontSize: '17.6px',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#4d4d4d',
    lineHeight: 1.6,
    textAlign: 'justify',
    margin: '0 1rem',
  }}>
        The journal operates under the strict adherence to all relevant ethical standards and regulations governing research. This includes ensuring that research involving human subjects or animals is conducted in accordance with recognized ethical principles, obtaining necessary approvals and consent, and ensuring that the welfare of participants is prioritized. <br />
        Moreover, all authors are required to provide evidence of such compliance as part of their submission process. This commitment to ethical oversight not only safeguards the rights and dignity of all participants involved in research but also promotes responsible conduct in the pursuit of knowledge. By enforcing these ethical guidelines, the journal plays a vital role in fostering an environment where research is conducted with the utmost respect for human and animal welfare, thereby upholding the values of integrity and trust within the academic community.
      </p>



      {/* Optional Call to Action */}
      <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginTop: '50px'
  }}
>
  <button
    style={{
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
    onMouseLeave={(e) => (e.target.style.backgroundColor = '#3498db')}
    onClick={() => navigate('/submissions')}
  >
    Submit Your Manuscript
  </button>
</div>

      
    </section>
  </div>
  
  
</div>


      </center>

      {/* <div style={{ margin: '50px' }}></div> */}
      <Footer />
    </>
  );
}

export default PublicationEthics;
