<template>
  <div>
    <Header/>
    <Daycare />
  </div>
</template>
<script>
import Daycare from "../../components/Daycare/Daycare-registration.vue";
import Header from "../../components/Header/Header.Component.vue"
export default {
  name: "Daycare-reg",
  components: {
    Daycare,
    Header
  },
};
</script>
