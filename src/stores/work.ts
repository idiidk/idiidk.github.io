import type { WorkModel } from "@/models/work.model";
import { defineStore } from "pinia";

import b302nlHome from "@/assets/work/b302.nl/home.png";
import b302nlWork from "@/assets/work/b302.nl/work.png";
import b302nlBuro from "@/assets/work/b302.nl/buro.png";

import maatschappaiHome from "@/assets/work/maatschapp.ai/home.png";
import maatschappaiAccount from "@/assets/work/maatschapp.ai/account.png";
import maatschappaiTool from "@/assets/work/maatschapp.ai/tool.png";

export const useWorkStore = defineStore("work", {
  state: () => ({
    work: [
      {
        slug: "maatschapp-ai",
        title: "Maatschapp.ai - Social Impact AI Platform",
        href: "https://maatschapp.ai",
        overview: `Developed Maatschapp.ai, an AI-powered platform by Uitvoeringsbrigade, designed to empower professionals in the Dutch social domain. The primary goal is to reduce administrative burden and enhance the quality of support for citizens, particularly those facing disadvantages, allowing professionals to focus on impactful work ('Tijd voor wat telt'). The platform features a suite of specialized AI tools aimed at improving screening, planning, collaboration, and analysis within the social sector. These tools are set to be fully integrated into the companion platform GrowPad by 2025 for a seamless workflow.`,
        techStack: [
          "AI / Machine Learning",
          "Cloud Platform",
          "Data Analytics",
          "API Integrations (GrowPad)",
        ],
        images: [maatschappaiHome, maatschappaiAccount, maatschappaiTool],
        keyFeatures: [
          {
            icon: "mdi-account-heart-outline",
            title: "Citizen-Focused AI Tools",
            description:
              "Provides AI assistance for screening, creating personalized (growth) plans, and substantiating tailored support for individuals and families.",
          },
          {
            icon: "mdi-chart-line",
            title: "Organizational Intelligence",
            description:
              "Enables learning from case studies (action research), improves inter-agency collaboration, and supports socio-economic cost-benefit analyses.",
          },
          {
            icon: "mdi-puzzle-edit-outline",
            title: "Practical & Integrated AI",
            description:
              "Translates complex AI into user-friendly, practical tools, integrated with GrowPad (2025) to streamline workflows and maximize human impact.",
          },
        ],
      },
      {
        slug: "b302",
        title: "B302 - Website",
        href: "https://b302.nl",
        overview: `Helped develop a clean, modern, and responsive website for the
              creative media agency B302, located in Arnhem. The primary goal
              was to create an attractive online presence that showcases the
              B302's unique charm, provides essential information to potential
              clients (portfolio work, contact info, etc.). The site is designed
              to be user-friendly and visually appealing across all devices,
              from desktops to smartphones.`,
        techStack: ["WordPress", "Elementor", "PHP", "CSS3 / SCSS"],
        images: [b302nlHome, b302nlWork, b302nlBuro],
        keyFeatures: [
          {
            icon: "mdi-cellphone-link",
            title: "Responsive Design",
            description:
              "Adapts seamlessly to all screen sizes and keeps the original design philosophy.",
          },
          {
            icon: "mdi-widgets",
            title: "Custom Widgets",
            description:
              "To achieve the desired design, I created a stack of custom Elementor widgets.",
          },
          {
            icon: "mdi-animation",
            title: "Animation",
            description:
              "To achieve a dynamic feel, I helped create the animations visible on the website.",
          },
        ],
      },
    ] as WorkModel[],
  }),
});
