import React, { Component } from "react";
import axios from "axios";
const baseUrl = process.env.BASEURL

console.log(baseUrl)


class Login extends Component {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  handleChange = async e =>{
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  }

  render() {
    return (
      <section>
        <div className="contenedor-login">
          <form>
            <div className="form-grupo">
              <label> Correo: </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div className="form-grupo">
              <label> password: </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <input type="button" value="Entrar" />
          </form>
          <p>url:{baseUrl}</p>
        </div>
       
      </section>
    );
  }
}

export default Login;
