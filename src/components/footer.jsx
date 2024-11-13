import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./footer.css";

export default function Footer() {
  return (
    <MDBFooter
      color="white"
      className="text-center text-lg-start text-muted"
      style={{
        color: "white",
        padding: "0",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/AITM-2_enhanced (1).jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
        height: "auto",
      }}
    >
      {/* Existing Footer Content */}
      <section>
        <MDBContainer className="text-center text-md-start mt-3 text-white" style={{ padding: "0 30px" }}>
          <MDBRow style={{ gap: "30px" }}>
            {/* Columns and other content */}
            <MDBCol md="3" lg="4" xl="3" className="mb-3" style={{ paddingRight: "20px" }}>
              <img
                src="/images/logo_white_bg.png"
                alt="IJESTM Logo"
                style={{ marginBottom: "10px", width: "130px" }}
              />
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "16px" }}>
                International Journal of Engineering, Science Technology and Management
              </h6>
              <p style={{ fontSize: "14px", lineHeight: "20px" }}>
                IJESTM is a scholarly open access, peer-reviewed international journal that provides the academic
                community and industry with original research and applications across various subjects.
              </p>
            </MDBCol>

            {/* Other sections */}
            {/* Contact Us */}
            <MDBCol md="2" lg="2" xl="2" className="mb-3" style={{ padding: "0 20px" }}>
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "16px" }}>Contact Us</h6>
              <p style={{ fontSize: "14px", lineHeight: "20px" }}>
                <a href="mailto:aitm@ijestm.com" className="text-reset">aitm@ijestm.com</a><br />
                <a href="tel:9945387216" className="text-reset">9945387216</a>
              </p>
            </MDBCol>

            {/* Quick Links */}
            <MDBCol md="3" lg="2" xl="2" className="mb-3" style={{ padding: "0 20px" }}>
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "16px" }}>Quick Links</h6>
              {[ 
                { text: "Author's Guidelines", link: "/publication-ethics" },
                { text: "Online Submission", link: "/submissions" },
                { text: "Call for Paper", link: "/contact-us" },
                { text: "Publication Ethics", link: "/publication-ethics" },
                { text: "Reviewer Policy", link: "/publication-ethics" },
                { text: "Reviewer Guidelines", link: "/publication-ethics" }
              ].map((item, index) => (
                <p key={index} style={{ fontSize: "14px", lineHeight: "20px" }}>
                  <a href={item.link} className="text-reset">{item.text}</a>
                </p>
              ))}
            </MDBCol>

            {/* Aim and Services */}
            <MDBCol md="4" lg="3" xl="3" className="mb-md-0 mb-3" style={{ paddingLeft: "20px" }}>
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: "16px" }}>Aim & Services</h6>
              {[
                "Accepts original and high-quality research and technical papers.",
                "Papers are published immediately in the current issue after registration.",
"Authors have access to their published papers at any time through our online platform.",
"Authors can view and download their published work anytime for easy reference and sharing."




              ].map((text, index) => (
                <p key={index} style={{ fontSize: "14px", lineHeight: "20px" }}>
                  {text}
                </p>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <center>
        <hr
          style={{
            margin: '20px auto',
            width: '75%',
            border: '1px solid white',
          }}
        />
      </center>

      {/* Scrolling Marquee for Footer */}
      <marquee
  behavior="scroll"
  direction="left"
  style={{
    color: '#ffffff',
    fontSize: '14px',
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "3px 0", // Minimized padding to reduce the gap
    margin: "0", // Removed any margin above or below marquee
    lineHeight: "1.5", // Adjusted line-height for better alignment
  }}
>
  Published by Anjuman Institute of Technology and Management | Address: XHW5+H22, Belalkanda, Bhatkal, Karnataka 581320.
</marquee>

      <div className="text-center p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", fontSize: "14px" }}>
        © 2024 Copyright:
        <span>
          <a href="https://www.aitm.edu.in/" className="text-reset fw-bold">
            &nbsp;AITM &nbsp;
          </a>
        </span>
        | All rights reserved |
        <a href="https://www.mrtechservices.in/" className="text-reset fw-bold" style={{ marginLeft: "10px" }}>
          Developed by MR Tech Services
        </a>
      </div>
    </MDBFooter>
  );
}
