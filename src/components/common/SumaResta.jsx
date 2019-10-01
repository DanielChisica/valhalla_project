import React, { Component } from "react";

class SumaResta extends Component {
    state = {
        cantidad: 0
    };

    componentDidMount() {
        this.setState({ cantidad: this.props.cantidad });
    }

    cantidadMas = () => {
        this.state.cantidad !== this.props.max
            ? this.setState({ cantidad: this.state.cantidad + 1 }, () => {
                  this.props.comportamiento(this.state.cantidad, 1);
              })
            : this.setState({ cantidad: this.props.max });
    };

    cantidadMenos = () => {
        this.state.cantidad !== this.props.min
            ? this.setState({ cantidad: this.state.cantidad - 1 }, () => {
                  this.props.comportamiento(this.state.cantidad, 0);
              })
            : this.setState({ cantidad: this.props.min });
    };

    render() {
        return (
            <>
                <div className="comun suma" onClick={this.cantidadMenos}>
                    <span className="icono"></span>
                </div>
                <span className="comun cero">{this.state.cantidad}</span>
                <div className="comun menos" onClick={this.cantidadMas}>
                    <span className="icono"></span>
                </div>
            </>
        );
    }
}

export default SumaResta;
