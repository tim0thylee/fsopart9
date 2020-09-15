import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { apiBaseUrl } from "../constants";
import { Patient, Diagnosis } from "../types";
import { useStateValue, getPatient, getDiagnosis } from "../state";
import GenderIcon from '../components/GenderIcon';
import EntryDetails from '../EntryDetails';


const PatientPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [{patient, diagnosis}, dispatch] = useStateValue();

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

    const fetchDiagnosis = async () => {
      try {
        const {data: diagnosisListFromApi} = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );
        dispatch(getDiagnosis(diagnosisListFromApi));
      } catch(e) {
        console.error(e);
      }
    };
    if (!patient[id]) {fetchPatient();}
    if (!Object.keys(diagnosis).length) {fetchDiagnosis();}
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
                      <EntryDetails key={entry.id} entry={entry}/>
                    )}
                </div>) 
            : null}
        </>
    );
};

export default PatientPage;