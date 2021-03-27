<template>
  <div v-if='loaded'>
    <h3>Series: <u>{{series.title}}</u></h3>
    <h5 v-if='series.status'>Status: {{series.status}}</h5>
    <h3>Lessons:</h3>
      <div v-for='lesson in series.lessons' :key='lesson.id'>
         -{{lesson.title}}-
      </div>
      <router-link :to="{path: '/series/' + series.id + '/lessons/'+series.next_lesson}"><h3 @click='startCourse'> {{getVerb()}} This Series!</h3></router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'seriesShow',
  components: {
  },
  data () {
    return {
      user: {},
      backendUrl: 'http://localhost:3000',
      series: {},
      loaded: false
    }
  },
  methods: {
    getVerb() {
      if(this.series.status == "IN PROGRESS"){
        return "Continue"
      }
      else if(this.series.status == "COMPLETED"){
        return "Re Do"
      }
      else{
        return "Start"
      }
    },
    startCourse () {
      axios.post(`${this.backendUrl}/start/${this.$route.params.id}`)
        .then((response) => {
          this.loaded = true
          this.series = response.data
        }
        )
        .catch(e =>
          console.log(e)
        )
    },
    init () {
      axios.get(`${this.backendUrl}/series/${this.$route.params.id}.json`)
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
