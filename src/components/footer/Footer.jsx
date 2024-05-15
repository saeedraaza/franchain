import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.</p>
      <div className="footer-links">
        <h3>Need help?</h3>
        <h3>Back to dashboard</h3>
        <h3>Terms</h3>
        <h3>Privacy policy</h3>
        <h3>Sign out and continue later</h3>
      </div>
    </footer>
  );
};

export default Footer;
