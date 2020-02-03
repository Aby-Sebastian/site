import React from "react"
import { Link } from "gatsby"
import logo from "../img/Opnlogo.png"

export default function header() {
  return (
    <>
      <div class="skip">Skip to Main Content</div>
      <div class="container">
        <header class="row">
          <div class="picon col-md-4 col-lg-4 col-xs-12">
            <img src={logo} alt="Logo" height="90em" width="90em" /> CoinedOne
          </div>

          <nav class="mainmenu col-md-8 col-lg-8 col-xs-12">
            <div class="bars" alt="click to open menu">
              <a href="javascript:void(0);">
                <i class="fa fa-bars"></i>
              </a>
            </div>
            <ul class="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service/">Service</Link>
              </li>
              <li>
                <Link to="/research/">Research</Link>
              </li>
              <li>Resource</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}
