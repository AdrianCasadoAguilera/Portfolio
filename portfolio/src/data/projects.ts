import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "3D Print Archive",
    type: "Fullstack Web",
    description: "3dprint-desc",
    stack: ["React", "PHP", "Vite", "Apache", "ThreeJS"],
    prodUrl: "https://3dprintarchive.socdata.dk/",
    repoUrl: "https://github.com/21alexrodri/mercantec_project",
  },
  {
    title: "Bus time checker",
    type: "Client Web",
    description: "buschecker-desc",
    stack: ["React", "API calls", "Leaflet"],
    prodUrl: "https://tmb-bus-checker.vercel.app/",
    repoUrl: "https://github.com/AdrianCasadoAguilera/TMB-Bus-checker",
    dev: true,
  },
];
