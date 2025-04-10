import { defineStore } from "pinia";

export const useSocialStore = defineStore("social", {
  state: () => ({
    socials: [
      "https://www.instagram.com/idiidk/",
      "https://github.com/idiidk",
      "https://steamcommunity.com/id/idiidk",
      "https://linkedin.com/in/idiidk",
      "https://soundcloud.com/idiidk",
      "https://open.spotify.com/artist/5SIPahYMtvwQdrwvGJ4N1w",
    ],
  }),
});
