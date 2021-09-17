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
                  <button type="button" class="btn btn-sm btn-success">
                    Approve
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-sm btn-danger">
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
    let apiURL = "http://localhost:5000/capp/";
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

};
</script>

<style></style>
