import patientsData from '../../data/patients';
import { PatientEntry, NewPatientEntry } from '../types';

const patients : Array<PatientEntry> = patientsData; 

const getPatients = () : Omit<PatientEntry, 'ssn'>[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({
        id, name, dateOfBirth, gender, occupation, entries
    }));
};

const getPatient = (id : string) => {
    const foundPatient = patients.find(patient => patient.id === id);
    return foundPatient;
};

const addPatient = (entry : NewPatientEntry): PatientEntry => {
    const newPatientEntry = {
        id: patients[patients.length - 1].id + '1',
        entries: [],
        ...entry
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    addPatient,
    getPatient
};
