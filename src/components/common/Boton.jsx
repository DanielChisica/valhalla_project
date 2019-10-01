import React, { Component } from "react";

class Boton extends Component {
    render() {
        return (
            <>
                <button type="submit">{this.props.titulo}</button>
            </>
        );
    }
}

export default Boton;
