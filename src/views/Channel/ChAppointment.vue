<template>
  <div>
      <Navbar/>
      <ChHeader title="Appointment" />
      <div>
        <div class="row">
          <div class="col-md-6 container card rounded m-4  shadow-lg border border-primary form-card">
            <ChAppointment/>
          </div>
          <div class="col-md-5 container card rounded m-4  shadow-lg border border-primary form-card">
            <ChAppSlot 
                        veterinarian="Dr Dilan"
                        day="Tuesday"
                        date="2021/08/30"
                        time="9.30 - 12.30"
                        room="no 5"
                        hospitalcharge="Rs 1000"
                        doctorcharge="Rs 2000"
                        totalcharge="Rs 3000"
            />  
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChAppointment from "../../components/Channel/ChAppointment.vue"
import ChAppSlot from "../../components/Channel/ChAppSlot.vue"

export default {
  name: "ChApp",
  components: {
    Navbar,
    ChHeader,
    ChAppointment,
    ChAppSlot,
  },

}
</script>

<style>

</style>