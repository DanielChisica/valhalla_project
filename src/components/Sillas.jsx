import React, { Component } from "react";

import Silla from "./Silla";

import sillasJson from "../sillas.json";

class Sillas extends Component {
    render() {
        let setContadorA = 0
 


        return (
            <div className="zonas">
                <ol className="sillas">
                    {Object.keys(sillasJson.claseEconomicaA).map(index => (
                        <Silla
                            key={index}
                            silla={sillasJson.claseEconomicaA[index].silla}
                            numero={setContadorA++}
                        />
                    ))}
                </ol>
                <ol className="sillas">
                    {Object.keys(sillasJson.claseEconomicaB).map(index => (
                        <Silla
                            key={index}
                            silla={sillasJson.claseEconomicaB[index].silla}
                            numero={setContadorA++}
                        />
                    ))}
                </ol>
                <ol className="sillas">
                    {Object.keys(sillasJson.claseEconomicaC).map(index => (
                        <Silla
                            key={index}
                            silla={sillasJson.claseEconomicaC[index].silla}
                            numero={setContadorA++}
                        />
                    ))}
                </ol>
            </div>
        );
    }
}

export default Sillas;
