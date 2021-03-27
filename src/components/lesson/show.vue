<template>
  <div v-if='loaded'>
    <h4>Lesson {{lesson.sort_key}}: {{lesson.title}}</h4>
    <h5>Series  Started at {{lesson.start_time}}</h5>
    <h5>Series  Status: {{lesson.status}}</h5>
    <img :src='lesson.image'/>
    <p>
      {{lesson.content}}
    </p>
    <a @click='openVideo'>Watch this Video</a>
    <span v-if='lesson.next_lesson' @click='reload()'><router-link :to="{path: '/series/' + lesson.series_id + '/lessons/'+ lesson.next_lesson}"><h3> Next Lesson</h3></router-link></span>
    <a @click="endSeries" v-else ><h3><u>YA DONE!</u></h3></a>
    <router-link :to="{path: '/series/' + this.$route.params.seriesId}"><h3> Back to series</h3></router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'lessonShow',
  components: {
  },
  data () {
    return {
      user: {},
      backendUrl: 'http://localhost:3000',
      lesson: {},
      loaded: false
    }
  },
  methods: {
    endSeries () {
      axios.post(`${this.backendUrl}/end/${this.$route.params.seriesId}`)
        .then((response) => {
          window.location = '/series/' + this.$route.params.seriesId
          }
        )
        .catch(e =>
          console.log(e)
        )
    },
    endLesson () {
      axios.post(`${this.backendUrl}/series/${this.$route.params.seriesId}/lessons/${this.$route.params.id}/end`)
        .then((response) => {
          console.log(response.data, 's')
        }
        )
        .catch(e =>
          console.log(e)
        )
    },
    openVideo () {
      window.open(this.lesson.video, '_blank')
    },
    reload () {
      this.endLesson()
      window.location.reload()
    },
    init () {
      axios.get(`${this.backendUrl}/series/${this.$route.params.seriesId}/lessons/${this.$route.params.id}.json`)
        .then((response) => {
          console.log(response.data)
          this.loaded = true
          this.lesson = response.data
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
img{
  width:5rem;
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
