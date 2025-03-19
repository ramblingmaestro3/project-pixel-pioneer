
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Healthcare Portal</h1>
        <p className="text-xl text-gray-600 mb-8">Welcome to your healthcare management system</p>
        
        <div className="space-y-4">
          <Button asChild className="w-full" size="lg">
            <Link to="/doctor">
              Doctor Dashboard
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full" size="lg">
            <Link to="/">
              Patient Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
