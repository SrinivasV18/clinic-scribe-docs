import { useNavigate } from "react-router-dom";
import { PatientForm } from "@/components/patient/PatientForm";
import { PatientFormData } from "@/types/patient";
import { useToast } from "@/hooks/use-toast";

export default function AddPatient() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (data: PatientFormData) => {
    // Generate new patient ID
    const newId = `P${String(Date.now()).slice(-3).padStart(3, "0")}`;
    
    // In a real app, this would be an API call
    console.log("Adding new patient:", { ...data, id: newId });
    
    toast({
      title: "Patient Added",
      description: `${data.name} has been successfully added to the system.`,
    });
    
    navigate("/patients");
  };

  const handleCancel = () => {
    navigate("/patients");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Patient</h1>
        <p className="text-muted-foreground">
          Enter patient information to create a new record
        </p>
      </div>

      <PatientForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}