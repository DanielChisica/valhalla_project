import React, { Component } from "react";
import "../../styles/css/reservacion.css";

import TextBox from "../common/Textbox";
import Boton from "../common/Boton";
import RadioButton from "../common/RadioButton";
import Habitaciones from "./Habitaciones";
import Adultos from "./Adultos";
import Ninos from "./Ninos";
import Paises from "./PaisesDestinos";

class Reservacion extends Component {
    state = {
        clase: "",
        mostrarSillas: false
    };

    resultado = dato => {
        this.setState({ clase: dato }, () => {
            this.props.resultado(this.state.clase);
        });
    };

    mostrarSillas = () => {
        this.setState({ mostrarSillas: true }, () => {
            this.props.mostrarSillas(this.state.mostrarSillas);
        });
    };

    render() {
        return (
            <div className="reservacion">
                <header>
                    <h1>Reservación</h1>
                </header>

                <form className="formulario">
                    <div className="formulario-textboxs">
                        <h1>Pais destino</h1>
                        <Paises />
                        <h1>Pais Regreso</h1>
                        <Paises />
                        <TextBox tipo="text" titulo="Nombre" />
                        <TextBox tipo="text" titulo="Apellido" />
                        <TextBox tipo="text" titulo="Correo" />
                        <TextBox tipo="text" titulo="Numero Documento" />

                        <RadioButton
                            titulo="Ejecutivo"
                            name="clase"
                            resultado={this.resultado}
                        />
                        <RadioButton
                            titulo="PrimeraClase"
                            name="clase"
                            resultado={this.resultado}
                        />
                        <RadioButton
                            titulo="Economica"
                            name="clase"
                            resultado={this.resultado}
                        />
                        <RadioButton
                            titulo="Turistica"
                            name="clase"
                            resultado={this.resultado}
                        />

                        <Boton
                            titulo="Mostrar Sillas"
                            funcion={this.mostrarSillas}
                        />

                        {Object.keys(this.props.sillasCompradas).map(i => (
                            <TextBox
                                key={i}
                                tipo="text"
                                titulo={this.props.sillasCompradas[i]}
                            />
                        ))}
                    </div>

                    <div className="hotel-reserva">
                        <Habitaciones titulo="Habitaciones" />
                        <Adultos titulo="Adultos" />
                        <Ninos titulo="Niños" />
                    </div>

                    <br />
                    <br />

                    <Boton titulo="Pedir Ticket" />
                </form>

                {/*
                 clase[4] primera ejecutiva economico turista

                nombre, apellido, correo, numero de documento,
                pais destino, fehca ida fhecha llegada
                 aeropueerto ida aeropueerto  llegada
                habitaciones, adultos, Niños
                precio tiquete
                cantidad de pasajeros adulto
                cantidad de pasajeros niños

                plan turistico :
                suecia
                tipo, [] tour , precio
                islandoia
                tipo, [] tour , precio
                filandia
                tipo, [] tour , precio
                valortotal-plan turistico

                hotel:
                ciudad destino, tipo de acomodacion_ [sencilla doble suite], valor ospedaje,
                habitcione adultos niños

                aimentacion:
                almuerzo y cena true/false, estilo bufet: []
                suecia
                tipo, [] comida , precio
                islandoia
                tipo, [] comida , precio
                filandia
                tipo, [] comida , precio
                valortotal-plan turistico
                totalAlimentacion

                alquiler de vehiculos:
                vehiculo: tipo, marca, modelo, dias alquiler, valor del alquiler

                shows:
                suecia
                tipo, [] show , precio
                islandoia
                tipo, [] show , precio
                filandia
                tipo, [] show , precio
                valortotal-show
                totalShow

                 clase[4] primera ejecutiva economico turista
                 */}
            </div>
        );
    }
}

export default Reservacion;
