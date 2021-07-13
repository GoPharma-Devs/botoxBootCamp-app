import React, { Component } from "react";

import axios from "axios";
import { withRouter } from "react-router";

class Login extends Component {
  constructor() {
    super();
    this.state = {
     
      email: "",
      password: "",
      message: "",
      status: "Enviar",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Enviando..." });
    this.setState({menssage:""});
    axios({
      method: "post",
      url: "https://botoxb-be.herokuapp.com/api/auth/login",
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.state,
    }).then((response) => {
      console.log('token', response);
      if (response.data.message === "Auth succesful") {
        this.props.history.push("/ranking");
        console.log("Session Iniciada");

        this.setState({ name: "", email: "", message: "", status: "Auth succesful" });
      } else if (response.data.message === "Invalid password") {
        this.props.history.push("/ups");
        console.log("Error en el mensaje, porfavor intenta de nuevo");
        
      }
      
    });
  }

  handleChange(event) {
    const field = event.target.id;
     if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "password") {
      this.setState({ password: event.target.value });
    }  
  }
  render() {
    let buttonText = this.state.status;
    return (
    <section className="login">

<div className="contenedor-login">
<form
        className="formulario"
        onSubmit={this.handleSubmit.bind(this)}
        
      >
      
        <div className="form-grupo">
        <label> Correo: </label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            required
          />
        </div>
        <div className="form-grupo">
        <label> password: </label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="currrent-password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
            required
          />
        </div>
      
       
        <button className="btn" type="submit">
          {buttonText}
        </button>
      </form>
</div>
    

    </section>
      );
  }
}

export default withRouter(Login);