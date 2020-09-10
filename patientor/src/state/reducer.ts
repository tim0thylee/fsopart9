import { State } from "./state";
import { Patient, Diagnosis } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "GET_PATIENT";
      payload: Patient;
  }
  | {
      type: "GET_DIAGNOSIS";
      payload: Diagnosis[];
  };

export const setPatientList = (payload: Patient[]) => {
  return {
      type: "SET_PATIENT_LIST" as const,
      payload
  };
};

export const addPatient = (payload: Patient) => {
  return {
    type: "ADD_PATIENT" as const,
    payload
  };
};

export const getPatient = (payload: Patient) => {
  return {
    type: "GET_PATIENT" as const,
    payload
  };
};

export const getDiagnosis = (payload: Diagnosis[]) => {
  return {
    type: "GET_DIAGNOSIS" as const,
    payload
  };
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "GET_PATIENT":
      return {
        ...state,
        patient : {
          ...state.patient,
          [action.payload.id]: action.payload
        }
      };
    case "GET_DIAGNOSIS":
      return {
        ...state,
        diagnosis: {
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          ),
          ...state.diagnosis
        }
      };
    default:
      return state;
  }
};
