<template>
  <div>
    <label class="switch">
      <input
        type="checkbox"
        v-model="enabled"
        v-if="enabled !== null"
        @click="toggleTheme"
        :class="enabled ? 'bg-black' : 'bg-orange-50'"
        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      />
      <span class="slider round"></span>

      <span class="sr-only">Mode setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block transform shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <!-- <MoonIcon v-if="enabled" class="h-[34px] w-[34px] fill-gray-300" />
        <SunIcon v-else class="h-[34px] w-[34px] fill-yellow-500" /> -->
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
// import { Switch } from "@headlessui/vue";
// import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
});
const { enabled, toggleTheme } = useTheme();
</script>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #ccc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #000000;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

function useTheme(): { enabled: any; toggleTheme: any; } { throw new
Error("Function not implemented."); }
