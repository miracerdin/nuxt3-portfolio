<template>
  <div
    class="header md:max-xl:flex text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-300 rounded w-full"
  >
    <div class="logo">
      <nuxt-link href="/home"
        ><img src="/img/logo/logo-color.png" alt="brand" color="text-slate-900"
      /></nuxt-link>
    </div>
    <div
      class="nav-menu text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-300 rounded w-100"
    >
      <!-- menu -->

      <nuxt-link
        to="/home"
        @click="$emit('showMenu', false)"
        class="text-sm md:text-base"
      >
        <Icon
          name="ic:twotone-home"
          color="dark"
          size="24px"
          class="flex items-center justify-center mr-[.3rem] sm:mr-[.1rem]"
        />Home</nuxt-link
      >
      <nuxt-link
        to="/about"
        @click="$emit('showMenu', false)"
        class="text-sm md:text-base"
      >
        <Icon
          name="material-symbols:person-outline"
          color="dark"
          size="24px"
          class="flex items-center justify-center mr-[.3rem]"
        />About</nuxt-link
      >
      <nuxt-link
        to="/work-experience"
        @click="$emit('showMenu', false)"
        class="text-sm md:text-base"
        ><Icon
          name="eos-icons:job"
          color="dark"
          size="24px"
          class="flex items-center justify-center mr-[.3rem]"
        />Work Experience</nuxt-link
      >
      <a
        href="/img/mirac_erdin_resume.pdf"
        download=""
        @click="$emit('showMenu', false)"
        class="text-sm md:text-base"
        ><Icon
          name="material-symbols:resume-outline"
          color="dark"
          size="24px"
          class="flex items-center justify-center mr-[.3rem]"
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
        <button
          class="bg-transparent dark:bg-black mx-3"
          @click="setShowMenu(true)"
        >
          <Icon
            name="ic:baseline-menu-open"
            color="dark"
            size="32px"
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
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.nav-menu {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;
}
.logo img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
}

@media screen and (max-width: 1180px) {
  .header {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    transition: width 1s, height 1s;
  }
  .nav-menu {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    padding: 0.5rem;
  }
  .logo img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
}
@media screen and (max-width: 450px) {
  .header {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    transition: width 1s, height 1s;
  }
}
</style>
