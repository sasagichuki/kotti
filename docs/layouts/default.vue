<template>
	<KtContainer :hasActionBar="showActionbar">
		<Navbar slot="navbar" />
		<Actionbar slot="actionbar" />
		<div slot="workspace"><nuxt class="content" /></div>
	</KtContainer>
</template>

<script>
import KtContainer from '../../packages/kotti-container'
import Actionbar from '~/components/Actionbar.vue'
import Navbar from '~/components/Navbar.vue'

export default {
	name: 'DefaultLayout',
	components: {
		Actionbar,
		Navbar,
		KtContainer,
	},
	// provide() {
	// 	return {
	// 		KtTheme: {
	// 			brandColor: '#3d3d3d',
	// 			dangerColor: 'red',
	// 			brandColorDark: '#222',
	// 		},
	// 	}
	// },
	computed: {
		showActionbar() {
			const exclusivePage = ['index', 'changelog', 'designkit']
			return !exclusivePage.includes(this.$route.name)
		},
	},
}
</script>

<style>
.content {
	margin: 0 auto;
	width: 100%;
	max-width: 40rem;
}
.content img {
	max-width: 100%;
}
</style>
