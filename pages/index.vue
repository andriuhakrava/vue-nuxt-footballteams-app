<template>
  <section class="container">
    <div>
      <div class="links">
        <nuxt-link v-for="team in teams" 
                  :to="{name: 'teams-id', params: {id: team.id}}"
                  :key="team.id">
          <img :src="team.logo" alt="team.title" width="97" height="130" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex';
export default {
  head(){
    return {
      title: 'Home Page'
    }
  },
  computed: {
    ...mapState({
      teams: state => state.teams.all, 
    })
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
}

.links {
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 95px;
}

.links a {
  width: 97px;
  margin-right: 35px;
  margin-bottom: 25px;
}
</style>
