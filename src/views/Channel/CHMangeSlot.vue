<template>
  <div>
      <Navbar/>
      <ChManageSlot/>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChManageSlot from "../../components/Channel/CHMangeSlot.vue"

export default {
  name: "ChSlotManage",
  components: {
    Navbar,
    ChManageSlot,
  },
}
</script>

<style>

</style>