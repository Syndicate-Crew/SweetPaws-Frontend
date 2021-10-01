<template>
    <b-container fluid class="main-container">
        <b-col class="links" style="width: fit-content;margin: 30px 5px;padding: 5px 20px;border: 2px solid #171859;border-radius: 8px">
            <p><router-link :to="{ path: '/petdisplay' }">Pet Display</router-link></p>
            <p><router-link :to="{ path: '/dogcreate' }">Dog Create</router-link></p>
            <p><router-link :to="{ path: '/catcreate' }">Cat Create</router-link></p>
            <p><router-link :to="{ path: '/daycare-details' }">Daycare Details</router-link></p>
        </b-col>
        <b-col class="main-wrapper-col">
            <div class="page-title">User Management</div>
            <div class="tab-container">
                <b-tabs lazy>
                    <b-tab title="User list" active>
                        <div class="tab-content">
                            <UserListContainer />
                        </div>
                    </b-tab>
                    <b-tab title="Add a user">
                        <div class="tab-content">
                            <AddUser />
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </b-col>
    </b-container>
</template>

<style scoped>
.main-container {
    background-color: white;
    width: 87vw;
    margin: 41px auto;
    border-radius: 33px;
    overflow: hidden;
    padding: 0px 86px;
    overflow: hidden;
}

.page-title {
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #171859;
    margin-top: 51px;
    margin-bottom: 41px;
}

.col {
    overflow: visible;
}

.page-title {
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #171859;
}

.tab-container {
    margin-bottom: 70px;
}

.tab-content{
    padding: 40px 0px;
}

@media only screen and (max-width: 850px) {
    .page-title {
        margin: 51px auto;
        width: fit-content;
    }

    .main-container {
        padding: 0px 46px;
    }
}

@media only screen and (max-width: 550px) {
    .page-title {
        margin: 51px auto;
        width: fit-content;
        font-size: 30px;
    }

    .main-container {
        padding: 0px 10px;
    }
}
</style>

<script setup>

import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";

import UserListContainer from "./UserList/UserListContainer.vue"
import AddUser from "./AddUser.vue"

import Swal from "sweetalert2";
Vue.use(VueAxios, axios);

export default {
    name: "UserManagement",
    data: function() {
        return {
            token: "",
            users: ["User 1", "User2"]
        };
    },
    components: {
        UserListContainer,
        AddUser
    },
    mounted() {
		this.token = localStorage.getItem("sweet-token-admin");
		const config = {
			headers: {
				"swt-token-admin": this.token,
			},
		};

        if (this.token == null) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Session invalid. Please sign in",
            });  

            this.$router.push("/Admin/SignIn");
        }
		axios.post("http://localhost:5000/api/admin/auth", null, config)
		.then((result) => {
            if (result.data.msg == "Token is not valid") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Session invalid. Please sign in",
                });
                this.$router.push("/Admin/SignIn");
            } else if (result.data.result != "successful") {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Session invalid. Please sign in",
                });
                this.$router.push("/Admin/SignIn");
            }
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Session invalid. Please sign in",
                });
            this.$router.push("/Admin/SignIn");
        });
	},
}
</script>