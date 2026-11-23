import { defineStore } from "pinia";

import type { WorkModel } from "@/models/work.model";

import platendoosAutocue from "@/assets/work/platendoos/autocue.webp?as=metadata";
import platendoosAnalysis from "@/assets/work/platendoos/analysis.webp?as=metadata";
import platendoosGenres from "@/assets/work/platendoos/genres.webp?as=metadata";
import platendoosPatcher from "@/assets/work/platendoos/patcher-done.webp?as=metadata";
import platendoosChip from "@/assets/work/platendoos/chip.webp?as=metadata";
import platendoosTrackmenu from "@/assets/work/platendoos/trackmenu.webp?as=metadata";
import platendoosFlx4 from "@/assets/work/platendoos/flx4.webp?as=metadata";
import platendoosQuickdeck from "@/assets/work/platendoos/quickdeck.webp?as=metadata";

import maatschappaiTools from "@/assets/work/maatschapp.ai/tools-dark.webp?as=metadata";
import maatschappaiToolsLight from "@/assets/work/maatschapp.ai/tools.webp?as=metadata";
import maatschappaiChat from "@/assets/work/maatschapp.ai/chat-dark.webp?as=metadata";
import maatschappaiTranscriptions from "@/assets/work/maatschapp.ai/transcriptions-dark.webp?as=metadata";
import maatschappaiCourses from "@/assets/work/maatschapp.ai/courses-dark.webp?as=metadata";

import podwalkappnlHome from "@/assets/work/podwalkapp.nl/home.webp?as=metadata";
import podwalkappnlRoute from "@/assets/work/podwalkapp.nl/route.webp?as=metadata";
import podwalkappnlSettings from "@/assets/work/podwalkapp.nl/settings.webp?as=metadata";

import vooreenprikkieconlPreference from "@/assets/work/vooreenprikkie.co.nl/preferences.webp?as=metadata";
import vooreenprikkieconlPlan from "@/assets/work/vooreenprikkie.co.nl/plan.webp?as=metadata";
import vooreenprikkieconlPlanItem from "@/assets/work/vooreenprikkie.co.nl/plan-item.webp?as=metadata";
import vooreenprikkieconlPlanList from "@/assets/work/vooreenprikkie.co.nl/plan-list.webp?as=metadata";
import vooreenprikkieconlSearch from "@/assets/work/vooreenprikkie.co.nl/search.webp?as=metadata";

import justpreparenlHome from "@/assets/work/justprepare.nl/home.webp?as=metadata";
import justpreparenlWieZijnWij from "@/assets/work/justprepare.nl/wie-zijn-wij.webp?as=metadata";
import justpreparenlBlogsEnVerslagen from "@/assets/work/justprepare.nl/blogs-en-verslagen.webp?as=metadata";

import b302nlHome from "@/assets/work/b302.nl/home.webp?as=metadata";
import b302nlWork from "@/assets/work/b302.nl/work.webp?as=metadata";
import b302nlBuro from "@/assets/work/b302.nl/buro.webp?as=metadata";

// Small versions of the covers for the overview cards, made at build time.
import platendoosAutocueThumb from "@/assets/work/platendoos/autocue.webp?w=720;1440&format=webp&as=srcset";
import maatschappaiToolsThumb from "@/assets/work/maatschapp.ai/tools-dark.webp?w=720;1440&format=webp&as=srcset";
import podwalkappnlRouteThumb from "@/assets/work/podwalkapp.nl/route.webp?w=720;1440&format=webp&as=srcset";
import vooreenprikkieconlPlanThumb from "@/assets/work/vooreenprikkie.co.nl/plan.webp?w=720;1440&format=webp&as=srcset";
import justpreparenlHomeThumb from "@/assets/work/justprepare.nl/home.webp?w=720;1440&format=webp&as=srcset";
import b302nlHomeThumb from "@/assets/work/b302.nl/home.webp?w=720;1440&format=webp&as=srcset";

import lasersDesk from "@/assets/work/lasers/desk.webp?as=metadata";
import lasersThumb from "@/assets/work/lasers/preview.webp?w=720;1440&format=webp&as=srcset";
import lasersVibes from "@/assets/work/lasers/vibes.mp4";
import lasersVibesPoster from "@/assets/work/lasers/vibes-poster.webp?as=metadata";
import lasersPreview from "@/assets/work/lasers/preview.webp?as=metadata";
import lasersLive from "@/assets/work/lasers/live.mp4";
import lasersLivePoster from "@/assets/work/lasers/live-poster.webp?as=metadata";

export const useWorkStore = defineStore("work", {
  state: () => ({
    work: [
      {
        slug: "platendoos",
        title: "platendoos",
        tagline: "A box of records, and a box of tweaks for rekordbox.",
        accent: "#2978eb",
        year: "2026",
        role: "Solo project",
        stack: [
          "C++20",
          "Objective-C++",
          "Binary patching",
          "Core ML",
          "ONNX Runtime / DirectML",
          "WebKit / WebView2",
          "VitePress",
        ],
        href: "https://platendoos.idiidk.nl/",
        hrefLabel: "platendoos.idiidk.nl",
        thumb: platendoosAutocueThumb,
        cover: { image: platendoosAutocue, frame: "window" },
        blocks: [
          {
            type: "text",
            body: [
              "I DJ with rekordbox, mostly from Spotify, and it kept getting in the way. Playlists that took ages to load. Spotify that locked up mid-set until I force quit. Beat grids that put the 1 in the wrong place. Pioneer wasn't going to fix those for me, so I opened up the program and did it myself.",
              "platendoos is the result: 34 mods that load into rekordbox 7 on macOS and Windows. It never touches your installed copy. On a Mac it makes a patched copy next to it; on Windows a small launcher starts rekordbox with the mods loaded in memory. Your library and settings are shared, and you can open plain rekordbox whenever you like.",
            ],
          },
          {
            type: "numbers",
            items: [
              { value: "34", label: "mods, each one switchable on its own" },
              { value: "147", label: "places in rekordbox's code the mods hook into" },
              { value: "67.5%", label: "of keys right with betterkey, against rekordbox's 56.8%" },
              { value: "2", label: "platforms from the same source" },
            ],
          },
          {
            type: "video",
            src: "https://media.idiidk.nl/platendoos-trailer.mp4",
            poster: platendoosQuickdeck,
            caption: "The trailer, recorded in rekordbox. With sound.",
          },
          {
            type: "text",
            heading: "Getting in without the source",
            body: [
              "There is no plugin API for rekordbox, so everything goes through its compiled code. The mods look up what they need by name when rekordbox starts: functions by their symbols, fields inside rekordbox's objects by a small recipe (\"the offset in the ninth load inside this function\"). When an update only moves code around, nothing breaks. When a mod can't find its way, it switches itself off and logs why, and the rest keep working.",
              "The Windows build of rekordbox has no names in it at all. For that, each Windows build gets a table that maps the Mac names onto it, made by matching the two builds against each other. For a version without a table, the patcher makes one on the spot.",
            ],
          },
          {
            type: "shot",
            image: platendoosAnalysis,
            frame: "window",
            wide: true,
            caption: "Analysing a whole playlist, Spotify ones too, a few tracks at a time.",
          },
          {
            type: "points",
            heading: "Some of the mods",
            items: [
              {
                title: "autocue",
                body: "Works out a track's arrangement (which bars repeat which, per stem) and has a language model place hot cues for intro, build, drop and outro, following rules you type in plain words. Then you fine-tune them on the waveform before anything is written.",
              },
              {
                title: "bettergrid",
                body: "Runs every track through the Beat This! beat tracker next to rekordbox's own. Where they disagree on the 1, the music decides: it goes where the track changes, or else where the kick comes in.",
              },
              {
                title: "betterstems",
                body: "Separates stems with HTDemucs on the GPU instead of rekordbox's own engine. Cleaner stems, and stemcache keeps them on disk so a track you've played before has them right away.",
              },
              {
                title: "spotifyfix",
                body: "Fixes a deadlock in rekordbox's Spotify client, where a token refresh colliding with a playlist refresh froze every download until you force quit.",
              },
              {
                title: "genres",
                body: "Listens to each track with a style model that knows 400 Discogs styles and fills in the Genre field. With Genre first, the genre also picks the tempo: 140, not 70.",
              },
              {
                title: "flx4",
                body: "Turns a DDJ-FLX4, a two-deck controller, into a four-deck one with stem pads, using SHIFT combinations Pioneer left unused.",
              },
            ],
          },
          {
            type: "shots",
            items: [
              { image: platendoosGenres, frame: "window", caption: "Genres from what the music sounds like." },
              { image: platendoosTrackmenu, frame: "window", caption: "A calmer right-click menu." },
            ],
          },
          {
            type: "text",
            heading: "The windows are web pages",
            body: [
              "Everything you see that isn't rekordbox (the analysis window, auto cues, genres, the patcher) is plain HTML in the system's web view. The C++ side builds the window's state as JSON and handles what comes back. It made a dozen windows doable for one person, and they look the same on both platforms.",
              "The models run where the hardware is: Core ML on a Mac, and rekordbox's own ONNX Runtime with DirectML on Windows.",
            ],
          },
          {
            type: "shots",
            items: [
              { image: platendoosPatcher, frame: "window", caption: "The patcher, after an install." },
              { image: platendoosFlx4, frame: "window", caption: "Four decks on a two-deck controller." },
            ],
          },
          {
            type: "aside",
            label: "How you can tell",
            body: "A modded rekordbox has a small PLATENDOOS chip next to its logo. Click it and you get every mod and whether it's on.",
          },
          { type: "shot", image: platendoosChip, frame: "bare" },
          {
            type: "text",
            body: [
              "It's free, non-commercial and unofficial. Install it, try it, and if it breaks something, the logs say what.",
            ],
          },
        ],
      },
      {
        slug: "lasers",
        title: "Lasers",
        tagline: "Laser shows at drum and bass nights, as a freelancer for Holy Beams.",
        accent: "#8ea8ff",
        year: "2026",
        role: "Freelance laser operator",
        client: "Holy Beams",
        stack: ["Liberation Laser"],
        href: "https://holybeams.com/",
        hrefLabel: "holybeams.com",
        thumb: lasersThumb,
        cover: {
          image: lasersPreview,
          frame: "bare",
          caption: "NCT b2b Mind Vortex at Moonshine 10YRS, Luxor Live.",
        },
        blocks: [
          {
            type: "split",
            body: [
              "Not everything I do happens on a screen. Every now and then Holy Beams, a laser company from Arnhem, books me as a freelance operator, and I spend the night behind the desk playing lasers along with the music.",
              "Not that long ago I was one of the people on that dance floor, at these same nights, looking up at the beams. Now I'm part of the crew that makes them happen, and I'm really proud of that.",
            ],
            media: {
              image: lasersDesk,
              caption: "Operating on stage at Luxor Live, Arnhem.",
            },
          },
          {
            type: "split",
            heading: "How a night works",
            flip: true,
            body: [
              "The shows run on Liberation Laser, from a laptop and a controller at front of house. You build your looks and effects before the doors open: beams, fans, tunnels, colours, all ready to fire from a pad.",
              "After that it's live: you listen for what's coming, watch the DJ, and hit the right look the moment the drop lands. When it works, the whole room feels it.",
            ],
            media: {
              video: lasersLive,
              poster: lasersLivePoster,
              caption: "Running the lasers live. With sound.",
            },
          },
          {
            type: "gigs",
            heading: "Recent nights",
            video: lasersVibes,
            poster: lasersVibesPoster,
            items: [
              {
                day: "19",
                month: "Sep 2026",
                title: "Moonshine 10YRS",
                place: "Luxor Live, Arnhem",
                body: "Ten years of Moonshine, celebrated with a daytime rave in the main room, from three in the afternoon until eleven at night. Primate, NCT b2b Mind Vortex and Don Darkoe b2b Kritikal were among the names on the line-up. I operated the lasers, and it's my latest gig.",
              },
              {
                day: "05",
                month: "Sep 2026",
                title: "Fiber Open Air",
                place: "Openluchttheater de Goffert, Nijmegen",
                body: "A full day of drum and bass in an open-air theatre, with Delta Heavy and Subsonic among others. I was part of the crew on the laser tunnel.",
              },
              {
                day: "20",
                month: "Mar 2026",
                title: "Moonshine ft. Arcando + Atmos b2b Formula",
                place: "Luxor Live, Arnhem",
                body: "An all-nighter, from midnight until six, with Arcando and Atmos b2b Formula. I operated the lasers here too.",
              },
            ],
          },
        ],
      },
      {
        slug: "maatschapp-ai",
        title: "Maatschapp.ai",
        tagline: "AI tools for people who work in the Dutch social domain.",
        accent: "#a3b545",
        year: "2025 – now",
        role: "Development",
        client: "Uitvoeringsbrigade",
        stack: [
          "Vue 3",
          "Tailwind CSS",
          "Bun",
          "Elysia",
          "MikroORM",
          "Gemini",
          "whisper.cpp",
          "Docker",
        ],
        href: "https://maatschapp.ai",
        hrefLabel: "maatschapp.ai",
        thumb: maatschappaiToolsThumb,
        cover: { image: maatschappaiTools, frame: "browser" },
        blocks: [
          {
            type: "text",
            body: [
              "Social workers spend a lot of their week on paperwork: reports, plans, write-ups of conversations they just had. Uitvoeringsbrigade wanted to give that time back to the people they work with. Maatschapp.ai is the platform I built for it.",
              "It's a set of assistants, each made for one job. One helps write a Wmo report that holds up legally. One works out the social costs and benefits of a tailored solution. One is just there to reflect with. A professional picks the one they need and starts talking.",
            ],
          },
          {
            type: "shot",
            image: maatschappaiChat,
            frame: "browser",
            wide: true,
            caption: "Starting a conversation with one of the assistants.",
          },
          {
            type: "points",
            heading: "What's in it",
            items: [
              {
                title: "Assistants",
                body: "Each tool is its own assistant with its own instructions, built and managed in an admin panel. Files, links and transcripts can be added to a conversation.",
              },
              {
                title: "Transcriptions",
                body: "Record a conversation or upload audio and it's written out. That runs on our own whisper.cpp service, so the audio doesn't leave for a third party.",
              },
              {
                title: "Privacy first",
                body: "Recognisable details such as names, BSNs, birth dates and addresses are stripped out before anything reaches the model.",
              },
              {
                title: "Courses",
                body: "A small learning platform inside the app, with courses on working with AI and with GrowPad, Uitvoeringsbrigade's other platform.",
              },
            ],
          },
          {
            type: "shots",
            items: [
              { image: maatschappaiTranscriptions, frame: "browser", caption: "Transcriptions, with the contents blurred." },
              { image: maatschappaiCourses, frame: "browser", caption: "Courses." },
            ],
          },
          {
            type: "text",
            heading: "Built to last",
            body: [
              "It started in January 2025 and has been in use and growing since. The front end is Vue with Tailwind; the API runs on Bun with Elysia and MikroORM. Behind it are encrypted offsite backups and restore tests that report to monitoring, the kind of work nobody sees until the day it matters.",
            ],
          },
          {
            type: "shots",
            items: [
              { image: maatschappaiToolsLight, frame: "browser", caption: "Light." },
              { image: maatschappaiTools, frame: "browser", caption: "Dark." },
            ],
          },
        ],
      },
      {
        slug: "podwalk-betuwe-oorlogstijd",
        title: "Podwalk",
        tagline: "Walk the Betuwe and hear what happened there during the war.",
        accent: "#3d7bf5",
        year: "2024 – 2025",
        role: "App and back end",
        stack: ["Flutter", "iOS & Android", "Laravel", "PHP"],
        href: "https://podwalkapp.nl/",
        hrefLabel: "podwalkapp.nl",
        thumb: podwalkappnlRouteThumb,
        cover: { image: podwalkappnlRoute, frame: "bare" },
        blocks: [
          {
            type: "text",
            body: [
              "Podwalk: De Betuwe in Oorlogstijd is a walking app. You pick a route, put your phone in your pocket and walk. At the places where something happened during the Second World War, from the occupation to the liberation, the app plays the story: audio, old photos, sometimes video.",
              "I built the Flutter app for iOS and Android, and the Laravel back end where the routes and their stories are put together.",
            ],
          },
          {
            type: "shots",
            items: [
              { image: podwalkappnlHome, frame: "bare" },
              { image: podwalkappnlSettings, frame: "bare" },
            ],
          },
          {
            type: "points",
            items: [
              {
                title: "Stories tied to places",
                body: "Every stop on a route sits on the map with its own audio, photos and video. The app takes you from one to the next.",
              },
              {
                title: "Made to be edited",
                body: "Routes, stops and media are managed in the back end, so new walks can be added without a new app release.",
              },
            ],
          },
          {
            type: "aside",
            label: "From the deploy notes",
            body: "The hosting had no shell, no outside access to the database and an SFTP connection that kept dropping. So deploying became: a script zips the whole project together with a small deploy.php, you upload the two files, open deploy.php in a browser, and it unpacks everything and deletes itself. Not pretty, but it worked every time.",
          },
        ],
      },
      {
        slug: "voor-een-prikkie",
        title: "Voor een Prikkie",
        tagline: "A week of dinners for the budget you have.",
        accent: "#f26b3a",
        year: "2024",
        role: "Design and development",
        client: "HAN student project",
        stack: ["Vue 3", "Vuetify", "Bun", "Elysia", "Algolia", "TypeScript"],
        href: "https://www.han.nl/nieuws/2024/06/terugblik-succesvolle-zomereditie-open-up-your-talent/",
        hrefLabel: "HAN Open Up 2024",
        thumb: vooreenprikkieconlPlanThumb,
        cover: { image: vooreenprikkieconlPlan, frame: "browser" },
        blocks: [
          {
            type: "text",
            body: [
              "\"What are we eating tonight?\" is a daily question, and a harder one when money is tight. Voor een Prikkie answers it for the whole week. You set a budget and what you do and don't eat, and it makes you a meal plan that stays under it.",
              "It searches a few thousand recipes, prices every ingredient at each supermarket, and picks the cheapest place to buy each one. If that means two shops, it tells you. If you'd rather stick to one, you can say so.",
            ],
          },
          {
            type: "numbers",
            items: [
              { value: "€95.52", label: "for a week of dinners in the plan at the top" },
              { value: "Winner", label: "Technology Award, HAN Open Up 2024" },
            ],
          },
          {
            type: "shot",
            image: vooreenprikkieconlPlanList,
            frame: "browser",
            wide: true,
          },
          {
            type: "text",
            heading: "Under the hood",
            body: [
              "Prices come in from CheckJeBon on a schedule, and a separate worker reprices every recipe whenever they change, so building a plan is a lookup and not a calculation. Recipe search runs on Algolia. The API is Bun with Elysia, the front end Vue with Vuetify.",
            ],
          },
          {
            type: "shots",
            items: [
              { image: vooreenprikkieconlPreference, frame: "browser", caption: "Preferences." },
              { image: vooreenprikkieconlPlanItem, frame: "browser", caption: "One day of the plan." },
              { image: vooreenprikkieconlSearch, frame: "browser", caption: "Search." },
            ],
          },
          {
            type: "aside",
            label: "Open Up 2024",
            body: "I presented it at HAN's Open Up event in 2024, where it won the Technology Award. I was also part of the INNOVATE Experience there and nominated for Most Innovative Student of the Netherlands.",
          },
        ],
      },
      {
        slug: "just-prepare",
        title: "Just Prepare",
        tagline: "A website for research on a fair energy transition.",
        accent: "#2bb38a",
        role: "Website",
        stack: ["WordPress", "Elementor", "PHP"],
        href: "https://justprepare.nl/",
        hrefLabel: "justprepare.nl",
        thumb: justpreparenlHomeThumb,
        cover: { image: justpreparenlHome, frame: "browser" },
        blocks: [
          {
            type: "text",
            body: [
              "Just Prepare is a research project about the energy transition in neighbourhoods that usually get left out of it. It looks at how people actually cook, wash and heat their homes, and whether the solutions planned for them fit that. Universities, municipalities, housing corporations and residents work on it together, in Living Labs in four municipalities.",
              "That's a lot of different people to talk to on one site. I built it so each of them finds their way: what the project is, who's behind it, and what has come out of it so far.",
            ],
          },
          {
            type: "shots",
            items: [
              { image: justpreparenlWieZijnWij, frame: "browser", caption: "Who's behind it." },
              { image: justpreparenlBlogsEnVerslagen, frame: "browser", caption: "Blogs and reports." },
            ],
          },
          {
            type: "text",
            body: [
              "It's WordPress with Elementor, so the researchers can post their own blogs and reports without calling a developer for every update.",
            ],
          },
        ],
      },
      {
        slug: "b302",
        title: "B302",
        tagline: "The website of a creative studio in Arnhem.",
        accent: "#e94f8a",
        role: "Development",
        stack: ["WordPress", "Elementor", "PHP", "SCSS"],
        href: "https://b302.nl",
        hrefLabel: "b302.nl",
        thumb: b302nlHomeThumb,
        cover: { image: b302nlHome, frame: "browser" },
        blocks: [
          {
            type: "text",
            body: [
              "B302 is a creative media studio in Arnhem, and a studio's own site has to look like them. The design was set. My part was getting it built without losing anything on the way, on every screen size.",
            ],
          },
          {
            type: "shot",
            image: b302nlWork,
            frame: "browser",
            wide: true,
            caption: "The work overview.",
          },
          {
            type: "points",
            items: [
              {
                title: "Custom Elementor widgets",
                body: "The design asked for more than Elementor does out of the box, so I wrote a set of widgets for it. The team can still build pages themselves.",
              },
              {
                title: "Motion",
                body: "I worked on the animations that make the site feel alive rather than static.",
              },
            ],
          },
          {
            type: "shot",
            image: b302nlBuro,
            frame: "browser",
            caption: "Meet the studio.",
          },
        ],
      },
    ] as WorkModel[],
  }),
});
