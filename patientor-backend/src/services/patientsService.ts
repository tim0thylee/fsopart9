import patientsData from '../../data/patients.json';
import { PatientEntry, NewPatientEntry } from '../types';

const patients : Array<PatientEntry> = patientsData; 

const getPatients = () : Omit<PatientEntry, 'ssn'>[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id, name, dateOfBirth, gender, occupation  
    }));
};

const addPatient = (entry : NewPatientEntry): PatientEntry => {
    const newPatientEntry = {
        id: patients[patients.length - 1].id + '1',
        ...entry
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    addPatient
};
