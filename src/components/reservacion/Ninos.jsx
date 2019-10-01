import React, { Component } from "react";

import SumaResta from "../common/SumaResta";
import Nino from "./Nino";

export class Ninos extends Component {
    state = {
        ninos: [],
        cantidad: 0,
        max: 4,
        min: 0,
        titulo: ""
    };

    componentDidMount() {
        this.setState({ titulo: this.props.titulo });
    }

    comportamiento = (num, sumaResta) => {
        this.setState({ cantidad: num });

        if (sumaResta) {
            this.setState({ ninos: [...this.state.ninos, -1] });
        } else {
            const ninos = [...this.state.ninos];
            ninos.pop();
            this.setState({ ninos: ninos });
        }
    };

    render() {
        let ctn = 0;
        return (
            <>
                <div className="habitacion-adultos-ninos">
                    <div className="contenido-izquierda">
                        <span>{this.state.titulo}</span>
                    </div>
                    <div className="contenido-derecha">
                        <SumaResta
                            cantidad={this.state.cantidad}
                            max={this.state.max}
                            min={this.state.min}
                            comportamiento={this.comportamiento}
                        />
                    </div>
                </div>
                {this.props.titulo === "Niños" ? (
                    <>
                        {this.state.ninos.length !== 0 ? <hr /> : null}
                        {this.state.ninos.map(i => (
                            <Nino key={ctn++} numero={ctn} />
                        ))}
                    </>
                ) : null}
            </>
        );
    }
}

export default Ninos;
