<template>
    <b-container class="container-main">
        <b-col class="col">
            <b-img center class="profile-img" :src="url" rounded="circle"  alt="Profile picture"></b-img>
            <p class="text-center w-100 fw-bold text-name" >{{name}}</p>
            <b-tabs>
                <b-tab title="Add a user">
                    <AddUser></AddUser>
                </b-tab>
                <b-tab title="User List">
                    <h2>User List</h2>
                    <div>
                        <UserListContainer />
                    </div>
                    </b-tab>
            </b-tabs>
        </b-col>
    </b-container>
</template>

<style scoped>
.container-main {
  background-color: white;
  margin: 26px 142px; 
  border-radius: 33px;
  overflow: hidden;
  padding: 0px 70px;
}

.col {
    overflow: visible;
}

.profile-img {
    height: 276px;
    width: 276px;
    margin-top: 60px;
}

.text-name {
    margin: 26px 0px;
    font-size: 40px;
    /*font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em; */

}

.container-sub {
    margin: 0px auto;
    margin-bottom: 56px;
    background: #FFFCFC;
    box-shadow: 0px 0px 20px 5px rgba(105, 105, 105, 0.15);
    border-radius: 26px;
    width: fit-content;
    padding: 50px 150px;
}

.tab-button-wrapper {
    overflow: hidden;
}
</style>

<script setup>

import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";

import UserListContainer from "./UserList/UserListContainer.vue"
Vue.use(VueAxios, axios);

export default {
    name: "UserManagement",
    data: function() {
        return {
            tabs: ["User list", "Add a user"],
            selected: "Home",
            token: "",
            users: ["User 1", "User2"]
        };
    },
    components: {
        UserListContainer
    },
    mounted() {
        this.token = localStorage.getItem("sweet-token");
        const config = {
            headers: {
                "swt-token": this.token
            }
        }
        axios.post("http://localhost:5000/api/user/auth",null,config)
        .then(result=> {
            this.name = result.data.name
            this.url = `http://localhost:5000/api/public/profile_pictures/${result.data.image}`

        })
        .catch(err => {
            alert(err)
        })
    }
}
</script>