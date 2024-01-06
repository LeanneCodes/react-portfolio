import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Icon from './elements/Icon';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="title">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Portfolio
            </NavLink>
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
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="skills"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Contact Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="resume"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Resume
                </NavLink>
              </li>
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
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="skills"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="resume"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </NavLink>
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
