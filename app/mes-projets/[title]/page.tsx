import type { NextPage } from "next";
import galleryProjects from "../../data/dataProject";
import ProjectDetailClient from "./ProjectDetailClient";
import { StaticImageData } from "next/image";
import type { Project } from "@/app/types/projects";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function generateStaticParams() {
  return galleryProjects.map((project) => ({
    title: slugify(project.title),
  }));
}

interface PageProps {
  params: { title: string };
}

const Page: NextPage<PageProps> = ({ params }) => {
  const { title } = params;

  const project = galleryProjects.find((p) => slugify(p.title) === title);

  if (!project) return null;

  const safeProject: Project = {
  ...project,
  images: (project.images as (string | StaticImageData | undefined)[])
    .filter((img): img is string | StaticImageData => Boolean(img)),
  software: Array.isArray(project.software)
    ? project.software.join(", ")
    : project.software ?? "Non renseigné",
};


  return <ProjectDetailClient project={safeProject} />;
};

export default Page;
