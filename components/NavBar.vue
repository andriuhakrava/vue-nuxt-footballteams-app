<template>
	<div class="navbar">
		<nuxt-link :to="{name: 'index'}" title="Home">
			<img src="/images/home-icon.png" height="56" width="56" alt="home-icon"/>
		</nuxt-link>
		<span class="navbar-title">football teams</span>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
	.navbar {
		padding: 15px;
		background: rgba(102, 223, 207, 0.4);
	}
	.navbar a {
		text-decoration: none;
	}
	.navbar-title {
		vertical-align: top;
		text-transform: uppercase;
		color: #fff;
		font-weight: bold;
		font-size: 28px;
	}
</style>