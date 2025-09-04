import { Patient } from "@/types/patient";

export const mockPatients: Patient[] = [
  {
    id: "P001",
    name: "Sarah Johnson",
    symptoms: "Tooth pain, sensitivity",
    prescription: "Ibuprofen 400mg, Dental cleaning",
    dateAdded: "2024-03-15",
    phone: "(555) 123-4567",
    email: "sarah.johnson@email.com"
  },
  {
    id: "P002", 
    name: "Michael Chen",
    symptoms: "Gum bleeding, bad breath",
    prescription: "Antibiotics, Deep cleaning",
    dateAdded: "2024-03-14",
    phone: "(555) 234-5678",
    email: "michael.chen@email.com"
  },
  {
    id: "P003",
    name: "Emily Rodriguez",
    symptoms: "Wisdom tooth pain",
    prescription: "Pain medication, Extraction scheduled",
    dateAdded: "2024-03-13",
    phone: "(555) 345-6789",
    email: "emily.rodriguez@email.com"
  },
  {
    id: "P004",
    name: "David Wilson",
    symptoms: "Cavity, dental anxiety",
    prescription: "Fluoride treatment, Filling",
    dateAdded: "2024-03-12",
    phone: "(555) 456-7890",
    email: "david.wilson@email.com"
  },
  {
    id: "P005",
    name: "Lisa Thompson",
    symptoms: "Broken crown",
    prescription: "Crown replacement, Temporary crown",
    dateAdded: "2024-03-11",
    phone: "(555) 567-8901",
    email: "lisa.thompson@email.com"
  }
];