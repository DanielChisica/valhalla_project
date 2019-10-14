import React, { Component } from "react";
import DatePicker from "react-datepicker";
//import 'react-dates/lib/css/_datepicker.css';
import "react-datepicker/dist/react-datepicker.css";

class Fecha extends Component {
    state = {
        startDateSalida: null,
        startDateregreso: null
    };

    fechasalida = date => {
        this.setState({
            startDateSalida: date
        });
    };

    fecharegreso = date => {
        this.setState({
            startDateregreso: date
        });
    };
    render() {
        return (
            <>
                <DatePicker
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Elija Fecha de Salida"
                    onChange={this.fechasalida}
                    selected={this.state.startDateSalida}
                    withPortal
                />
                <DatePicker
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Elija Fecha de Regreso"
                    onChange={this.fecharegreso}
                    selected={this.state.startDateregreso}
                    withPortal
                />
            </>
        );
    }
}

export default Fecha;
