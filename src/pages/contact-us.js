import React from "react"
import Layout from "../components/Layout"

const Contact = () => (
  <>
    <Layout>
      <div className="container">
        <p>Hello Contacts</p>
        <form method="POST" action="/" className="contact-form">
          <div className="form-group">
            <label className="sr-only" for="company-name">
              Name of Company{" "}
            </label>
            <input
              type="text"
              id="company-name"
              placeholder="Name of company"
            />
            <br />
            <label className="sr-only" for="email">
              Email
            </label>
            <input type="email" id="email" placeholder="Email id : " />
            <br />
          </div>
          <div className="form-group">
            <label className="sr-only" for="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              cols="40"
              rows="5"
            ></textarea>
            <br />
          </div>
          <button value="submit">submit</button>
        </form>
      </div>
    </Layout>
  </>
)

export default Contact
