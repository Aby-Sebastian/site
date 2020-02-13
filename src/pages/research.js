import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Research = () => {
  return (
    <Layout>
      <div className="container">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > Research
        </div>
        <br />
        Research
      </div>
    </Layout>
  )
}

export default Research
