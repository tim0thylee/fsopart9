import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { apiBaseUrl } from "../constants";
import { Patient } from "../types";
import { useStateValue, getPatient } from "../state";
import GenderIcon from '../components/GenderIcon';


const PatientPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [{patient}, dispatch] = useStateValue();

    useEffect(() => {
        
    const fetchPatient = async () => {
        try {
          const { data: patientListFromApi } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
          );
          dispatch(getPatient(patientListFromApi));
        } catch (e) {
          console.error(e);
        }
    };
    if (!patient[id]) {fetchPatient();}
    }, []);
   
    return (
        <>
            {patient[id] ? 
                (<div>
                    <h1>
                      {patient[id].name}
                      <GenderIcon gender={patient[id].gender}/>
                    </h1>
                    <div>ssn: {patient[id].ssn}</div>
                    <div>occupation: {patient[id].occupation}</div>
                    <h2>entries</h2>
                    {patient[id].entries.map(entry => 
                      <div key={entry.id}>
                        {entry.date} <i>{entry.description}</i>
                        <ul>
                          {entry.diagnosisCodes?.map(code => <li>{code}</li>)}
                        </ul>
                      </div>
                    )}
                </div>) 
            : null}
        </>
    );
};

export default PatientPage;