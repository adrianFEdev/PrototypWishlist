<template>
  <div class="content">
    <Navbar />
    <div class="category container" v-if="productsInSession.length != 0">
      <div class="card" v-for="item in productsInSession" :key="item.id">
        <div class="card-content" v-if="localFavorite.includes(item.id)" :key="updateCard">
          <p class="pricetag indigo-text">{{ item.price }}€</p>
          <button class="btn-flat" @click="removeFromFavorite(item)">
            <i class="material-icons" v-if="localFavorite.includes(item.id)">favorite</i>
            <i class="material-icons" v-else>favorite_border</i>
          </button>
          <h2 class="indigo-text">{{ item.titel }}</h2>
          <div class="description">
            <h5 class="name">{{ item.name }}</h5>
            <span>{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Sorry, deine Favoritenliste ist leer!</h2>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar";

export default {
  name: "Favorite",
  components: {
    Navbar
  },
  data() {
    return {
      localFavorite: [],
      productsInSession: [],
      updateCard: 0
    };
  },
  methods: {
    addToCart() {
      console.log("IHHH");
    },
    removeFromFavorite: function(elem) {
      this.localFavorite = _.pull(this.localFavorite, elem.id);
      this.updateCard += 1;
      this.setCurrentSession();
    },
    setCurrentSession: function() {
      let toStore = this.localFavorite;
      let j = JSON.stringify(toStore);
      sessionStorage.setItem("currentList", j);
      console.log("Ende", this.localFavorite);
    }
  },
  created: function() {
    if (sessionStorage.getItem("currentList") != null) {
      this.localFavorite = JSON.parse(sessionStorage.getItem("currentList"));
      for (let i = 0; i < this.localFavorite.length; i++) {
        this.productsInSession.push(
          this.itemlist.find(element => element.id == this.localFavorite[i])
        );
      }
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

</style>