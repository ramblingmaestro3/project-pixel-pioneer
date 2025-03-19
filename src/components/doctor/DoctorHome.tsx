
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, FileText, Stethoscope } from "lucide-react";

const DoctorHome = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome, Dr. Sarah Wilson</h1>
      <p className="text-muted-foreground">Here's your overview for today, Wednesday, July 12, 2023</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 urgent cases</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 new this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 need urgent review</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hours Worked</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-xl font-bold mt-8">Today's Schedule</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
            <div className="min-w-16 text-center">
              <div className="text-sm font-medium text-muted-foreground">
                {index === 0 ? "9:00 AM" : index === 1 ? "11:30 AM" : "2:15 PM"}
              </div>
              <div className="text-xs">30 min</div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{index === 0 ? "James Smith" : index === 1 ? "Emma Johnson" : "Lucas Brown"}</h3>
                {index === 1 && <span className="px-2 py-0.5 text-xs bg-red-100 text-red-600 rounded">Urgent</span>}
              </div>
              <p className="text-sm text-muted-foreground">
                {index === 0 ? "Regular Checkup" : index === 1 ? "Chest Pain Follow-up" : "Prescription Renewal"}
              </p>
            </div>
            
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary/90">
                Start
              </button>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Patient Updates</CardTitle>
            <CardDescription>3 patients with new status updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">
                    {index === 0 ? "Alice Cooper" : index === 1 ? "Bob Martin" : "Carol White"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 ? "Blood test results updated" : index === 1 ? "New medication prescribed" : "Recovery progress noted"}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {index === 0 ? "2h ago" : index === 1 ? "Yesterday" : "2 days ago"}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Medical Team</CardTitle>
            <CardDescription>Colleagues you work with frequently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">
                    {index === 0 ? "Dr. John Miller" : index === 1 ? "Dr. Rebecca Chen" : "Nurse Maria Garcia"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 ? "Cardiologist" : index === 1 ? "Pediatrician" : "Head Nurse"}
                  </p>
                </div>
                <button className="text-xs text-primary">Message</button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorHome;
