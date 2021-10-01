<template>
    <div>
        <Header />
        <UserProfile />
        <Footer />
    </div>
</template>

<script>
import UserProfile from "../../components/User/Admin/UserManagement/UserProfile.vue";
import Header from "../../components/Header/Header.Component.vue"
import Footer from "../../components/Footer/Footer.Component.vue"
export default {
    name: "SignInVIew",
    components: {
        Header,
        UserProfile,
        Footer
    }
}
</script>