<template>
  <!-- main content -->
  <div
    class="container w-[100%] dark:bg-[url('/img/logo/home-bg.jpg')] bg-gray-200 text-slate-900 dark:text-gray-200"
  >
    <Header></Header>

    <!-- nutton nav menu open -->

    <main class="mt-5">
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
  --text-color: #151718;
  --color-background: #fff;
  --bg-color: #d9d9d9;
}

* {
  box-sizing: border-box;
}
body {
  background: #d9d9d9;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  width: 100%;
  height: 100%;
}
.container {
  -webkit-box-shadow: -1px 2px 23px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 23px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 23px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  min-height: 100vh;
  padding: 1rem 0;
}
.btn-icon-menu {
  border: 0;
  background: none;
  position: absolute;

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
