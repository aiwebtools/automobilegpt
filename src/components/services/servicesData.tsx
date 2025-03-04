
import { Car, Wrench, FileText, BarChart, AlertTriangle, ClipboardCheck } from "lucide-react";
import { ReactNode } from "react";

// AutoGPT URL
export const AUTO_GPT_URL = "https://chatgpt.com/g/g-iZOG15keP-automobile-gpt";
// Insurance GPT URL
export const INSURANCE_GPT_URL = "https://insuranceclaimsgpt.lovable.app/";

export interface ServiceData {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "teal" | "purple" | "amber" | "red" | "green";
  url: string;
}

export const servicesData: ServiceData[] = [
  {
    icon: <Car />,
    title: "Car Buying Assistance",
    description: "Find the best car deals in your area with detailed pricing and dealership information.",
    features: [
      "Local dealership searches",
      "Price comparisons",
      "Real URLs and addresses",
      "Feature-based recommendations"
    ],
    color: "blue",
    url: AUTO_GPT_URL
  },
  {
    icon: <Wrench />,
    title: "Auto Parts Finder",
    description: "Locate the most affordable auto parts with direct links to purchase them online.",
    features: [
      "Real-time price searches",
      "Direct purchase links",
      "Part compatibility checks",
      "Lowest price guarantee"
    ],
    color: "teal",
    url: AUTO_GPT_URL
  },
  {
    icon: <FileText />,
    title: "Repair Estimates",
    description: "Get detailed breakdowns of repair costs including parts, labor, and total estimates.",
    features: [
      "Parts & labor breakdown",
      "DIY vs professional comparison",
      "Step-by-step repair guides",
      "Total cost calculations"
    ],
    color: "purple",
    url: AUTO_GPT_URL
  },
  {
    icon: <BarChart />,
    title: "Car Value Assessment",
    description: "Determine if your car is worth repairing or if it should be considered totaled.",
    features: [
      "Current market valuations",
      "Repair cost analysis",
      "Value-to-repair ratio",
      "Professional recommendations"
    ],
    color: "amber",
    url: AUTO_GPT_URL
  },
  {
    icon: <AlertTriangle />,
    title: "Accident Assistance",
    description: "Get guidance on what to do after an accident and estimate repair costs.",
    features: [
      "Damage assessment guidance",
      "Repair cost estimates",
      "Insurance claim assistance",
      "Step-by-step instructions"
    ],
    color: "red",
    url: INSURANCE_GPT_URL
  },
  {
    icon: <ClipboardCheck />,
    title: "Insurance Claims GPT",
    description: "Process your insurance claims faster with AI-powered assistance and documentation.",
    features: [
      "Claim form guidance",
      "Documentation checklists",
      "Settlement estimates",
      "Fast approval process"
    ],
    color: "green",
    url: INSURANCE_GPT_URL
  }
];
