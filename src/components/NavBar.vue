<template>
  <nav class="main-wrapper">
    <div class="nav-wrapper">
      <div class="logo-wrapper">
        <a @click="enterHome" class="brand-logo">Decathlon</a>
      </div>
      <ul class="right icon-wrapper">
        <li><a><i class="material-icons md-dark suchen">search</i></a></li>
        <li><a><i class="material-icons md-dark hilfe">help_outline</i></a>
        <li><a @click="clearCurrentSession"><i class="material-icons md-dark laden">store</i></a></li>
        <li><a><i class="material-icons md-dark kunde">perm_identity</i></a></li>
        <li><a @click="enterFavorite"><i class="material-icons md-dark favoriten">favorite</i></a></li>
        <li><a><i class="material-icons md-dark einkauf">shopping_cart</i></a></li>
      </ul>

     

      <ul class="left">
        <li><a href="#"><i class="material-icons md-dark">menu</i></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    enterFavorite() {
      if (this.$router.name != "Favorite") {
        this.$router.push({ name: "Favorite", params: {} });
      }
    },
    enterHome() {
      this.$router.push({ name: "Welcome", params: {} });
    },
    clearCurrentSession: function() {
      sessionStorage.clear();
      alert("Clearing current session");
      location.reload();
    }
  },
  created: function() {}
};
</script>

<style scoped>

.main-wrapper {
  background-color: rgb(255, 255, 255);
  width: 100%;
}

.logo-wrapper {
  margin-right: 90%;
}

.brand-logo {
  position: absolute;
  width: 20%;
  height: auto;
  background-color: rgb(3, 159, 221);
}

.material-icons.md-dark {
  color: rgb(0, 0, 0);
}

@media screen and (max-width: 1120px) {
nav .brand-logo {
    left: 18%;
}

.hilfe, .laden {
display: none;  
  }
}

@media screen and (max-width: 750px) {

.hilfe, .laden {
display: none;  
}
  }

@media screen and (max-width: 425px) {

 .hilfe, .laden {
display: none; 
  }
}
</style>