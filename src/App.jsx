import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
        <div className="container">
          <nav className="navbar site-navbar">
            <div className="brand-logo">
              <a href="index.html">
                <img src="/assets/images/logo/logo-white.svg" alt="" className="light-version-logo" />
              </a>
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
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">Demo <i className="fas fa-angle-down"></i></a>
                    <ul className="sub-menu" id="submenu-1">
                      <li className="sub-menu--item">
                        <a href="index.html">
                          <span className="menu-item-text">Design Agency</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="index-02.html">
                          <span className="menu-item-text">Startup Agency</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="index-03.html">
                          <span className="menu-item-text">SEO Agency</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="index-04.html">
                          <span className="menu-item-text">Business Consultation</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="index-05.html">
                          <span className="menu-item-text">Digital Marketing</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="index-06.html">
                          <span className="menu-item-text">Interior Design Agency</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="index-07.html">
                          <span className="menu-item-text">Advertising agency</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="about-us.html" className="nav-link-item">About Us</a>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">Pages <i className="fas fa-angle-down"></i></a>
                    <ul className="sub-menu" id="submenu-2">
                      <li className="sub-menu--item">
                        <a href="about-us.html">
                          <span className="menu-item-text">About Us</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="pricing.html">
                          <span className="menu-item-text">Pricing</span>
                        </a>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">blog <i className="fas fa-angle-down"></i></a>
                        <ul className="sub-menu shape-none" id="submenu-3">
                          <li className="sub-menu--item">
                            <a href="blog.html">
                              <span className="menu-item-text">Our Blog</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="blog-grid.html">
                              <span className="menu-item-text">Blog grid</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="single-blog.html">
                              <span className="menu-item-text">blog details</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">Service<i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-4">
                          <li className="sub-menu--item">
                            <a href="service.html">
                              <span className="menu-item-text">service</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="single-service.html">
                              <span className="menu-item-text">service details</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">Team<i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-5">
                          <li className="sub-menu--item">
                            <a href="team.html">
                              <span className="menu-item-text">team</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="single-team.html">
                              <span className="menu-item-text">team details</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">Portfolio<i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-6">
                          <li className="sub-menu--item">
                            <a href="portfolio-02.html">
                              <span className="menu-item-text">Portfolio One Column</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="portfolio-01.html">
                              <span className="menu-item-text">Portfolio Two Column</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="single-portfolio.html">
                              <span className="menu-item-text">Single Portfolio</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">Utility<i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-7">
                          <li className="sub-menu--item">
                            <a href="faq.html">
                              <span className="menu-item-text">faq</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="errors-404.html">
                              <span className="menu-item-text">Error 404</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="testimonial.html">
                              <span className="menu-item-text">testimonial</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="coming-soon.html">
                              <span className="menu-item-text">Coming Soon</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-menu--item nav-item-has-children">
                        <a href="#" data-menu-get="h3" className="drop-trigger">Account<i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="sub-menu shape-none" id="submenu-8">
                          <li className="sub-menu--item">
                            <a href="sign-up.html">
                              <span className="menu-item-text">sign up</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="sign-in.html">
                              <span className="menu-item-text">sign in</span>
                            </a>
                          </li>
                          <li className="sub-menu--item">
                            <a href="reset-password.html">
                              <span className="menu-item-text">reset password</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <a href="#" className="nav-link-item drop-trigger">Blog <i className="fas fa-angle-down"></i></a>
                    <ul className="sub-menu" id="submenu-9">
                      <li className="sub-menu--item">
                        <a href="blog.html">
                          <span className="menu-item-text">blog</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="blog-grid.html">
                          <span className="menu-item-text">Blog grid</span>
                        </a>
                      </li>
                      <li className="sub-menu--item">
                        <a href="single-blog.html">
                          <span className="menu-item-text">blog Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact-us.html" className="nav-link-item">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
              <a className="aximo-default-btn pill aximo-header-btn" href="contact-us.html">
                Contact Us
              </a>
            </div>
            <div className="mobile-menu-trigger light">
              <span></span>
            </div>

          </nav>
        </div>
      </header>
    </>
  )
}

export default App
