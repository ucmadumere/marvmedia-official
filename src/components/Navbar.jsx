import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuGroups = [
  { id: "about", label: "About Us", links: [
    { label: "Our Founder", href: "https://founder.marvmedia.ng/", external: true },
    { label: "About", to: "/about-us" }, { label: "Portfolio", to: "/portfolio" },
    { label: "Our Team", to: "/team" }, { label: "FAQ", to: "/faq" },
  ] },
  { id: "services", label: "Services", links: [
    { label: "Pricing", to: "/pricing" }, { label: "Our Services", to: "/services" },
  ] },
  { id: "community", label: "Community", links: [
    { label: "Marv Design Space", href: "https://event.marvmedia.ng", external: true },
    { label: "Learn With Marv", href: "https://learn.marvmedia.ng/", external: true },
  ] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false);
    setOpenSubmenu(null);
    if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (menuOpen) requestAnimationFrame(() => closeRef.current?.focus());
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) closeMenu(true);
      if (event.key === "Tab" && menuOpen && window.innerWidth <= 991) {
        const focusable = [...menuRef.current.querySelectorAll("a[href], button:not([disabled]), input:not([disabled])")]
          .filter((element) => element.offsetParent !== null);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
      <div className="container">
        <nav className="navbar site-navbar" aria-label="Primary navigation">
          <div className="brand-logo">
            <Link to="/" aria-label="Marv Media home">
              <img src="/assets/images/logo/logo-marv.png" alt="Marv Media" className="light-version-logo" />
            </Link>
          </div>
          <div className="menu-block-wrapper">
            <button type="button" className={`menu-overlay ${menuOpen ? "active" : ""}`} aria-label="Close navigation menu" onClick={() => closeMenu(true)} tabIndex={menuOpen ? 0 : -1} />
            <div ref={menuRef} className={`menu-block ${menuOpen ? "active" : ""}`} id="primary-menu" role={menuOpen ? "dialog" : undefined} aria-modal={menuOpen ? "true" : undefined} aria-label={menuOpen ? "Site navigation" : undefined}>
              <div className={`mobile-menu-head ${openSubmenu ? "active" : ""}`}>
                <button type="button" className="go-back" aria-label="Return to the main menu" onClick={() => setOpenSubmenu(null)} style={{ display: openSubmenu ? "flex" : "none" }}>
                  <i className="fa fa-angle-left ps-4" aria-hidden="true" />
                </button>
                <div className="current-menu-title" aria-live="polite">{openSubmenu ? menuGroups.find((group) => group.id === openSubmenu)?.label : ""}</div>
                <button ref={closeRef} type="button" className="mobile-menu-close" aria-label="Close navigation menu" onClick={() => closeMenu(true)} style={{ display: openSubmenu ? "none" : "block" }}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item"><Link className="nav-link-item" to="/">Home</Link></li>
                {menuGroups.map((group) => {
                  const expanded = openSubmenu === group.id;
                  return (
                    <li className="nav-item nav-item-has-children" key={group.id}>
                      <button type="button" className="nav-link-item dropdown-toggle-button" aria-expanded={expanded} aria-controls={`${group.id}-submenu`} onClick={() => setOpenSubmenu(expanded ? null : group.id)}>{group.label}</button>
                      <ul id={`${group.id}-submenu`} className={`sub-menu ${expanded ? "active" : ""}`}>
                        <li className="sub-menu--item">
                          {group.links.map((link, index) => link.external ? (
                            <a className={index === 0 ? "pb-3 pt-4" : "pb-3"} href={link.href} key={link.label}>{link.label}</a>
                          ) : (
                            <Link className={index === 0 ? "pb-3 pt-4" : "pb-3"} to={link.to} key={link.label}>{link.label}</Link>
                          ))}
                        </li>
                      </ul>
                    </li>
                  );
                })}
                <li className="nav-item"><Link className="nav-link-item" to="/blog">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link className="aximo-default-btn pill aximo-header-btn" to="/contact-us">Contact Us</Link>
          </div>
          <button ref={triggerRef} type="button" className="mobile-menu-trigger light" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="primary-menu" onClick={() => setMenuOpen(true)}>
            <span aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}
