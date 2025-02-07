"use client";

import { HackRegister } from "@/components/hack-register";
import EventDetails from "@/components/register-body";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { XCircle } from "lucide-react";

export default function Register() {
  const text1 = "Register for the hackathon";
  const text2 = "Register for the workshop";
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSignupClick = (eventType: string) => {
    setShowAlert(true);
    setAlertMessage(` ${eventType} registrations are now closed.`);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <section className="mt-8 md:mt-16 w-full flex flex-col items-center gap-4 md:gap-8 mx-auto max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 p-4 md:p-6">
      <EventDetails />

      {showAlert && (
        <div className="w-full max-w-md">
          <Alert
            variant="destructive"
            className="bg-red-50 text-red-800 border-red-200 transition-all duration-300 ease-in-out"
          >
            <XCircle className="h-4 w-4" />
            <AlertTitle>Registrations Closed</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
        <Button
          onClick={() => handleSignupClick("workshop")}
          variant="outline"
          className="w-fit rounded-2xl"
        >
          {text2}
        </Button>
        <Button
          onClick={() => handleSignupClick("hackathon")}
          variant="outline"
          className="w-fit rounded-2xl"
        >
          {text1}
        </Button>
      </div>
    </section>
  );
}
