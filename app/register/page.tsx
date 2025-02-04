import { HackRegister } from "@/components/hack-register";
import { Signup } from "@/components/register";
import EventDetails from "@/components/register-body";

export default function Register() {
  const text1 = "Register for the hackathon";
  const text2 = "Register for the workshop";

  return (
    <section className="mt-8 md:mt-16 w-full flex flex-col items-center gap-4 md:gap-8 mx-auto max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 p-4 md:p-6">
      <EventDetails />
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
        <Signup text={text2} />
        <HackRegister text={text1} />
      </div>
    </section>
  );
}
