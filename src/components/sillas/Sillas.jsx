import React, { Component } from "react";

import Silla from "./Silla";

import sillasJson from "../../sillas.json";

class Sillas extends Component {
    state = {
        clase: String,
        zonaA: [],
        zonaB: [],
        zonaC: []
    };

    componentDidUpdate(prevProps) {
        if (this.props.clase !== prevProps.clase) {
            this.setState({ zonaA: [], zonaB: [], zonaC: [] }, () => {
                this.actualizador();
            });
        }
    }

    actualizador = () => {
        this.setState({ clase: this.props.clase }, () => {
            let claseJson;
            //! FALTA SILLAS VIP
            if (this.state.clase === "Ejecutivo") {
                claseJson = sillasJson.Ejecutivo;
            } else if (this.state.clase === "PrimeraClase") {
                claseJson = sillasJson.PrimeraClase;
            } else if (this.state.clase === "Economica") {
                claseJson = sillasJson.Economica;
            } else if (this.state.clase === "Turistica") {
                claseJson = sillasJson.Turistica;
            } else {
                return <></>;
            }
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
        });
    };

    render() {
        let ctn = 1;
        return this.state.clase === String ? (
            <></>
        ) : (
            <>
                <h1>Boeing 747 - {this.state.clase}</h1>
                <div className="zonas">
                    <ol className="sillas">
                        {Object.keys(this.state.zonaA).map(i => (
                            <Silla
                                key={ctn++}
                                silla={this.state.zonaA[i]}
                                // silla={ctn}
                                numero={i}
                            />
                        ))}
                    </ol>
                    <ol className="sillas">
                        {Object.keys(this.state.zonaB).map(i => (
                            <Silla
                                key={ctn++}
                                silla={this.state.zonaB[i]}
                                // silla={ctn}
                                numero={i}
                            />
                        ))}
                    </ol>
                    <ol className="sillas">
                        {Object.keys(this.state.zonaC).map(i => (
                            <Silla
                                key={ctn++}
                                silla={this.state.zonaC[i]}
                                // silla={ctn}
                                numero={i}
                            />
                        ))}
                    </ol>
                </div>
            </>
        );
    }
}

export default Sillas;
