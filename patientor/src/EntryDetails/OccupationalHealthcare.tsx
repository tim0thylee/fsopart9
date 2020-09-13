import React from 'react';
import {OccupationalHealthcareEntry} from '../types';

const OccupationalHealthcare: React.FC<{entry: OccupationalHealthcareEntry}> = ({entry}) => {
    return <div>{entry.employerName}</div>;
};

export default OccupationalHealthcare;