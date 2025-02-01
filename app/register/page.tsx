import { SignupForm } from "@/components/ui/signup-form";

export default function Register() {
  return (
    <section className="mt-16  flex flex-col mx-auto items-center max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 ">
      <div className="h-[40rem] flex items-center justify-center">
        <SignupForm />
      </div>
    </section>
  );
}
