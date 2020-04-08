import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Glossary = () => {
  return (
    <Layout>
      <div className="container">
        <div className="breadCrumb">
          <Link to="/">Home</Link> > News
        </div>
        <br />
        News
        <br />
        <h4>News One Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <br />
        <h4>News Two Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <br />
        <h4>News Three Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
        <br />
        <h4>News Four Title</h4>
        <p>
          {" "}
          Mollit elit ut ut velit ipsum culpa voluptate commodo pariatur.
          Ullamco aliqua qui laboris incididunt nostrud do minim duis mollit
          cillum do. Eiusmod tempor commodo ipsum minim anim ipsum ullamco dolor
          id officia.
        </p>
      </div>
    </Layout>
  )
}

export default Glossary
