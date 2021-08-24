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
            <ChAppSlot :id= "id" />  
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

    data() {
    return {
        id: {},
    }
    },
    created() {
        this.id = this.$route.params.id
    },

}
</script>
    

<style>

</style>