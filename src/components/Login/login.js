import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulAuth()
  }

 

  handleSubmit(event) {
    axios(
      {
        method: "post",
        url: "http://localhost:5000/login",
        data: {
          email: this.state.email,
          password: this.state.password,
        },
      },
      { withCredentials: true }
    )
      .then((response) => {
        console.log("this came from the backend ", response.data.access_token);
        Cookies.set("token", response.data.access_token);
        const token = Cookies.get("token")
        if (response.status == 200) {
          this.props.handleSuccessfulAuth()
          console.log("I was triggered because test was true")
        } else {
          this.setState({
            errorText: "Wrong email or password",
          });
          
        }
      })
      .catch((error) => {
        this.setState({
          errorText: "An error occurred",
        });
        
      });

    event.preventDefault();
  }

 

  render() {
    const token = Cookies.get("token");
    return (
      <div className="login">
        <div className="header">
        <h1>Login</h1>
        </div>
         
          <form className='form'>
            <label className="labels">
              Email
              <input
                className="inputField"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>

            <label className="labels">
              Password
               
              <input
                className="inputField"
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>

            <button onClick={this.handleSubmit}>Login</button>
          </form>
        
      </div>
    );
  }
}
