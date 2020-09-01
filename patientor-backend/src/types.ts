// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface DiagnosesEntry {
    code: string,
    name: string,
    latin?: string
}

export interface PatientEntry {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string,
    entries: Entry[]
}

export type NewPatientEntry = Omit<PatientEntry, 'id' | 'entries'>;

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}