<template>
	<div>
	<el-table
	  :data="tableData"
	  style="width: 100%">
	  <el-table-column
	      type="index"
	      label="序号"
	       >
	  </el-table-column>
	  <el-table-column
	    prop="accountName"
	    label="账号名称"
	    width="150">
	  </el-table-column>
	  <el-table-column
	    prop="pwd"
	    label="密码"
	    >
	  </el-table-column>
	  <el-table-column
	    prop="name"
	    label="姓名">
	  </el-table-column>
	  <el-table-column
	    prop="tel"
	    label="电话">
	  </el-table-column>
	  <el-table-column
	    prop="tel"
	    label="邮箱">
	  </el-table-column>
	  <el-table-column
	    prop="status"
	    label="状态">
	  </el-table-column>
	
	  <el-table-column label="操作" 
		width="150"
		fixed="right">
		<template slot-scope="scope">
		<el-button
		  size="mini"
		  type="primary" plain
		  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		<el-button
		  size="mini"
		  type="primary" plain
		  @click="handleOn(scope.$index, scope.row)">启用</el-button>
		</template>
	  </el-table-column>
	</el-table>
		<pagination 
		@handleChange="handleCurrent" 
		:currentPage="currentPage"
		:pageSize="pagesize"
		:pageSizes="pagesizes"
		:total="total">
		</pagination>
	</div>
</template>

<script>
	import pagination from '@/components/pagination/pagination.vue'
	import {tableData} from '@/views/accountManage/data/data.js'
	export default{
		components:{
			pagination
		},
		data(){
			return {
				tableData:[],
				currentPage:1,
				pagesize:10,
				total:0,
				pagesizes:[10, 20, 30]
			}
		},
		methods:{
			handleOn(index,row){

			},
			handleEdit(index,row){
				this.$router.push({name:'editSystemInfo',params:{'id':index,'name':row.sysName}})
			},
			handleCurrent(current,page){
				this.currentPage = current;
				this.pagesize = page;
				this.tableData = tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
			}
			
		},
		created(){
			this.tableData = tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize);
			this.total = tableData.length;
		}
	}
</script>

<style>
</style>
