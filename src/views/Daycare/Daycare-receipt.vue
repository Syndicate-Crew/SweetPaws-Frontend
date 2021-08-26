<template>
  <div>
    <Header/>
    <DaycareReceipt />
  </div>
</template>
<script>
import DaycareReceipt from "../../components/Daycare/Daycare-receipt.vue";
import Header from "../../components/Header/Header.Component.vue"
export default {
  name: "Daycare-receipt",
  components: {
    DaycareReceipt,
    Header
  },
};
</script>
