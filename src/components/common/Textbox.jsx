import React, { Component } from "react";

class TextBox extends Component {
    render() {
        return (
            <>
                <input type="text" placeholder={this.props.titulo} />
            </>
        );
    }
}

export default TextBox;
