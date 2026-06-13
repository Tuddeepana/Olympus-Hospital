import {
  Stethoscope, Activity, Pill, FlaskConical, Scan, Ambulance, UserRound, HeartPulse,
} from "lucide-react";

export const SERVICES = [
  { slug: "xray", title: "X-Ray Service", desc: "Modern digital X-ray with rapid, accurate diagnostic imaging.", Icon: Scan },
  { slug: "opd", title: "OPD Consultation", desc: "General outpatient consultations with experienced physicians daily.", Icon: Stethoscope },
  { slug: "specialist", title: "Specialist Consultation", desc: "Visiting consultants across cardiology, neurology, gynecology and more.", Icon: UserRound },
  { slug: "emergency", title: "Emergency Care", desc: "24/7 emergency response with trained staff and life-saving equipment.", Icon: Ambulance },
  { slug: "lab", title: "Laboratory Services", desc: "Full pathology lab with quick, reliable test reports.", Icon: FlaskConical },
  { slug: "pharmacy", title: "Pharmacy", desc: "Round-the-clock pharmacy stocked with prescription & OTC medicines.", Icon: Pill },
  { slug: "ecg", title: "ECG & Cardiac", desc: "ECG, cardiac monitoring and screening for heart health.", Icon: HeartPulse },
  { slug: "monitoring", title: "Patient Monitoring", desc: "Continuous patient observation with modern monitoring systems.", Icon: Activity },
] as const;
