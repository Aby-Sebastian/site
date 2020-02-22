import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(
      `Welcome ${this.state.firstName} ${this.state.lastName}! ${this.state.message}`
    )
    var myCar = new Object()
    myCar.make = this.state.firstName
    myCar.model = this.state.lastName
    myCar.year = this.state.message
    console.log(myCar)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Messages
            <textarea
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}
