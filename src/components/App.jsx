import React, { Component } from "react";

import Sillas from "./Sillas";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Boeing 747 - Económica</h1>
                <Sillas />
            </React.Fragment>
        );
    }
}

export default App;
