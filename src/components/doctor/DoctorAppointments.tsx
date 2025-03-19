
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Filter, Search, UserPlus } from "lucide-react";

const DoctorAppointments = () => {
  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("today");
  
  // Mock appointment data
  const appointments = [
    { 
      id: 1, 
      patient: "James Smith", 
      time: "9:00 AM", 
      duration: "30 min", 
      type: "Regular Checkup", 
      status: "Confirmed", 
      notes: "Annual physical examination"
    },
    { 
      id: 2, 
      patient: "Emma Johnson", 
      time: "11:30 AM", 
      duration: "30 min", 
      type: "Chest Pain Follow-up", 
      status: "Urgent", 
      notes: "Patient reported increased chest pain"
    },
    { 
      id: 3, 
      patient: "Lucas Brown", 
      time: "2:15 PM", 
      duration: "30 min", 
      type: "Prescription Renewal", 
      status: "Confirmed", 
      notes: "Renewing blood pressure medication"
    },
    { 
      id: 4, 
      patient: "Olivia Wilson", 
      time: "3:45 PM", 
      duration: "45 min", 
      type: "Initial Consultation", 
      status: "New Patient", 
      notes: "First visit, complete health assessment needed"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Manage your patient appointments</p>
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
              placeholder="Search appointments..." 
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            New Appointment
          </Button>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant={filter === "today" ? "default" : "outline"} 
          onClick={() => setFilter("today")}
        >
          Today
        </Button>
        <Button 
          variant={filter === "week" ? "default" : "outline"} 
          onClick={() => setFilter("week")}
        >
          This Week
        </Button>
        <Button 
          variant={filter === "month" ? "default" : "outline"} 
          onClick={() => setFilter("month")}
        >
          This Month
        </Button>
        <Button 
          variant={filter === "all" ? "default" : "outline"} 
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button 
          variant="outline" 
          className="ml-auto flex items-center gap-2"
        >
          <Calendar className="h-4 w-4" />
          Date Range
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant={view === "list" ? "default" : "outline"} 
          onClick={() => setView("list")}
        >
          List View
        </Button>
        <Button 
          variant={view === "calendar" ? "default" : "outline"} 
          onClick={() => setView("calendar")}
        >
          Calendar View
        </Button>
      </div>
      
      {view === "list" ? (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.patient}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        {appointment.time} ({appointment.duration})
                      </div>
                    </TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs 
                        ${appointment.status === 'Urgent' ? 'bg-red-100 text-red-600' : 
                          appointment.status === 'New Patient' ? 'bg-blue-100 text-blue-600' : 
                          'bg-green-100 text-green-600'}`}
                      >
                        {appointment.status}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{appointment.notes}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="default">Start</Button>
                        <Button size="sm" variant="outline">Details</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-center text-gray-500">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <p>Calendar view is not implemented in this demo.</p>
            <p>It would show a monthly calendar with appointments.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
