import React, { Component } from "react";
import "./Personal.css";
import Header from "../Header";
import { Link } from "react-router-dom";

class Personal extends Component {
  state = {
    name: "",
    dateOfBirth: "",
    info: "",
    noname: false,
    valid: false,
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleDate = (event) => {
    console.log(event.target.value);
    this.setState({ dateOfBirth: event.target.value });
  };

  handleInfo = (event) => {
    this.setState({ info: event.target.value });
  };

  validateAll = () => {
    if (this.state.name && this.state.dateOfBirth) {
      this.setState({ valid: true });
    } else if (!this.state.name) {
      this.setState({ noname: true });
    } else {
      this.setState({ noname: false });
    }
  };

  render() {
    const { setDateOfBirth, setName, setInfo } = this.props;
    return (
      <div className="main">
        <Header validity={this.state.valid} />
        <div className="personal">Registration form</div>
        <div className="form">
          <form action="">
            <div>Enter your data</div>
            {this.state.noname ? <p className="error">Enter your name</p> : ""}
            <input
              type="text"
              placeholder="Your name"
              required
              value={this.state.name}
              onChange={this.handleChange}
              onMouseLeave={this.validateAll}
            />
            <label htmlFor="date">Date of birth:</label>
            <input
              type="date"
              name="date"
              placeholder="Date of birth"
              required
              value={this.state.dateOfBirth}
              onChange={this.handleDate}
              onBlur={this.validateAll}
            />
            <label htmlFor="info">
              {512 - this.state.info.length} characters left
            </label>
            <textarea
              name="info"
              placeholder="Additional info"
              value={this.state.info}
              onChange={this.handleInfo}
            ></textarea>
            <div className="buttons">
              <button>
                <Link to="/">Back</Link>
              </button>
              <button
                disabled={!this.state.valid}
                onClick={() => {
                  setDateOfBirth(this.state.dateOfBirth);
                  setName(this.state.name);
                  setInfo(this.state.info);
                }}
              >
                {!this.state.valid ? "Next" : ""}
                {this.state.valid && <Link to="/uploading">Next</Link>}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Personal;
