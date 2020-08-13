import diagnosesData from '../../data/diagnoses.json';
import { DiagnosesEntry } from '../types';

const diagnoses : Array<DiagnosesEntry> = diagnosesData;

const getDiagnoses = (): Array<DiagnosesEntry> => {
    return diagnoses;
};

const addDiagnoses = () => {
    return null;
};

export default {
    getDiagnoses,
    addDiagnoses
};