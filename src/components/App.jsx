import React, { Component } from "react";

import Sillas from "./sillas/Sillas";
import Reservacion from "./reservacion/Reservacion";
import Fecha from "./common/Fecha";
import Paises from "./reservacion/paises";
import Comidas from "./reservacion/comidas"
//* Common
import TextBox from "./common/Textbox";
import Boton from "./common/Boton";
import Popup from "./common/Popup";
import Login from "./login/Login";
import Registro from "./registro/Registro";

class App extends Component {

    state = {
        clase: String,
        mostrarSillas: false,
        mostrarLogin: false,
        mostrarRegistro: false,
        sillasCompradas: []
    };


    iniciarSesion = () => {
        this.setState({ mostrarLogin: true });
    };

    registrarse = () => {
        this.setState({ mostrarRegistro: true });
    };

    clase = dato => {
        this.setState({ clase: dato });
    };

    mostrarSillas = dato => {
        this.setState({ mostrarSillas: dato });
    };

    render() {
        return (
            <>
                <div className="fechaviaje">
                    <h1>Fecha Viaje</h1>
                    <Fecha />
                </div>

                <Popup
                    mostrar={this.state.mostrarLogin}
                    ocultar={e => {
                        this.setState({ mostrarLogin: false });
                    }}
                >
                    <Login />
                </Popup>
                <Boton titulo="Iniciar sesion" funcion={this.iniciarSesion} />

                <Popup
                    mostrar={this.state.mostrarRegistro}
                    ocultar={e => {
                        this.setState({ mostrarRegistro: false });
                    }}
                >
                    <Registro />
                </Popup>

                <Boton titulo="Registrarse" funcion={this.registrarse} />

                {/* <Fecha /> */}
                <Reservacion
                    resultado={this.clase}
                    mostrarSillas={this.mostrarSillas}
                    sillasCompradas={this.state.sillasCompradas}
                />
                <Popup
                    mostrar={this.state.mostrarSillas}
                    ocultar={e => {
                        this.setState({ mostrarSillas: false });
                    }}
                >
                    <Sillas
                        clase={this.state.clase}
                        sillasElegidas={e => {
                            this.setState({ sillasCompradas: e });
                        }}
                    />
                </Popup>
                <Paises />
                {/* <Sillas clase={this.state.clase} /> */}
            </>
        );
    }
}

export default App;

// import React, { Component } from "react";

// import "react-dates/initialize";
// // import "react-dates/lib/css/_datepicker.css";
// import "./App.css";

// import { DateRangePicker } from "react-dates";

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             startDate: null,
//             endDate: null,
//             focusedInput: null
//         };
//     }

//     componentDidMount() {
//         this.setState({ startDate: "" }, () => {
//             //new Date().getDate()
//             // console.log(${this.state.startDate})
//         });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <DateRangePicker
//                     startDatePlaceholderText="Inicio Viaje"
//                     endDatePlaceholderText="Final Viaje"
//                     startDate={this.state.startDate}
//                     endDate={this.state.endDate}
//                     onDatesChange={({ startDate, endDate }) => {
//                         this.setState({ startDate, endDate });
//                     }}
//                     focusedInput={this.state.focusedInput}
//                     onFocusChange={focusedInput => {
//                         this.setState({ focusedInput });
//                     }}
//                 />
//             </div>
//         );
//     }
// }

// export default App;
