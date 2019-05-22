<template>
	<div class="pages">
		<el-pagination
		  @size-change="handleSizeChange"
		  @current-change="handleCurrentChange"
		  :current-page="currentPage"
		  :page-sizes="pageSizes"
		  :page-size="pageSize"
		  layout="prev, pager, next, sizes,jumper"
		  :total="total">
		</el-pagination>
	</div>
</template>

<script>
	export default{
		props:{
			currentPage:Number,
			total:Number,
			pageSize:Number,
			pageSizes:Array
		},
		data() {
		  return {
		
		  }
		},
		methods: {
		    handleSizeChange(size) {
				this.$emit('handleChange', this.currentPage ,size);
			},
			handleCurrentChange(currentPage){
				this.$emit('handleChange',currentPage,this.pageSize);
			}
		}
	}
	
</script>

<style>
	.pages{
		float: right;
		margin-right: 20px;
		margin-top: 15px;
	}
</style>
