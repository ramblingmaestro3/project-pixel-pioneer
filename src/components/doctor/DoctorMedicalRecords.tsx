
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, FolderPlus, Search, Filter, Download, Eye } from "lucide-react";

const DoctorMedicalRecords = () => {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  
  // Mock patient data
  const patients = [
    { id: 1, name: "James Smith", dateOfBirth: "05/12/1975", lastVisit: "June 15, 2023" },
    { id: 2, name: "Emma Johnson", dateOfBirth: "08/23/1988", lastVisit: "July 2, 2023" },
    { id: 3, name: "Lucas Brown", dateOfBirth: "11/05/1962", lastVisit: "May 22, 2023" },
    { id: 4, name: "Olivia Wilson", dateOfBirth: "03/17/1990", lastVisit: "April 10, 2023" }
  ];
  
  // Mock medical records data
  const medicalRecords = [
    { 
      id: 1, 
      patientId: 1,
      type: "Lab Results", 
      description: "Blood work - Complete Blood Count", 
      date: "June 15, 2023",
      doctor: "Dr. Sarah Wilson"
    },
    { 
      id: 2, 
      patientId: 1,
      type: "Radiology", 
      description: "Chest X-Ray", 
      date: "June 10, 2023",
      doctor: "Dr. John Miller"
    },
    { 
      id: 3, 
      patientId: 2,
      type: "Progress Note", 
      description: "Follow-up for chest pain", 
      date: "July 2, 2023",
      doctor: "Dr. Sarah Wilson"
    },
    { 
      id: 4, 
      patientId: 2,
      type: "Consultation", 
      description: "Cardiology Consultation", 
      date: "June 28, 2023",
      doctor: "Dr. Rebecca Chen"
    },
    { 
      id: 5, 
      patientId: 3,
      type: "Lab Results", 
      description: "Diabetes Monitoring - HbA1c", 
      date: "May 22, 2023",
      doctor: "Dr. Sarah Wilson"
    },
    { 
      id: 6, 
      patientId: 4,
      type: "Progress Note", 
      description: "Initial consultation", 
      date: "April 10, 2023",
      doctor: "Dr. Sarah Wilson"
    }
  ];
  
  const patientRecords = selectedPatient 
    ? medicalRecords.filter(record => record.patientId === parseInt(selectedPatient))
    : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Medical Records</h1>
          <p className="text-muted-foreground">View and manage patient medical records</p>
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
              placeholder="Search records..." 
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button className="flex items-center gap-2">
            <FolderPlus className="h-4 w-4" />
            New Record
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-lg font-medium mb-4">Patients</h2>
          <Card className="h-[500px] overflow-auto">
            <CardContent className="p-0">
              <div className="divide-y">
                {patients.map((patient) => (
                  <div 
                    key={patient.id} 
                    className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedPatient === patient.id.toString() ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedPatient(patient.id.toString())}
                  >
                    <h3 className="font-medium">{patient.name}</h3>
                    <div className="text-sm text-muted-foreground">
                      <p>DOB: {patient.dateOfBirth}</p>
                      <p>Last Visit: {patient.lastVisit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-lg font-medium mb-4">
            {selectedPatient 
              ? `Records for ${patients.find(p => p.id === parseInt(selectedPatient))?.name}` 
              : 'Select a patient to view records'}
          </h2>
          
          {selectedPatient ? (
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Doctor</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patientRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.type}</TableCell>
                        <TableCell>{record.description}</TableCell>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.doctor}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              View
                            </Button>
                            <Button size="sm" variant="outline" className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              Download
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow text-center flex flex-col items-center justify-center h-[500px]">
              <FileText className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">No Patient Selected</h3>
              <p className="text-muted-foreground">Select a patient from the list to view their medical records</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorMedicalRecords;
