import md5 from 'md5'
import React, { Component } from "react";
import axios from "axios";
import Navbar from '../assets/Navbar';
const baseUrl = 'https://botoxb-be.herokuapp.com/'

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
    //borrar
    console.log(this.state.form);
  }

  iniciarSesion=async ()=>{
    await axios.get(baseUrl,{params:{email:this.state.form.email,password:md5(this.state.form.password)}})
    .then(response =>{
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error);
    })
  }


  render() {
    return (
    <>
    <Navbar/>      <section className="login">
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
            
            <input className="btn-primario" type="button" value="Entrar" onClick={() => this.iniciarSesion()} />
          </form>
          <small>url:{baseUrl}</small>
        </div>
       
      </section>
    
    </>);
  }
}

export default Login;
