<template>
    <div>
        <Header />
        <UserManagement />
        <Footer />
    </div>
</template>

<script>
import UserManagement from "../../components/User/Admin/UserManagement/UserManagement.vue";
import Header from "../../components/Header/Header.Component.vue"
import Footer from "../../components/Footer/Footer.Component.vue"
export default {
    name: "User",
    components: {
        UserManagement,
        Header,
        Footer
    }
}
</script>