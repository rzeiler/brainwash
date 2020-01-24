<template>
  <div class="container">
    <div id="nav">
      <router-link class="dropdown-item" to="/math">Math</router-link>
      <router-link class="dropdown-item" to="/">Memory</router-link>
      <span class="flex-spacer" > </span>
      <Toggle on="Pro" off="Easy" />
    </div>
    <router-view />
  </div>
</template>


<script>
import Toggle from "./components/Toggle";

export default {
  name: "app",
  components: {
    Toggle
  }
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  padding: 0;
  margin: 0;
  background-color: #42b983;
}
a {
  text-decoration: none;
  padding: 10px;
  color: #000;
}
#nav {
  text-align: center;
  border-bottom: 1px solid #36956a;
  padding: 10px;
  font-size: 130%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
}
#nav a{
   color: #f8f8f883;
}
#nav a.router-link-exact-active {
  color: #f8f8f8;

}
#nav .flex-spacer{
  flex-grow: 1;
}
#app {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

@keyframes flipIn {
  from {
    transform: rotate3d(0, 1, 0, 180deg);
    animation-timing-function: ease-out;
  }
  to {
    transform: rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
}
@keyframes flipOut {
  from {
    transform: rotate3d(0, 1, 0, 180deg);
    animation-timing-function: ease-out;
  }
  to {
    transform: rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes shake {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
}

.animated.shake {
  animation-duration: 1s;
  animation-name: shake;
}

.animated.tada {
  animation-duration: 1s;
  animation-name: tada;
}

.animated.flipIn {
  animation-name: flipIn;
}
.animated.flipOut {
  animation-name: flipOut;
}

.animated {
  backface-visibility: visible;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
