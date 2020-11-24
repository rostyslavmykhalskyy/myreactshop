import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3>Contact us</h3>
        <p>+44 345 678 903</p>
        <p>adobexd@mail.com</p>
        <p> Find a Store</p>
        <div className="footer__social">
          <button className="btn-icon">
            <i className="i-facebook"></i>
          </button>
          <button className="btn-icon">
            <i className="i-twitter"></i>
          </button>
          <button className="btn-icon">
            <i className="i-instagram"></i>
          </button>
        </div>
      </div>
      <div className="footer__content">
        <h3>CUSTOMER SERVICE</h3>
        <p>Contact Us</p>
        <p>Ordering & Payment</p>
        <p>Shipping Returns</p>
        <p> FAQ</p>
      </div>
      <div className="footer__content">
        <h3>INFORMATION</h3>
        <p>About Us</p>
        <p>Work With US</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Press Enquiries</p>
      </div>
      <div className="footer__content">
        <h3>Subscribe to AdobeXD via Email</h3>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </p>
        <div className="footer__subscribe">
          <input type="email" name="" id="" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <p>© This Website {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
