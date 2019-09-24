import React, { Component } from "react";

class Silla extends Component {
    state = {
        silla: Boolean
    };

    componentDidMount() {
        this.setState({ silla: this.props.silla });
    }

    estadoSilla = () => {
        this.setState({ silla: !this.state.silla });
    };

    mostrarDisponibilidad() {
        if (this.state.silla)
            return (
                <li className="silla sillaTrue" onClick={this.estadoSilla}></li>
            );
        else
            return (
                <li
                    className="silla sillaFalse"
                    onClick={this.estadoSilla}
                ></li>
            );
    }

    render() {
        return this.mostrarDisponibilidad();
    }
}

export default Silla;
