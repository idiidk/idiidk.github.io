<template>
  <AppBarMarginContainer v-if="work">
    <article
      class="work"
      :style="{ '--accent': work.accent }"
    >
      <header class="column hero">
        <RouterLink
          to="/work"
          class="back"
        >
          ← All work
        </RouterLink>
        <h1 class="title text-funnel">
          {{ work.title }}
        </h1>
        <p class="tagline">
          {{ work.tagline }}
        </p>

        <dl class="meta">
          <div v-if="work.year">
            <dt>When</dt>
            <dd>{{ work.year }}</dd>
          </div>
          <div v-if="work.client">
            <dt>For</dt>
            <dd>{{ work.client }}</dd>
          </div>
          <div>
            <dt>My part</dt>
            <dd>{{ work.role }}</dd>
          </div>
          <div v-if="work.href">
            <dt>Live</dt>
            <dd>
              <a
                :href="work.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ work.hrefLabel ?? work.href }} ↗
              </a>
            </dd>
          </div>
        </dl>
      </header>

      <WorkShot
        class="wide cover"
        v-bind="work.cover"
        eager
      />

      <template
        v-for="(block, i) in work.blocks"
        :key="i"
      >
        <section
          v-if="block.type === 'text'"
          class="column text"
        >
          <h2
            v-if="block.heading"
            class="text-funnel"
          >
            {{ block.heading }}
          </h2>
          <p
            v-for="(p, j) in block.body"
            :key="j"
            :class="{ lede: i === 0 && j === 0 }"
          >
            {{ p }}
          </p>
        </section>

        <WorkShot
          v-else-if="block.type === 'shot'"
          :class="block.wide ? 'wide' : 'column'"
          :image="block.image"
          :caption="block.caption"
          :frame="block.frame"
        />

        <div
          v-else-if="block.type === 'shots'"
          class="wide shots"
          :style="{ '--count': block.items.length }"
        >
          <WorkShot
            v-for="(shot, j) in block.items"
            :key="j"
            v-bind="shot"
          />
        </div>

        <section
          v-else-if="block.type === 'numbers'"
          class="wide numbers"
        >
          <div
            v-for="(n, j) in block.items"
            :key="j"
            class="number"
          >
            <span class="value text-funnel">{{ n.value }}</span>
            <span class="label">{{ n.label }}</span>
          </div>
        </section>

        <section
          v-else-if="block.type === 'points'"
          class="column points"
        >
          <h2
            v-if="block.heading"
            class="text-funnel"
          >
            {{ block.heading }}
          </h2>
          <dl>
            <div
              v-for="(point, j) in block.items"
              :key="j"
              class="point"
            >
              <dt class="text-funnel">
                {{ point.title }}
              </dt>
              <dd>{{ point.body }}</dd>
            </div>
          </dl>
        </section>

        <aside
          v-else-if="block.type === 'aside'"
          class="column aside"
        >
          <span class="label">{{ block.label }}</span>
          <p>{{ block.body }}</p>
        </aside>

        <figure
          v-else-if="block.type === 'video'"
          class="wide video"
        >
          <video
            :src="block.src"
            :poster="block.poster"
            controls
            preload="none"
            playsinline
          />
          <figcaption v-if="block.caption">
            {{ block.caption }}
          </figcaption>
        </figure>
      </template>

      <section class="column stack">
        <h2 class="text-funnel">
          Built with
        </h2>
        <ul>
          <li
            v-for="tech in work.stack"
            :key="tech"
          >
            {{ tech }}
          </li>
        </ul>
      </section>

      <nav class="column next">
        <RouterLink :to="`/work/${next.slug}`">
          <span class="label">Next</span>
          <span class="text-funnel name">{{ next.title }} →</span>
        </RouterLink>
      </nav>
    </article>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/stores/work";

const workStore = useWorkStore();

const route = useRoute<"/work/[slug]">();
const router = useRouter();

const index = computed(() =>
  workStore.work.findIndex((e) => e.slug === route.params.slug)
);
const work = computed(() => workStore.work[index.value]);
const next = computed(
  () => workStore.work[(index.value + 1) % workStore.work.length]
);

watch(
  index,
  (i) => {
    if (i === -1) {
      router.replace("/work");
      return;
    }
    window.scrollTo({ top: 0 });
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.work {
  --column: 44rem;
  --wide: 68rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 0 1rem 4rem;

  > * {
    width: 100%;
  }
}

.column {
  max-width: var(--column);
}

.wide {
  max-width: var(--wide);
}

a {
  color: inherit;
}

.hero {
  .back {
    display: inline-block;
    margin-bottom: 2rem;
    text-decoration: none;
    opacity: 0.6;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  .title {
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 600;
    line-height: 1;
    color: var(--accent);
  }

  .tagline {
    margin-top: 1rem;
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    line-height: 1.35;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 3rem;
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);

    dt {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.5;
    }

    dd {
      margin-top: 0.25rem;
    }

    a {
      text-decoration-color: var(--accent);
      text-underline-offset: 3px;
    }
  }
}

h2 {
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.text {
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    opacity: 0.85;

    & + p {
      margin-top: 1rem;
    }
  }

  .lede {
    font-size: 1.35rem;
    line-height: 1.55;
    opacity: 1;
  }
}

.shots {
  display: grid;
  grid-template-columns: repeat(var(--count), minmax(0, 1fr));
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.numbers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 2rem;

  .number {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1rem;
    border-top: 2px solid var(--accent);
  }

  .value {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 600;
    line-height: 1;
  }

  .label {
    opacity: 0.7;
    line-height: 1.4;
  }
}

.points dl {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 2rem 2.5rem;

  dt {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 0.4rem;
  }

  dd {
    line-height: 1.6;
    opacity: 0.85;
  }
}

.aside {
  padding: 1.5rem 1.75rem;
  border-left: 3px solid var(--accent);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0 8px 8px 0;

  .label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.6;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.65;
  }
}

.video {
  margin: 0;

  video {
    display: block;
    width: 100%;
    border-radius: 10px;
    background: #000;
  }

  figcaption {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    opacity: 0.6;
  }
}

.stack ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;

  li {
    padding: 0.35rem 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    font-size: 0.9rem;
  }
}

.next a {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;

  .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.5;
  }

  .name {
    font-size: 2rem;
    transition: color 0.2s;
  }

  &:hover .name {
    color: var(--accent);
  }
}
</style>
