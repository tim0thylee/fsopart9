import patientsData from '../../data/patients.json';
import { PatientEntry } from '../types';

const patients : Array<PatientEntry> = patientsData; 

const getPatients = () : Omit<PatientEntry, 'ssn'>[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id, name, dateOfBirth, gender, occupation  
    }));
};

export default {
    getPatients
};
