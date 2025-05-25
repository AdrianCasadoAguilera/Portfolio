import { Experience } from "@/lib/types";
import { CodeIcon, FileIcon, GlobeIcon } from "lucide-react";

export const experiences: Experience[] = [
  {
    title: "Mercantec",
    where: "Viborg, Danmark",
    startDate: "9/10/2024",
    finishDate: "8/12/2024",
    totalHours: 300,
    stack: ["React", "PHP", "Apache", "Vite", "ThreeJS"],
    description: "mercantec-desc",
    buttons: [
      {
        icon: FileIcon,
        title: "reference-letter",
        href: "/docs/mercantec-reference.pdf",
      },
      {
        icon: CodeIcon,
        title: "repo",
        href: "https://github.com/21alexrodri/mercantec_project",
      },
      {
        icon: GlobeIcon,
        title: "webpage",
        href: "https://3dprintarchive.socdata.dk/",
      },
    ],
  },
  {
    title: "Mecalux",
    where: "Cornellà, Barcelona",
    startDate: "9/12/2024",
    finishDate: "7/7/2025",
    totalHours: 800,
    stack: ["React", "NextJS", "Figma", "Typescript"],
    description: "mecalux-desc",
    buttons: [
      {
        title: "mecalux-web",
        icon: GlobeIcon,
        href: "https://www.mecalux.com/",
      },
    ],
  },
];
