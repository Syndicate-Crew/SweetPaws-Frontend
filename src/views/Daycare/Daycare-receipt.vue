<template>
  <div>
    <Navbar />
    <DaycareReceipt />
  </div>
</template>
<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import DaycareReceipt from "../../components/Daycare/Daycare-receipt.vue";
export default {
  name: "Daycare-receipt",
  components: {
    Navbar,
    DaycareReceipt,
  },
};
</script>
