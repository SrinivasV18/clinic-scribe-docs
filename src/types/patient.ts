export interface Patient {
  id: string;
  name: string;
  symptoms: string;
  prescription: string;
  dateAdded: string;
  phone?: string;
  email?: string;
}

export interface PatientFormData {
  name: string;
  symptoms: string;
  prescription: string;
  phone?: string;
  email?: string;
}