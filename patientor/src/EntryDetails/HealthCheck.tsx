import React from 'react';
import {HealthCheckEntry} from '../types';

const Hospital: React.FC<{entry: HealthCheckEntry}> = ({entry}) => {
    return <div>{entry.type}</div>;
};

export default Hospital;