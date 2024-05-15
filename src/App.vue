<script setup lang="ts">
import icons from "./assets/icons";
import projectImages from "./assets/projects";
import images from "./assets/images";

import Link from "./components/Link.vue";
import Post from "./components/Post.vue";
import Skill from "./components/Skill.vue";
import Title from "./components/Title.vue";
import Image from "./components/Image.vue";
import Label from "./components/Label.vue";
import Career from "./components/Career.vue";
import Project from "./components/Project.vue";
import Divider from "./components/Divider.vue";
import Narration from "./components/Narration.vue";
import Highlight from "./components/Highlight.vue";

import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

const titles = ["Web Developer", "UX Designer", "Writer"];
const links = [
  {
    label: "my clicks",
    icon: icons.insta,
    link: "https://www.instagram.com/stupidforages",
  },
  {
    label: "random thoughts",
    icon: icons.twitter,
    link: "https://www.twitter.com/pulimoodanhere",
  },
  {
    label: "professional talks",
    icon: icons.linkedin,
    link: "https://www.linkedin.com/in/pulimoodan",
  },
  {
    label: "valuable lines of code",
    icon: icons.github,
    link: "https://www.github.com/pulimoodan",
  },
  {
    label: "write an email",
    icon: icons.mail,
    link: "mailto:akbarali@pulimoodan.com",
  },
];

const skills = [
  {
    label: "React",
    icon: icons.react,
  },
  {
    label: "Next",
    icon: icons.next,
  },
  {
    label: "Nest",
    icon: icons.nest,
  },
  {
    label: "Remix",
    icon: icons.remix,
  },
  {
    label: "Figma",
    icon: icons.figma,
  },
];

const career = [
  {
    title: "Web developer",
    org: "Freelance",
    tools: ["React", "Django", "Next JS"],
    period: {
      from: "March 2018",
      to: "March 2022",
    },
  },
  {
    title: "Shopify developer",
    org: "Final Apps",
    tools: ["React", "Nest JS", "Remix"],
    period: {
      from: "April 2022",
      to: "Now",
    },
  },
];

const projects = [
  {
    title: "Farmfills",
    points: [
      "A web app for subscribing dairy products delivery",
      "Customers, admin, delivery, dispatch portals",
      "Payment integration with Razor pay",
      "One time password login",
    ],
    github: "https://github.com/pulimoodan/farmfills-app",
    webpage: "https://farmfills.com/",
    image: projectImages.farmfills,
  },
  {
    title: "Publiso",
    points: [
      "A web app for reading popular e-books",
      "Users can follow authors",
      "Payment integration with Razor pay",
      "Reading feature without losing PDF",
    ],
    github: "https://github.com/pulimoodan/publiso",
    webpage: "https://publiso.pulimoodan.com/",
    image: projectImages.publiso,
  },
  {
    title: "Chali",
    points: [
      "A web app for sharing and reacting jokes",
      "Users can follow each other and edit profile",
      "Bookmark, trending pages",
      "Notification system for reactions, comments",
    ],
    github: "https://github.com/pulimoodan/Chali",
    webpage: "https://chali.pulimoodan.com/",
    image: projectImages.chali,
  },
  {
    title: "This or that",
    points: [
      "A web app for choosing the favourite from an image group",
      "Choose multiple images",
      "Restart poll after showing the result",
      "Start a new poll after showing the result",
    ],
    github: "https://github.com/pulimoodan/This-or-that",
    webpage: "https://pulimoodan.github.io/This-or-that/",
    image: projectImages.thisorthat,
  },
];

function toggleDarkMode() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    dark.value = false;
  } else {
    document.body.classList.add("dark");
    dark.value = true;
  }
}

interface Post {
  id: string;
  title: string;
  description: string;
  url: string;
  cover_image: string;
}

import { ref } from "vue";
const dark = ref(false);
const posts = ref<Post[]>([]);

async function fetchPosts() {
  const res = await fetch(`/articles/me?per_page=4`, {
    method: "GET",
    headers: {
      "api-key": "18THXvzf7sZgeXARCDEoe9HW",
    },
  });
  posts.value = await res.json();
}

fetchPosts();
</script>

<template>
  <div id="wrapper" class="bg-white dark:bg-zinc-900 relative">
    <button
      class="w-8 h-8 flex items-center justify-center border border-slate-300 dark:border-slate-600 dark:text-white rounded fixed top-4 right-4"
      @click="toggleDarkMode()"
    >
      <SunIcon v-if="dark" class="w-5" />
      <MoonIcon v-else class="w-4" />
    </button>

    <div
      class="font-montserrat max-w-[700px] mx-auto py-12 flex flex-col gap-6 p-4"
    >
      <h1 class="font-medium dark:text-white">
        👋 Hi there, I'm <span class="font-bold">Akbar</span>
      </h1>

      <div class="flex items-center gap-3 text-sm flex-wrap">
        <Title v-for="title in titles"> {{ title }} </Title>
      </div>

      <div class="relative gap-4 flex flex-col">
        <Label value="About" />
        <div class="flex items-center gap-3 text-sm flex-wrap">
          <Image v-for="(image, index) in images" :src="image" :index />
        </div>
      </div>

      <Narration>
        <p>
          Started from my high school, curious about games and computers, I've
          tried everything found interesting to me until I realized that
          <Highlight> web development</Highlight>
          is my favourite ⭐.
        </p>
        <p>
          I was doing
          <Highlight>freelance</Highlight>
          web designing and development ⌨️ (mostly static websites) during my
          <Highlight>high school</Highlight>, to buy my first personal computer
          🖥️ and accessories. Yes, I've learnt web development with my old
          smartphone 📱 and eventually my friend helped me with his computer to
          deliver my freelance gigs.
        </p>
        <p>
          <Highlight>Game development</Highlight>
          🎮 was the main attraction for me to get into technologies and still
          I'm trying out things and making games as a
          <Highlight>hobby</Highlight>
          (I must say, I'm not an expert).
        </p>
        <p>
          Useful
          <Highlight>links</Highlight>
          :
        </p>

        <div class="flex items-center gap-4 flex-wrap">
          <Link v-for="{ icon, label, link } in links" :icon :label :link />
        </div>
      </Narration>

      <Divider />

      <Narration>
        <Label value="Skills" />
        <p>
          New <Highlight>tech stacks</Highlight> and
          <Highlight>tools</Highlight> always drive me curious. I try to learn
          and test new technologies pop up in the market. Here are my
          <Highlight>favourites</Highlight> :
        </p>

        <div class="flex gap-4 items-center flex-wrap">
          <Skill v-for="{ icon, label } in skills" :icon :label />
        </div>
      </Narration>

      <Divider />

      <Narration>
        <Label value="Blog" />
        <p>
          <Highlight>Writing</Highlight> stories and poems (also
          <Highlight>reading</Highlight>) was my hobbies since my childhood in
          which I still think I had a knack (I'm not saying this out of self
          confidence, I still regret that I became a software engineer instead
          of a world famous <Highlight>author</Highlight>).
        </p>
        <p>
          Somewhere in the period of building my career, I lost my skills on
          writing and now, trying to redevelop that, reading a lot and imagining
          a lot (I won't spend valuable time looking at the ceiling).
        </p>
        <p>
          I write <Highlight>blog</Highlight> posts nowadays, mostly technical
          things: challenges faced in development, new features or tools I
          discovered, new tools or solutions I built, and so on.
        </p>
        <p>Here are some <Highlight>recent posts</Highlight> :</p>

        <div
          class="grid items-stretch md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
        >
          <Post
            v-for="{
              cover_image: image,
              title,
              description,
              url: link,
            } in posts"
            :image
            :title
            :description="description.slice(0, 80)"
            :link
          />
        </div>
      </Narration>

      <Divider />

      <Narration>
        <Label value="Career" />
        <p>
          Got my first <Highlight>offer letter</Highlight> at the final year of
          my <Highlight>high school</Highlight>, while I was preparing for my
          exams. I was so much excited about the industry and realized that it
          was the best opportunity to start exploring.
        </p>
        <p>
          Signed that offer letter after my exams and I was ready to go. Almost
          everyone from my family and friends were concerned about me choosing a
          job over higher education, but I was already figured out my future.
        </p>
        <p>
          Studying <Highlight>Bachelor of Computer Application</Highlight> at
          <Highlight>Manipal University</Highlight> along with my job now, which
          is almost manageable by a 21 year old. Here is my
          <Highlight>career roadmap</Highlight> :
        </p>

        <div class="flex flex-col gap-4">
          <Career
            v-for="({ title, org, period, tools }, index) in career"
            :title
            :org
            :period
            :tools
            :subdued="index + 1 != career.length"
          />
        </div>
      </Narration>

      <Divider />

      <Narration>
        <Label value="Projects" />
        <p>
          Designing and developing <Highlight>static websites</Highlight> was
          the primary gigs I could handle when I started freelancing web
          development. One of my friends' brother had an
          <Highlight>ERP</Highlight> development company and they out-sourced
          web development projects, of which I ended up the main contender.
        </p>
        <p>
          Eventually, I got a project from a start-up which was a
          <Highlight>web app</Highlight> with almost
          <Highlight>3K+ users</Highlight>, I could complete it in a few months
          which is running flawlessly until now. Still building projects to
          solve problems of my own or faced by others.
        </p>
        <p>Listing out some of my <Highlight>popular projects</Highlight> :</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Project
            v-for="{ image, github, webpage, title, points } in projects"
            :image
            :github
            :webpage
            :title
            :points
          />
        </div>
      </Narration>

      <Divider />

      <Narration class="text-center text-xs">
        <p>
          Designed and developed by
          <span class="text-blue-600 dark:text-blue-300">Akbar Ali</span> using
          <a
            href="https://tailwindcss.com/"
            class="text-blue-600 underline dark:text-blue-300"
          >
            tailwind css
          </a>
          and
          <a
            href="https://vuejs.org/"
            class="text-blue-600 underline dark:text-blue-300"
          >
            vue js
          </a>
          . Inspired from
          <a
            href="https://leerob.io/"
            class="text-blue-600 underline dark:text-blue-300"
          >
            leerob.io
          </a>
          . <br />
          <span class="text-slate-400">Last updated - May 2024</span>
        </p>
      </Narration>
    </div>
  </div>
</template>

<style scoped></style>
