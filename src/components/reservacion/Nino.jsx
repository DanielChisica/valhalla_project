import React, { Component } from "react";

class Nino extends Component {
    render() {
        return (
            <div className="niño">
                <div className="contenido-izquierda">
                    <label>Niño {this.props.numero} </label>
                </div>
                <div className="contenido-derecha">
                    <select name="slct" id="slct">
                        <option value="1">0-1</option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                        <option value="4">3</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Nino;
