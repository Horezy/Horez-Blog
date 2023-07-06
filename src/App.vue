<script setup>

</script>

<template>
  <div class="content">
    <!-- 一级路由出口 -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
.content {
  background-image: url('./assets/images/躺床.jpg');
  /* 背景图 */
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-attachment: fixed; /* 固定背景图片不动 */
  @media (max-width: 768px) {
    background-size: contain;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
