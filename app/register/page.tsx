import { Signup } from "@/components/register";
import EventDetails from "@/components/register-body";

export default function Register() {
  return (
    <section className="mt-16 w-full flex flex-col items-center justify-start mx-auto max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 p-6">
      <EventDetails />
      <div className="w-full flex justify-center">
        <Signup />
      </div>
    </section>
  );
}
