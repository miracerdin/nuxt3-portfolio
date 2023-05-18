<template>
  <div
    class="container-menu dark:bg-black bg-gray-200 text-slate-900 dark:text-gray-200 h-[100%]"
  >
    <!-- nutton nav menu close -->
    <button
      class="btn-icon-menu text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-200"
      @click="$emit('showMenu', false)"
    >
      <Icon
        name="ic:twotone-close"
        color="dark"
        size="46px"
        class="flex items-center justify-center"
      />
    </button>

    <nav class="nav-menu text-slate-900 dark:text-gray-200">
      <!-- menu -->
      <nuxt-link to="/home" @click="$emit('showMenu', false)"
        >About Me</nuxt-link
      >
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
<style scoped>
.container-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 35px 60px;
  overflow-y: auto;
}
button {
  position: absolute;
  right: 60px;
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

@media screen and (max-width: 769px) {
  .nav-menu {
    height: 70vh;
  }
  .nav-menu a {
    font-size: 1.5rem;
  }
}
</style>
