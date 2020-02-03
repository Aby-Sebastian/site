import React from "react"
import Header from "./header"
import FooterPage from "./footer"
import "./main.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div className="bg-color">
      <Header />
      {children}
      <FooterPage />
    </div>
  )
}
export default Layout
