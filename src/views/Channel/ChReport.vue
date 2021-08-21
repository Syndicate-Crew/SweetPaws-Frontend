<template>
  <div>
      <Navbar/>
      <ChHeader title="Channel Report"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-5 container center card rounded shadow-lg border border-primary form-card">
           <ChReportForm />
          </div>
          <div class="col-md-4 container center card rounded shadow-lg border border-primary form-card">
           <ChReportDetails
                totalincome="Rs 500000"
                veterinariancharge="Rs 350000"
                hospitalcharges="Rs 150000"
                medicinecharges="Rs 50000"
                othercharges="Rs 5000"
                balance="Rs 95000"
           />
          </div>
        </div>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSideBar from "../../components/Channel/ChSideBar.vue"
import ChReportForm from "../../components/Channel/ChReportForm.vue"
import ChReportDetails from "../../components/Channel/ChReportDetails.vue"

export default {

    name: "ChReport",

    components: {
        Navbar,
        ChHeader,
        ChSideBar,
        ChReportForm,
        ChReportDetails,
    },

}
</script>

<style>

</style>