<template>
    <div>
        <el-form ref="form" :model="searchForm" label-width="80px">
            <el-row>
                <el-col :span="6">
                    <el-form-item label="添加人">
                        <el-input v-model="searchForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6" :offset="2">
                    <el-form-item label="角色名称">
                        <el-input v-model="searchForm.region"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6" :offset="2">
                    <el-form-item label="多选">
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
                <el-col :span="6">
                    <el-form-item label="添加日期">
                        <el-date-picker
                            class="fillBox"
                            v-model="searchForm.date1"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd HH:mm:ss"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="6" :offset="2">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit"
                            >查询</el-button
                        >
                        <el-button @click="handleAdd">添加</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import { options } from "@/views/systemSettingChange/data/data.js";
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
        handleAdd() {
            alert("当前提交操作");
        }
    }
};
</script>
<style lang="less" scoped>
.fillBox {
    width: 100%;
}
</style>
