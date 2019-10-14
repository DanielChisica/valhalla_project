import React, { Component } from "react";

export class Popup extends Component {
    render() {
        let mostrar = {};
        this.props.mostrar
            ? (mostrar = { display: "flex" })
            : (mostrar = { display: "none" });

        return (
            <div
                className="bg-modal"
                style={mostrar}
                onClick={this.props.ocultar}
            >
                <div
                    className="modal-contents"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="close" onClick={this.props.ocultar}>
                        +
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Popup;
