import type { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  fullDescription: string;
  images: (string | StaticImageData)[];
  tags: string[];
  software: string | string[];
};

