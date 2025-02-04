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
import { HackRegistrationData, registerForHack } from "@/app/actions";

function HackRegister({ text }: { text: string }) {
  const id = useId();
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formDataObject = Object.fromEntries(
      formData.entries()
    ) as HackRegistrationData;
    const response = await registerForHack(formDataObject);
    console.log(response, "respinse is here");

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
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-team-name`}>Team Name</Label>
              <Input
                id={`${id}-team-name`}
                name="teamName"
                placeholder="Enter your team name"
                required
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Team Leader Details</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor={`${id}-leader-name`}>Full Name</Label>
                  <Input
                    id={`${id}-leader-name`}
                    name="leaderName"
                    placeholder="Enter leader's name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-leader-usn`}>USN</Label>
                  <Input
                    id={`${id}-leader-usn`}
                    name="leaderUsn"
                    placeholder="Enter leader's USN"
                    required
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
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member1-usn`}>USN</Label>
                  <Input
                    id={`${id}-member1-usn`}
                    name="member1Usn"
                    placeholder="USN"
                    required
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
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member2-usn`}>USN</Label>
                  <Input
                    id={`${id}-member2-usn`}
                    name="member2Usn"
                    placeholder="USN"
                    required
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
                  />
                </div>
                <div>
                  <Label htmlFor={`${id}-member3-usn`}>USN</Label>
                  <Input
                    id={`${id}-member3-usn`}
                    name="member3Usn"
                    placeholder="USN"
                    required
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
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full mt-4">
              Register Team
            </Button>
          </div>
        </form>

        {message && <p className="text-center mt-2 flex-shrink-0">{message}</p>}
      </DialogContent>
    </Dialog>
  );
}

export { HackRegister };
