import { HackRegister } from "@/components/hack-register";
import { Signup } from "@/components/register";
import EventDetails from "@/components/register-body";

export default function Register() {
  const text1 = "Register for the hackathon";
  const text2 = "Register for the workshop";
  return (
    <section className="mt-16 w-full flex flex-col items-center gap-8  mx-auto max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 p-6">
      <EventDetails />
      <div className="w-full flex justify-center space-x-10 ">
        {/* <Signup text={text1} /> */}
        <Signup text={text2} />
        <HackRegister text={text1} />
      </div>
    </section>
  );
}
