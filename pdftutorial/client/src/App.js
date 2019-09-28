import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    nombre: '',
    cedula: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/generarpdf', this.state)
      .then(() => axios.get('enviarpdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'tiquete.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="nombre" name="nombre" onChange={this.handleChange}/>
        <input type="number" placeholder="cedula" name="cedula" onChange={this.handleChange} />
        <input type="number" placeholder="precio1" name="precio1" onChange={this.handleChange} />
        <input type="number" placeholder="precio2" name="precio2" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>descargar PDF</button>
      </div>
    );
  }
}

export default App;
