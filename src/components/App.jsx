import React, { Component } from "react";

import Sillas from "./sillas/Sillas";
import Reservacion from "./reservacion/Reservacion";
// import Fecha from "./common/Fecha";

class App extends Component {
    state = {
        clase: String
    };

    resultado = dato => {
        this.setState({ clase: dato });
    };

    render() {
        return (
            <React.Fragment>
                {/* <Fecha /> */}
                <Reservacion resultado={this.resultado} />
                <Sillas clase={this.state.clase} />
            </React.Fragment>
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
