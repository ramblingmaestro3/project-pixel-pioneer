
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorHome from "@/components/doctor/DoctorHome";
import DoctorAppointments from "@/components/doctor/DoctorAppointments";
import DoctorPrescriptions from "@/components/doctor/DoctorPrescriptions";
import DoctorMedicalRecords from "@/components/doctor/DoctorMedicalRecords";
import DoctorProfile from "@/components/doctor/DoctorProfile";
import DoctorHeader from "@/components/doctor/DoctorHeader";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorHeader />
      <main className="container mx-auto px-4 py-8 pt-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="records">Medical Records</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            <DoctorHome />
          </TabsContent>
          
          <TabsContent value="appointments">
            <DoctorAppointments />
          </TabsContent>
          
          <TabsContent value="prescriptions">
            <DoctorPrescriptions />
          </TabsContent>
          
          <TabsContent value="records">
            <DoctorMedicalRecords />
          </TabsContent>
          
          <TabsContent value="profile">
            <DoctorProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DoctorDashboard;
