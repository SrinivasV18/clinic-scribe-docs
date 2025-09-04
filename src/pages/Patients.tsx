import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { DeletePatientDialog } from "@/components/patient/DeletePatientDialog";
import { mockPatients } from "@/data/mockPatients";
import { Patient } from "@/types/patient";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Patients() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [patients, setPatients] = useState<Patient[]>(mockPatients);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    patientId: string;
    patientName: string;
  }>({ open: false, patientId: "", patientName: "" });

  const handleEdit = (patient: Patient) => {
    navigate(`/edit-patient/${patient.id}`, { state: { patient } });
  };

  const handleDelete = (patientId: string) => {
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
      setDeleteDialog({
        open: true,
        patientId,
        patientName: patient.name,
      });
    }
  };

  const confirmDelete = () => {
    setPatients(prev => prev.filter(p => p.id !== deleteDialog.patientId));
    setDeleteDialog({ open: false, patientId: "", patientName: "" });
    toast({
      title: "Patient Deleted",
      description: "Patient record has been successfully deleted.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
          <p className="text-muted-foreground">
            Manage all patient records and information
          </p>
        </div>
        <Button onClick={() => navigate("/add-patient")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </div>

      <DataTable data={patients} onEdit={handleEdit} onDelete={handleDelete} />

      <DeletePatientDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog(prev => ({ ...prev, open }))}
        patientName={deleteDialog.patientName}
        onConfirm={confirmDelete}
      />
    </div>
  );
}