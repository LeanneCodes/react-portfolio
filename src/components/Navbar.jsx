import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RxOpenInNewWindow } from "react-icons/rx";
import './Navbar.css';
import Icon from './elements/Icon';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import Resume from '../../public/Leanne-Goldsmith-Resume.pdf';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    // Mobile view with toggle navigation bar
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="title">
              Frontend Portfolio
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/react-portfolio/"
                  end
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/react-portfolio/about"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/react-portfolio/skills"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/react-portfolio/projects"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/react-portfolio/contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Contact Me
                </NavLink>
              </li>
              <li className="nav-item">
                <a className='nav-link' href={Resume} target='_blank' rel="noopener noreferrer">Resume {<RxOpenInNewWindow />}</a>
              </li>
              <hr />
              <div className='ext-link'>
                <a href="https://github.com/LeanneCodes" target='_blank'><Icon icon={ <SiGithub/>}/></a>
                <a href="https://www.linkedin.com/in/leanne-m-goldsmith/" target='_blank'><Icon icon={ <SiLinkedin/>}/></a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // Desktop view with vertical navigation
  return (
    <div className='desktop'>
      <ul className="nav flex-column">
        <p className='text-center display-flex mb-1'>Frontend Portfolio</p>
        <hr />
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/skills"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/projects"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact Me
          </NavLink>
        </li>
        <li className="nav-item">
          <a className='nav-link resume' href={Resume} target='_blank' rel="noopener noreferrer">Resume {<RxOpenInNewWindow />}</a>
        </li>
        <hr />
        <div className='ext-link'>
          <a href="https://github.com/LeanneCodes" target='_blank'><Icon icon={ <SiGithub/>}/></a>
          <a href="https://www.linkedin.com/in/leanne-m-goldsmith/" target='_blank'><Icon icon={ <SiLinkedin/>}/></a>
        </div>
      </ul>

    </div>
  );
};

export default Navbar;
