import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    const token = sessionStorage.getItem("token")
  }
  

  handleOnClick(event) {
    
    axios({
      mode: "no-cors",
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        email: this.state.email,
        password: this.state.password
      },
    })
    
    .then((response) => {
      console.log("this came from the backend ",response.data.access_token)
      sessionStorage.setItem("token", response.data.access_token)
    })
    .catch((error) => {
      console.log(error)
    })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const token = sessionStorage.getItem("token")
    console.log('this is the token', token)
    return (
      <div className="login">
        
        {token && token != "" && token != undefined ? ("you are logged in with this token " + token) : (
        <form>
          <label className="labels">
            email
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

          <button onClick={this.handleOnClick}>Login</button>
        </form>
        )}
      </div> 
    )
  }
}
