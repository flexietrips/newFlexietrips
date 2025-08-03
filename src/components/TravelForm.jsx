"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Mail, Phone, User, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner"

const TravelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined,
    travelers: "",
    destination: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
 

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "We'll contact you soon to plan your perfect trip.",
    });

    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: undefined,
      travelers: "",
      destination: "",
    });
  };

  const inputFields = [
    [
      {
        icon: User,
        placeholder: "Name",
        value: formData.name,
        onChange: (value) => handleInputChange("name", value),
        type: "text"
      },
      {
        icon: Mail,
        placeholder: "Email",
        value: formData.email,
        onChange: (value) => handleInputChange("email", value),
        type: "email"
      }
    ],
    [
      {
        icon: Phone,
        placeholder: "Phone Number",
        value: formData.phone,
        onChange: (value) => handleInputChange("phone", value),
        type: "tel"
      },
      {
        icon: MapPin,
        placeholder: "Traveling To",
        value: formData.destination,
        onChange: (value) => handleInputChange("destination", value),
        type: "text"
      }
    ]
  ];

  return (
   <div className="bg-white flex flex-row justify-between items-stretch">
  {/* Left side - Google Map */}
  <div className="hidden lg:flex lg:w-1/2 h-[480px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27387.678377276272!2d77.09873345000001!3d30.901769599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b5eef4ee27%3A0xa5e81a26852325ef!2sSolan%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1754172312903!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
    />
  </div>


      {/* Right side - Form */}
     <div className="w-full lg:w-1/2 flex items-center justify-center p-8 h-[480px]">
    <div className="w-full max-w-lg h-full">
          <Card className="bg-white border-border shadow-card">
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {inputFields.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {row.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                          <field.icon className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                        </div>
                        <Input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="pl-12 pr-4 py-6 bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-all duration-300 rounded-xl"
                          required
                        />
                      </div>
                    ))}
                  </div>
                ))}

                {/* Row 3 - Date and Travelers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date Picker */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                      <CalendarIcon className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-12 pr-4 py-6 bg-input border-border text-foreground hover:bg-accent hover:border-primary transition-all duration-300 rounded-xl justify-start",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          {formData.date ? format(formData.date, "PPP") : "Select Travel Date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => handleInputChange("date", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Number of Travelers */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                      <Users className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                    </div>
                    <Select onValueChange={(value) => handleInputChange("travelers", value)} value={formData.travelers}>
  <SelectTrigger className="w-full pl-12 pr-4 py-6 bg-input border-border text-foreground focus:border-primary transition-all duration-300 rounded-xl">
    <SelectValue placeholder="No. of Travelers" className="text-muted-foreground" />
  </SelectTrigger>
  <SelectContent>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
      <SelectItem key={num} value={num.toString()}>
        {num} {num === 1 ? "Person" : "Persons"}
      </SelectItem>
    ))}
    <SelectItem value="10+">10+ Persons</SelectItem>
  </SelectContent>
</Select>

                  </div>
                </div>

                <Button
                  type="submit"
                  variant="travel"
                  size="lg"
                  className="w-full mt-8 text-white"
                  style={{
              background:
                "linear-gradient(to right, #00ADB5 0%, #004C4F 50%, #007C82 100%)",
              boxShadow: "0 4px 15px rgba(0, 173, 181, 0.5)",
            }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Callback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
