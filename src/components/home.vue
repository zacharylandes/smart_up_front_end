<template>
  <div class="hello">
    <router-link to="/series">Check out our SMART UP series</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>
