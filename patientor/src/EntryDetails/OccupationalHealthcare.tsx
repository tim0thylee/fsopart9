import React from 'react';
import { useStateValue } from "../state";
import {OccupationalHealthcareEntry} from '../types';

const OccupationalHealthcare: React.FC<{entry: OccupationalHealthcareEntry}> = ({entry}) => {
    const [{diagnosis}] = useStateValue();
    const style = {
        border: "1px grey solid",
        padding: "10px",
        margin: "5px"
    };
    return (
        <div style={style}>
            <h3>{entry.date} <i className="stethoscope icon"></i> {entry.employerName}</h3>
            <p>{entry.description}</p>
            <ul>
                {entry.diagnosisCodes?.map(code => 
                    <li key={code}>{code} {diagnosis[code] ? diagnosis[code].name: null}</li>
                )}
            </ul>
        </div>
    );
};

export default OccupationalHealthcare;