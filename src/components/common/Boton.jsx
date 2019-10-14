import React, { Component } from "react";

class Boton extends Component {
    funcion = e => {
        e.preventDefault();
        this.props.funcion(e);
    };

    render() {
        return (
            <>
                <button type="submit" onClick={this.funcion}>
                    {this.props.titulo}
                </button>
            </>
        );
    }
}

export default Boton;
