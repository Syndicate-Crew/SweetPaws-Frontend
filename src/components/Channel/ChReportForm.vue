<template>
  <div>
    <div class="container">
      <div class="row">
        <ChHeader title="Channel Report Form " />
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Start Date :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                placeholder="Enter First Name"
                class="form-control"
                v-model="cpay.startdate"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>End Date :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                placeholder="Enter First Name"
                class="form-control"
                v-model="cpay.enddate"
                required
              />
            </div>
          </div>
          <!-- <div class="row">
            <label class="form-label text-start fs-5">
              <b>Charging Details</b>
            </label>
            <hr />
          </div>

          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Medicine Charges :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                placeholder="Enter Medicine Charges"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Other Charges :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                placeholder="Enter Charges"
                required
              />
            </div>
          </div> -->
          <br />
          <div class="form-group">
            <button class="btn btn-success btn-block" @click.prevent="onSubmit()">Generate Report</button>
          </div>
        </form>
            <div class="col-md-6 p-2">
              <label class="form-label text-start text-danger">
                <b>{{ total }}</b>
              </label>
            </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChReportForm",
  components: {
    ChHeader,
  },
    data() {
    return {
      cpay: {
        startdate: "",
        enddate: "",
      },
    Ccal: [],

    };
  },

  
  created() {

  },

    methods: {

    //get month  pay
    onSubmit(){    
    
      let startdate = this.cpay.startdate
      let enddate = this.cpay.enddate


      let apiURL = `http://localhost:5000/cpay/month/${startdate}&${enddate}`;
      // console.log(apiURL)
      axios.get(apiURL).then((res) => {
        this.Ccal = res.data.data;
        // console.log(this.Ccal);
      });


  },

},

  computed: {
    // total: function(){

    //   console.log(this.Ccal)

    //     let total = [];

    //     Object.entries(this.Ccal).forEach(([val]) => {
    //         total.push(val.hcharge) // the value of the current key.
    //     });

    //     return total.reduce(function(total, num){ return total + num }, 0);

         
    //   }
  },

};
</script>

<style></style>
