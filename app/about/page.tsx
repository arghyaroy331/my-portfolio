import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | Arghya Roy",
  description:
    "Professional background, education at JIS College of Engineering, and Cloud & DevOps aspirations of Arghya Roy.",
};

export default function AboutPage() {
  return (
    <main className="w-full pb-16 pt-4">
      <AboutSection />
    </main>
  );
}
