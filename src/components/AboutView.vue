<template>
  <div>
    <h1>{{ $t('message.about') }}</h1>

    <div class="app-about">
      <h3>{{ $t('message.aboutThisApplication') }}</h3>
      <hr>
      <h4>{{ $t('message.techStackUsed') }}</h4>
      <section>
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="vueLogo"
            alt="Vue logo"
            width="24"
            height="24"
          >
          <span>Vue</span>
        </a>
      </section>
      <section>
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="viteLogo"
            alt="Vite logo"
            width="24"
            height="24"
          >
          <span>Vite</span>
        </a>
      </section>
      <section>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="typescriptLogo"
            alt="Typescript logo"
            width="24"
            height="24"
          >
          <span>Typescript</span>
        </a>
      </section>
      <section>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="sassLogo"
            alt="SASS logo"
            width="24"
            height="24"
          >
          <span>SASS</span>
        </a>
      </section>
      <section>
        <a
          href="https://router.vuejs.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="vueRouterLogo"
            alt="Vue Router logo"
            width="24"
            height="24"
          >
          <span>Vue Router</span>
        </a>
      </section>
      <section>
        <a
          href="https://playwright.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="playwrightLogo"
            alt="Playwright logo"
            width="24"
            height="24"
          >
          <span>Playwright</span>
        </a>
      </section>
      <section>
        <a
          href="https://volta.sh/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="voltaLogo"
            alt="Volta logo"
            width="24"
            height="24"
          >
          <span>Volta</span>
        </a>
      </section>

      <hr>
      <h4>{{ $t('message.architecture') }}</h4>
      <section>
        <a
          href="https://render.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="renderLogo"
            alt="Render logo"
            width="24"
            height="24"
          >
          <span>Render - Cloud Application Platform</span>
        </a>
      </section>
      <section>
        <a
          href="https://www.redhat.com/en/topics/api/what-is-a-rest-api"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="restApiLogo"
            alt="Rest Api logo"
            width="24"
            height="24"
          >
          <span>Rest Api</span>
        </a>
      </section>
      <section>
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="nodeJsLogo"
            alt="Node JS logo"
            width="24"
            height="24"
          >
          <span>Node JS</span>
        </a>
      </section>
      <section>
        <a
          href="https://www.mongodb.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="mongoDbLogo"
            alt="Mongo DB logo"
            width="24"
            height="24"
          >
          <span>Mongo DB</span>
        </a>
      </section>

      <hr>
      <h4>{{ $t('message.hostedOn') }}</h4>
      <section>
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="netlifyLogo"
            alt="Netlify"
            width="24"
            height="24"
          >
          <span>Netlify</span>
        </a>
      </section>

      <hr>
      <h4>{{ $t('message.sourceCode') }}</h4>
      <section>
        <a
          href="https://github.com/atm-portfolio/consumer"
          target="_blank"
          rel="noreferrer"
        >
          <img
            :src="githubSourceLogo"
            alt="Github repo logo"
            width="24"
            height="24"
          >
          <span>Github Repo</span>
        </a>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import githubSourceLogo from '../assets/images/github-source.svg';
import mongoDbLogo from '../assets/images/mongodb.svg';
import netlifyLogo from '../assets/images/netlify.svg';
import nodeJsLogo from '../assets/images/nodejs.svg';
import playwrightLogo from '../assets/images/playwright.svg';
import renderLogo from '../assets/images/render.svg';
import restApiLogo from '../assets/images/rest-api.svg';
import sassLogo from '../assets/images/sass.svg';
import typescriptLogo from '../assets/images/typescript.svg';
import viteLogo from '../assets/images/vite.svg';
import voltaLogo from '../assets/images/volta.svg';
import vueLogo from '../assets/images/vue.svg';
import vueRouterLogo from '../assets/images/vue-router.svg';
</script>
