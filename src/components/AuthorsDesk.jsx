import React from 'react';
import './AuthorDesk.css';

function AuthorsDesk() {
  return (
    <div>
        <div className="authors_desk">
        Author's Desk
        <hr />
        <a href="/current">Current Issue</a><br />
        <a href="/indexing">Indexing</a><br />
        <a href="/">Open Access</a><br />
        <a href="/publication-ethics">Author's Guidelines</a><br />
        <a href="/contact-us">Call For Paper</a><br />
        <a href="/submissions">Online Submission</a><br />
        <a href="/publication-ethics">Reviewer Policy</a><br />
        <a href="">Reviewer Guidelines</a><br />
        <a href="/publication-ethics">Plagiarism Policies</a><br />
        <a href="/publication-ethics">Withdrawal Policies</a><br />

        <div style={{ height: '10px'}}></div>

      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <button className="submit_button">Submit Article</button>

      </div>
      </div>
    </div>
  )
}

export default AuthorsDesk