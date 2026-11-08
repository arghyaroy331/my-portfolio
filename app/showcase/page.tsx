import ProjectShowcase from "@/components/ProjectShowcase";

export const metadata = {
  title: "Showcase | Arghya Roy",
  description:
    "Cinematic cloud architecture showcase, interactive AWS topology, and declarative Terraform configurations by Arghya Roy.",
};

export default function ShowcasePage() {
  return (
    <main className="w-full pb-16 pt-4">
      <ProjectShowcase />
    </main>
  );
}

