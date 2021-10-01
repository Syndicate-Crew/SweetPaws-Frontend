<template>
    <b-container class="container-main">
        <b-col class="links" style="width: fit-content;margin: 30px 5px;padding: 5px 20px;border: 2px solid #171859;border-radius: 8px">
            <router-link :to="{ path: '/dogdisplay' }">Dog Display</router-link>
            <router-link :to="{ path: '/catdisplay' }">Cat Display</router-link>
            <router-link :to="{ path: '/daycare-packs' }">Daycare packs</router-link>
            <router-link :to="{ path: '/daycare-receipt' }">Daycare receipt</router-link>
            <router-link :to="{ path: '/daycare-reg' }">Daycare reg</router-link>
            <router-link :to="{ path: '/daycare-update' }">Daycare-update</router-link>
            <router-link :to="{ path: '/daycare-confirm' }">Daycare-confirm</router-link>
        </b-col>
        <b-col class="col">
            <b-img center class="profile-img" :src="url" rounded="circle"  alt="Profile picture"></b-img>
            <p class="text-center w-100 fw-bold text-name" >{{name}}</p>
            <hr class="rounded">
            <Info />
        </b-col>
    </b-container>
</template>

<style scoped>
hr.rounded {
    width: 60vw;
    border-top: 4px solid #6504b518;
    border-radius: 5px;
    margin: 40px auto 40px;
}

.container-main {
  background-color: white;
  margin: 26px 142px; 
  border-radius: 33px;
  overflow: hidden;
  padding: 0px 70px;
  box-shadow: 0px 0px 20px 5px #6504b518;
}

.col {
    overflow: visible;
}

.profile-img {
    height: 350px;
    width: 350px;
    margin-top: 60px;
}

.text-name {
    margin: 26px 0px;
    font-size: 40px;
}

.container-sub {
    margin: 0px auto;
    margin-bottom: 56px;
    background: #FFFCFC;
    box-shadow: 0px 0px 20px 5px #6504B5;
    border-radius: 26px;
    width: fit-content;
    padding: 50px 150px;
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
            tabs: ["Home", "Contact"],
            selected: "Home",
            token: "",
            url: "",
            name: ""
        };
    },
    components: {
        Info
    },
    mounted() {
        this.token = localStorage.getItem("sweet-token");

        if (this.token == null ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            this.$router.push("/SignIn");
        }
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