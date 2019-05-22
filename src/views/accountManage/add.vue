<template>
	<div>
		<h1 v-if="isAdd">添加客服信息</h1>
		<h1 v-else>编辑客服信息</h1>
		<!-- <h1 v-else-if="isAdd">查询客服信息</h1> -->
		<div style="margin-bottom: 25px;">系统客服账号信息基本管理</div>
		<hr style="margin-bottom: 25px;">
		
		<el-form ref="form" :model="accountForm" label-width="80px">
			<el-row>
				<el-col :span="8">
					<el-form-item label="账号名称:">
					    <el-input placeholder='请输入账号名称' v-model="accountForm.name"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
		    <el-row>
		        <el-col :span="8">
		            <el-form-item label="登录密码:">
		                <el-input placeholder='请输入登录密码' v-model="accountForm.pwd"></el-input>
		            </el-form-item>
		        </el-col>
		        <el-col :span="8" :offset="1">
		            <el-form-item label="确认密码:">
		                <el-input placeholder='请再次输入登录密码' v-model="accountForm.checkPwd"></el-input>
		            </el-form-item>
		        </el-col>
		    </el-row>
			
			<el-row>
			    <el-col :span="8">
			        <el-form-item label="客服姓名:">
			            <el-input placeholder='请输入姓名信息' v-model="accountForm.servName"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8" :offset="1">
			        <el-form-item label="隶属公司:">
			            <el-select
			                class="fillBox"	
			                v-model="accountForm.company"
			                placeholder="请选择隶属公司"
			            >
			                <el-option
			                    v-for="item in companys"
			                    :key="item.value"
			                    :label="item.label"
			                    :value="item.value"
			                >
			                </el-option>
			            </el-select>
			        </el-form-item>
			    </el-col>
			</el-row>
			<el-row>
				<el-col>
					<el-col :span="8">
					    <el-form-item label="联系电话	:">
					        <el-input placeholder='请输入联系电话信息' v-model="accountForm.tel"></el-input>
					    </el-form-item>
					</el-col>
					<el-col :span="8" :offset="1">
					    <el-form-item label="邮箱:">
					        <el-input placeholder='请输入邮箱信息' v-model="accountForm.email"></el-input>
					    </el-form-item>
					</el-col>
				</el-col>
			</el-row>
		</el-form>
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
	import {companys} from '@/views/accountManage/data/data.js'
	export default {
		data(){
			return{
				companys,
				isAdd:true,
				id:"",
				accountForm:{
					name:"",
					pwd:"",
					checkPwd:"",
					servName:"",
					company:"",
					tel:"",
					email:""
				}
			}
		},
		methods:{
			goList(){
				this.$router.go(-1)
			},
			add(){
				alert("新增");
				console.log(this.accountForm)
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
	.actions{
		text-align: center;
		height: 100px;
		line-height: 100px;
	}
</style>
