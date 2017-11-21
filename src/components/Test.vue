<template>
  <div class="hello">
    <h1>{{ test }}</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Test',
  data () {
    return {
      test: ''
    }
  },
  apollo: {
    test: {
      query: gql`{test}`
    }
  }
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
