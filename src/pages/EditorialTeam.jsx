
import React, { useEffect, useState} from "react"; // Import useEffect here
import "../css/EditorialPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';








const EditorialTeam = () => {
  const [isPrincipalModalOpen, setPrincipalModalOpen] = useState(false);
  const [isCoChiefModalOpen, setCoChiefModalOpen] = useState(false);
  const [isCoChief2ModalOpen, setIsCoChief2ModalOpen] = useState(false);
 
  

  const openPrincipalModal = () => setPrincipalModalOpen(true);
 
  const openCoChief2Modal = () => setIsCoChief2ModalOpen(true);
  const closeCoChief2Modal = () =>{
    document.querySelector('.modal_overlay').classList.add('fadeOut');
    setTimeout(() => setIsCoChief2ModalOpen(false), 300);
  } 
  


  const closePrincipalModal = () => {
    document.querySelector('.modal_overlay').classList.add('fadeOut');
    setTimeout(() => setPrincipalModalOpen(false), 300);
  };


 

  // Functions to open/close Co-Chief 1 modal
  const openCoChiefModal = () => setCoChiefModalOpen(true);
  const closeCoChiefModal = () => {
    document.querySelector('.modal_overlay').classList.add('fadeOut');
    setTimeout(() => setCoChiefModalOpen(false), 300);
  };


// hod
 // States to control visibility of each HOD modal
 const [isHODModal1Open, setHODModal1Open] = useState(false);
 const [isHODModal2Open, setHODModal2Open] = useState(false);
 const [isHODModal3Open, setHODModal3Open] = useState(false);
 const [isHODModal4Open, setHODModal4Open] = useState(false);
 const [isHODModal5Open, setHODModal5Open] = useState(false);


 // Functions to open/close each HOD modal
 const openHODModal1 = () => setHODModal1Open(true);
 const closeHODModal1 = () => setHODModal1Open(false);

 const openHODModal2 = () => setHODModal2Open(true);
 const closeHODModal2 = () => setHODModal2Open(false);

 const openHODModal3 = () => setHODModal3Open(true);
 const closeHODModal3 = () => setHODModal3Open(false);

 const openHODModal4 = () => setHODModal4Open(true);
 const closeHODModal4 = () => setHODModal4Open(false);

 const openHODModal5 = () => setHODModal5Open(true);
 const closeHODModal5 = () => setHODModal5Open(false);














// editorial board memebers
const [isModalOpen, setIsModalOpen] = useState(null);

const openModal = (memberId) => {
    setIsModalOpen(memberId);
};

const closeModal = () => {
    setIsModalOpen(null);
};







 

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust for speed of animations
      easing: 'ease-in-out',
      once: true       // Animation occurs only once as you scroll
    });
  }, []);
  
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="editorial-page">
        <h1 className="text" data-aos="fade-up" style={{ animation: 'fadeIn 1s ease-out' }}>Editorial Team</h1>

        <div className="editorial-content">

          <p className="style">
            
            The Editorial Board of IJESTM comprises distinguished scholars,
            researchers, and industry professionals with extensive expertise in
            their respective fields. Our editorial team is dedicated to ensuring
            the highest standards of peer review, editorial integrity, and
            content quality in each published issue. Their collective knowledge
            and experience guide the journal in its mission to publish
            cutting-edge, impactful research that advances academic discourse
            across diverse disciplines.
          </p>
        

          <h2
  data-aos="fade-up"
  style={{
    fontSize: "30.4px",
    fontFamily: "Merriweather, serif",
    color: "#0072B1",
  }}
>
  Role of the Editorial Board
</h2>


          {/* <ul className="style">
          <li>
  <span data-aos="fade-up" style={{ display: "inline-block" }}>
    <b>
      <span
        style={{
          fontSize: "17.6px",
          fontFamily: "system-ui, -apple-system, Segoe",
          color: "#0072B1",
          fontWeight: "600",
        }}
      >
        Manuscript Review:
      </span>
    </b>{" "}
    Each submission is thoroughly reviewed by experts in the field to ensure
    that it meets the journal's standards for originality, methodology, and
    relevance.
  </span>
</li>

              <b>  <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Editorial Decisions:</span></b> The board members are responsible for
              making informed decisions regarding the acceptance, revision, or
              rejection of manuscripts based on peer review feedback and their
              expert judgment.
            
            <li>
              <b> <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Ethical Oversight:</span></b> The editorial team ensures that all
              submissions comply with ethical guidelines concerning research
              integrity, plagiarism, conflicts of interest, and proper
              attribution of work.
            </li>
            <li>
               <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Guiding Journal Policys: </span> The board provides strategic
              direction for the journal’s scope, special issues, and publication
              policies to ensure that it continues to evolve and respond to
              emerging trends in academia and research.
            </li>
            <li>
              <b> <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Promoting the Journal:</span></b> Editorial board members actively
              promote the journal within their academic communities, encouraging
              high-quality submissions and expanding the journal’s reach and
              influence.
            </li>
          </ul> */}
          <ul className="style">
  <li data-aos="fade-up">
    
      <b>
        <span
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600",
          }}
        >
          Manuscript Review:
        </span>
      </b>{" "}
      Each submission is thoroughly reviewed by experts in the field to ensure
      that it meets the journal's standards for originality, methodology, and
      relevance.
   
  </li>

  <li data-aos="fade-up">
    <b>
      <span
        style={{
          fontSize: "17.6px",
          fontFamily: "system-ui, -apple-system, Segoe",
          color: "#0072B1",
          fontWeight: "600",
        }}
      >
        Editorial Decisions:
      </span>
    </b>{" "}
    The board members are responsible for making informed decisions regarding
    the acceptance, revision, or rejection of manuscripts based on peer review
    feedback and their expert judgment.
  </li>

  <li data-aos="fade-up">
    <b>
      <span
        style={{
          fontSize: "17.6px",
          fontFamily: "system-ui, -apple-system, Segoe",
          color: "#0072B1",
          fontWeight: "600",
        }}
      >
        Ethical Oversight:
      </span>
    </b>{" "}
    The editorial team ensures that all submissions comply with ethical
    guidelines concerning research integrity, plagiarism, conflicts of
    interest, and proper attribution of work.
  </li>

  <li data-aos="fade-up">
    <span
      style={{
        fontSize: "17.6px",
        fontFamily: "system-ui, -apple-system, Segoe",
        color: "#0072B1",
        fontWeight: "600",
      }}
    >
      Guiding Journal Policies:
    </span>{" "}
    The board provides strategic direction for the journal’s scope, special
    issues, and publication policies to ensure that it continues to evolve and
    respond to emerging trends in academia and research.
  </li>

  <li data-aos="fade-up">
    <b>
      <span
        style={{
          fontSize: "17.6px",
          fontFamily: "system-ui, -apple-system, Segoe",
          color: "#0072B1",
          fontWeight: "600",
        }}
      >
        Promoting the Journal:
      </span>
    </b>{" "}
    Editorial board members actively promote the journal within their academic
    communities, encouraging high-quality submissions and expanding the
    journal’s reach and influence.
  </li>
</ul>

        </div>

        <div className="editorial_team">
  <h2
    style={{
      fontSize: "30.4px",
      fontFamily: "Merriweather, serif",
      color: "#0072B1",
    }}
  >
    Meet the Editorial Team
  </h2>
  <p className="style">
    Our editorial board is composed of internationally recognized leaders across various academic disciplines. Their expertise ensures that the journal remains a respected and reliable source of knowledge.
  </p>

  
   {/* Principal Card */}
   <div className="editorial_team_section">
   <h2 className="section_title" style={{ color: "#0072b1" }}>Chief Editor:</h2>
      {/* Chief Editor Card */}
  
















      <div className="principal_container">
        <div className="principal_img">
          <img
            className="img"
            src="/images/principalFinal-scaled (1)_enhanced.jpg"
            alt="Principal"
          />
        </div>
        <h3 className="principal_name">Dr. K. Fazlur Rahman</h3>
        <p className="principal_role">Editor-in-Chief</p>
        <p className="principal_description">
          Leading the editorial team at AITM, focusing on excellence in education.
        </p>
        <button className="read_more_button" onClick={openPrincipalModal}>
          Read More
        </button>
      </div>

      {/* Principal Modal */}
      {isPrincipalModalOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h2>About Dr. K. Fazlur Rahman</h2>
            <p>
              Dr. K. Fazlur Rahman holds a Ph.D. in Computer Science from a prestigious university.
              With over 10 years of experience in academia, he has published numerous articles
              in international journals. He is known for his contributions to the field of
              artificial intelligence and has collaborated with various research institutions.
            </p>
            <div className="contact_info">
              <p><strong>Email:</strong> principal@example.com</p>
              <p><strong>Phone:</strong> 9876543210</p>
              <p><strong>Research Interests:</strong> Machine Learning, Data Science, AI in Education.</p>
              <p><strong>Department:</strong> Department of Information Technology</p>
              <p><strong>Address:</strong> Anjuman Institute of Technology and Management NH-66, Anjumanabad, Bhatkal - 581320, Uttara Kannada District, Karnataka, India</p>
            </div>
            <button className="close_modal_button" onClick={closePrincipalModal}>Close</button>
          </div>
        </div>
      )}















{/* co-chief */}
<div className="co_chief_editors_section">
    <h2 className="section_title" style={{ color: "#0072b1" }}>Co-Chief Editors:</h2>
    <div className="co_chief_cards_row">
        {/* Co-Chief Editor Card 1 */}
        <div className="co_chief_card">
        <div className="hod_img">
          <img
            className="img"
            src="/images/Anwar_sathik_sir (1)_enhanced.jpeg"
            alt="Co-Chief"
          />
        </div>
        <h3 className="co_chief_name">Dr. J. Anvar Shathik</h3>
        <p className="co_chief_role">Co-Chief Editor</p>
        <p className="co_chief_description">
          Leading collaborative efforts in the editorial board.
        </p>
        <button className="read_more_button" onClick={openCoChiefModal}>
          Read More
        </button>
      </div>

      {/* Modal for Co-Chief */}
      {isCoChiefModalOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h2>About Dr. J. Anvar Shathik</h2>
            <p>
            Dr. J. Anvar Shathik is a distinguished Professor and Head Research Supervisor at Visvesvaraya Technological University, Karnataka, with a wealth of experience in the field of Computer Science and Engineering. As an expert committee member at Anna University, Tamil Nadu, he contributes significantly to academic and research advancements. His career is marked by dedication to nurturing research talent and fostering innovation in the areas of artificial intelligence, data science, and advanced computing.
            <br />
            In his role at the Department of Computer Science and Engineering at Anjuman Institute of Technology and Management, Bhatkal, Karnataka, Dr. Shathik leads initiatives to integrate cutting-edge technology into the curriculum, preparing students for the evolving tech landscape. With extensive experience in supervising PhD scholars, he is known for his mentorship and expertise in guiding complex research projects. His research interests encompass AI, machine learning, cloud computing, and big data, and his contributions to these fields are reflected in numerous publications and conference presentations.

            </p>
            <div className="contact_info">
    <p><strong>Email:</strong> anvarshathik@dummyemail.com</p>
    <p><strong>Phone:</strong> 9123456789</p>
    <p><strong>Qualification:</strong> PhD in Computer Science and Engineering</p>
    <p><strong>Department:</strong> Computer Science and Engineering</p>
    <p><strong>College:</strong> Anjuman Institute of Technology & Management, Bhatkal</p>
    <p><strong>University:</strong> Visvesvaraya Technological University, Karnataka</p>
    <p><strong>Expert Committee Membership:</strong> Anna University, Tamil Nadu</p>
    <p><strong>Area of Interest:</strong> Artificial Intelligence, Machine Learning, Cloud Computing, Big Data</p>
</div>
            <button className="close_modal_button" onClick={closeCoChiefModal}>Close</button>
          </div>
        </div>
      )}

        {/* Co-Chief Editor Card 2 */}
   {/* Co-Chief Editor Card 2 */}
   <div className="co_chief_card">
        <div className="co_chief_img">
          <img
            className="img"
            src="/images/Anwar_sathik_sir.jpeg"
            alt="Principal"
          />
        </div>
        <h3 className="co_chief_name">Dr. Co-Chief Name 2</h3>
        <p className="co_chief_role">Co-Chief Editor</p>
        <p className="co_chief_description">
          Leading collaborative efforts in the editorial board.
        </p>
        <button className="read_more_button" onClick={openCoChief2Modal} >
          Read More
        </button>
      </div>
      {isCoChief2ModalOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h2>About Dr. Co-Chief Name 1</h2>
            <p>
              Dr. Co-Chief Name 1 is known for their expertise in editorial management
              and collaborative work within the academic community.
            </p>
            <div className="contact_info">
              <p><strong>Email:</strong> cochief@example.com</p>
              <p><strong>Phone:</strong> 1234567890</p>
              <p><strong>Research Interests:</strong> Editorial Management, Academic Research.</p>
              <p><strong>Department:</strong> Department of Information Technology</p>
              <p><strong>Address:</strong> Anjuman Institute of Technology and Management, NH-66, Anjumanabad, Bhatkal - 581320, Uttara Kannada District, Karnataka, India</p>
            </div>
            <button className="close_modal_button" onClick={closeCoChief2Modal}>Close</button>
          </div>
        </div>
      )}

      

        
    </div>
</div>


















 

<div className="associate_editors_section">
        <h2 className="section_title" style={{ color: "#0072b1" }}>Associate Editors:</h2>
        
        <div className="hod_cards_row">
          {/* HOD Card 1 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/WhatsApp Image 2024-11-02 at 11,41,44_614f927b_enhanced.jpg" alt="HOD 1" />
            </div>
            <h3 className="hod_name">Dr. Anantmurty S. <br />Shastry
            </h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
              Leading the Department of Mechanical Engineering
              .
            </p>
            <button className="read_more_button" onClick={openHODModal1}>Read More</button>
          </div>

          {/* Modal for HOD 1 */}
          {isHODModal1Open && (
            <div className="modal_overlay">
              <div className="modal_content">
              <h2>About Dr. Anantmurty S. Shastry</h2>
<p>
    Dr. Anantmurty S. Shastry holds multiple qualifications including B.E., M.Tech, PhD, LL.B (Spl), and M.Sc (REV).
    With 34 years of experience in the field, he is currently serving as the Associate Professor and HOD in the 
    Department of Mechanical Engineering at Anjuman Institute of Technology & Management, Bhatkal.
</p>
<div className="contact_info">
    <p><strong>Email:</strong> ansshastry@gmail.com</p>
    <p><strong>Phone:</strong> 9448321671</p>
    <p><strong>Qualifications:</strong> B.E., M.Tech, PhD, LL.B (Spl), M.Sc (REV)</p>
    <p><strong>Department:</strong> Mechanical Engineering</p>
    <p><strong>College:</strong> Anjuman Institute of Technology & Management, Bhatkal</p>
    <p><strong>University:</strong> VTU, Belgavi</p>
    <p><strong>Area of Interest:</strong> Rapid Prototyping, CIM, SCM, Product Design & Ergonomics</p>
</div>
                <button className="close_modal_button" onClick={closeHODModal1}>Close</button>
              </div>
            </div>
          )}

          {/* HOD Card 2 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/WhatsApp Image 2024-11-02 at 11,51,14_b6cde6ca_enhanced.jpg" alt="HOD 2" />
            </div>
            <h3 className="hod_name">Dr. Padmayya S <br />Naik</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
             Department of Mechanical Engineering.
            </p>
            <button className="read_more_button" onClick={openHODModal2}>Read More</button>
          </div>

          {/* Modal for HOD 2 */}
          {isHODModal2Open && (
            <div className="modal_overlay">
              <div className="modal_content">
              <h2>About Padmayya S Naik</h2>
<p>
    Padmayya S Naik is an esteemed academic with a PhD in Mechanical Engineering and over 29 years of teaching and research experience. He is currently a Professor in the Mechanical Department at AITM Bhatkal, where he has dedicated his career to educating and mentoring students in various aspects of mechanical engineering. 
    His extensive experience includes leading research projects and contributing to numerous publications in respected journals. He is passionate about advancing knowledge in the field of materials and thermal sciences, which are critical to developing innovative engineering solutions.
</p>
<div className="contact_info">
    <p><strong>Email:</strong> pad2914@gmail.com</p>
    <p><strong>Phone:</strong> 9449884301</p>
    <p><strong>Qualification:</strong> PhD</p>
    <p><strong>Department:</strong> Mechanical</p>
    <p><strong>College:</strong> AITM Bhatkal</p>
    <p><strong>University:</strong> VTU, Belagavi</p>
    <p><strong>Area of Interest:</strong> Materials, Thermal, CFD, CAD Modeling, Advanced Materials</p>
    <p><strong>Vidwan ID:</strong> 424206</p>
    <p><strong>Scopus ID:</strong> 96272023</p>
    <p><strong>Orchid ID:</strong> 0009000128627329</p>
</div>

                <button className="close_modal_button" onClick={closeHODModal2}>Close</button>
              </div>
            </div>
          )}

          {/* HOD Card 3 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/Screenshot-2024-09-14-095852_enhanced.png" alt="HOD 3" />
            </div>
            <h3 className="hod_name">Dr. Anil Kadle</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
              Leading the Department of Electrical and Electronics Engineering.
            </p>
            <button className="read_more_button" onClick={openHODModal3}>Read More</button>
          </div>

          {/* Modal for HOD 3 */}
          {isHODModal3Open && (
            <div className="modal_overlay">
              <div className="modal_content">
              <h2>About Anil Kadle</h2>
<p>
    Anil Kadle is the Head of the Electrical and Electronics Department at Anjuman Institute of Technology & Management, Bhatkal. With a robust academic foundation and over 20 years of experience in the field, he is committed to providing high-quality education to his students. His teaching philosophy revolves around fostering innovation and critical thinking, enabling students to become leaders in their respective fields.
</p>
<p>
    In his role as HOD, Mr. Kadle is instrumental in designing the curriculum to incorporate the latest advancements in electrical engineering and technology. He emphasizes the importance of hands-on experience and actively encourages student participation in projects and research initiatives. His areas of interest include power systems, electronics design, and smart grid technologies, and he has authored several research papers in prominent journals.
</p>
<div className="contact_info">
    <p><strong>Email:</strong> anilkadle@dummyemail.com</p>
    <p><strong>Phone:</strong> 1234567890</p>
    <p><strong>Qualification:</strong> M.Tech, PhD</p>
    <p><strong>Department:</strong> Electrical and Electronics</p>
    <p><strong>College:</strong> Anjuman Institute of Technology & Management</p>
    <p><strong>University:</strong> VTU, Belagavi</p>
    <p><strong>Area of Interest:</strong> Power Systems, Electronics Design, Smart Grid Technologies</p>
</div>
                <button className="close_modal_button" onClick={closeHODModal3}>Close</button>
              </div>
            </div>
          )}

          {/* HOD Card 4 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/IMG-20190731-WA0023-min (1)_enhanced.jpg" alt="HOD 4" />
            </div>
            <h3 className="hod_name"> Dr. Basavaraj Malalkere <br />Veerappa</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
              Associate Professor, Dept. of Mechanical Engineering
            </p>
            <button className="read_more_button" onClick={openHODModal4}>Read More</button>
          </div>

          {/* Modal for HOD 4 */}
          {isHODModal4Open && (
            <div className="modal_overlay">
              <div className="modal_content">
              <h2>About Dr. Basavaraj Malalkere Veerappa</h2>
<p>
    Dr. Basavaraj Malalkere Veerappa is an Associate Professor in the Department of Mechanical Engineering, known for his dedication to both teaching and research. With a deep-rooted passion for mechanical engineering, Dr. Veerappa brings extensive expertise to the classroom, engaging students in innovative learning experiences that bridge theoretical concepts with practical applications.
</p>
<p>
    Throughout his career, Dr. Veerappa has been involved in numerous research projects, focusing on areas such as advanced materials, thermodynamics, and computer-aided design (CAD). His work has been published in respected academic journals, and he regularly presents at industry conferences, where he shares insights into the latest developments in mechanical engineering. As a faculty member, he is committed to inspiring the next generation of engineers and fostering a collaborative and research-driven learning environment.
</p>
<div className="contact_info">
    <p><strong>Email:</strong> basavarajveerappa@dummyemail.com</p>
    <p><strong>Phone:</strong> 9876543210</p>
    <p><strong>Qualification:</strong> M.Tech, PhD</p>
    <p><strong>Department:</strong> Mechanical Engineering</p>
    <p><strong>College:</strong> Anjuman Institute of Technology & Management</p>
    <p><strong>University:</strong> VTU, Belagavi</p>
    <p><strong>Area of Interest:</strong> Advanced Materials, Thermodynamics, CAD, Mechanical Design</p>
</div>





                <button className="close_modal_button" onClick={closeHODModal4}>Close</button>
              </div>
            </div>
          )}




          {/* HOD Card 4 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/WhatsApp Image 2024-11-03 at 15,59,13_7f61168e_enhanced_enhanced.jpg" alt="HOD 4" />
            </div>
            <h3 className="hod_name">Dr. Kiran V. 
             Shanbhag</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
            Leading the Department of Electronics and Communication Engineering
            </p>      
            <button className="read_more_button" onClick={openHODModal5}>Read More</button>
          </div>

          {/* Modal for HOD 4 */}
          {isHODModal5Open && (
  <div className="modal_overlay">
    <div className="modal_content">
      <h2>About Dr. Kiran V. Shanbhag</h2>
      <p>
        Dr. Kiran V. Shanbhag is the Head of the Department of Electronics and Communication Engineering at Anjuman Institute of Technology and Management, Bhatkal. With nearly two decades of experience, Dr. Shanbhag is recognized for his dedication to academic excellence and his impactful contributions to research. His leadership in the department is marked by a commitment to fostering an environment where students are encouraged to explore and innovate in the fields of electronics and communication.
      </p>
      <p>
        Dr. Shanbhag’s research interests lie in wireless communication, Multiple Access for 5G, and IoT. Over his 19-year career, he has published extensively in prestigious academic journals and presented his work at numerous conferences. As a passionate educator and researcher, Dr. Shanbhag continues to inspire students and faculty alike, driving advancements in technology and contributing to the academic growth of the department.
      </p>
      <div className="contact_info">
        <p><strong>Email:</strong> shanbhagkiranv@anjuman.edu.in</p>
        <p><strong>Phone:</strong> 8050567634</p>
        <p><strong>Qualification:</strong> PhD</p>
        <p><strong>Department:</strong> Electronics and Communication Engineering</p>
        <p><strong>Designation:</strong> Head of Department, Assistant Professor</p>
        <p><strong>Experience:</strong> 19 Years</p>
        <p><strong>College:</strong> Anjuman Institute of Technology and Management, Bhatkal</p>
        <p><strong>University:</strong> Visvesvaraya Technological University</p>
        <p><strong>Area of Interest:</strong> Wireless Communication, Multiple Access for 5G, IoT</p>
        <p><strong>Orchid ID:</strong> 0000-0001-9269-7703</p>
        <p><strong>Scopus ID:</strong> 36810255700</p>
      </div>
      <button className="close_modal_button" onClick={closeHODModal5}>Close</button>
    </div>
  </div>
)}



          {/* HOD Card 4 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/WhatsApp Image 2024-11-03 at 15,59,13_7f61168e_enhanced_enhanced.jpg" alt="HOD 4" />
            </div>
            <h3 className="hod_name">Dr. Kiran V. 
             Shanbhag</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
            Leading the Department of Electronics and Communication Engineering
            </p>      
            <button className="read_more_button" onClick={openHODModal5}>Read More</button>
          </div>

          {/* Modal for HOD 4 */}
          {isHODModal5Open && (
  <div className="modal_overlay">
    <div className="modal_content">
      <h2>About Dr. Kiran V. Shanbhag</h2>
      <p>
        Dr. Kiran V. Shanbhag is the Head of the Department of Electronics and Communication Engineering at Anjuman Institute of Technology and Management, Bhatkal. With nearly two decades of experience, Dr. Shanbhag is recognized for his dedication to academic excellence and his impactful contributions to research. His leadership in the department is marked by a commitment to fostering an environment where students are encouraged to explore and innovate in the fields of electronics and communication.
      </p>
      <p>
        Dr. Shanbhag’s research interests lie in wireless communication, Multiple Access for 5G, and IoT. Over his 19-year career, he has published extensively in prestigious academic journals and presented his work at numerous conferences. As a passionate educator and researcher, Dr. Shanbhag continues to inspire students and faculty alike, driving advancements in technology and contributing to the academic growth of the department.
      </p>
      <div className="contact_info">
        <p><strong>Email:</strong> shanbhagkiranv@anjuman.edu.in</p>
        <p><strong>Phone:</strong> 8050567634</p>
        <p><strong>Qualification:</strong> PhD</p>
        <p><strong>Department:</strong> Electronics and Communication Engineering</p>
        <p><strong>Designation:</strong> Head of Department, Assistant Professor</p>
        <p><strong>Experience:</strong> 19 Years</p>
        <p><strong>College:</strong> Anjuman Institute of Technology and Management, Bhatkal</p>
        <p><strong>University:</strong> Visvesvaraya Technological University</p>
        <p><strong>Area of Interest:</strong> Wireless Communication, Multiple Access for 5G, IoT</p>
        <p><strong>Orchid ID:</strong> 0000-0001-9269-7703</p>
        <p><strong>Scopus ID:</strong> 36810255700</p>
      </div>
      <button className="close_modal_button" onClick={closeHODModal5}>Close</button>
    </div>
  </div>
)}


          {/* HOD Card 4 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/WhatsApp Image 2024-11-03 at 15,59,13_7f61168e_enhanced_enhanced.jpg" alt="HOD 4" />
            </div>
            <h3 className="hod_name">Dr. Kiran V. 
             Shanbhag</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
            Leading the Department of Electronics and Communication Engineering
            </p>      
            <button className="read_more_button" onClick={openHODModal5}>Read More</button>
          </div>

          {/* Modal for HOD 4 */}
          {isHODModal5Open && (
  <div className="modal_overlay">
    <div className="modal_content">
      <h2>About Dr. Kiran V. Shanbhag</h2>
      <p>
        Dr. Kiran V. Shanbhag is the Head of the Department of Electronics and Communication Engineering at Anjuman Institute of Technology and Management, Bhatkal. With nearly two decades of experience, Dr. Shanbhag is recognized for his dedication to academic excellence and his impactful contributions to research. His leadership in the department is marked by a commitment to fostering an environment where students are encouraged to explore and innovate in the fields of electronics and communication.
      </p>
      <p>
        Dr. Shanbhag’s research interests lie in wireless communication, Multiple Access for 5G, and IoT. Over his 19-year career, he has published extensively in prestigious academic journals and presented his work at numerous conferences. As a passionate educator and researcher, Dr. Shanbhag continues to inspire students and faculty alike, driving advancements in technology and contributing to the academic growth of the department.
      </p>
      <div className="contact_info">
        <p><strong>Email:</strong> shanbhagkiranv@anjuman.edu.in</p>
        <p><strong>Phone:</strong> 8050567634</p>
        <p><strong>Qualification:</strong> PhD</p>
        <p><strong>Department:</strong> Electronics and Communication Engineering</p>
        <p><strong>Designation:</strong> Head of Department, Assistant Professor</p>
        <p><strong>Experience:</strong> 19 Years</p>
        <p><strong>College:</strong> Anjuman Institute of Technology and Management, Bhatkal</p>
        <p><strong>University:</strong> Visvesvaraya Technological University</p>
        <p><strong>Area of Interest:</strong> Wireless Communication, Multiple Access for 5G, IoT</p>
        <p><strong>Orchid ID:</strong> 0000-0001-9269-7703</p>
        <p><strong>Scopus ID:</strong> 36810255700</p>
      </div>
      <button className="close_modal_button" onClick={closeHODModal5}>Close</button>
    </div>
  </div>
)}




          {/* HOD Card 4 */}
          <div className="hod_card">
            <div className="hod_img">
              <img className="img" src="/images/WhatsApp Image 2024-11-03 at 15,59,13_7f61168e_enhanced_enhanced.jpg" alt="HOD 4" />
            </div>
            <h3 className="hod_name">Dr. Kiran V. 
             Shanbhag</h3>
            <p className="hod_role">Associate Editor</p>
            <p className="hod_description">
            Leading the Department of Electronics and Communication Engineering
            </p>      
            <button className="read_more_button" onClick={openHODModal5}>Read More</button>
          </div>

          {/* Modal for HOD 4 */}
          {isHODModal5Open && (
  <div className="modal_overlay">
    <div className="modal_content">
      <h2>About Dr. Kiran V. Shanbhag</h2>
      <p>
        Dr. Kiran V. Shanbhag is the Head of the Department of Electronics and Communication Engineering at Anjuman Institute of Technology and Management, Bhatkal. With nearly two decades of experience, Dr. Shanbhag is recognized for his dedication to academic excellence and his impactful contributions to research. His leadership in the department is marked by a commitment to fostering an environment where students are encouraged to explore and innovate in the fields of electronics and communication.
      </p>
      <p>
        Dr. Shanbhag’s research interests lie in wireless communication, Multiple Access for 5G, and IoT. Over his 19-year career, he has published extensively in prestigious academic journals and presented his work at numerous conferences. As a passionate educator and researcher, Dr. Shanbhag continues to inspire students and faculty alike, driving advancements in technology and contributing to the academic growth of the department.
      </p>
      <div className="contact_info">
        <p><strong>Email:</strong> shanbhagkiranv@anjuman.edu.in</p>
        <p><strong>Phone:</strong> 8050567634</p>
        <p><strong>Qualification:</strong> PhD</p>
        <p><strong>Department:</strong> Electronics and Communication Engineering</p>
        <p><strong>Designation:</strong> Head of Department, Assistant Professor</p>
        <p><strong>Experience:</strong> 19 Years</p>
        <p><strong>College:</strong> Anjuman Institute of Technology and Management, Bhatkal</p>
        <p><strong>University:</strong> Visvesvaraya Technological University</p>
        <p><strong>Area of Interest:</strong> Wireless Communication, Multiple Access for 5G, IoT</p>
        <p><strong>Orchid ID:</strong> 0000-0001-9269-7703</p>
        <p><strong>Scopus ID:</strong> 36810255700</p>
      </div>
      <button className="close_modal_button" onClick={closeHODModal5}>Close</button>
    </div>
  </div>
)}











        </div>
   





  
</div>

</div>










 {/* Editorial Board Section */}
{/* EditoriaBoard Section */}
<div className="editorial_board_section">
    <h2 className="section_title" style={{ color: "#0072b1" }}>Editorial Board Members:</h2>
    <div className="editorial_board_row">
        {/* Board Member Card 1 */}
        <div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 1" />
            </div>
            <h3 className="hod_name">Dr. Basavaraj Patil</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Advancing Research in Computer Science and Networks.</p>
            <button className="read_more_button" onClick={() => openModal(1)}>Read More</button>
        </div>

        {/* Modal for Board Member 1 */}
        {isModalOpen === 1 && (
            <div className="modal_overlay">
                <div className="modal_content">
                    <h2>About Dr. Basavaraj Patil</h2>
                    <p>Dr. Basavaraj Patil is an Assistant Professor in the Department of Computer Science and Business Systems at Dayanand Sagar College of Engineering, Bengaluru. With a strong academic background and a passion for research, Dr. Patil has dedicated over 12 years to teaching and advancing knowledge in the field of computer science. His expertise extends to areas such as Computer Networks, Cryptography, Blockchain, and Quantum Computing.</p>
                    <p>        Dr. Patil’s research contributions are well-recognized, with his work published in various reputable journals and conferences. His commitment to pushing the boundaries of technology and his deep understanding of emerging fields like blockchain and quantum computing make him a valuable asset to the academic and research communities.
                    </p>
                    <div className="contact_info">
        <p><strong>Email:</strong> bbpatilcs@gmail.com</p>
        <p><strong>Phone:</strong> 9900291407</p>
        <p><strong>Qualification:</strong> PhD (CSE), MTech (CSE)</p>
        <p><strong>Department:</strong> Computer Science and Business Systems</p>
        <p><strong>Designation:</strong> Assistant Professor</p>
        <p><strong>Experience:</strong> 12 Years</p>
        <p><strong>College:</strong> Dayanand Sagar College of Engineering, Bengaluru</p>
        <p><strong>University:</strong> VTU Belagavi</p>
        <p><strong>Area of Interest:</strong> Computer Networks, Cryptography, Blockchain, Quantum Computing</p>
        <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0003-4734-7557" target="_blank">https://orcid.org/0000-0003-4734-7557</a></p>
        <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57197642792" target="_blank">https://www.scopus.com/authid/detail.uri?authorId=57197642792</a></p>
      </div>
                    <button className="close_modal_button" onClick={closeModal}>Close</button>
                </div>
            </div>
        )}

        {/* Repeat similar structure for other board members */}
         <div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Screenshot 2024-11-03 172711_enhanced.png" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Shreyas J</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Researching Artificial Intelligence and Sensor Networks applications.</p>
            <button className="read_more_button" onClick={() => openModal(2)}>Read More</button>
        </div>

        {isModalOpen === 2 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Shreyas J</h2>
            <p>Dr. Shreyas J is an Assistant Professor in the Department of Information Technology at Manipal Institute of Technology, Bengaluru. He has a Ph.D. in Computer Science and Engineering, specializing in Artificial Intelligence of Things.</p>
            <p>With over 9 years of experience in research and academia, Dr. Shreyas has published more than 90 papers in prestigious international journals and conferences, receiving several best paper awards for his contributions.</p>
            <p>His research interests include Sensor Networks, Machine Learning, and AI applications in various domains, particularly agriculture. Dr. Shreyas is also an active member of professional organizations such as ACM and IEEE.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> shreyas.j@manipal.edu</p>
                <p><strong>Phone:</strong> 8970768504</p>
                <p><strong>Qualification:</strong> PhD (CSE), MTech (CSE), B.E (CSE)</p>
                <p><strong>Department:</strong> Information Technology</p>
                <p><strong>Designation:</strong> Assistant Professor</p>
                <p><strong>Experience:</strong> 9+ Years</p>
                <p><strong>College:</strong> Manipal Institute of Technology, Bengaluru</p>
                <p><strong>University:</strong> Manipal Academy of Higher Education (MAHE)</p>
                <p><strong>Area of Interest:</strong> Artificial Intelligence, Sensor Networks, Machine Learning</p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)} 

    {/* card 3 */}
     <div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Bhaskar Roy</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Researching Sensor and <br />Optical Detectors, Micro <br />processors.</p>
            <button className="read_more_button" onClick={() => openModal(3)}>Read More</button>
        </div>
{isModalOpen === 3 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Bhaskar Roy</h2>
            <p>Dr. Bhaskar Roy is an Assistant Professor in the Department of CSE (AIML) at Asansol Engineering College. He holds a Ph.D. and has 18 years of experience in teaching and research, focusing on areas such as Sensor and Optical Detectors, Microprocessors, and Analog Integrated Circuits.</p>
            <p>Dr. Roy’s contributions to research have been published in various reputable journals, and he is committed to advancing knowledge in his field. His expertise in both microprocessors and sensor technology makes him a valuable member of the academic community.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> bhaskar.ec11@gmail.com</p>
                <p><strong>Phone:</strong> 8918618117</p>
                <p><strong>Qualification:</strong> Ph.D.</p>
                <p><strong>Department:</strong> CSE (AIML)</p>
                <p><strong>Designation:</strong> Assistant Professor</p>
                <p><strong>Experience:</strong> 18 Years</p>
                <p><strong>College:</strong> Asansol Engineering College</p>
                <p><strong>University:</strong> MAKAUT</p>
                <p><strong>Area of Interest:</strong> Sensor and Optical Detectors, Microprocessors, Analog Integrated Circuits</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0002-6516-3682" target="_blank">0000-0002-6516-3682</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57207828920" target="_blank">57207828920</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)}
        {/* Additional board member cards and modals can be added here following the same pattern */}
         {/* card 4 */}
     <div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Rajasekaran S</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Expert in Data Science, <br />AI, IoT,  Cloud Computing and Software Engineering.</p>
            <button className="read_more_button" onClick={() => openModal(4)}>Read More</button>
        </div>
        {isModalOpen === 4 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Rajasekaran S</h2>
            <p>Dr. Rajasekaran S is a Professor in the Department of Information Technology at the College of Computing and Information Sciences, University of Technology and Applied Sciences, Ibri, Oman. With over 24 years of experience, he specializes in Data Science, Artificial Intelligence, Machine Learning, IoT, Cloud Computing, and Software Engineering.</p>
            <p>Dr. Rajasekaran's extensive research and teaching experience have significantly contributed to advancements in technology. His expertise in data-driven technologies and cloud systems makes him a valuable asset to both academia and industry.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> srs20may@gmail.com</p>
                <p><strong>Phone:</strong> +96894354844</p>
                <p><strong>Qualification:</strong> Ph.D.</p>
                <p><strong>Department:</strong> Information Technology</p>
                <p><strong>Designation:</strong> Professor</p>
                <p><strong>Experience:</strong> 24+ Years</p>
                <p><strong>College:</strong> College of Computing and Information Sciences</p>
                <p><strong>University:</strong> University of Technology and Applied Sciences, Ibri, Oman</p>
                <p><strong>Area of Interest:</strong> Data Science, AI & ML, IoT, Cloud Computing, Software Engineering</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0002-7893-9072" target="_blank">0000-0002-7893-9072</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=58533576600" target="_blank">58533576600</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)} 
{/* card 5 */}
<div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Devaseelan S</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Expert in Cyber Forensics and Security Science.</p>
            <button className="read_more_button" onClick={() => openModal(6)}>Read More</button>
        </div>
        {isModalOpen === 6 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Devaseelan S</h2>
            <p>Dr. Devaseelan S is a Professor in the Department of Cyber Forensic and Forensic Science at the Institute of Allied Health Science, Srinivas University. With over 8 years of experience, he specializes in cyber forensics, forensic science, criminology, and security science, contributing significantly to research and academia in these fields.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> devaseelan.s3@gmail.com</p>
                <p><strong>Phone:</strong> +917259892541</p>
                <p><strong>Qualification:</strong> PhD</p>
                <p><strong>Department:</strong> Cyber Forensic and Forensic Science</p>
                <p><strong>Designation:</strong> Professor</p>
                <p><strong>Experience:</strong> 8+ Years</p>
                <p><strong>College:</strong> Institute of Allied Health Science</p>
                <p><strong>University:</strong> Srinivas University</p>
                <p><strong>Area of Interest:</strong> Cyber Forensics, Forensic Science, Criminology, and Security Science</p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)} 
{/* card 6 */}
<div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Manoj Jayabalan</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Specialist in Data Mining and Healthcare Informatics.</p>
            <button className="read_more_button" onClick={() => openModal(7)}>Read More</button>
        </div>
        {isModalOpen === 7 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Manoj Jayabalan</h2>
            <p>Dr. Manoj Jayabalan is an academic at the School of Computer Science and Mathematics, Liverpool John Moores University, UK. With over 12 years of experience, his expertise spans data mining, machine learning, software engineering, healthcare informatics, and information system security. His contributions to these fields make him a respected figure in academic and research communities.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> m.jayabalan@ljmu.ac.uk</p>
                <p><strong>Phone:</strong> +447398453707</p>
                <p><strong>Qualification:</strong> PhD</p>
                <p><strong>Department:</strong> School of Computer Science and Mathematics</p>
                <p><strong>Designation:</strong> Academics</p>
                <p><strong>Experience:</strong> 12+ Years</p>
                <p><strong>University:</strong> Liverpool John Moores University, UK</p>
                <p><strong>Area of Interest:</strong> Data Mining, Machine Learning, Software Engineering, Healthcare Informatics, Information System Security</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0002-1599-965X" target="_blank">https://orcid.org/0000-0002-1599-965X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57189237693" target="_blank">https://www.scopus.com/authid/detail.uri?authorId=57189237693</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)} 


{/* card7 */}
<div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Manoj Jayabalan</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Specialist in Data Mining and Healthcare Informatics.</p>
            <button className="read_more_button" onClick={() => openModal(7)}>Read More</button>
        </div>
        {isModalOpen === 7 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Manoj Jayabalan</h2>
            <p>Dr. Manoj Jayabalan is an academic at the School of Computer Science and Mathematics, Liverpool John Moores University, UK. With over 12 years of experience, his expertise spans data mining, machine learning, software engineering, healthcare informatics, and information system security. His contributions to these fields make him a respected figure in academic and research communities.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> m.jayabalan@ljmu.ac.uk</p>
                <p><strong>Phone:</strong> +447398453707</p>
                <p><strong>Qualification:</strong> PhD</p>
                <p><strong>Department:</strong> School of Computer Science and Mathematics</p>
                <p><strong>Designation:</strong> Academics</p>
                <p><strong>Experience:</strong> 12+ Years</p>
                <p><strong>University:</strong> Liverpool John Moores University, UK</p>
                <p><strong>Area of Interest:</strong> Data Mining, Machine Learning, Software Engineering, Healthcare Informatics, Information System Security</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0002-1599-965X" target="_blank">https://orcid.org/0000-0002-1599-965X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57189237693" target="_blank">https://www.scopus.com/authid/detail.uri?authorId=57189237693</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)} 

{/* card 8 */}
<div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 2" />
            </div>
            <h3 className="hod_name">Dr. Manoj Jayabalan</h3>
            <p className="hod_role">Editorial Board Member</p>
            <p className="hod_description">Specialist in Data Mining and Healthcare Informatics.</p>
            <button className="read_more_button" onClick={() => openModal(7)}>Read More</button>
        </div>
        {isModalOpen === 7 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Manoj Jayabalan</h2>
            <p>Dr. Manoj Jayabalan is an academic at the School of Computer Science and Mathematics, Liverpool John Moores University, UK. With over 12 years of experience, his expertise spans data mining, machine learning, software engineering, healthcare informatics, and information system security. His contributions to these fields make him a respected figure in academic and research communities.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> m.jayabalan@ljmu.ac.uk</p>
                <p><strong>Phone:</strong> +447398453707</p>
                <p><strong>Qualification:</strong> PhD</p>
                <p><strong>Department:</strong> School of Computer Science and Mathematics</p>
                <p><strong>Designation:</strong> Academics</p>
                <p><strong>Experience:</strong> 12+ Years</p>
                <p><strong>University:</strong> Liverpool John Moores University, UK</p>
                <p><strong>Area of Interest:</strong> Data Mining, Machine Learning, Software Engineering, Healthcare Informatics, Information System Security</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0002-1599-965X" target="_blank">https://orcid.org/0000-0002-1599-965X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57189237693" target="_blank">https://www.scopus.com/authid/detail.uri?authorId=57189237693</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)} 


</div>




<div className="editorial_board_Section">
<h2 className="section_title" style={{ color: "#0072b1" }}>Reviewer for Leading Journals and Conferences:</h2>
<div className="editorial_board_row"> 
     {/* Board Member Card 1 */}
     <div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 1" />
            </div>
            <h3 className="hod_name">Dr. Mohammad Manzoor Hussain</h3>
            <p className="hod_role">Reviewer Board Member</p>
            <p className="hod_description">Specialist in Machine Learning for Healthcare Science.</p>
            <button className="read_more_button" onClick={() => openModal(5)}>Read More</button>
            </div>

        {/* Modal for Board Member 1 */}
        {isModalOpen === 5 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Mohammad Manzoor Hussain</h2>
            <p>Dr. Mohammad Manzoor Hussain is an Assistant Professor in the Department of Computer Science and Engineering at B V Raju Institute of Technology, Narsapur, Telangana. With a strong background in machine learning and deep learning applications, he focuses on techniques for advancing healthcare science. He has over 14 years of experience in academia and research.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> mdmanzoorhussain@gmail.com</p>
                <p><strong>Phone:</strong> 6364789215</p>
                <p><strong>Qualification:</strong> M.Tech (PhD)</p>
                <p><strong>Department:</strong> Computer Science and Engineering</p>
                <p><strong>Designation:</strong> Assistant Professor</p>
                <p><strong>Experience:</strong> 14 Years</p>
                <p><strong>College:</strong> B V Raju Institute of Technology, Narsapur, Medak, Telangana</p>
                <p><strong>University:</strong> JNTUH</p>
                <p><strong>Area of Interest:</strong> Machine Learning and Deep Learning for Healthcare Science</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0001-9759-544X" target="_blank">0000-0001-9759-544X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57832139600" target="_blank">57832139600</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)}
{/* Board member card2 */}
<div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 1" />
            </div>
            <h3 className="hod_name">Dr. Mohammad Manzoor Hussain</h3>
            <p className="hod_role">Reviewer Board Member</p>
            <p className="hod_description">Specialist in Machine Learning for Healthcare Science.</p>
            <button className="read_more_button" onClick={() => openModal(5)}>Read More</button>
            </div>

        {/* Modal for Board Member 1 */}
        {isModalOpen === 5 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Mohammad Manzoor Hussain</h2>
            <p>Dr. Mohammad Manzoor Hussain is an Assistant Professor in the Department of Computer Science and Engineering at B V Raju Institute of Technology, Narsapur, Telangana. With a strong background in machine learning and deep learning applications, he focuses on techniques for advancing healthcare science. He has over 14 years of experience in academia and research.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> mdmanzoorhussain@gmail.com</p>
                <p><strong>Phone:</strong> 6364789215</p>
                <p><strong>Qualification:</strong> M.Tech (PhD)</p>
                <p><strong>Department:</strong> Computer Science and Engineering</p>
                <p><strong>Designation:</strong> Assistant Professor</p>
                <p><strong>Experience:</strong> 14 Years</p>
                <p><strong>College:</strong> B V Raju Institute of Technology, Narsapur, Medak, Telangana</p>
                <p><strong>University:</strong> JNTUH</p>
                <p><strong>Area of Interest:</strong> Machine Learning and Deep Learning for Healthcare Science</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0001-9759-544X" target="_blank">0000-0001-9759-544X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57832139600" target="_blank">57832139600</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)}
 {/* board member card 3 */}
 <div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 1" />
            </div>
            <h3 className="hod_name">Dr. Mohammad Manzoor Hussain</h3>
            <p className="hod_role">Reviewer Board Member</p>
            <p className="hod_description">Specialist in Machine Learning for Healthcare Science.</p>
            <button className="read_more_button" onClick={() => openModal(5)}>Read More</button>
            </div>

        {/* Modal for Board Member 1 */}
        {isModalOpen === 5 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Mohammad Manzoor Hussain</h2>
            <p>Dr. Mohammad Manzoor Hussain is an Assistant Professor in the Department of Computer Science and Engineering at B V Raju Institute of Technology, Narsapur, Telangana. With a strong background in machine learning and deep learning applications, he focuses on techniques for advancing healthcare science. He has over 14 years of experience in academia and research.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> mdmanzoorhussain@gmail.com</p>
                <p><strong>Phone:</strong> 6364789215</p>
                <p><strong>Qualification:</strong> M.Tech (PhD)</p>
                <p><strong>Department:</strong> Computer Science and Engineering</p>
                <p><strong>Designation:</strong> Assistant Professor</p>
                <p><strong>Experience:</strong> 14 Years</p>
                <p><strong>College:</strong> B V Raju Institute of Technology, Narsapur, Medak, Telangana</p>
                <p><strong>University:</strong> JNTUH</p>
                <p><strong>Area of Interest:</strong> Machine Learning and Deep Learning for Healthcare Science</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0001-9759-544X" target="_blank">0000-0001-9759-544X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57832139600" target="_blank">57832139600</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)}
{/* board member card 4 */}
<div className="hod_card">
            <div className="hod_img">
                <img className="img" src="/images/Anwar_sathik_sir.jpeg" alt="Board Member 1" />
            </div>
            <h3 className="hod_name">Dr. Mohammad Manzoor Hussain</h3>
            <p className="hod_role">Reviewer Board Member</p>
            <p className="hod_description">Specialist in Machine Learning for Healthcare Science.</p>
            <button className="read_more_button" onClick={() => openModal(5)}>Read More</button>
            </div>

        {/* Modal for Board Member 1 */}
        {isModalOpen === 5 && (
    <div className="modal_overlay">
        <div className="modal_content">
            <h2>About Dr. Mohammad Manzoor Hussain</h2>
            <p>Dr. Mohammad Manzoor Hussain is an Assistant Professor in the Department of Computer Science and Engineering at B V Raju Institute of Technology, Narsapur, Telangana. With a strong background in machine learning and deep learning applications, he focuses on techniques for advancing healthcare science. He has over 14 years of experience in academia and research.</p>
            <div className="contact_info">
                <p><strong>Email:</strong> mdmanzoorhussain@gmail.com</p>
                <p><strong>Phone:</strong> 6364789215</p>
                <p><strong>Qualification:</strong> M.Tech (PhD)</p>
                <p><strong>Department:</strong> Computer Science and Engineering</p>
                <p><strong>Designation:</strong> Assistant Professor</p>
                <p><strong>Experience:</strong> 14 Years</p>
                <p><strong>College:</strong> B V Raju Institute of Technology, Narsapur, Medak, Telangana</p>
                <p><strong>University:</strong> JNTUH</p>
                <p><strong>Area of Interest:</strong> Machine Learning and Deep Learning for Healthcare Science</p>
                <p><strong>Orchid ID:</strong> <a href="https://orcid.org/0000-0001-9759-544X" target="_blank">0000-0001-9759-544X</a></p>
                <p><strong>Scopus ID:</strong> <a href="https://www.scopus.com/authid/detail.uri?authorId=57832139600" target="_blank">57832139600</a></p>
            </div>
            <button className="close_modal_button" onClick={closeModal}>Close</button>
        </div>
    </div>
)}
</div>

</div>



        {/* <div>
          <h2
            style={{
              fontSize: "30.4px",
              fontFamily: "Merriweather, serif",
              color: "#0072B1",
            }}
          >
            Commitment to Ethical Publishing
          </h2>
          <p className="style">
            The Editorial Board is dedicated to maintaining the highest ethical
            standards in publishing. We adhere to the guidelines established by
            the Committee on Publication Ethics (COPE) and ensure that all
            manuscripts undergo a rigorous peer-review process.
          </p>
          <h3
            style={{
              fontSize: "30.4px",
              fontFamily: "Merriweather, serif",
              color: "#0072B1",
            }}
          >
            Our policies guarantee that:
          </h3>
          <ul className="style">
            <li>
              <b>
              <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Objectivity:</span></b> Manuscripts are reviewed based on their
              scholarly merit, without regard to race, gender, nationality, or
              institutional affiliation.
            </li>
            <li>
              <b> <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Confidentiality:</span></b> Reviewers and editors are required to
              maintain strict confidentiality regarding submissions and review
              processes.
            </li>
            <li>
              <b> <span
                  style={{
                    fontSize: "17.6px",
                    fontFamily: "system-ui, -apple-system, Segoe",
                    color: "#0072B1",
                    fontWeight: "600",
                  }}
                >Conflict of Interest:</span></b> All members of the editorial team
              declare any conflicts of interest to ensure fairness and
              impartiality in decision-making.
            </li>
          </ul>
        </div> */}
        <div>
  <h2
    data-aos="fade-up"
    style={{
      fontSize: "30.4px",
      fontFamily: "Merriweather, serif",
      color: "#0072B1",
    }}
  >
    Commitment to Ethical Publishing
  </h2>
  <p className="style" data-aos="fade-up">
    The Editorial Board is dedicated to maintaining the highest ethical
    standards in publishing. We adhere to the guidelines established by
    the Committee on Publication Ethics (COPE) and ensure that all
    manuscripts undergo a rigorous peer-review process.
  </p>
  <h3
    data-aos="fade-up"
    style={{
      fontSize: "30.4px",
      fontFamily: "Merriweather, serif",
      color: "#0072B1",
    }}
  >
    Our policies guarantee that:
  </h3>
  <ul className="style">
    <li data-aos="fade-up">
      <b>
        <span
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600",
          }}
        >
          Objectivity:
        </span>
      </b>{" "}
      Manuscripts are reviewed based on their scholarly merit, without regard
      to race, gender, nationality, or institutional affiliation.
    </li>
    <li data-aos="fade-up">
      <b>
        <span
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600",
          }}
        >
          Confidentiality:
        </span>
      </b>{" "}
      Reviewers and editors are required to maintain strict confidentiality
      regarding submissions and review processes.
    </li>
    <li data-aos="fade-up">
      <b>
        <span
          style={{
            fontSize: "17.6px",
            fontFamily: "system-ui, -apple-system, Segoe",
            color: "#0072B1",
            fontWeight: "600",
          }}
        >
          Conflict of Interest:
        </span>
      </b>{" "}
      All members of the editorial team declare any conflicts of interest to
      ensure fairness and impartiality in decision-making.
    </li>
  </ul>
</div>



{/* 
        <div className="join-us-section">
          <h2>Join the Editorial Board</h2>
          <p style={{
    fontSize: '17.6px', 
    fontFamily: 'system-ui, -apple-system, "Segoe"', 
    textAlign: 'justify',
    marginBottom: '15px',
    color: '#4d4d4d',
    lineHeight: '27px'
}}>
    We are continuously expanding our editorial board to include experts
    in emerging fields and interdisciplinary studies. If you are a
    researcher with a track record of excellence and are interested in
    joining our team, please send your curriculum vitae (CV) and a
    letter of interest to <a href="mailto:aitm@gmail.com">aitm@gmail.com</a>.
</p>

          <h2>Join Us</h2>
          <p style={{
    fontSize: '17.6px', 
    fontFamily: 'system-ui, -apple-system, "Segoe"', 
    textAlign: 'justify',
    marginBottom: '15px',
    color: '#4d4d4d',
    lineHeight: '27px'
}}>
            If you are passionate about contributing to our journal, we’d love
            to hear from you! Whether you want to write articles, assist in peer
            reviews, or contribute to editorial tasks, we welcome experts from
            diverse fields to join our team. Become a part of our mission to
            promote knowledge sharing and field-based activities.
          </p>
          <button
            className="join-us-button"
            onClick={() => navigate("/contact-us")}
          >
            Join Our Team
          </button>
        </div> */}
        <div className="join-us-section">
  <h2 data-aos="fade-up">Join the Editorial Board</h2>
  <p
    data-aos="fade-up"
    style={{
      fontSize: "17.6px",
      fontFamily: "system-ui, -apple-system, 'Segoe'",
      textAlign: "justify",
      marginBottom: "15px",
      color: "#4d4d4d",
      lineHeight: "27px",
    }}
  >
    We are continuously expanding our editorial board to include experts in
    emerging fields and interdisciplinary studies. If you are a researcher
    with a track record of excellence and are interested in joining our
    team, please send your curriculum vitae (CV) and a letter of interest
    to <a href="mailto:aitm@gmail.com">aitm@gmail.com</a>.
  </p>

  <h2 data-aos="fade-up">Join Us</h2>
  <p
    data-aos="fade-up"
    style={{
      fontSize: "17.6px",
      fontFamily: "system-ui, -apple-system, 'Segoe'",
      textAlign: "justify",
      marginBottom: "15px",
      color: "#4d4d4d",
      lineHeight: "27px",
    }}
  >
    If you are passionate about contributing to our journal, we’d love to
    hear from you! Whether you want to write articles, assist in peer
    reviews, or contribute to editorial tasks, we welcome experts from
    diverse fields to join our team. Become a part of our mission to
    promote knowledge sharing and field-based activities.
  </p>
  <button
    className="join-us-button"
    onClick={() => navigate("/contact-us")}
    data-aos="fade-up"
  >
    Join Our Team
  </button>
</div>

</div>




</div>
</div>
    



      
      <Footer />
    </>
  );
};


export default EditorialTeam;
