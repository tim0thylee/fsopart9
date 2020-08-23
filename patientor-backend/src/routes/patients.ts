import express from 'express';
import patientService from '../services/patientsService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatients());
});


router.post('/', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log(req.body)
    const parsePatient = toNewPatientEntry(req.body);
    const { name, dateOfBirth, ssn, gender, occupation } = parsePatient;

    const newPatientEntry = patientService.addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    });
    
    res.json(newPatientEntry); 
});

export default router;