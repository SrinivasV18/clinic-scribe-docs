import { useNavigate, useLocation, useParams } from "react-router-dom";
import { PatientForm } from "@/components/patient/PatientForm";
import { PatientFormData, Patient } from "@/types/patient";
import { useToast } from "@/hooks/use-toast";

export default function EditPatient() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { toast } = useToast();
  
  const patient = location.state?.patient as Patient;

  if (!patient) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patient Not Found</h1>
          <p className="text-muted-foreground">
            The patient record could not be found.
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = (data: PatientFormData) => {
    // In a real app, this would be an API call
    console.log("Updating patient:", { ...data, id });
    
    toast({
      title: "Patient Updated",
      description: `${data.name}'s record has been successfully updated.`,
    });
    
    navigate("/patients");
  };

  const handleCancel = () => {
    navigate("/patients");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Patient</h1>
        <p className="text-muted-foreground">
          Update patient information and treatment details
        </p>
      </div>

      <PatientForm 
        patient={patient}
        onSubmit={handleSubmit} 
        onCancel={handleCancel}
        isEditing={true}
      />
    </div>
  );
}