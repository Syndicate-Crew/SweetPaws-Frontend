<template>
    <div>
        <Header />
        <UserProfile />
    </div>
</template>

<script>
import UserProfile from "../../components/User/Admin/UserManagement/UserProfile.vue";
import Header from "../../components/Header/Header.Component.vue"
export default {
    name: "SignInVIew",
    components: {
        Header,
        UserProfile
    }
}
</script>