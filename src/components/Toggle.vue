<template>
  <label class="switch">
    <input type="checkbox" v-bind:checked="checked" v-on:change="onChange($event.target.checked)" />
    <span class="slider round"></span>
  </label>
</template>

<script>
import { store } from "../storePlugin";

export default {
  name: "Toggle",
  props: {
    on: String,
    off: String
  },
  data: function() {
    return {
      checked: false
    };
  },
  created: function() {
    this.checked = store.appMode == "Pro";
  },
  model: {
    prop: "checked",
    event: "change"
  },
  methods: {
    onChange(val) {
      store.appMode = val ? this.on : this.off;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: auto;
  height: 34px;
   user-select: none;  
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
  width: 60px;
  margin: 0 10px -13px 10px;
  background-color: #36956a;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}

.slider:before {
  font-variant: small-caps;
  font-size: 70%;
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  overflow: hidden;
  left: 4px;
  bottom: 4px;
  color: #ffffff;
  background-color: #42b983;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}
 
 

input:checked + .slider {
  background-color: #b91233;
  
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
   background-color: #da4d69;
}

input:checked + .slider:before{
  content: "Pro";
}
input + .slider:before{
  content: "Lite";
}

 

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
  line-height: 24px;
}
</style>
