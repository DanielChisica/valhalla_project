import React, { Component } from "react";

import TextBox from "../common/Textbox";
import Boton from "../common/Boton";

class Registro extends Component {
    render() {
        return (
            <div className="Registro">
                <TextBox tipo="text" titulo="Nombre"/>
                <TextBox tipo="text" titulo="Apellido"/>
                <TextBox tipo="text" titulo="Numero"/>
                <TextBox tipo="text" titulo="Cedula" />
                <TextBox tipo="text" titulo="Correo" />
                <TextBox tipo="password" titulo="Contraseña" />
                <Boton titulo="Registrarse" />
            </div>
        );
    }
}

export default Registro;