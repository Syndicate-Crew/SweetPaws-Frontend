<template>
  <div>
    <HeaderComponent/>
    <DaycarePacks />
  </div>
</template>
<script>
import DaycarePacks from "../../components/Daycare/Daycare-packages.vue";
import HeaderComponent from '../../components/Header/Header.Component.vue';
export default {
  name: "Daycare-reg",
  components: {
    DaycarePacks,
    HeaderComponent,
  },
};
</script>
