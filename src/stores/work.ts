// Utilities
import { defineStore } from "pinia";

import b302 from "@/assets/work/b302.nl.png";
import kahootTools from "@/assets/work/kahoot-tools.png";
import maatschappAI from "@/assets/work/maatschapp.ai.png";

export const useWorkStore = defineStore("work", {
  state: () => ({
    work: [
      {
        slug: "maatschapp-ai",
        title: "Maatschapp.ai",
        description: "Blah ".repeat(25),
        src: maatschappAI,
      },

      {
        slug: "b302",
        title: "B302 - Website",
        description: "Blah ".repeat(25),
        src: b302,
      },
      {
        slug: "kahoot-tools",
        title: "Kahoot Tools",
        description: "Blah ".repeat(25),
        src: kahootTools,
      },
    ],
  }),
});
