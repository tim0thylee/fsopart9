import React from 'react';
import { useStateValue } from "../state";
import {HospitalEntry} from '../types';

const Hospital: React.FC<{entry: HospitalEntry}> = ({entry}) => {
    const [{diagnosis}] = useStateValue();
    const style = {
        border: "1px grey solid",
        padding: "10px",
        margin: "5px"
    };
    return (
        <div style={style}>
            <h3>{entry.date} <i className="hospital outline icon"></i></h3>
            <p>{entry.description}</p>
            <ul>
                {entry.diagnosisCodes?.map(code => 
                    <li key={code}>{code} {diagnosis[code] ? diagnosis[code].name: null}</li>
                )}
            </ul>
            <h4>Discharge Date: {entry.discharge.date} <i>{entry.discharge.criteria}</i></h4>
        </div>
    );
};

export default Hospital;