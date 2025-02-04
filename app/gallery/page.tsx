import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { AboutGallery } from "@/components/ui/about-gallery";

export default function About() {
  return (
    <section className="mt-16  flex flex-col mx-auto items-center max-w-6xl border py-4 rounded-2xl shadow-black bg-gray-100/60 ">
      <AboutGallery />
      <ThreeDPhotoCarousel />
    </section>
  );
}
