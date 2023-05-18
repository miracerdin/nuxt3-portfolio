<template>
  <div
    class="header text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-300 rounded w-100"
  >
    <div class="logo flex-1">
      <nuxt-link href="/home"
        ><img src="/img/logo/logo.png" alt="brand"
      /></nuxt-link>
    </div>
    <div
      class="nav-menu text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-300 rounded w-100"
    >
      <!-- menu -->

      <nuxt-link to="/home" @click="$emit('showMenu', false)">
        <Icon
          name="ic:twotone-home"
          color="dark"
          size="32px"
          class="flex items-center justify-center"
        />Home</nuxt-link
      >

      <nuxt-link to="/work-experience" @click="$emit('showMenu', false)"
        ><Icon
          name="eos-icons:job"
          color="dark"
          size="32px"
          class="flex items-center justify-center"
        />Work Experience</nuxt-link
      >
      <a
        href="/img/mirac_erdin_resume.pdf"
        download=""
        @click="$emit('showMenu', false)"
        ><Icon
          name="material-symbols:resume-outline"
          color="dark"
          size="32px"
          class="flex items-center justify-center"
        />Resume</a
      >
    </div>
    <div class="float-right">
      <Transition>
        <NavMenu
          v-if="state.showMenu"
          v-on:show-menu="setShowMenu(to)"
        ></NavMenu>
      </Transition>
      <div class="flex justify-end">
        <ModeSwitch class="flex justify-center items-center p-2" />
        <button class="bg-gray-200 dark:bg-black" @click="setShowMenu(true)">
          <Icon
            name="ic:baseline-menu-open"
            color="dark"
            size="46px"
            class="flex items-center justify-center"
          />
        </button>
      </div>
    </div>
    <!-- <nuxt-link to="/latest-project" @click="$emit('showMenu', false)">Latest Project</nuxt-link> -->
  </div>
</template>
<script setup>
const state = reactive({
  showMenu: false,
});
const setShowMenu = (to) => {
  state.showMenu = to;
};

const { enabled, toggleTheme } = useTheme();
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;
}
.nav-menu {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
}
.logo img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
</style>
