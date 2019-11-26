<template>
	<el-menu
		class="el-menu-demo navbar"
		mode="horizontal"
		style="display:flex;align-items:center;padding-left:20px"
	>
		<el-breadcrumb separator-class="el-icon-arrow-right" style="flex:1">
			<el-breadcrumb-item v-for="(item,index) in bmbitem" :key="index">
				<span v-if="index==bmbitem.length-1" class="no-redirect">{{ item.meta.title }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</el-menu>
</template>
<script>
export default {
    name: 'navcon',
    computed: {
        bmbitem() {
            const route = this.$route;
            const { matched } = route;
            console.log("haha:::", matched);
            return matched;
        }
    },
    methods: {
        handleLink(item) {
            this.$router.push(item.path);
        }
    }
}
</script>

<style scoped>
	.navbar {
		height: 50px;
		overflow: hidden;
		position: relative;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
	}
</style>