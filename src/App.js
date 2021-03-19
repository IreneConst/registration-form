import React, { Component } from "react";
import "./App.css";
import Auto from "./components/Auto";
import Personal from "./components/Personal";
import { Switch, Route } from "react-router-dom";
import Uploading from "./components/Uploading";

class App extends Component {
  state = { email: "", dateOfBirth: "", name: "", info: "" };

  setEmail = (email) => {
    this.setState({ email });
  };

  setDateOfBirth = (dateOfBirth) => {
    this.setState({ dateOfBirth });
  };

  setName = (name) => {
    this.setState({ name });
  };

  setInfo = (info) => {
    this.setState({ info });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            // render={(props) => <Auto {...props} />}
            exact
            path="/"
            component={() => <Auto setEmail={this.setEmail} />}
          />
          <Route
            exact
            path="/personal"
            component={() => (
              <Personal
                setDateOfBirth={this.setDateOfBirth}
                setName={this.setName}
                setInfo={this.setInfo}
              />
            )}
          />
          <Route
            exact
            path="/uploading"
            component={() => (
              <Uploading
                email={this.state.email}
                dateOfBirth={this.state.dateOfBirth}
                name={this.state.name}
                info={this.state.info}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
