<template>
    <div>
        <h2 class="w-100 header">User Management</h2>
        <b-container class="container-main">
            <b-col class="col">
                <b-img center class="profile-img" :src="url" rounded="circle"  alt="Profile picture"></b-img>
                <p class="text-center w-100 fw-bold text-name" >{{name}}</p>
                <Info :id="id" :name="name" :email="email" :phone="phone" :url="url" />
            </b-col>
        </b-container>
    </div>
</template>

<style scoped>
.container-main {
  background-color: white;
  margin: 26px 142px; 
  border-radius: 33px;
  overflow: hidden;
  padding: 0px 70px;
}

.header{
    padding: 20px 0px;
    font-weight: 700;
    font-size: 40px;
    background: #6504B5;
    color: white;
}

.col {
    overflow: visible;
}

.profile-img {
    height: 400px;
    width: 400px;
    margin-top: 60px;
}

.text-name {
    margin: 26px 0px;
    font-size: 40px;


}

.tab-button-wrapper {
    overflow: hidden;
}

.profile-section-selector {
    background: #FFFFFF;
    border: 1px solid #6880FF;
    box-sizing: border-box;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    transition: 300ms;
    padding: 3px 20px;
    margin-bottom: 50px;
}

.active {
    background: #6880FF;
    background: #6880FF;
    color: #FFFFFF;
}
</style>

<script setup>
import Info from "./Info.vue"

import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";
import Swal from "sweetalert2";
Vue.use(VueAxios, axios);

export default {
    name: "UserProfile",
    data: function() {
        return {
            id: this.$route.params.id,
            tabs: ["Home", "Contact"],
            selected: "Home",
            token: "",
            url: "",
            name: "",
            email: "",
            phone: ""
        };
    },
    components: {
       Info
    },
    mounted() {
        this.token = localStorage.getItem("sweet-token-admin");
        const config = {
            headers: {
                "swt-token-admin": this.token
            }
        }
        axios
			.post("http://localhost:5000/api/admin/auth", null, config)
			.then((result) => {
				if (result.data.msg == "Token is not valid") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Session invalid. Please sign in",
                    });
                    this.$router.push('/Admin/SignIn');

                } else if (result.data.result != "successful") {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "User Authentication failed. Please sign in",
                    });

                } else if (result.data.result == "successful") {
                    axios.get(`http://localhost:5000/api/user/${this.id}`)
                    .then(result => {
                        this.name = result.data.result.name;
                        this.url = `http://localhost:5000/api/public/profile_pictures/${result.data.result.image}`;
                        this.email = result.data.result.email;
                        this.phone = result.data.result.phone;
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "An error occured",
                        });
                    })
                }
			})
			.catch((err) => {
				console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occured",
                });
			});
    }
}
</script>