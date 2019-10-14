import React, { Component } from "react";

class Silla extends Component {
    state = {
        silla: Boolean
    };

    componentDidMount() {
        this.setState({ silla: this.props.silla });
    }

    mostrarDisponibilidad() {
        if (this.state.silla) {
            return (
                <li className="silla sillaTrue" onClick={this.estadoSilla}></li>
            );
        } else {
            return (
                <li
                    className="silla sillaFalse"
                    onClick={this.estadoSilla}
                ></li>
            );
        }
    }

    estadoSilla = () => {
        this.props.silla === false
            ? this.setState({ silla: false })
            : this.setState({ silla: !this.state.silla }, () => {
                  this.props.sillasElegidas(
                      this.props.numero,
                      this.state.silla
                  );
              });
    };

    render() {
        return this.mostrarDisponibilidad();
    }
}

export default Silla;
