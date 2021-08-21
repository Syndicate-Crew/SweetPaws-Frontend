<template>
  <div>
      <Navbar/>
      <ChAppointment/>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChAppointment from "../../components/Channel/ChAppointment.vue"

export default {
  name: "ChApp",
  components: {
    Navbar,
    ChAppointment,
  },
}
</script>

<style>

</style>