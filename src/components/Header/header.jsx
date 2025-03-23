import React, { useState, useEffect } from 'react';
import '../../assets/css/style.css';
import logo from '../../assets/images/main_images/Logo.png';

function Header({ currentPage }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  const navItems = [
    { name: 'home', link: '../index.jsx' },
    { name: 'about', link: '../about.jsx' },
    { name: 'courses', link: '../courses' },
    { name: 'events', link: '../events' },
    { name: 'contact', link: '../contact' },
  ];
  
  useEffect(() => {
    
    document.title = 'Jinnah Public School';
  }, []); 
  
  return (
    <div className="page-wrapper">
      {isLoading && <div className="preloader"></div>}

      <header className="main-header">
        <div className="container-fluid topbar">
          <div className="topbar_para d-flex justify-content-center">
            <p className="pt-3">
              New Members: Get your first 7 days of Jinnah Public School Premium access for free! Click here to redeem
            </p>
            <ul className="topbar-icon pt-2">
              <li>
                <a href="#">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-upper" style={{ width: '100%' }}>
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <a href="/index.html">
                    <img src={logo} alt="Logo" title="Logo" width="70px" />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo br-10 p-15">
                      <a href="./index.html">
                        <img src={logo} alt="Logo" title="Logo" width="50px" />
                      </a>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      {navItems.map((item) => (
                        <li
                          key={item.name}
                          className={currentPage === item.name ? 'current' : ''}
                        >
                          <a href={item.link}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu_btn d-flex align-items-center mob-hide"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="form-back-drop"></div>
    </div>
  );
}

export default Header;


