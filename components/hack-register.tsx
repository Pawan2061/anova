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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import { useId } from "react";
import { HackRegistrationData, registerForHack } from "@/app/actions";

function HackRegister({ text }: { text: string }) {
  const id = useId();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      const formDataObject = Object.fromEntries(
        formData.entries()
      ) as HackRegistrationData;
      const response = await registerForHack(formDataObject);
      console.log(response, "response is here");

      if (response.error) {
        setMessage({ type: "error", text: response.error });
      } else {
        setMessage({ type: "success", text: response.success! });
      }
    } catch (err) {
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
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="sm:text-center">
            Codewave Hackathon 3.0
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto flex-grow pr-4"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-team-name`}>Team Name</Label>
              <Input
                id={`${id}-team-name`}
                name="teamName"
                placeholder="Enter your team name"
                required
                className="focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Team Leader Details</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`${id}-leader-name`}>
                    Full Name(For Certificates)
                  </Label>
                  <Input
                    id={`${id}-leader-name`}
                    name="leaderName"
                    placeholder="Enter leader's name"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-leader-usn`}>USN</Label>
                  <Input
                    id={`${id}-leader-usn`}
                    name="leaderUsn"
                    placeholder="Enter leader's USN"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-leader-year`}>Current Year</Label>
                  <Input
                    id={`${id}-leader-year`}
                    name="leaderCurrentYear"
                    type="number"
                    min={1}
                    max={4}
                    placeholder="Year"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-leader-phone`}>Phone Number</Label>
                  <Input
                    id={`${id}-leader-phone`}
                    name="leaderPhone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor={`${id}-leader-email`}>
                    Official Email ID
                  </Label>
                  <Input
                    id={`${id}-leader-email`}
                    name="leaderOfficialMail"
                    type="email"
                    placeholder="Official email"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Team Member 1</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <Label htmlFor={`${id}-member1-name`}>Full Name</Label>
                  <Input
                    id={`${id}-member1-name`}
                    name="member1Name"
                    placeholder="Name"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member1-usn`}>USN</Label>
                  <Input
                    id={`${id}-member1-usn`}
                    name="member1Usn"
                    placeholder="USN"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member1-year`}>Current Year</Label>
                  <Input
                    id={`${id}-member1-year`}
                    name="member1Year"
                    type="number"
                    min={1}
                    max={4}
                    placeholder="Year"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Team Member 2</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <Label htmlFor={`${id}-member2-name`}>Full Name</Label>
                  <Input
                    id={`${id}-member2-name`}
                    name="member2Name"
                    placeholder="Name"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member2-usn`}>USN</Label>
                  <Input
                    id={`${id}-member2-usn`}
                    name="member2Usn"
                    placeholder="USN"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member2-year`}>Current Year</Label>
                  <Input
                    id={`${id}-member2-year`}
                    name="member2Year"
                    type="number"
                    min={1}
                    max={4}
                    placeholder="Year"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Team Member 3</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <Label htmlFor={`${id}-member3-name`}>Full Name</Label>
                  <Input
                    id={`${id}-member3-name`}
                    name="member3Name"
                    placeholder="Name"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member3-usn`}>USN</Label>
                  <Input
                    id={`${id}-member3-usn`}
                    name="member3Usn"
                    placeholder="USN"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member3-year`}>Current Year</Label>
                  <Input
                    id={`${id}-member3-year`}
                    name="member3Year"
                    type="number"
                    min={1}
                    max={4}
                    placeholder="Year"
                    required
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                </div>
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
                "Register Team"
              )}
            </Button>
          </div>

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
        </form>

        <div className="text-center mt-4">
          <a
            href="https://chat.whatsapp.com/FNUBQRYzkKGH4lgDbAw8zb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center justify-center gap-2 transition-colors"
          >
            📢 Join the Community WhatsApp Group
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { HackRegister };
