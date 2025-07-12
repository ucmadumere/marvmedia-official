import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {
 useEffect(() => {
  const trigger = document.querySelector('.mobile-menu-trigger');
  const menu = document.querySelector('.menu-block');
  const overlay = document.querySelector('.menu-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!trigger || !menu || !overlay || !closeBtn) return;

  const toggleMenu = () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  // Add all event listeners
  trigger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu); // 👈 close button added here

  // Clean up
  return () => {
    trigger.removeEventListener('click', toggleMenu);
    overlay.removeEventListener('click', toggleMenu);
    closeBtn.removeEventListener('click', toggleMenu);
  };
}, []);



  return (
    <>
      <header
        className="site-header aximo-header-section aximo-header1 dark-bg"
        id="sticky-menu"
      >
        <div className="container">
          <nav className="navbar site-navbar">
            <div className="brand-logo">
              <Link to="/">
                <img
                  src="/assets/images/logo/logo-marv.png"
                  alt="logo"
                  className="light-version-logo"
                />
              </Link>
            </div>
            <div className="menu-block-wrapper">
              <div className="menu-overlay"></div>
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item">
                    <Link className="nav-link-item" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <Link className="nav-link-item">About Us</Link>
                    <ul class="sub-menu" id="submenu-2">
                      <li class="sub-menu--item">
                        <Link to="/about-us">
                          <span class="menu-item-text">Our Founder</span>
                        </Link>
                        <Link to="/portfolio">
                          <span class="menu-item-text">Portfolio</span>
                        </Link>
                        <Link to="/about-us">
                          <span class="menu-item-text">About</span>
                        </Link>
                        <Link to="/faq">
                          <span class="menu-item-text">FAQ</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <Link className="nav-link-item">Services</Link>
                    <ul class="sub-menu" id="submenu-2">
                      <li class="sub-menu--item">
                        <Link>
                          <span class="menu-item-text">Pricing</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <Link className="nav-link-item">Community</Link>
                    <ul class="sub-menu" id="submenu-2">
                      <li class="sub-menu--item">
                        <Link to="/about-us">
                          <span class="menu-item-text">Marv Design Space</span>
                        </Link>
                        <Link to="/portfolio">
                          <span class="menu-item-text">Learn With Marv</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
              <Link
                className="aximo-default-btn pill aximo-header-btn"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
            <div className="mobile-menu-trigger light">
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
