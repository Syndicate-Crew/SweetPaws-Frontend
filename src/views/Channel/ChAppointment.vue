<template>
  <div>
      <Navbar/>
      <ChHeader title="Appointment" />
      <ChAppointment/>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChAppointment from "../../components/Channel/ChAppointment.vue"

export default {
  name: "ChApp",
  components: {
    Navbar,
    ChHeader,
    ChAppointment,
  },
}
</script>

<style>

</style>