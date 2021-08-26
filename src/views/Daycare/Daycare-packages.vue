<template>
  <div>
    <Header/>
    <DaycarePacks />
  </div>
</template>
<script>
import DaycarePacks from "../../components/Daycare/Daycare-packages.vue";
import Header from '../../components/Header/Header.Component.vue';
export default {
  name: "Daycare-reg",
  components: {
    DaycarePacks,
    Header,
  },
};
</script>
