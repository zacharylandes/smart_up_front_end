<template>
  <div>
    <h4>Series:</h4>
    <div v-for='ser in series' :key='ser.id'>
        <router-link :to="{path: '/series/' + ser.id}">{{ser.title}}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'seriesComponent',
  components: {
  },
  data () {
    return {
      user: {},
      backendUrl: 'https://mysterious-crag-77146.herokuapp.com',
      series: [],
      loaded: false
    }
  },
  methods: {
    init () {
      axios.get(`${this.backendUrl}/series.json`)
        .then((response) => {
          console.log(response.data, 's')
          this.loaded = true
          this.series = response.data
        }
        )
        .catch(e =>
          console.log(e)
        )
    }
  },
  created () {
    this.init()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
