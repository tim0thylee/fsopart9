import patientsData from '../../data/patients';
import { PatientEntry,
         NewPatientEntry, 
         Entry, 
         HospitalEntry, 
         OccupationalHealthcareEntry, 
         HealthCheckEntry} from '../types';

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

const addEntry = (entry : Entry, id: string): Entry => {
    var ID = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    const foundPatient = patients.find(patient => patient.id === id);
    const { description, date, specialist, diagnosisCodes, type} = entry;
    const newEntry = {
        id: ID(),
        description,
        date,
        specialist,
        diagnosisCodes
    }
    if (type === "OccupationalHealthcare") {
        const {employerName, sickLeave } = entry as OccupationalHealthcareEntry;
        const occupationalObject = {
            ...newEntry,
            employerName,
            type,
            sickLeave
        };
        foundPatient?.entries.push(occupationalObject);
        return occupationalObject;
    } else if (type === "HealthCheck") {
        const {healthCheckRating} = entry as HealthCheckEntry;
        const healthObject =  {
            ...newEntry,
            type, 
            healthCheckRating
        }
        foundPatient?.entries.push(healthObject);
        return healthObject;
    } else if (type === "Hospital") {
        const {discharge} = entry as HospitalEntry;
        const hospitalObject =  {
            ...newEntry,
            type,
            discharge
        }
        foundPatient?.entries.push(hospitalObject);
        return hospitalObject;
    } else {
        throw new Error("Not a proper format")
    }
}

export default {
    getPatients,
    addPatient,
    getPatient,
    addEntry
};
