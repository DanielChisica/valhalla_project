import React, { Component } from "react";

import Silla from "./Silla";

import sillasJson from "../sillas.json";

class Sillas extends Component {
    render() {
        return (
            <div className="zonas">
                <ol className="sillas">
                    {Object.keys(sillasJson.claseEconomicaA).map(index => (
                        <Silla
                            key={index}
                            silla={sillasJson.claseEconomicaA[index].silla}
                            numero={index}
                        />
                    ))}
                </ol>
                <ol className="sillas">
                    {Object.keys(sillasJson.claseEconomicaB).map(index => (
                        <Silla
                            key={index}
                            silla={sillasJson.claseEconomicaB[index].silla}
                            numero={index}
                        />
                    ))}
                </ol>
                <ol className="sillas">
                    {Object.keys(sillasJson.claseEconomicaC).map(index => (
                        <Silla
                            key={index}
                            silla={sillasJson.claseEconomicaC[index].silla}
                            numero={index}
                        />
                    ))}
                </ol>
            </div>
        );
    }
}

export default Sillas;
