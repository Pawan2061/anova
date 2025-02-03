"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useId } from "react";

function Signup({ text }: { text: string }) {
  const id = useId();

  // State to store form data
  const [formData, setFormData] = useState({
    usn: "",
    email: "",
    phone: "",
    year: "",
    department: "",
    officialEmail: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit rounded-2xl">
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sm:text-center">
            Hackathon Registration
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-usn`}>USN</Label>
              <Input
                id={`${id}-usn`}
                name="usn"
                placeholder="Enter your USN"
                value={formData.usn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}>Personal Email</Label>
              <Input
                id={`${id}-email`}
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-phone`}>Phone Number</Label>
              <Input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-year`}>Current Year</Label>
              <Input
                id={`${id}-year`}
                name="year"
                type="number"
                placeholder="Enter your current year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-department`}>Department</Label>
              <Input
                id={`${id}-department`}
                name="department"
                placeholder="Enter your department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-official-email`}>Official Email ID</Label>
              <Input
                id={`${id}-official-email`}
                name="officialEmail"
                type="email"
                placeholder="Enter your official email"
                value={formData.officialEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { Signup };
