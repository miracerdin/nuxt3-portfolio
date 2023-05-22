<template>
  <div class="flex justify-center">
    <div
      class="dark:bg-transparent bg-gray-200 text-slate-900 dark:text-gray-200 h-[100%] flex flex-col justify-center items-center mt-[2rem] w-[70%]"
    >
      <h1 class="work-experience-title">Work Experience</h1>
      <div class="work-experience">
        <div
          class="work-experience-item text-slate-900 dark:text-gray-200 dark:bg-black bg-gray-300"
          v-for="we in workExperience"
          :key="we"
        >
          <div class="we-card">
            <div class="we-card-logo">
              <img :src="we.logo" :alt="`${we.title} logo`" />
            </div>
            <div class="we-card-content">
              <div class="we-card-title">
                {{ we.title }}
              </div>
              <div class="we-card-date">
                {{ we.date }}
              </div>
              <div class="we-card-link">
                <a target="_BLANK" :href="we.link">{{
                  getLinkTitle(we.link)
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.work-experience-title {
  font-size: x-large;
  padding: 0 30px;
}
.work-experience {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 1%;
  border-radius: 15px;
}
.work-experience-item {
  width: 50%;
  border-radius: 15px;
}
.we-card {
  display: flex;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 10px 1%;
  cursor: pointer;
}
.we-card:hover {
  background-color: #d9d9d9;
}
.we-card-content {
  padding: 12px;
}
.we-card-title {
  font-weight: bold;
  font-size: 1.5rem;
}
.we-card-logo img {
  width: 120px;
  height: 120px;
  border-radius: 100%;
}
.we-card-link a {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .work-experience-title {
    padding: 0 12px;
    font-size: 1.2rem;
  }
  .work-experience {
    padding: 12px;
  }
  .work-experience-item {
    width: 100%;
  }
  .we-card {
    margin: 0;
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
  }
  .we-card-logo {
    width: 25%;
  }
  .we-card-logo img {
    width: 100%;
  }
  .we-card-title {
    font-size: 1rem;
  }
  .we-card-date,
  .we-card-link a {
    font-size: 0.7rem;
  }
}
</style>

<script setup>
const workExperience = [
  {
    logo: "/img/logo/pusula-kurumsal-is-cozumleri-yazilim-danismanlik-ve-ticaret-a-s.png",
    title: "Get Inclusive",
    date: "Sep 2022 - Now",
    link: "https://www.pusulayazilim.com.tr/",
  },
];
const getLinkTitle = (link) => {
  if (link.length >= 28) {
    return link.slice(0, 28) + "..";
  } else {
    return link;
  }
};
</script>
