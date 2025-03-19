
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Edit, Mail, MapPin, Phone, Shield, User } from "lucide-react";

const DoctorProfile = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">View and update your profile information</p>
        </div>
        
        <Button className="flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <User className="h-16 w-16 text-gray-500" />
                </div>
                <h2 className="text-xl font-bold">Dr. Sarah Wilson</h2>
                <p className="text-muted-foreground">Cardiologist</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Verified Professional</span>
                </div>
                
                <div className="w-full mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">sarah.wilson@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">Cardiology Department, 3rd Floor</p>
                      <p className="text-sm text-muted-foreground">City Medical Center</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Working Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Specialization</h3>
                <p>Cardiology, Heart Failure, Interventional Cardiology</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Experience</h3>
                <p>15+ years</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Education</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>MD, Harvard Medical School</li>
                  <li>Residency in Internal Medicine, Massachusetts General Hospital</li>
                  <li>Fellowship in Cardiovascular Medicine, Stanford University Medical Center</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Certifications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Board Certified in Cardiovascular Disease</li>
                  <li>Board Certified in Interventional Cardiology</li>
                  <li>Advanced Cardiac Life Support (ACLS)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Schedule & Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Weekly Schedule</h3>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Manage
                </Button>
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="space-y-2">
                    <div className="text-sm font-medium">{day}</div>
                    <div className={`p-2 rounded-md text-xs ${index < 5 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {index < 5 ? '9am-5pm' : 'Off'}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Upcoming Time Off</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-md">
                    <div>
                      <p className="font-medium">Annual Leave</p>
                      <p className="text-sm text-muted-foreground">August 10-24, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                    <div>
                      <p className="font-medium">Conference</p>
                      <p className="text-sm text-muted-foreground">September 15-17, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
