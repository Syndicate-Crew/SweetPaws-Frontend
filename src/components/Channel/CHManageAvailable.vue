<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <ChHeader title="Available Channels" />
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
            <th scope="col">Pet Age</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in Appointments" :key="appointment._id">
            <!-- <th scope="row">{{id}}</th> -->
            <td>{{ appointment.O_name }}</td>
            <td>{{ appointment.O_email }}</td>
            <td>{{ appointment.O_phone }}</td>
            <td>{{ appointment.P_name }}</td>
            <td>{{ appointment.P_age }}</td>
            <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td>
            <td>
              <div class="row">
                <div class="col-6">
                  <button type="button" class="btn btn-sm btn-danger">
                    Remove
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
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChSearch from "../../components/Channel/ChSearchBar.vue";

export default {
  name: "ChManageAva",

  components: {
    ChHeader,
    ChSearch,
  },
  data() {
    return {
      Appointments: [
        {
          O_name: "Gihan",
          O_email: "Gihan@gmail.com",
          O_phone: "0774041254",
          P_name: "Max",
          P_age: "2",
          date: "2021-08-27",
          time: "8.30-10.30",
        },
        {
          O_name: "Vishmika",
          O_email: "Vishmika@gmail.com",
          O_phone: "077854126",
          P_name: "Hero",
          P_age: "5",
          date: "2021-08-29",
          time: "10.30 - 12.30",
        },
        {
          O_name: "Hasitha",
          O_email: "Hasitha@gmail.com",
          O_phone: "0778451265",
          P_name: "Lucky",
          P_age: "4",
          date: "2021-09-01",
          time: "9.30 - 11.30",
        },
        {
          O_name: "Chanaka",
          O_email: "Chanaka@gmail.com",
          O_phone: "0714548562",
          P_name: "Warrier",
          P_age: "1",
          date: "2021-08-31",
          time: "8.30 - 5.30",
        },
        {
          O_name: "Sachitha",
          O_email: "Sachitha@gmail.com",
          O_phone: "0775412458",
          P_name: "Ronny",
          P_age: "7",
          date: "2021-09-08",
          time: "1.30 - 3.30",
        },
      ],
    };
  },
};
</script>

<style></style>
