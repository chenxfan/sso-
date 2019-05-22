<template>
    <div>
		<headForm @search='init'></headForm>
		<tableList></tableList>
	</div>
</template>
<script>
	import headForm from '@/views/accountManage/components/head.vue'
	import tableList from '@/views/accountManage/components/table.vue'
	export default {
		components:{
			headForm,
			tableList
		},
		methods:{
			init(val){
				console.log(val)
			}
		}
	}
</script>
