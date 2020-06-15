<template>
  <div class="category container">
    <div class="card" v-for="item in itemlist" :key="item.id">
      <div class="card-content">
        <p class="pricetag indigo-text">{{ item.price }}€</p>
        <button class="btn-flat" @click="addToFavorite(item)">
          <i ref="iconPointer" class="material-icons">{{changeIcon(item)}}</i>
        </button>
        <h2 class="indigo-text">{{ item.titel }}</h2>
        <div class="description">
          <h5 class="name">{{ item.name}}</h5>
          <span>{{ item.description }}</span>
        </div>
        <button class="btn-flat waves-effect waves-teal" @click="clearSession()">
          <i class="material-icons">home</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "Category-Men",
  data() {
    return {
      localFavorite: []
    };
  },
   computed: {
  
  },
  methods: {
    addToFavorite: function(elem) {
      this.checkItemFavoritelist(elem);
      this.setCurrentSession();
      this.changeIcon(elem);
    },
    checkItemFavoritelist: function(elem) {
      if (this.localFavorite.length == 0 || this.productIsNotInArray(elem)) {
        this.localFavorite.push(elem.id);
      } else {
        this.localFavorite = _.pull(this.localFavorite, elem.id);
      }
    },
    productIsNotInArray: function(elem) {
      const arr1 = this.localFavorite;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == elem.id) {
          return false;
        }
      }

      return true;
    },
    setCurrentSession: function() {
      let toStore = this.localFavorite;
      let j = JSON.stringify(toStore);
      sessionStorage.setItem("currentList", j);
      console.log("Ende", this.localFavorite);
    },
    changeIcon: function (elem) {
        if (this.localFavorite.includes(elem.id)) {
            return "favorite"
        }
        return "favorite_border"
    },
    clearSession: function() {
      sessionStorage.clear();
    }
  }, 
  created: function() {
      if (sessionStorage.getItem("currentList") != null) {
        this.localFavorite = JSON.parse(sessionStorage.getItem("currentList"));
      }
  }
};
</script>

<style scoped>
.category {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

@media screen and (max-width: 1120px) {
  .category {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }

  @media screen and (max-width: 750px) {
    .category {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 425px) {
    .category {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;
      margin-top: 60px;
    }
  }
}
</style>