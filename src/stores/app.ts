// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    menu: false,
    menuPromise: null as Promise<any> | null,
    barHeight: 0,
    baseColors: [
      "#f72585",
      "#b5179e",
      "#7209b7",
      "#560bad",
      "#480ca8",
      "#3a0ca3",
      "#3f37c9",
      "#4361ee",
      "#4895ef",
      "#4cc9f0",
    ],
  }),
});
