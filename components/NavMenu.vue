<template>
  <div
    class="container-menu dark:bg-black bg-gray-200 text-slate-900 dark:text-gray-200"
  >
    <!-- nutton nav menu close -->
    <button
      class="btn-icon-menu text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-200"
      @click="$emit('showMenu', false)"
    >
      <svg
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
        />
      </svg>
    </button>
    <nav class="nav-menu text-slate-900 dark:text-gray-200">
      <!-- menu -->
      <nuxt-link to="/" @click="$emit('showMenu', false)">About Me</nuxt-link>
      <nuxt-link to="/work-experience" @click="$emit('showMenu', false)"
        >Work Experience</nuxt-link
      >
      <!-- <nuxt-link to="/latest-project" @click="$emit('showMenu', false)">Latest Project</nuxt-link> -->
      <a
        href="/img/mirac_erdin_resume.pdf"
        download=""
        @click="$emit('showMenu', false)"
        >Download Resume</a
      >
      <a
        href="mailto:miracerdin@gmail.com?subject=just-a-subject"
        @click="$emit('showMenu', false)"
        >Contact Me</a
      >
    </nav>
  </div>
</template>
<style>
.container-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  padding: 60px;
  overflow-y: scroll;
}
.nav-menu {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  height: 75vh;
  text-align: center;
  margin-bottom: 100px;
}
.nav-menu a {
  width: 100%;
  font-size: 3rem;
  text-decoration: none;
}
.nav-menu a:hover {
  text-decoration: underline;
  margin-left: 5px;
  transition: 0.5s ease-in-out;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media screen and (max-width: 769px) {
  .nav-menu {
    height: 70vh;
  }
  .nav-menu a {
    font-size: 1.5rem;
  }
}
</style>
