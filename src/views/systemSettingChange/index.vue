<template>
    <div>
        <search @search="init"></search>
        <tableList></tableList>
    </div>
</template>
<script>
import search from "@/views/systemSettingChange/components/search.vue";
import tableList from "@/views/systemSettingChange/components/table.vue";
export default {
    components: {
        search,
        tableList
    },
    data() {
        return {};
    },
    methods: {
        init(val) {
            alert("参数过来了");
            console.log(val);
        }
    },
    beforeMount() {
        // this.tableData = data;
    }
};
</script>
