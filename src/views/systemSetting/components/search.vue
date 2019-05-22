<template>
    <div>
        <el-form ref="form" :model="searchForm" label-width="80px">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="添加人:">
                        <el-input placeholder='请输入添加人姓名' v-model="searchForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                    <el-form-item label="角色名称:">
                        <el-input placeholder='请输入证件号码' v-model="searchForm.region"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" >
                    <el-form-item label="多选:">
                        <el-select
                            class="fillBox"
                            v-model="searchForm.type"
                            multiple
                            placeholder="请选择"
                        >
                            <el-option
                                v-for="item in options"
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
                <el-col :span="12">
                    <el-form-item label="添加日期:">
                        <el-date-picker
                            class="fillBox"
                            v-model="searchForm.date1"
                            type="daterange"
                            range-separator="~"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd HH:mm:ss"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12" >
                    <el-form-item label-width="20px">
                        <el-button type="primary" @click="onSubmit"
                            >查询</el-button
                        >
                        <el-button @click="add">添加</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import { options } from "@/views/systemSetting/data/data.js";
export default {
    data() {
        return {
            options,
            searchForm: {
                name: "",
                region: "",
                date1: [],
                type: []
            }
        };
    },
    methods: {
        onSubmit() {
            this.$emit("search", this.searchForm);
        },
		add(){
			this.$router.push({path:'/system/addSystemInfo'})
		}
    }
};
</script>
<style lang="less" scoped>
.fillBox {
    width: 100%;
}
</style>
