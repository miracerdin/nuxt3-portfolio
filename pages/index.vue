<template>
  <div>
    <div
      class="w-[100%] h-[80vh] px-8 bg-gray-200 dark:bg-transparent flex mt-6"
    >
      <div
        class="min-w-[50%] max-w-[50%] flex flex-col items-start justify-center"
      >
        <div class="text-[3rem] text-slate-900 dark:text-gray-200">
          Hello.<span class="wave" role="img" aria-labelledby="wave"> 👋🏻 </span>
        </div>

        <br />
        <div class="text-5xl text-slate-900 dark:text-gray-200 mb-3">
          My name is <span class="font-bold">Miraç ERDİN.</span>
        </div>
        <p class="text-slate-900 dark:text-gray-200 text-[2rem] mt-[2rem]">
          I'm a <span class="typed-text">{{ typeValue }}</span>
          <!-- <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        I am using Vue JS and Nuxt JS, 1 years experience. I have been working
        in Pusula Kurumsal İş Çözümleri for 1 year. -->
        </p>
      </div>
      <div class="min-w-[50%] max-w-[50%]">
        <img
          src="/img/logo/home-main.svg"
          alt="home-main"
          class="h-[100%] w-[100%]"
        />
      </div>
    </div>
    <h1 class="text-[3rem] text-center my-[2rem]">Professional Skills</h1>
    <div>
      <div class="flex justify-center gap-4">
        <div class="professional">
          <Icon
            name="teenyicons:vue-outline"
            :color="enabled"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="devicon-plain:nuxtjs-wordmark"
            :color="enabled ? 'dark' : 'green'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="uil:react"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="material-symbols:javascript"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="logos:nodejs"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
      </div>
      <div class="flex justify-center gap-4 mb-[4rem]">
        <div class="professional">
          <Icon
            name="mdi:git"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="mdi:firebase"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="mdi:material-ui"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
        <div class="professional">
          <Icon
            name="mdi:tailwind"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>

        <div class="professional">
          <Icon
            name="akar-icons:css-fill"
            :color="enabled ? 'dark' : '#5CE4FC'"
            size="110px"
            class="flex items-center justify-center icons"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = ref(["frontend developer.", "pilot.", "husband."]);
const typingSpeed = ref(200);
const erasinSpeed = ref(100);
const newTextDelay = ref(2000);
const typeArrayIndex = ref(0);
const charIndex = ref(0);

const { enabled, toggleTheme } = useTheme();

const typeText = () => {
  if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value += typeArray.value[typeArrayIndex.value].charAt(
      charIndex.value
    );
    charIndex.value += 1;

    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};

const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value = typeArray.value[typeArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    charIndex.value -= 1;

    setTimeout(eraseText, erasinSpeed.value);
  } else {
    typeStatus.value = false;
    typeArrayIndex.value += 1;
    if (typeArrayIndex.value >= typeArray.value.length)
      typeArrayIndex.value = 0;

    setTimeout(typeText, typingSpeed.value + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay.value + 200);
});
</script>
<style scoped>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
.professional {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  transition: width 1s, height 1s;
}
.icons {
  transition: width 0.3s, height 0.3s;
}
.professional .icons:hover {
  width: 120px;
  height: 120px;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.1s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}
@media screen and (max-width: 769px) {
  .about-me {
    width: 50%;
    padding: 10px;
  }
}
</style>
