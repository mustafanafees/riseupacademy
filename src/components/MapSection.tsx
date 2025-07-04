
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <div className="mt-12 lg:mt-16 animate-fade-in">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div 
            className="relative h-48 lg:h-64 bg-cover bg-center cursor-pointer group"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)`
            }}
            onClick={() => window.open("https://maps.app.goo.gl/wRk9LJoytTXVc7qn6", "_blank")}
          >
            <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <MapPin className="h-10 w-10 lg:h-12 lg:w-12 text-white mx-auto mb-4" />
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">Visit Our Campus</h3>
                <p className="text-white/90 text-sm lg:text-base">A-28 Block 16 Federal B Area, Karachi</p>
                <p className="text-white/70 text-xs lg:text-sm mt-2">Click to view on Google Maps</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapSection;
