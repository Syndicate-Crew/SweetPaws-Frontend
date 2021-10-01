<template>
    <div>
        <Header />
        <SignUp />
        <Footer />
    </div>
</template>

<script>
import SignUp from "../../components/User/SignUp.vue";
import Header from "../../components/Header/Header.Component.vue"
import Footer from "../../components/Footer/Footer.Component.vue"
export default {
    name: "SignUpView",
    components: {
        SignUp,
        Header,
        Footer
    }
}
</script>