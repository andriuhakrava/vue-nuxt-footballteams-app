<template>
	<div>
		<div class="team-card">
			<h1>{{ team.title }}</h1>
			<div class="team-logo">
				<img :src="team.logo" width="240" height="320" alt="juventus" />
			</div>
			<div class="team-short-info">
				<p class="team-short-info-title"><span>Country: </span>{{ team.country }}</p>
				<p class="team-short-info-title"><span>League: </span>{{ team.league }}</p>
				<p class="team-short-info-title"><span>Stadium: </span>{{ team.stadium }}</p>
				<p class="team-short-info-title"><span>Head coach: </span>{{ team.headcoach }}</p>
				<p class="team-short-info-title"><span>Website: </span>
					<a :href="team.website" target="_blank">{{ team.website }}</a></p>
			</div>
			<div class="team-short-info-text">
				<p>{{ team.description }}</p>
			</div>
		</div>
		<ul class="teams-list">
			<li v-for="other in otherTeams" :key="other.id">
				<nuxt-link :to="`/teams/${other.id}`">
					<img :src="other.logo" alt="other.title" width="97" height="130">
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				id: this.$route.params.id
			}
		},
		head(){
			return {
				title: this.team.title,
				meta: []
			}
		},
		computed: {
			team(){
				return this.$store.state.teams.all.find(team => team.id === this.$route.params.id);
			},
			otherTeams(){
				return this.$store.state.teams.all.filter(team => team.id !== this.$route.params.id);
			}
		}
	}
</script>
<style scoped>
	h1 {
		text-align: center;
		font-weight: bold;
		color: orange;
	}
	.team-card {
		margin: 25px;
		padding: 25px;
		box-sizing: border-box;
		width: 60%;
		background: #fff;
		border-radius: 24px;
		border: 2px solid #cecece;
		text-align: justify;
	}
	.team-logo, .team-short-info {
		display: inline-block;
		vertical-align: top;
	}
	.team-logo {
		max-width: 240px;
		width: 100%;
	}
	.team-short-info {
		padding: 30px 10px 30px 30px;
		max-width: 500px;
		width: 100%;
	}
	.team-short-info-title {
		padding: 6px 0;
	}
	.team-short-info-title span {
		font-weight: bold;
	}
	.team-short-info-text {
		padding-top: 30px;
	}
	.teams-list {
		margin-left: 15px;
	}
	.teams-list li {
		display: inline-block;
		margin-left: 6px;
	}
</style>