import {
  Activity, ClipboardPlus, FlaskConical, HeartPulse, Home, Hotel, Scan,
  Stethoscope, Syringe, UserRound, Wind, UserRoundCheck,
} from "lucide-react";

export const SERVICES = [
  { slug: "consultant-channeling", title: "Consultant Channeling", desc: "Book appointments with experienced visiting consultants across multiple specialties.", Icon: UserRoundCheck },
  { slug: "ecg", title: "ECG", desc: "Electrocardiogram testing for accurate heart health assessment.", Icon: HeartPulse },
  { slug: "echo", title: "ECHO", desc: "Echocardiography to assess heart structure and function.", Icon: Activity },
  { slug: "nebulizer", title: "Nebulizer", desc: "Nebulizer treatment to help relieve breathing and respiratory symptoms.", Icon: Wind },
  { slug: "opd", title: "OPD", desc: "Outpatient consultations for general medical care and advice.", Icon: Stethoscope },
  { slug: "home-visit", title: "Home Visit", desc: "Professional medical care and consultations in the comfort of your home.", Icon: Home },
  { slug: "hotel-visit", title: "Hotel Visit", desc: "Convenient medical consultations and care at your hotel.", Icon: Hotel },
  { slug: "vaccination", title: "Vaccination", desc: "Essential vaccinations administered by trained healthcare professionals.", Icon: Syringe },
  { slug: "physiotherapy", title: "Physiotherapy", desc: "Personalized therapy to support recovery, mobility and physical wellbeing.", Icon: ClipboardPlus },
  { slug: "counseling", title: "Counseling", desc: "Confidential counseling support for mental and emotional wellbeing.", Icon: UserRound },
  { slug: "x-ray", title: "X-Ray", desc: "Modern X-ray imaging with rapid, accurate diagnostic results.", Icon: Scan },
  { slug: "laboratory", title: "Laboratory", desc: "Reliable laboratory testing with clear and timely reports.", Icon: FlaskConical },
] as const;
