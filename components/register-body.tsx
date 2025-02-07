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
              Slots are already Full.
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
              Registration for this hackathon is now closed. All Slots are full
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
