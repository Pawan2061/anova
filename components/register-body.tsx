"use client";

import {
  LetterSwapForward,
  LetterSwapPingPong,
} from "@/components/ui/letter-swap";

const EventDetails = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center  text-center font-calendas">
      <div className="text-2xl md:text-4xl text-[#0015ff] font-bold mb-6">
        <LetterSwapForward label="Upcoming Events" staggerFrom="center" />
      </div>

      <div className="w-full max-w-3xl p-6 bg-gray-100 rounded-xl shadow-lg text-lg md:text-xl">
        <div className="mb-4">
          <LetterSwapPingPong label="Workshop - 7th Feb" staggerFrom="center" />
          <p className="mt-2">Mastering Data Visualization in R & Tableau</p>
        </div>

        <div className="mb-4">
          <LetterSwapPingPong
            label="Hackathon - 8th Feb"
            staggerFrom="center"
          />
          <p className="mt-2">Codewave Hackathon 3.0</p>
        </div>

        <div className="mb-4">
          <LetterSwapForward
            label="Registrations Open - 5th Jan 2025"
            staggerFrom="first"
          />
        </div>

        <div className="mb-4">
          <LetterSwapForward label="Hackathon Timeline" staggerFrom="center" />
          <p className="mt-2">
            Team size: 4 (1 Team Leader, 2 Mandatory Members, 1 Optional)
          </p>
        </div>

        <div className="mb-4">
          <LetterSwapForward
            label="Team Formation Details"
            staggerFrom="last"
          />
          <p className="mt-2">
            Collecting: Team Leader & Members' Names, USN, Email, Phone Number,
            Team Name, Year.
          </p>
          <p className="mt-1">Teams can be formed across any year.</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
