<template>
  <div id="app">
    <div class="memoryField z-index-1 animated" :class="memoryFieldAnimation">
      <div
        class="memoryCard animated"
        :class="item.animation"
        v-bind:style="{'order':item.order}"
        v-for="(item) in items"
        v-bind:key="item.key"
        v-on:click="open(item)"
      >
        <img v-if="!item.open" :src="item.backImage" alt="Aurelia" />
        <img v-else :src="item.frontImage" alt="Aurelia" />
      </div>
    </div>
    <button class="memoryCard z-index-0" v-on:click="start">Start</button>
    Current {{clickCounter}} Best {{clickLowes}}
  </div>
</template>

<script>
import { store } from "../storePlugin";

export default {
  name: "memory",
  data: function() {
    return {
      easyMode: true,
      items: [],
      key: 0,
      matches: 0,
      openItems: [],
      firstCard: null,
      secondCard: null,
      memoryFieldAnimation: "",
      clickCounter: 0,
      clickLowes: 0
    };
  },
  created: function() {
    this.build();
  },

  methods: {
    build: function() {
      this.clickCounter = 0;
      var items = [];
      var svgs = [
        "angular",
        "backbone",
        "yiiFramework",
        "ember",
        "npm",
        "react",
        "angular",
        "backbone",
        "yiiFramework",
        "ember",
        "npm",
        "react"
      ];
      
      if (store.appMode == "Pro") {
        svgs = [
          "angular",
          "backbone",
          "yiiFramework",
          "ember",
          "npm",
          "react",
          "aurelia",
          "jsfiddle",
          "codepen",
          "angular",
          "vue",
          "aurelia",
          "react",
          "backbone",
          "npm",
          "vue",
          "yiiFramework",
          "jsfiddle",
          "ember",
          "codepen"
        ];
      }

      for (let index = 0; index <= svgs.length - 1; index++) {
        this.key++;
        var item = {
          framework: svgs[index],
          backImage: require(`../assets/img/js-badge.svg`),
          frontImage: require(`../assets/img/${svgs[index]}.svg`),
          open: false,
          animation: "flipOut",
          order: this.key,
          key: this.key,
          find: false
        };
        items.push(item);
      }

      this.items = items;
    },
    start: function() {
      this.build();
      this.items.forEach(item => {
        let randomPos = Math.floor(Math.random() * 12);
        item.order = randomPos;
        item.open = false;
        item.find = false;
      });
    },
    open: function(item) {
      this.clickCounter++;
      if (!item.find) {
        item.open = !item.open;
        item.animation = item.open ? "flipIn" : "flipOut";
        if (item.open) {
          this.openItems.push(item);
        } else {
          this.openItems = this.openItems.filter(card => {
            return card.key != item.key;
          });
        }
        if (this.openItems.length > 1) {
          this.firstCard = this.openItems[0];
          this.secondCard = this.openItems[1];

          if (this.firstCard.frontImage == this.secondCard.frontImage) {
            this.openItems = [];
            /*  animate */
            this.firstCard.animation = "tada";
            this.secondCard.animation = "tada";
            this.matches++;

            if (this.matches == this.items.length / 2) {
              if (this.clickLowes == 0) this.clickLowes = this.clickCounter;
              this.memoryFieldAnimation = "tada";
              this.clickLowes =
                this.clickCounter < this.clickLowes
                  ? this.clickCounter
                  : this.clickLowes;
            }

            setTimeout(() => {
              this.firstCard.find = true;
              this.secondCard.find = true;
            }, 1000);
          } else {
            this.openItems = [];
            setTimeout(() => {
              this.firstCard.open = false;
              this.secondCard.open = false;
              this.firstCard.animation = this.secondCard.open
                ? "flipIn"
                : "flipOut";
              this.secondCard.animation = this.secondCard.open
                ? "flipIn"
                : "flipOut";
            }, 1000);
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.z-index-0 {
  z-index: 0;
}

.z-index-1 {
  z-index: 1;
}

.memoryField {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.memoryCard {
  width: calc(25% - 20px);
  margin: 10px;
  height: (33.333% - 20px);
  position: relative;
  align-items: center;
  border: 1px solid #dcd69e;
  background-color: #f3eca8;
  padding: 10px;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
}

.memoryCard img {
  width: 40px;
  height: 40px;
}

@media (min-width: 361px) {
  .memoryCard img {
    width: 60px;
    height: 60px;
  }
}

button.memoryCard {
  width: calc(100% - 20px) !important;
  height: 60px;
  display: block;
  margin: auto;
  border: 1px solid #dcd69e;
  background-color: #f3eca8;
  padding: 10px;
  border-radius: 5px;
  position: initial;
}
</style>