import React, { Component } from "react";

import TextBox from "../common/Textbox";
import Boton from "../common/Boton";

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <h1>Iniciar sesion</h1>
                <TextBox tipo="text" titulo="Correo" />
                <TextBox tipo="password" titulo="Contraseña" />
                <Boton titulo="Iniciar sesión" />
            </div>
        );
    }
}

export default Login;