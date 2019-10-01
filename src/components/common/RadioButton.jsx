import React, { Component } from "react";

class RadioButton extends Component {
    state = { titulo: String };

    prueba = () => {
        this.setState({ titulo: this.props.titulo }, () => {
            this.props.resultado(this.state.titulo);
        });
    };

    render() {
        return (
            <>
                <label onChange={this.prueba} className="radio">
                    <input
                        type="radio"
                        name={this.props.name}
                        className="hidden"
                    />
                    <span className="label"></span>
                    {this.props.titulo}
                </label>
            </>
        );
    }
}

export default RadioButton;
