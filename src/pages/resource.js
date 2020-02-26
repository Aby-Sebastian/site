import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Resource = () => {
  return (
    <Layout>
      <div className="container">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > Resource
        </div>
        <br />
        Resource
      </div>
    </Layout>
  )
}

export default Resource