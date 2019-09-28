import React, { Component } from "react";
import axios from 'axios';
import Sillas from "./components/Sillas";

class App extends Component {




    guardarSillas = () =>{
    //     let sillasJson = {
    //         sillas:[61]
    //     }
    //     axios.post('http://localhost:8080/api/sillas', )
    //   .then(res => console.log(res.data));

    //   5d87efb546a7342ffed2ee82

        // console.log('Sillas guardar')
    }
    render() {
        return (
            <React.Fragment>
                <h1>Boeing 747 - Económica</h1>
                <Sillas />

                <button onClick={this.guardarSillas}>Guardar sillas</button>

            </React.Fragment>
        );
    }
}
  
export default App;
