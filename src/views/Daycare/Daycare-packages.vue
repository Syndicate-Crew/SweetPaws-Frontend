<template>
  <div>
    <Navbar />
    <DaycarePacks />
  </div>
</template>
<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import DaycarePacks from "../../components/Daycare/Daycare-packages.vue";
export default {
  name: "Daycare-reg",
  components: {
    Navbar,
    DaycarePacks,
  },
};
</script>
