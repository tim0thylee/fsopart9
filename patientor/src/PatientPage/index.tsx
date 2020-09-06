import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { apiBaseUrl } from "../constants";
import { Patient } from "../types";
import { useStateValue } from "../state";


const PatientPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [{patient}, dispatch] = useStateValue();

    useEffect(() => {
        
    const fetchPatient = async () => {
        try {
          const { data: patientListFromApi } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
          );
          dispatch({ type: "GET_PATIENT", payload: patientListFromApi });
        } catch (e) {
          console.error(e);
        }
    };
    fetchPatient();
    if(patient[id]){console.log(patient[id]);}
    }, []);
    console.log(patient)
    return (
        <>
            {patient[id] ? 
                (<div>
                    <h1>{patient[id].name}</h1>
                    <div>ssn: {patient[id].ssn}</div>
                    <div>occupation: {patient[id].occupation}</div>
                </div>) 
            : null}
        </>
    );
};

export default PatientPage;