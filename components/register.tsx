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
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

function Signup({ text }: { text: string }) {
  const id = useId();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const response = await registerUserForWorkshop(formData);
      if (response.error) {
        setMessage({ type: "error", text: response.error });
      } else {
        setMessage({ type: "success", text: response.success! });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
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
          <Button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Registering...
              </div>
            ) : (
              "Register For Workshop"
            )}
          </Button>
        </form>

        {message && (
          <div className="mt-4 animate-fadeIn">
            <Alert
              variant={message.type === "success" ? "default" : "destructive"}
              className={`${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
              } transition-all duration-300 ease-in-out`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {message.type === "success"
                  ? "Success!"
                  : "Registration Failed"}
              </AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          </div>
        )}
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
