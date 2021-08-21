<template>
  <div>
      <Navbar/>
      <ChSlotForm/>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChSlotForm from "../../components/Channel/ChNewChannel.vue"

export default {
  name: "ChNewChannelform",
  components: {
    Navbar,
    ChSlotForm,
  },
}
</script>

<style>

</style>