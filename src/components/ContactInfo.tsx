
import { MapPin, Phone, Globe, Mail, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "A-28 Block 16 Federal B Area, Karachi",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "0322 3508480 | 0332 2273193",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "0314 2013753",
      color: "text-green-600",
      action: () => window.open("https://wa.me/923142013753", "_blank")
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.riseup.academy",
      color: "text-navy"
    },
    {
      icon: Mail,
      title: "Email",
      details: "riseupacademykhi@gmail.com",
      color: "text-primary"
    }
  ];

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact Information
        </span>
      </h3>
      
      <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
        {contactInfo.map((info, index) => (
          <div 
            key={index} 
            className={`flex items-start space-x-3 lg:space-x-4 ${info.action ? 'cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors' : ''}`}
            onClick={info.action}
          >
            <div className={`${info.color} bg-gray-100 p-2 lg:p-3 rounded-lg`}>
              <info.icon className="h-5 w-5 lg:h-6 lg:w-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-sm lg:text-base">
                <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                  {info.title}
                </span>
              </h4>
              <p className="text-muted-foreground text-sm lg:text-base">{info.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
