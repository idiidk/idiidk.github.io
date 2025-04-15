import { defineStore } from "pinia";

import type { WorkModel } from "@/models/work.model";

import b302nlHome from "@/assets/work/b302.nl/home.png";
import b302nlWork from "@/assets/work/b302.nl/work.png";
import b302nlBuro from "@/assets/work/b302.nl/buro.png";

import maatschappaiHome from "@/assets/work/maatschapp.ai/home.png";
import maatschappaiAccount from "@/assets/work/maatschapp.ai/account.png";
import maatschappaiTool from "@/assets/work/maatschapp.ai/tool.png";

import justpreparenlHome from "@/assets/work/justprepare.nl/home.png";
import justpreparenlWieZijnWij from "@/assets/work/justprepare.nl/wie-zijn-wij.png";
import justpreparenlBlogsEnVerslagen from "@/assets/work/justprepare.nl/blogs-en-verslagen.png";

import podwalkappnlHome from "@/assets/work/podwalkapp.nl/home.png";
import podwalkappnlRoute from "@/assets/work/podwalkapp.nl/route.png";
import podwalkappnlSettings from "@/assets/work/podwalkapp.nl/settings.png";

export const useWorkStore = defineStore("work", {
  state: () => ({
    work: [
      {
        slug: "just-prepare",
        title: "Just Prepare - Just Energy Transition Research",
        href: "https://justprepare.nl/",
        overviewTitle: "Project Overview",
        overview:
          "Just Prepare focuses on the energy transition (ET) in underprivileged neighbourhoods, addressing two key mismatches: 1) between retrofit technologies and residents' energy practices, and 2) between residents and the actors planning/implementing solutions. These mismatches risk hindering the ET's effectiveness and justice. The project develops practical, methodological, and substantive knowledge by centering on residents' diverse needs and practices (cooking, washing, heating). It utilizes Living Labs in four municipalities and Learning Labs involving stakeholders, aiming to revise agendas, develop user-centric technologies and strategies, and create training materials for professionals to foster a just and effective energy transition.",
        chipsTitle: "Key Themes & Technology",
        chips: [
          "Energy Transition",
          "Energy Justice",
          "Resident Engagement",
          "Underprivileged Neighbourhoods",
          "Living Labs",
          "Action Research",
          "Co-creation",
          "WordPress",
          "Elementor",
        ],
        images: [
          justpreparenlHome,
          justpreparenlWieZijnWij,
          justpreparenlBlogsEnVerslagen,
        ],
        cardsTitle: "Project Highlights",
        cards: [
          {
            icon: "mdi-home-account",
            title: "Resident-Centric Approach",
            description:
              "Investigates and integrates the diverse daily energy practices, needs, and experiences of residents in underprivileged neighbourhoods.",
          },
          {
            icon: "mdi-scale-balance",
            title: "Promoting Energy Justice",
            description:
              "Explicitly addresses distributional (costs/benefits), procedural (access to decision-making), and recognitional justice for vulnerable groups in the ET.",
          },
          {
            icon: "mdi-lightbulb-on-outline",
            title: "Collaborative Knowledge Development",
            description:
              "Develops and tests knowledge, methods, and tools through practical application in Living Labs and disseminates insights via Learning Labs involving diverse stakeholders.",
          },
          {
            icon: "mdi-account-group-outline",
            title: "Multi-Stakeholder Collaboration",
            description:
              "Involves close cooperation between universities, applied science institutions, municipalities, housing corporations, residents, and other practical partners.",
          },
        ],
      },
      {
        slug: "maatschapp-ai",
        title: "Maatschapp.ai - Social Impact AI Platform",
        href: "https://maatschapp.ai",
        overviewTitle: "Project Overview",
        overview: `Developed Maatschapp.ai, an AI-powered platform by Uitvoeringsbrigade, designed to empower professionals in the Dutch social domain. The primary goal is to reduce administrative burden and enhance the quality of support for citizens, particularly those facing disadvantages, allowing professionals to focus on impactful work ('Tijd voor wat telt'). The platform features a suite of specialized AI tools aimed at improving screening, planning, collaboration, and analysis within the social sector. These tools are set to be fully integrated into the companion platform GrowPad by 2025 for a seamless workflow.`,
        chipsTitle: "Technology Stack",
        chips: [
          "AI / Machine Learning",
          "Cloud Platform",
          "Data Analytics",
          "API Integrations (GrowPad)",
        ],
        images: [maatschappaiHome, maatschappaiAccount, maatschappaiTool],
        cardsTitle: "Key Features",
        cards: [
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
        slug: "podwalk-betuwe-oorlogstijd",
        title: "Podwalk: De Betuwe in Oorlogstijd",
        href: "https://podwalkapp.nl/",
        overviewTitle: "App Overview",
        overview:
          "Podwalk: De Betuwe in Oorlogstijd allows users to discover the Betuwe region through a historical lens, specifically focusing on World War II. The app offers walking routes guiding users past significant locations marked by the war years. At various points along the routes, users can access audio fragments, videos, and photos to learn about the events that transpired there. Podwalk provides an interactive and visual way to experience the history of the Betuwe, covering aspects from occupation to liberation and highlighting the impact on the region and its inhabitants. It blends historical education with the adventure of exploration.",
        chipsTitle: "Key Features & Focus",
        chips: [
          "WWII History",
          "Betuwe Region",
          "Historical Walking Routes",
          "Audio Tours",
          "Multimedia Storytelling",
          "Location-Based Experience",
          "Mobile App (iOS/Android with Flutter)",
          "Regional Heritage",
          "Interactive Learning",
        ],
        images: [podwalkappnlHome, podwalkappnlRoute, podwalkappnlSettings],
        cardsTitle: "App Highlights",
        cards: [
          {
            icon: "mdi-map-marker-path",
            title: "Interactive Historical Walks",
            description:
              "Experience history firsthand by walking routes linked to significant WWII locations in the Betuwe, guided by the app.",
          },
          {
            icon: "mdi-multimedia",
            title: "Rich Multimedia Content",
            description:
              "Engage with the past through location-triggered audio fragments, historical photos, and video clips embedded within the routes.",
          },
          {
            icon: "mdi-history",
            title: "Deep Dive into Regional WWII History",
            description:
              "Explore multiple facets of the war's impact on the Betuwe, from the occupation period through to the liberation.",
          },
          {
            icon: "mdi-cellphone-marker",
            title: "Location-Based Storytelling",
            description:
              "Discover stories and historical facts directly linked to the specific places you visit along the walking routes.",
          },
        ],
      },
      {
        slug: "b302",
        title: "B302 - Website",
        href: "https://b302.nl",
        overviewTitle: "Project Overview",
        overview: `Helped develop a clean, modern, and responsive website for the
              creative media agency B302, located in Arnhem. The primary goal
              was to create an attractive online presence that showcases the
              B302's unique charm, provides essential information to potential
              clients (portfolio work, contact info, etc.). The site is designed
              to be user-friendly and visually appealing across all devices,
              from desktops to smartphones.`,
        chipsTitle: "Technology Stack",
        chips: ["WordPress", "Elementor", "PHP", "CSS3 / SCSS"],
        images: [b302nlHome, b302nlWork, b302nlBuro],
        cardsTitle: "Key Features",
        cards: [
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
