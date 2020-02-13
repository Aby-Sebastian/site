import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const service = () => {
  return (
    <Layout>
      <div className="container">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > Service
        </div>
        <br />
        Service
      </div>
    </Layout>
  )
}

export default service
