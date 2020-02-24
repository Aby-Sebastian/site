import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FooterPage = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className="container">
        <section className="newsletter row">
          <span className="desc col-md-5 col-lg-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            nemo perferendis.
          </span>
          <span className="sign col-md-5 col-lg-5">
            <form
              name="Newsletter"
              method="post"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    placeholder="Enter Email address "
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />

                  <span>
                    <button className="button is-link" type="submit">
                      Sign Up
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </span>
        </section>
        <footer>
          <div className="foot">
            © 2020 CoinedOne All rights reserved.{" "}
            <a href="/">Privacy Policy.</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default FooterPage
