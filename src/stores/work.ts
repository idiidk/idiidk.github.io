import type { WorkModel } from "@/models/work.model";
import { defineStore } from "pinia";

import home from "@/assets/work/b302.nl/home.png";
import work from "@/assets/work/b302.nl/work.png";
import buro from "@/assets/work/b302.nl/buro.png";

export const useWorkStore = defineStore("work", {
  state: () => ({
    work: [
      {
        slug: "b302",
        title: "B302 - Website",
        overview: `Helped develop a clean, modern, and responsive website for the
              creative media agency B302, located in Arnhem. The primary goal
              was to create an attractive online presence that showcases the
              B302's unique charm, provides essential information to potential
              clients (portfolio work, contact info, etc.). The site is designed
              to be user-friendly and visually appealing across all devices,
              from desktops to smartphones.`,
        techStack: ["WordPress", "Elementor", "PHP", "CSS3 / SCSS"],
        images: [home, work, buro],
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
