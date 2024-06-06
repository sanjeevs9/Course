import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/quiz/123">Quiz</Link></li> {/* Replace '123' with actual quiz ID */}
        <li><Link to="/video/123">Video</Link></li> {/* Replace '123' with actual video ID */}
        <li><Link to="/forum/123">Forum</Link></li> {/* Replace '123' with actual forum ID */}
        <li><Link to="/certificate/123">Certificate</Link></li> {/* Replace '123' with actual certificate ID */}
      </ul>
    </nav>
  </header>
);

export default Header;
