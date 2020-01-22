<template>
  <div id="app">
    <h1 class="animated" :class="animation">{{formular}} = {{sResult}}</h1>
    <div class="btn-group">
      <button
        class="button"
        v-for="r in results"
        v-bind:key="r.result"
        v-html="r.result"
        v-bind:style="{'order':r.order}"
        v-on:click="click(r)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "math",
  data: function() {
    return {
      keys: [],
      formular: "0+0",
      sResult: "?",
      result: 0,
      level: 1,
      animation: ""
    };
  },
  created: function() {
    this.results = [];
    this.getChallenge();
  },
  methods: {
    start: function() {},
    click: function(item) {
      this.sResult = item.result;
      this.animation = "shake";
      if (this.result == item.result) {
        this.getChallenge();
        this.animation = "tada";
      }
      setTimeout(() => {
        this.animation = "";
        this.sResult = "?";
      }, 500);
    },

    getRandom: function(min, max, level) {
      return Math.round(Math.random() * (max * level - min) + min);
    },

    isOdd: function(num) {
      return num % 2;
    },

    getChallenge: function() {
      this.sResult = "?";
      this.results = [];
      var sign = ["+", "-", "*"];
      var multi = this.getRandom(3, 2 + this.level, 1);
      if (!this.isOdd(multi)) {
        multi++;
      }
      var formular = "";
      var lastSign = "+";
      for (var i = 0; i < multi; i++) {
        if (!this.isOdd(i)) {
          formular +=
            " " + this.getRandom(1, 9, lastSign === "*" ? 1 : multi / 2);
        } else {
          lastSign = sign[this.getRandom(0, 2, 1)];
          formular += " " + lastSign;
        }
      }

      var numberPattern = /\d+/g;
      var numbers = formular.match(numberPattern);

      /* get lowes nummber */
      var smalles = numbers.sort();

      var result = eval(formular);
      this.formular = formular;
      this.result = result;

      this.results.push({ result: result, order: 0 });
      var alt = 0;
      for (let index = 0; index < 2; index++) {
        alt = eval(result + sign[index] + smalles[0]);
        this.results.push({ result: alt, order: 0 });
      }
      for (let index = 0; index < 2; index++) {
        alt = eval(result + sign[index] + smalles[1]);
        this.results.push({ result: alt, order: 0 });
      }

      this.results.forEach(item => {
        let randomPos = Math.floor(Math.random() * 5);
        item.order = randomPos;
      });
    },

    checkLevel: function() {
      var level = this.level,
        step = this.levelStep;
      if (this.successful + 1 >= step * level) {
        level = this.level + 1;
      }
      return level;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.btn-group .button {
  background-color: #4caf50; /* Green */
  border: 1px solid green;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
  display: block;
  position: relative;
  align-items: center;
}

.btn-group {
  width: 150px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

 

.btn-group .button:hover {
  background-color: #3e8e41;
}
</style>