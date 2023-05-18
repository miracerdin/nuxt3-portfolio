<template>
  <div class="w-[100%] h-[100%] px-8 bg-gray-200 dark:bg-transparent flex mt-2">
    <div class="min-w-[50%] max-w-[50%]">
      <div class="text-xl font-bold text-slate-900 dark:text-gray-200">
        Hello.
      </div>

      <br />
      <div class="text-5xl font-bold text-slate-900 dark:text-gray-200 mb-3">
        My name is Miraç ERDİN.
        <span class="wave" role="img" aria-labelledby="wave"> 👋🏻 </span>
      </div>
      <p class="text-slate-900 dark:text-gray-200">
        I'm a <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        . I am using Vue JS and Nuxt JS, 1 years experience. I have been working
        in Pusula Kurumsal İş Çözümleri for 1 year.
      </p>
      <p class="text-slate-900 dark:text-gray-200">
        Frontend: <br /><br />

        ✅ &nbsp;&nbsp; Vue JS: Nuxt Js <br />
        ✅ &nbsp;&nbsp; React JS <br />
        ✅ &nbsp;&nbsp; CSS : Tailwindcss, Bootstrap<br /><br />

        Other experiences:<br />
        ✔ Hobbies: Helicopter and plane.
      </p>
    </div>
    <div class="min-w-[50%] max-w-[50%]]">
      <img src="/img/logo/home-main.svg" alt="" srcset="" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const typeValue = ref("");
const typeStatus = ref(false);
const typeArray = ref(["frontend developer", "pilot", "husband"]);
const typingSpeed = ref(200);
const erasinSpeed = ref(100);
const newTextDelay = ref(2000);
const typeArrayIndex = ref(0);
const charIndex = ref(0);
// const backgroundImageDark = "home-bg.jpg"; // Dark mode için arka plan resmi
// const backgroundImageLight = "light-mode-resim.png";

const { enabled, toggleTheme } = useTheme();

// const isBackGroundDark = computed(() => {
//   if (enabled) {
//     return { "background-image": `url(${"home-bg.jpg"})` };
//   } else {
//     return { "background-image": `url(${"home-bg.jpg"})` };
//   }
// });

const typeText = () => {
  console.log(
    "typeArray.value[typeArrayIndex.value]",
    typeArray.value[typeArrayIndex.value]
  );
  if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value += typeArray.value[typeArrayIndex.value].charAt(
      charIndex.value
    );
    charIndex.value += 1;
    console.log("typeValue", typeValue);
    setTimeout(typeText, typingSpeed.value);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay.value);
  }
};

const eraseText = () => {
  console.log("charIndex", charIndex.value);
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;

    console.log("eraseText else", typeArrayIndex.value);
    typeValue.value = typeArray.value[typeArrayIndex.value].substring(
      0,
      charIndex.value - 1
    );
    console.log("typeValue.value", typeValue.value);
    charIndex.value -= 1;
    setTimeout(eraseText, erasinSpeed.value);
  } else {
    console.log("eraseText else", typeArrayIndex);
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
