import React from "react"
import { Link } from "gatsby"
import logo from "../img/Opnlogo.png"

export default function header({ menuLinks }) {
  return (
    <>
      <div className="skip">Skip to Main Content</div>
      <div className="container">
        <header className="row">
          <div className="picon col-md-4 col-lg-4 col-xs-12">
            <img src={logo} alt="Logo" height="90em" width="90em" /> CoinedOne
          </div>

          <nav className="mainmenu col-md-8 col-lg-8 col-xs-12">
            <div className="bars" alt="click to open menu">
              <a href="#">
                <i className="fa fa-bars"></i>
              </a>
            </div>
            <ul className="menu">
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* Original menu and links are stored in config file metadata section */}
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles/">Articles</Link>
              </li>
              <li>
                <Link to="/research/">Research</Link>
              </li>
              <li>Resource</li>
              <li>About Us</li>
              <li>Contact Us</li> */}
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}
