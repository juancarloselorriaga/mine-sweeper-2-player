<template>
  <div id="app">
    <div id="nav">
      <div class="nav__item-wrapper">
        <router-link to="/">Play</router-link>|
        <router-link to="/help">Help</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

#app {
  padding: 1rem;
  text-align: center;
  color: #f76c6c;
  box-sizing: border-box;
  font-family: "Now";
  font-weight: 400;
  line-height: 1.7;
  color: #24305e;
  background-color: white;
}
#nav {
  padding: 1rem;
}

#nav a {
  font-weight: bold;
  color: #24305e;
  text-decoration: none;
  margin: 12rem;
  font-size: 1.9rem;
}

#nav a.router-link-exact-active {
  color: #f76c6c;
  text-decoration: underline;
}

.nav__item-wrapper {
  margin-bottom: 2rem;
}
</style>
