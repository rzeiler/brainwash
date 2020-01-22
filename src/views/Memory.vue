<template>
  <div id="app">
    <div class="memoryField animated " :class="memoryFieldAnimation">
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
    <button class="memoryCard" v-on:click="start">Start</button>
  </div>
</template>

<script>
export default {
  name: "memory",
  data: function() {
    return {
      items: [],
      key: 0,
      matches: 0,
      openItems: [],
      firstCard: null,
      secondCard: null,
      memoryFieldAnimation: ""
    };
  },
  created: function() {
    var items = [];

    var svgs = [
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

    for (let index = 0; index <= 19; index++) {
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
  methods: {
    start: function() {
      this.items.forEach(item => {
        let randomPos = Math.floor(Math.random() * 12);
        item.order = randomPos;
        item.open = false;
        item.find = false;
      });
    },
    open: function(item) {
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

            if (this.matches == this.items.length / 2)
              this.memoryFieldAnimation = "tada";

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
}
</style>