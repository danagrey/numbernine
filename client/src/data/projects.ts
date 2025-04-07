import { FrameStyle } from "@/components/ProjectFrame";

export interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  frameStyle: FrameStyle;
  imageUrls?: string[];
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "design-studio",
    title: "Creative Design Studio",
    url: "https://creative-design-studio.example.com",
    description: "A modern design studio website showcasing creative services and innovative solutions for brands. Features responsive layouts and interactive elements.",
    frameStyle: "wooden",
    tags: ["UX/UI", "Branding", "Design"]
  },
  {
    id: "fashion-store",
    title: "Fashion eCommerce",
    url: "https://fashion-store.example.com",
    description: "An elegant fashion eCommerce website with the latest trends, featuring a seamless shopping experience with advanced filtering and product recommendations.",
    frameStyle: "gold-ornate", // Changed from "gold" to "gold-ornate"
    tags: ["eCommerce", "Fashion", "React"]
  },
  {
    id: "banking-app",
    title: "xently Banking App",
    url: "https://xently-banking.example.com",
    description: "Simple banking interface for modern financial management. Includes budgeting tools, transaction history, and secure payment options.",
    frameStyle: "nokia",
    tags: ["Fintech", "Mobile", "Security"]
  },
  {
    id: "travel-blog",
    title: "Exploring the World",
    url: "https://exploring-world.example.com",
    description: "A travel blog featuring stunning destinations around the globe with interactive maps, travel tips, and photography from exotic locations.",
    frameStyle: "wood-dark", // Changed from "light-wood" to "wood-dark"
    tags: ["Blog", "Travel", "Photography"]
  },
  {
    id: "recipe-app",
    title: "Daily Recipes",
    url: "https://daily-recipes.example.com",
    description: "Curated food recipes with step-by-step instructions, nutritional information, and meal planning features for home cooks of all skill levels.",
    frameStyle: "wood-light", // Changed from "wooden" to "wood-light"
    tags: ["Food", "Lifestyle", "Mobile"]
  },
  {
    id: "music-player",
    title: "Music Player",
    url: "https://music-player.example.com",
    description: "Modern music streaming interface with playlist management, personalized recommendations, and social sharing capabilities.",
    frameStyle: "gold",
    tags: ["Music", "Entertainment", "UI Design"]
  },
  {
    id: "photography",
    title: "Visual Stories",
    url: "https://visual-stories.example.com",
    description: "Photography portfolio showcasing beautiful moments captured through a unique artistic lens. Features image galleries and client testimonials.",
    frameStyle: "nokia",
    tags: ["Photography", "Portfolio", "Art"]
  }
];
