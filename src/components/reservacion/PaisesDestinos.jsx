import React, {Component} from 'react';


class PaisesDestinos extends Component {


    render() {
        return (
            <div className="paises">
                <div className="contenido-izquierda">
                    <label>Pais</label>
                </div>
                <div className="contenido-derecha">
                    <select name="slct" id="slct">
                        <option value="1">Suecia</option>
                        <option value="2">Finlandia</option>
                        <option value="3">Islandia</option>
                    </select>
                </div>
            </div>
        );
    }


}

export default PaisesDestinos;