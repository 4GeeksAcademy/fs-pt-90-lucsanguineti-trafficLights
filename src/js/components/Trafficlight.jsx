import React, { useState } from "react";

const Trafficlight = () => {
    const [lightTrafficState, setColor] = useState("rojo");

function changeColor(newColor) {
//console.log("changeColor", newColor)
setColor(newColor)
}

// estado actual: {lightTrafficState}

	return (
    <div className="d-flex flex-column align-items-center">
        <div className="stick bg-black" style={{ width: "12px", height: "100px"}}></div>

        <div className="bg-black p-3" style={{width:"100px"}}>
            <div className={"light bg-danger"+(lightTrafficState=="red"?" selected":"")} style={{opacity:(lightTrafficState=="red")?1:0.5}} onClick={() => changeColor("red")}></div>
            <div className={"light bg-warning"+(lightTrafficState=="yellow"?" selected":"")} style={{opacity:lightTrafficState=="yellow"?1:0.5}} onClick={() => changeColor("yellow")}></div>
            <div className={"light bg-success"+(lightTrafficState=="green"?" selected":"")} style={{opacity:lightTrafficState=="green"?1:0.5}} onClick={() => changeColor("green")}></div>
        </div>
    </div>
    )};

export default Trafficlight

