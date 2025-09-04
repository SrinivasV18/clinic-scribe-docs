import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Patient } from "@/types/patient";

interface SymptomsChartProps {
  patients: Patient[];
}

export function SymptomsChart({ patients }: SymptomsChartProps) {
  // Extract and count symptoms
  const symptomCounts = patients.reduce((acc, patient) => {
    const symptoms = patient.symptoms.split(",").map(s => s.trim().toLowerCase());
    symptoms.forEach(symptom => {
      // Extract key symptom keywords
      if (symptom.includes("pain") || symptom.includes("ache")) {
        acc["Pain/Ache"] = (acc["Pain/Ache"] || 0) + 1;
      } else if (symptom.includes("bleeding") || symptom.includes("gum")) {
        acc["Gum Issues"] = (acc["Gum Issues"] || 0) + 1;
      } else if (symptom.includes("sensitivity") || symptom.includes("sensitive")) {
        acc["Sensitivity"] = (acc["Sensitivity"] || 0) + 1;
      } else if (symptom.includes("cavity") || symptom.includes("decay")) {
        acc["Cavities"] = (acc["Cavities"] || 0) + 1;
      } else if (symptom.includes("wisdom") || symptom.includes("extraction")) {
        acc["Wisdom Teeth"] = (acc["Wisdom Teeth"] || 0) + 1;
      } else if (symptom.includes("crown") || symptom.includes("broken")) {
        acc["Crown/Repair"] = (acc["Crown/Repair"] || 0) + 1;
      } else {
        acc["Other"] = (acc["Other"] || 0) + 1;
      }
    });
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(symptomCounts)
    .map(([symptom, count]) => ({ symptom, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6); // Show top 6 symptoms

  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Common Symptoms</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="symptom" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}