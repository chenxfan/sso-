<template>
	<div>
		<search @search="init"></search>
		<tableList></tableList>
	</div>
</template>
<script>
import search from "@/views/systemSetting/components/search.vue";
import tableList from '@/views/systemSetting/components/table.vue';
export default {
	data(){
		return {
			
		}
	},
	components:{
		search,
		tableList,
	},
	methods:{
		init(val){
			console.log(val)
		}
	}
}
</script>
