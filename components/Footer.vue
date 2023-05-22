<template>
  <footer
    class="footer dark:bg-black bg-[#D1D5DB] text-slate-900 dark:text-gray-200"
  >
    <button
      class="btn-act dark:bg-gray-200 bg-black dark:text-slate-900 text-gray-200"
      @click="sendEmail()"
    >
      Let's discuss!
      <a
        style="display: none"
        id="send-email-data"
        href="mailto:miracerdin@gmail.com?subject=just-a-subject"
      ></a>
    </button>
    <nav class="social-icon flex items-center justify-center">
      <a target="_blank" href="https://github.com/miracerdin">
        <Icon
          name="mdi:github"
          color="dark"
          size="54px"
          class="flex items-center justify-center"
        />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/mirac-erdin/">
        <Icon
          name="mdi:linkedin"
          color="dark"
          size="54px"
          class="flex items-center justify-center"
        />
      </a>
    </nav>
  </footer>
</template>
<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 1px 1px 1px #ccc;
  padding: 2px 35px;
  padding-left: 27rem;
  display: flex;
  align-items: center;
  z-index: 20;
}
.btn-act {
  padding: 20px 40px;
  border: 0;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  height: 2rem;
  display: flex;
  align-items: center;
}
.btn-act:hover {
  color: #78f38c;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  text-decoration: underline;
}
.social-icon {
  display: flex;
  padding: 12px 30px;
}
.social-icon a {
  padding: 12px 5px;
}
.social-icon a svg {
  width: 40px;
  height: 40px;
}
.social-icon a svg:hover {
  color: #36f354;
  transition: 0.2s ease-in-out;
  text-decoration: underline;
}
/* path {
  fill: black;
}
@media (prefers-color-scheme: dark) {
  path {
    fill: white;
  }
} */
@media screen and (max-width: 512px) {
  .footer {
    padding: 12px;
  }
  .btn-act {
    padding: 10px 20px;
    font-size: 14px;
  }
  .social-icon {
    padding: 10px;
  }
  .social-icon a {
    padding: 0 10px;
  }
  .social-icon a svg {
    width: 24px;
    height: 24px;
  }
}
</style>
<script setup>
const sendEmail = () => {
  // alert("send email")
  document.getElementById("send-email-data").click();
};
</script>
