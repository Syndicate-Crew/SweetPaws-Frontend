<template>
  <div>
      <Navbar/>
      <ChHeader title="Manage Channelling"/>
      <ChManageSlot/>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChManageSlot from "../../components/Channel/CHMangeSlot.vue"

export default {
  name: "ChSlotManage",
  components: {
    Navbar,
    ChHeader,
    ChManageSlot,
  },
}
</script>

<style>

</style>