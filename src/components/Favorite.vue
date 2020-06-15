<template>
  <div class="content">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/NavBar";

export default {
  name: "Favorite",
  props: ["favoriteList"],
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>