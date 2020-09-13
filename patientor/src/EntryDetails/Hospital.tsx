import React from 'react';
import {HospitalEntry} from '../types';

const Hospital: React.FC<{entry: HospitalEntry}> = ({entry}) => {
    return <div>{entry.discharge.date}</div>;
};

export default Hospital;