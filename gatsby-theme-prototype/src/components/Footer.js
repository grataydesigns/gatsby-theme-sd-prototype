import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => {
  const today = new Date(),
    year = today.getFullYear();

  return (
    <footer className="sd-footer">
      <div className="sd-footer__main">
        <a href="https://jonri.codes" className="sd-footer__logo-link">
          <img src={logo} alt="jonri.codes" />
          <span>jonri.codes</span>
        </a>
        <ul className="sd-footer__social-list">
          <li>
            <a href="https://www.linkedin.com/in/jonrirothwell/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/grataydesigns">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/grataydesigns">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="sd-footer__aside">
        <p>UI/UX Developer</p>
        <p>
          &copy; {year}
          <span className="sd-footer__separator">&#8226;</span>
          <span>Jonri Rothwell</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
