<template>
  <!-- main content -->
  <div
    class="container h-[100vh] w-full dark:bg-[url('/img/logo/home-bg.jpg')] bg-no-repeat bg-cover bg-gray-200 text-slate-900 dark:text-gray-200"
  >
    <Header></Header>

    <!-- nutton nav menu open -->

    <main class="mt-5">
      <NuxtPage />
    </main>
    <Footer></Footer>
  </div>
  <!-- footer -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600&display=swap");

:root {
  --text-color: #151718;
  --color-background: #fff;
  --bg-color: #d9d9d9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #d9d9d9;
  font-family: "Lato", sans-serif;
  font-weight: 400;
}
.container {
  -webkit-box-shadow: -1px 2px 23px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 23px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 23px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  min-height: 100%;
  padding: 1rem 0;
  min-width: 100%;
}
.container .content {
  filter: contrast(10%);
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
    min-height: 100%;
  }
}
</style>
