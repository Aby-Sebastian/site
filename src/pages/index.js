import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
// import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Logos {
      allImageSharp {
        edges {
          node {
            fluid {
              src
              originalName
            }
          }
        }
      }
    }
  `)
  const images = data.allImageSharp.edges
  return (
    <Layout>
      <div className="container">
        <main className="row">
          <div className="quote col-md-12 col-lg-12 col-xs-12">
            <p className="mainquote" tabIndex="0">
              We help in-house teams make websites and mobile applications
              accessible to people with disabilities.
            </p>
          </div>
        </main>
      </div>
      <div className="container">
        <section>
          <div className="imagediv">
            <div className="row1 row">
              {images.map(image => (
                <img
                  src={image.node.fluid.src}
                  alt={image.node.fluid.originalName}
                  className="icons"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="row">
          <p className="simpleexplanation smallfonts col-md-11 col-xs-11 col-lg-11">
            Simply put,<span className="strong2"> Web accessibility</span>
            is the inclusive practice of ensuring there are no barriers that
            prevent interaction with, or access to, websites on the World Wide
            Web by people with physical disabilities, situational disabilities,
            and socio-economic restrictions on bandwidth and speed. If you need
            help making your website accessible or find out accessible issues
            within an existing one, we’d love to talk with you about how we can
            help.
          </p>
        </section>
        <section className="row">
          <div className="topmargin smallfonts col-md-4 col-xs-6">
            <a className="btn from-bottom" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div className="topmargin smallfonts col-md-4 col-xs-6">
            <a className="btn from-top" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div className="topmargin smallfonts col-md-4 col-xs-6">
            <a className="btn" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div className="topmargin smallfonts col-md-4 col-xs-6">
            <a className="btn" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div className="topmargin smallfonts col-md-4 col-xs-6">
            <a className="btn" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
