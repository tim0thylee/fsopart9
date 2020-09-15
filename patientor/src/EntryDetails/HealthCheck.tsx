import React from 'react';
import {HealthCheckEntry} from '../types';

const Hospital: React.FC<{entry: HealthCheckEntry}> = ({entry}) => {
    const style = {
        border: "1px grey solid",
        padding: "10px",
        margin: "5px"
    };
    const healthRating = (choice: number) => {
        if (choice === 0) {
            return 'green';
        } else if (choice === 1) {
            return 'yellow';
        } else {
            return 'red';
        }
    };
    return (
        <div style={style}>
            <h3>{entry.date} <i className="user md icon"></i></h3>
            <p>{entry.description}</p>
            <i className="heart icon" style={{color: healthRating(entry.healthCheckRating)}}></i>
        </div>
    );
};

export default Hospital;