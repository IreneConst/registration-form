import React, { Component } from "react";
import "./Auto.css";
import Header from "../Header";
import { Link } from "react-router-dom";

class Auto extends Component {
  state = {
    email: "",
    value1: "",
    value2: "",
    validEmail: true,
    passMismatch: false,
    valid: false,
  };

  handleChange1 = (event) => {
    this.setState({ value1: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ value2: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  validateEmail = () => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(this.state.email)) {
      this.setState({ validEmail: true });
    } else {
      this.setState({ validEmail: false });
    }
  };

  validateAll = () => {
    if (
      this.state.validEmail &&
      this.state.value1 &&
      this.state.value2 &&
      this.state.value1 === this.state.value2
    ) {
      this.setState({ valid: true });
    }
    if (this.state.value1 !== this.state.value2) {
      this.setState({ passMismatch: true });
    } else {
      this.setState({ passMismatch: false });
    }
  };

  render() {
    const { setEmail } = this.props;
    return (
      <div className="main">
        <Header valid={this.state.valid} />
        <div className="main">Registration form</div>
        <div className="form">
          <form action="">
            <div>Enter your data</div>
            {!this.state.validEmail && (
              <p className="error">Enter correct email</p>
            )}

            <input
              type="email"
              placeholder="Email"
              required
              value={this.state.email}
              onChange={this.handleEmail}
              onMouseLeave={this.validateEmail}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={this.state.value1}
              onChange={this.handleChange1}
              onMouseLeave={this.validateAll}
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={this.state.value2}
              onChange={this.handleChange2}
              onMouseLeave={this.validateAll}
            />
            {this.state.passMismatch ? (
              <p className="error">Password mismatch</p>
            ) : (
              ""
            )}
            <div className="button">
              <button
                disabled={!this.state.valid}
                onClick={() => {
                  setEmail(this.state.email);
                }}
              >
                {!this.state.valid ? "Next" : ""}
                {this.state.valid && <Link to="/personal">Next</Link>}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auto;
