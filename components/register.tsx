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
import { registerUserForWorkshop } from "@/app/actions";

function Signup({ text }: { text: string }) {
  const id = useId();
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await registerUserForWorkshop(formData);

    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage(response.success!);
    }
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
            Workshop Registration
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-5 " onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-name`}>Full Name (For Certificates)</Label>
              <Input
                id={`${id}-name`}
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-usn`}>USN</Label>
              <Input
                id={`${id}-usn`}
                name="usn"
                placeholder="Enter your USN"
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
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-year`}>Current Year</Label>
              <Input
                id={`${id}-year`}
                name="year"
                type="number"
                max={4}
                min={1}
                placeholder="Enter your current year"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-department`}>
                Department (CSE-DS/CSE-AI/CSE-AIML/CSE-SE ...)
              </Label>
              <Input
                id={`${id}-department`}
                name="department"
                placeholder="Enter your department"
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
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

        {message && <p className="text-center mt-2">{message}</p>}

        <div className="text-center mt-4">
          <a
            href="https://chat.whatsapp.com/FNUBQRYzkKGH4lgDbAw8zb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            📢 For further information join our community
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { Signup };
