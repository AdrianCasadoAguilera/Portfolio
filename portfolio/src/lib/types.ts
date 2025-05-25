import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  prodUrl?: string;
  repoUrl?: string;
  dev?: boolean;
};

export type Experience = {
  title: string;
  where: string;
  startDate: string;
  finishDate?: string;
  totalHours?: number;
  stack: string[];
  description: string;
  buttons?: {
    title: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    action?: () => void;
    href?: string;
  }[];
};
