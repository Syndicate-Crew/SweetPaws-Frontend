<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <ChHeader title="All Channel Request" />
      </div>
      <div class="col-md-3">
        <ChSearch />
      </div>
    </div>
    <div class="row">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">O Name</th>
            <th scope="col">O Email</th>
            <th scope="col">O Phone</th>
            <th scope="col">Pet Name</th>
            <th scope="col">Pet Type</th>
            <th scope="col">Pet Age</th>
            <!-- <th scope="col">Date</th>
            <th scope="col">Time</th> -->
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in Appointments" :key="appointment._id">
            <!-- <th scope="row">{{id}}</th> -->
            <td>{{ appointment.firstname }} {{ appointment.lastname }}</td>
            <td>{{ appointment.email }}</td>
            <td>{{ appointment.phone }}</td>
            <td>{{ appointment.pname }}</td>
            <td>{{ appointment.ptype }}</td>
            <td>{{ appointment.page }}</td>
            <!-- <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td> -->
            <td>
              <div class="row">
                <div class="col-6">
                  <button type="button" class="btn btn-sm btn-success" @click.prevent="onApprove(appointment._id)">
                    Approve
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-sm btn-danger" @click.prevent="onDecline(appointment._id)">
                    Decline
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChSearch from "../../components/Channel/ChSearchBar.vue";

export default {
  name: "ChManageReq",

  components: {
    ChHeader,
    ChSearch,
  },

  data() {
    return {
      Appointments: [],
    };
  },
  created() {
    let apiURL = "http://localhost:5000/capp/pending/";
    axios
    .get(apiURL)
      .then((res) => {
        this.Appointments = res.data.data;
        // console.log(Appointments);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {

    onApprove(id){

      let apiURL = `http://localhost:5000/capp/update/${id}`

      let indexOfArrayItem = this.Appointments.findIndex((i) => i._id === id);

          this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Appointment Approved',
                    showConfirmButton: false,
                    timer: 1500
                  })

      const data ={
          action:"Approved",      
      }

      axios.put(apiURL ,data)
      .then(() =>{

              this.Appointments.splice(indexOfArrayItem, 1);
      })
      .catch((error) => {

          console.log(error);

        });
  },

      onDecline(id){

      let apiURL = `http://localhost:5000/capp/update/${id}`

      let indexOfArrayItem = this.Appointments.findIndex((i) => i._id === id);

          this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Appointment Decline',
                    showConfirmButton: false,
                    timer: 1500
                  })

      const data ={
          action:"Declined",      
      }

      axios.put(apiURL ,data)
      .then(() =>{

              this.Appointments.splice(indexOfArrayItem, 1);
      })
      .catch((error) => {

          console.log(error);

        });
  }

},

}
</script>

<style></style>
