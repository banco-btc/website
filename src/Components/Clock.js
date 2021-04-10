import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function Clock() {
    const [horario, setHorario] = useState();
    setInterval(() => {
        setHorario(new Date().toLocaleTimeString())
    }, 1000);
    return(
        <GetTime horario={horario}/>
    );
}

function GetTime(props) {
    return(
        <Alert variant="dark">
            {props.horario}
        </Alert>
    )
}