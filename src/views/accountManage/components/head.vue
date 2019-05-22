<template>
    <div>
        <el-form ref="form" :model="headForm" label-width="100px">
            <el-row>
                <el-col :span="7" >
                    <el-form-item label="账号名称:">
                        <el-input placeholder='请输入账号名称' v-model="headForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" >
                    <el-form-item label="隶属角色:">
                        <el-select
                            class="fillBox"	
                            v-model="headForm.role"
                            placeholder="请选择隶属角色"
                        >
                            <el-option
                                v-for="item in roles"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
				<el-col :span="7" >
				    <el-form-item label="使用者姓名:">
				        <el-input placeholder="请输入使用者姓名" v-model="headForm.user"></el-input>
				    </el-form-item>
				</el-col>
            </el-row>
            <el-row>
				<el-col :span="7" >
				    <el-form-item label="账号性质:">
				        <el-select
				            class="fillBox"	
				            v-model="headForm.accountAttr"
				            placeholder="请选择签约医生"
				        >
				            <el-option
				                v-for="item in accountAttrs"
				                :key="item.value"
				                :label="item.label"
				                :value="item.value"
				            >
				            </el-option>
				        </el-select>
				    </el-form-item>
				</el-col>
                <el-col :span="9" >
                    <el-form-item label="添加日期">
                        <el-date-picker
                            class="fillBox"
                            v-model="headForm.date1"
                            type="daterange"
                            range-separator="~"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd HH:mm:ss"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8" >
                    <el-form-item label-width="20px">
                        <el-button type="primary" @click="onSubmit"
                            >查询</el-button
                        >
                        <el-button @click="add">添加账号</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import { roles } from "@/views/accountManage/data/data.js";
import {accountAttrs} from '@/views/accountManage/data/data.js';
export default {
    data() {
        return {
            roles,
			accountAttrs,
            headForm: {
                name: "",
                user: "",
                date1: [],
                role: '',
				accountAttr:''
            }
        };
    },
    methods: {
        onSubmit() {
            this.$emit("search", this.headForm);
        },
		add(){
			this.$router.push({path:'/account/addAccountManage'})
		}
    }
};
</script>
<style lang="less" scoped>
.fillBox {
    width: 100%;
}
</style>
