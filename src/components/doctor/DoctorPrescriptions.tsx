
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Plus, Search, Filter } from "lucide-react";

const DoctorPrescriptions = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock prescription data
  const prescriptions = [
    {
      id: 1,
      patient: "James Smith",
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      duration: "3 months",
      date: "June 15, 2023",
      status: "Active"
    },
    {
      id: 2,
      patient: "Emma Johnson",
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times daily",
      duration: "10 days",
      date: "July 2, 2023",
      status: "Active"
    },
    {
      id: 3,
      patient: "Lucas Brown",
      medication: "Metformin",
      dosage: "850mg",
      frequency: "Twice daily with meals",
      duration: "Ongoing",
      date: "May 22, 2023",
      status: "Active"
    },
    {
      id: 4,
      patient: "Olivia Wilson",
      medication: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at bedtime",
      duration: "Ongoing",
      date: "April 10, 2023",
      status: "Expired"
    },
    {
      id: 5,
      patient: "Noah Martinez",
      medication: "Prednisone",
      dosage: "10mg",
      frequency: "Once daily, tapering",
      duration: "2 weeks",
      date: "July 5, 2023",
      status: "Active"
    }
  ];

  const filteredPrescriptions = activeTab === "all" 
    ? prescriptions 
    : prescriptions.filter(p => 
        activeTab === "active" ? p.status === "Active" : p.status === "Expired"
      );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Prescriptions</h1>
          <p className="text-muted-foreground">Manage patient prescriptions</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search prescriptions..." 
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Prescription
          </Button>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant={activeTab === "all" ? "default" : "outline"} 
          onClick={() => setActiveTab("all")}
        >
          All Prescriptions
        </Button>
        <Button 
          variant={activeTab === "active" ? "default" : "outline"} 
          onClick={() => setActiveTab("active")}
        >
          Active
        </Button>
        <Button 
          variant={activeTab === "expired" ? "default" : "outline"} 
          onClick={() => setActiveTab("expired")}
        >
          Expired
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Date Prescribed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrescriptions.map((prescription) => (
                <TableRow key={prescription.id}>
                  <TableCell className="font-medium">{prescription.patient}</TableCell>
                  <TableCell>{prescription.medication}</TableCell>
                  <TableCell>{prescription.dosage}</TableCell>
                  <TableCell>{prescription.frequency}</TableCell>
                  <TableCell>{prescription.duration}</TableCell>
                  <TableCell>{prescription.date}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs 
                      ${prescription.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {prescription.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">Renew</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium text-blue-700 mb-2">Quick Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Button variant="outline" className="bg-white justify-start">Common Antibiotics</Button>
          <Button variant="outline" className="bg-white justify-start">Pain Management</Button>
          <Button variant="outline" className="bg-white justify-start">Chronic Conditions</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorPrescriptions;
