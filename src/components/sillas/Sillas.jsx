import React, { Component } from "react";

import Silla from "./Silla";
import Axios from "axios";


class Sillas extends Component {
    state = {
        clase: String,
        sillasElegidas: [],
        zonaA: [],
        zonaB: [],
        zonaC: []
    };

    componentDidUpdate(prevProps) {
        if (this.props.clase !== prevProps.clase) {
            this.setState(
                {
                    clase: this.props.clase,
                    sillasElegidas: [],
                    zonaA: [],
                    zonaB: [],
                    zonaC: []
                },
                () => {
                    this.actualizador();
                    this.props.sillasElegidas(this.state.sillasElegidas);
                }
            );
        }
    }

    actualizador = () => {
        Axios.get('http://localhost:8080/api/traersillas')
            .then((response) => {
                let sillasJson = response.data
                console.log(sillasJson);
                let claseJson='';
                //! FALTA SILLAS VIP
                switch (this.state.clase) {
                    case "Ejecutivo":
                        claseJson = sillasJson.Ejecutivo;
                        console.log(sillasJson.Ejecutivo)
                        console.log(claseJson)
                        break;
                    case "PrimeraClase":
                        claseJson = sillasJson.PrimeraClase;
                        break;
                    case "Economica":
                        claseJson = sillasJson.Economica;
                        break;
                    case "Turistica":
                        claseJson = sillasJson.Turistica;
                        break;
                    default:
                        break;
                }
                console.log(this.state.clase)
                function distribuir(num) {
                    let redondeado = Math.floor(num / 3);
                    let sumaRedondeado = redondeado * 3;
                    let residuo = num - sumaRedondeado;
                    let filas = [redondeado, redondeado, redondeado];
                    for (let i = 0; i < residuo; i++) {
                        if (i <= filas.length) {
                            filas[i] = filas[i] + 1;
                        } else {
                            filas[i - 2] = filas[i - 2] + 1;
                        }
                    }
                    let zonas = [[], [], []];
                    let ctn = 0;
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < filas[i]; j++) {
                            zonas[i].push(claseJson[ctn++].silla);
                        }
                    }
                    return zonas;
                }
                let zonas = distribuir(claseJson.length);
                this.setState({
                    zonaA: zonas[0],
                    zonaB: zonas[1],
                    zonaC: zonas[2]
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    sillasElegidas = (silla, estado) => {
        if (estado) {
            this.state.sillasElegidas.splice(
                this.state.sillasElegidas.indexOf(silla),
                1
            );
            this.setState({ sillasElegidas: this.state.sillasElegidas }, () => {
                this.props.sillasElegidas(this.state.sillasElegidas);
            });
        } else {
            this.setState(
                { sillasElegidas: [...this.state.sillasElegidas, silla] },
                () => {
                    this.props.sillasElegidas(this.state.sillasElegidas);
                }
            );
        }
    };

    render() {
        return this.state.clase === String ? (
            <></>
        ) : (
                <>
                    <h1>Boeing 747 - {this.state.clase}</h1>
                    <div className="zonas">
                        <ol className="sillas">
                            {Object.keys(this.state.zonaA).map(i => (
                                <Silla
                                    key={i}
                                    silla={this.state.zonaA[i]}
                                    numero={`a${i}`}
                                    sillasElegidas={this.sillasElegidas}
                                />
                            ))}
                        </ol>
                        <ol className="sillas">
                            {Object.keys(this.state.zonaB).map(i => (
                                <Silla
                                    key={i}
                                    silla={this.state.zonaB[i]}
                                    numero={`b${i}`}
                                    sillasElegidas={this.sillasElegidas}
                                />
                            ))}
                        </ol>
                        <ol className="sillas">
                            {Object.keys(this.state.zonaC).map(i => (
                                <Silla
                                    key={i}
                                    silla={this.state.zonaC[i]}
                                    numero={`c${i}`}
                                    sillasElegidas={this.sillasElegidas}
                                />
                            ))}
                        </ol>
                    </div>
                </>
            );
    }
}

export default Sillas;
