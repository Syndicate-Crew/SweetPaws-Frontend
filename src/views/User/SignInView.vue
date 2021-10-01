<template>
    <div>
        <Header />
        <SignIn />
        <Footer />
    </div>
</template>

<script>
import SignIn from "../../components/User/SignIn.vue";
import Header from "../../components/Header/Header.Component.vue"
import Footer from "../../components/Footer/Footer.Component.vue"
export default {
    name: "SignInVIew",
    components: {
        SignIn,
        Header,
        Footer
    }
}
</script>