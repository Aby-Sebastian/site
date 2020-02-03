import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Logos {
      allImageSharp {
        edges {
          node {
            resize {
              src
            }
          }
        }
      }
    }
  `)
  const images = data.allImageSharp.edges
  return (
    <Layout>
      <div class="container">
        <main class="row">
          <div class="quote col-md-12 col-lg-12 col-xs-12">
            <p class="mainquote" tabindex="0">
              We help in-house teams make websites and mobile applications
              accessible to people with disabilities.
            </p>
          </div>
        </main>
      </div>
      <div class="container">
        <section>
          <div class="imagediv">
            <div class="row1 row">
              {images.map(image => (
                <img
                  src={image.node.resize.src}
                  alt={image.node.resize.originalName}
                  class="icons"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div class="container">
        <section class="row">
          <p class="simpleexplanation smallfonts col-md-11 col-xs-11 col-lg-11">
            Simply put,<span class="strong2"> Web accessibility</span>
            is the inclusive practice of ensuring there are no barriers that
            prevent interaction with, or access to, websites on the World Wide
            Web by people with physical disabilities, situational disabilities,
            and socio-economic restrictions on bandwidth and speed. If you need
            help making your website accessible or find out accessible issues
            within an existing one, we’d love to talk with you about how we can
            help.
          </p>
        </section>
        <section class="row">
          <div class="topmargin smallfonts col-md-4 col-xs-6">
            <a class="btn from-bottom" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div class="topmargin smallfonts col-md-4 col-xs-6">
            <a class="btn from-top" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div class="topmargin smallfonts col-md-4 col-xs-6">
            <a class="btn" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div class="topmargin smallfonts col-md-4 col-xs-6">
            <a class="btn" href="#">
              Glossary{" "}
            </a>{" "}
            The words we use when we talk about design systems.
          </div>
          <div class="topmargin smallfonts col-md-4 col-xs-6">
            <a class="btn" href="#">
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
