<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>이름</th>
                    <th>구분</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(user,i) in userList">
                    <td>{{user.userId}}</td>
                    <td>{{user.userName}}</td>
                    <td>{{user.userNameSeparator}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    // name: '',
    // components: {},
    data() {
        return {
            userList: []
        };
    },
    setup() {},
    created() {
        this.getList();
    },
    mounted() {},
    unmounted() {},
    methods: {
        async getList() {
            this.userList = await axios.get("/v1/users/");
        }
    }
}
</script>
<style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>