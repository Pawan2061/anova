"use client";

import {
  LetterSwapForward,
  LetterSwapPingPong,
} from "@/components/ui/letter-swap";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const EventDetails = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center font-calendas">
      <div className="text-2xl md:text-4xl text-[#0015ff] font-bold mb-6">
        <LetterSwapForward label="Upcoming Events" staggerFrom="center" />
      </div>

      <div className="w-full max-w-3xl p-6 bg-gray-100 rounded-xl shadow-lg text-lg md:text-xl">
        <div className="mb-12 relative p-6 bg-white rounded-lg shadow-sm">
          <LetterSwapPingPong label="Workshop - 7th Feb" staggerFrom="center" />
          <p className="mt-2 font-bold">
            Mastering Data Visualization in R & Tableau
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge
              variant="outline"
              className="bg-red-100 text-red-600 font-bold"
            >
              Registrations Closed
            </Badge>
          </div>

          <Alert className="mt-4 bg-red-50 border-red-200">
            <AlertDescription className="font-bold text-red-600">
              Registration for this workshop is now closed.
            </AlertDescription>
          </Alert>
        </div>

        <div className="w-full border-t-2 border-gray-200 my-2"></div>

        <div className="mt-12 mb-8 p-6 bg-white rounded-lg shadow-sm">
          <LetterSwapPingPong
            label="Hackathon - 8th Feb"
            staggerFrom="center"
          />
          <p className="mt-2 font-bold">Codewave Hackathon 3.0</p>

          <div className="mt-4 bg-blue-50 rounded-lg p-4 shadow-sm">
            <div className="text-xl font-bold text-blue-600">
              <LetterSwapForward label="Prize Pool" staggerFrom="center" />
            </div>
            <div className="mt-2 text-blue-800 font-extrabold text-2xl">
              Cash Prizes Worth ₹5,000
            </div>
          </div>

          <div className="mt-8">
            <LetterSwapForward
              label="Hackathon Guidelines"
              staggerFrom="center"
            />
            <div className="mt-4 grid gap-2 text-left">
              <p className="flex justify-center items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>
                  Team size:{" "}
                  <span className="font-bold">
                    4 (1 Team Leader, 3 Mandatory Members)
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <LetterSwapForward
              label="Team Formation Details"
              staggerFrom="last"
            />
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <p className="text-base">
                Collecting:{" "}
                <span className="font-bold">
                  Team Leader & Members' Names, USN, Email, Phone Number, Team
                  Name, Year.
                </span>
              </p>
              <p className="mt-2 text-base font-bold text-blue-600">
                Teams can be formed across any year.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <LetterSwapForward label="Register Now" staggerFrom="first" />
          <Alert className="mt-4 bg-yellow-50 border-yellow-200">
            <AlertDescription className="font-bold">
              Register early to secure your spot! Limited seats available.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
