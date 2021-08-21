<template>
  <div>
      <Navbar/>
      <ChHeader title="New Channel Slot"/>
      <ChSlotForm/>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSlotForm from "../../components/Channel/ChNewChannel.vue"

export default {
  name: "ChNewChannelform",
  components: {
    Navbar,
    ChHeader,
    ChSlotForm,
  },
}
</script>

<style>

</style>