export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  availability: string;
};

export const SPECIALIZATIONS = [
  "All",
  "Paediatric Neurologist",
  "Paediatric Cardiologist",
  "Rheumatologist",
  "Gastroenterologist",
  "Physician",
  "Ophthalmologist",
  "Venereologist",
  "Psychiatrist",
  "Surgeon",
  "Radiologist",
  "Gynaecologist",
  "Endocrinologist",
  "Respiratory Physician",
  "Nephrologist",
] as const;

export const DOCTORS: Doctor[] = [
  { id: "d1", name: "Dr. Thilina Munasinghe", specialization: "Consultant Paediatric Neurologist", availability: "Visiting from Karapitiya Hospital" },
  { id: "d2", name: "Dr. Geeth Sooriyasena", specialization: "Consultant Paediatric Cardiologist / Paediatric Heart Disease Specialist", availability: "Visiting from Karapitiya Hospital" },
  { id: "d3", name: "Dr. Sajeevani Dissanayake", specialization: "Consultant Rheumatologist", availability: "Visiting from Karapitiya Hospital" },
  { id: "d4", name: "Dr. Vajira Samarakrikwama", specialization: "Consultant Gastroenterologist", availability: "Visiting from Hambantota General Hospital" },
  { id: "d5", name: "Dr. Kitsiri Niwunhella", specialization: "Consultant Physician", availability: "Visiting from Hambantota General Hospital" },
  { id: "d6", name: "Dr. Chaminda Kottage", specialization: "Consultant Physician", availability: "Visiting from Hambantota General Hospital" },
  { id: "d7", name: "Dr. Chanaka Vithanage", specialization: "Consultant Sports & Exercise Medicine Physician (Act.)", availability: "Visiting from Hambantota General Hospital" },
  { id: "d8", name: "Dr. Ayasmanta Peiris", specialization: "Consultant Ophthalmologist / Eye Surgeon", availability: "Visiting from Hambantota General Hospital" },
  { id: "d9", name: "Dr. Inoka Munasinghe", specialization: "Consultant Venereologist", availability: "Visiting from Hambantota General Hospital" },
  { id: "d10", name: "Dr. Malika Udagadara", specialization: "Consultant Nutrition Physician", availability: "Visiting from Hambantota General Hospital" },
  { id: "d11", name: "Dr. Navodhra Harischandra", specialization: "Consultant Psychiatrist", availability: "Visiting from Hambantota General Hospital" },
  { id: "d12", name: "Dr. Shivashankar", specialization: "Consultant Genitourinary Surgeon", availability: "Visiting from Hambantota General Hospital" },
  { id: "d13", name: "Dr. Chinthana Dematapitiya", specialization: "Consultant Endocrinologist", availability: "Visiting from Hambantota General Hospital" },
  { id: "d14", name: "Dr. Chandana Dahanayake", specialization: "Consultant Respiratory Physician / Pulmonologist", availability: "Visiting from Hambantota General Hospital" },
  { id: "d15", name: "Dr. M.M.I. Chathurani", specialization: "Consultant Nephrologist", availability: "Visiting from Hambantota General Hospital" },
  { id: "d16", name: "Dr. K.K.G. Niranga", specialization: "Consultant Obstetrician & Gynaecologist (VOG)", availability: "Visiting from Debarawewa Base Hospital" },
  { id: "d17", name: "Dr. Sameera Udayanga", specialization: "Consultant Obstetrician & Gynaecologist (VOG)", availability: "Visiting from Debarawewa Base Hospital" },
  { id: "d18", name: "Dr. Supun S. Sooriyaarachchi", specialization: "Consultant Surgeon", availability: "Visiting from Debarawewa Base Hospital" },
  { id: "d19", name: "Dr. Subhanthan", specialization: "Consultant Radiologist", availability: "Visiting from Debarawewa Base Hospital" },
  { id: "d20", name: "Dr. Thilina Kulasiri", specialization: "Consultant Psychiatrist", availability: "Visiting from Debarawewa Base Hospital" },
];
