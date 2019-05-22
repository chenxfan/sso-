<template>
	<div>
		<div v-if="isAdd">
			<h1>添加系统信息</h1>
			<div style="margin-bottom: 15px;">添加系统信息基本管理</div>
			<hr >
		</div>
		<div v-else>
			<h1>编辑系统信息</h1>
			<div style="margin-bottom: 15px;">编辑系统信息基本管理</div>
			<hr >
		</div>
		<el-row style="margin-top: 30px;">
			<el-col :span="3"> 
				<div class="name">系统名称：</div>
			</el-col>
			<el-col :span="6">
				  <el-input v-model="sysName"></el-input>
			</el-col>
		</el-row>
		<el-row>
			<div class="actions">
				
				<el-button @click="add" type="primary" v-if="isAdd">保存</el-button>
				<el-button @click="edit(id)" type="primary" v-else>保存</el-button>
				<el-button @click.native="goList">返回列表</el-button>
			</div>
		</el-row>
	</div>

</template>

<script>
	export default{
		data(){
			return {
				sysName:"",
				isAdd:true,
				id:''
			}
		},
		beforeMount(){
			this.sysName = this.$route.params.name;
			let id= this.$route.params.id;
			if (id!=null){
				this.isAdd = false;
				this.id=id
			}
		},
		methods:{
			goList(){
				this.$router.go(-1)
			},
			add(){
				alert("新增");
				this.$router.go(-1);
			},
			edit(id){
				alert("编辑"+id);
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.name{
		text-align: center;
		line-height: 40px;
	}
	.actions{
		text-align: center;
		height: 300px;
		line-height: 300px;
	}
</style>
