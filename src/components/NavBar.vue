<template>
  <nav class="main-wrapper">
    <div class="nav-wrapper">
      <div class="logo-wrapper">
        <a @click="enterHome" class="brand-logo">Decathlon</a>
      </div>
      <ul class="right">
        <li>
          <a>
            <i class="material-icons md-dark">search</i>
          </a>
        </li>
        <li>
          <a>
            <i class="material-icons md-dark">help_outline</i>
          </a>
        </li>
        <li>
          <a @click="clearCurrentSession">
            <i class="material-icons md-dark">store</i>
          </a>
        </li>
        <li>
          <a>
            <i class="material-icons md-dark">perm_identity</i>
          </a>
        </li>
        <li>
          <a @click="enterFavorite">
            <i class="material-icons md-dark">favorite</i>
          </a>
        </li>
        <li>
          <a>
            <i class="material-icons md-dark">shopping_cart</i>
          </a>
        </li>
      </ul>
      <ul class="left">
        <li>
          <a href="#">
            <i class="material-icons md-dark">menu</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
    };
  },
  methods: {
    enterFavorite() {
      this.$router.push({ name: "Favorite", params: {} });
    },
    enterHome() {
      this.$router.push({ name: "Welcome", params: {} });
    },
    clearCurrentSession: function() {
      sessionStorage.clear();
      alert("Clearing current session")
      location.reload();
    }
  },
  created: function() {

  }
};
</script>

<style scoped>
.main-wrapper {
  background-color: rgb(255, 255, 255);
  width: 100%;
}
.brand-logo {
  position: absolute;
  width: 20%;
  height: auto;
  background-color: rgb(0, 225, 255);
}
.material-icons.md-dark {
  color: rgb(0, 0, 0);
}
.material-icons.md-dark.md-inactive {
  color: rgba(0, 0, 0, 0.26);
}

.material-icons.md-light {
  color: rgba(255, 255, 255, 1);
}
.material-icons.md-light.md-inactive {
  color: rgba(255, 255, 255, 0.3);
}
</style>