import { Users, Calendar, TrendingUp, Activity } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SymptomsChart } from "@/components/dashboard/SymptomsChart";
import { DataTable } from "@/components/ui/data-table";
import { mockPatients } from "@/data/mockPatients";
import { useState } from "react";
import { Patient } from "@/types/patient";
import { useNavigate } from "react-router-dom";
import { DeletePatientDialog } from "@/components/patient/DeletePatientDialog";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [patients, setPatients] = useState<Patient[]>(mockPatients);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    patientId: string;
    patientName: string;
  }>({ open: false, patientId: "", patientName: "" });

  // Calculate stats
  const totalPatients = patients.length;
  const newPatientsThisWeek = patients.filter(p => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(p.dateAdded) > weekAgo;
  }).length;

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
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your dental clinic management system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Patients"
          value={totalPatients}
          icon={Users}
          trend={{ value: 12, label: "from last month" }}
        />
        <StatsCard
          title="New This Week"
          value={newPatientsThisWeek}
          icon={TrendingUp}
          trend={{ value: 25, label: "from last week" }}
        />
        <StatsCard
          title="Appointments Today"
          value={8}
          icon={Calendar}
        />
        <StatsCard
          title="Active Treatments"
          value={15}
          icon={Activity}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <SymptomsChart patients={patients} />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recent Patients</h3>
          <div className="space-y-2">
            {patients.slice(0, 5).map((patient) => (
              <div
                key={patient.id}
                className="flex items-center space-x-4 rounded-lg border p-3"
              >
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.symptoms}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(patient.dateAdded).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Patients Table */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">All Patients</h3>
        <DataTable data={patients} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      <DeletePatientDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog(prev => ({ ...prev, open }))}
        patientName={deleteDialog.patientName}
        onConfirm={confirmDelete}
      />
    </div>
  );
}