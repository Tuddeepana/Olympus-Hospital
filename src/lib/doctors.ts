export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  availability: string;
};

export const SPECIALIZATIONS = [
  "All",
  "Physician",
  "Neurologist",
  "Surgeon",
  "Cardiologist",
  "Pediatrician",
  "Gynecologist",
  "Orthopedic",
  "Dermatologist",
  "ENT",
] as const;

export const DOCTORS: Doctor[] = [
  { id: "d1", name: "Dr. Nuwan Perera", specialization: "Physician", availability: "Mon–Fri · 9:00 AM – 1:00 PM" },
  { id: "d2", name: "Dr. Samanthi Silva", specialization: "Gynecologist", availability: "Tue, Thu · 4:00 PM – 7:00 PM" },
  { id: "d3", name: "Dr. Ranil Jayasuriya", specialization: "Cardiologist", availability: "Sat · 10:00 AM – 2:00 PM" },
  { id: "d4", name: "Dr. Anusha Fernando", specialization: "Pediatrician", availability: "Mon, Wed, Fri · 5:00 PM – 8:00 PM" },
  { id: "d5", name: "Dr. Kasun Bandara", specialization: "Surgeon", availability: "Wed · 9:00 AM – 12:00 PM" },
  { id: "d6", name: "Dr. Malini Wickramasinghe", specialization: "Neurologist", availability: "Fri · 2:00 PM – 6:00 PM" },
  { id: "d7", name: "Dr. Suresh Rathnayake", specialization: "Orthopedic", availability: "Tue · 9:00 AM – 12:00 PM" },
  { id: "d8", name: "Dr. Dilani Karunaratne", specialization: "Dermatologist", availability: "Thu · 3:00 PM – 6:00 PM" },
  { id: "d9", name: "Dr. Chamara Senanayake", specialization: "ENT", availability: "Sat · 9:00 AM – 1:00 PM" },
];
