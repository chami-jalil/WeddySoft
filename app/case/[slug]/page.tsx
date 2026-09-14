import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseSingle from "@/components/containers/case/CaseSingle";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import { getProject, projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const page = ({ params }: { params: { slug: string } }) => {
  const project = getProject(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title={project.title} />
      <CaseSingle project={project} />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
