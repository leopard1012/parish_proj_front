<template>
    <v-data-table
     :headers="headers"
     :items="items"
     class="elevation-1"
     sort-by="userName"
    >
        <!-- <template v-slot:item.isOnline="{ item }">
            <v-simple-checkbox
             v-model="item.isOnline"
             editable
            ></v-simple-checkbox>
        </template> -->
    </v-data-table>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            items: [],
            headers: [],
        };
    },
    created() {
        this.search(1,2022,9);
    },
    methods: {
        async search(pastoralCode, year, month) {
            this.list = await axios({
                method: "get",
                url: "/v1/attendance/pastoral/" + pastoralCode + "/year/" + year + "/month/" + month,
                headers: { "Content-Type": "application/json" }
            })
            .then(result => {
                let cols = result.data.cols;
                let users = result.data.pastoralUserList;
                let onMap = result.data.onLineMap;
                let offMap = result.data.offLineMap;
                let i = 0
                let j = 0;
                let k = 0;
                for(i = 0 ; i < users.length ; i++) {
                    let userData = {};
                    userData.name = users[i];
                    for(j = 0 ; j < cols.length ; j++) {
                        let type = '';
                        if (onMap[users[i]].includes(cols[j])) {
                            type = '온라인';
                        } else if (offMap[users[i]].includes(cols[j])) {
                            type = '현장';
                        }
                        userData[cols[j]] = type;
                    }
                    this.items.push(userData);
                }
                this.headers = [{ text:'이름', value:'name', align:'center', sortalbe:true }];
                for(k = 0 ; k < cols.length ; k++) {
                    let colData = { text:cols[k], value:cols[k], align:'center', sortable:false };
                    this.headers.push(colData);
                }
            })
            .catch(error => {
                console.log(error.response.data);
            })
        }
    }
}
</script>

<style>

</style>