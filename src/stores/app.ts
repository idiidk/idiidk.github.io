// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    menu: false,
    barHeight: 0,
  }),
});
