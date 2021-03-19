import React from "react";
import "./Uploading.css";
import Header from "../Header";
import { Link } from "react-router-dom";

function Uploading(props) {
  return (
    <div className="uploading">
      <Header />
      <div className="main">Registration form</div>
      <div className="form">
        <form action="">
          <div className="checking">
            <p>
              <b>Check your data</b>
            </p>
            <p>Email: {props.email}</p>
            <p>Name: {props.name}</p>
            <p>Date of birth: {props.dateOfBirth}</p>
            <p>Info: {props.info}</p>
          </div>
          <div className="buttons">
            <button>
              <Link to="/personal">Back</Link>
            </button>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Uploading;
