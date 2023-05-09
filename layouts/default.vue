<template>
  <!-- main content -->
  <div
    class="container w-[96%] my-[30px] mx-[2%] dark:bg-black bg-gray-200 text-slate-900 dark:text-gray-200"
  >
    <Transition>
      <NavMenu v-if="state.showMenu" v-on:show-menu="setShowMenu(to)"></NavMenu>
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
    <!-- nutton nav menu open -->

    <main>
      <NuxtPage />
    </main>
  </div>
  <!-- footer -->
  <Footer></Footer>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

:root {
  --text-color: #333;
  --color-background: #fff;
}

* {
  box-sizing: border-box;
}
body {
  background: #d9d9d9;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  width: 96vw;
}
.container {
  border-radius: 15px;
  padding: 30px;
  position: relative;
  min-height: 80vh;
  margin-bottom: 150px;
}
.btn-icon-menu {
  border: 0;
  background: none;
  position: absolute;
  top: 60px;
  right: 60px;
  cursor: pointer;
}
@media screen and (max-width: 769px) {
  .btn-icon-menu {
    top: 30px;
    right: 30px;
  }
  .container {
    min-height: 85vh;
    margin-bottom: 120px;
  }
}
</style>
