<template>
  <div class="header">
    <div class="content">
      <Navbar/>
      <CategoryMen/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
import CategoryMen from '@/components/Category-Men'

export default {
  name: 'Welcome',
  components: {
        Navbar,
        CategoryMen,
      },
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
