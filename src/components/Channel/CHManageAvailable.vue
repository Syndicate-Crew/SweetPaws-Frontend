<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <ChHeader  title="Available Channels" />
      </div>
      <div class="col-md-3">
        <ChSearch/>
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
              <td>{{appointment.O_name}}</td>
              <td>{{appointment.O_email}}</td>
              <td>{{appointment.O_phone}}</td>
              <td>{{appointment.P_name}}</td>
              <td>{{appointment.P_age}}</td>
              <td>{{appointment.date}}</td>
              <td>{{appointment.time}}</td>
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
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSearch from "../../components/Channel/ChSearchBar.vue"

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
                      id: 'aaa',
                      O_name: 'aaa',
                      O_email: 'aaa',
                      O_phone: 'aaa',
                      P_name: 'aaa',
                      P_age: 'aaa',
                      date: 'aaa',
                      time: 'aaa',
                  },
                  {
                      id: 'bbb',
                      O_name: 'bbb',
                      O_email: 'bbb',
                      O_phone: 'bbb',
                      P_name: 'bbb',
                      P_age: 'bbb',
                      date: 'bbb',
                      time: 'bbb',
                  },
                  {
                      id: 'ccc',
                      O_name: 'ccc',
                      O_email: 'ccc',
                      O_phone: 'ccc',
                      P_name: 'ccc',
                      P_age: 'ccc',
                      date: 'ccc',
                      time: 'ccc',
                  },
                  {
                      id: 'ddd',
                      O_name: 'ddd',
                      O_email: 'ddd',
                      O_phone: 'ddd',
                      P_name: 'ddd',
                      P_age: 'ddd',
                      date: 'ddd',
                      time: 'ddd', 
                  },
                  {
                      id: 'eee',
                      O_name: 'eee',
                      O_email: 'eee',
                      O_phone: 'eee',
                      P_name: 'eee',
                      P_age: 'eee',
                      date: 'eee',
                      time: 'eee', 
                  },
            ]
            }
        },


}
</script>

<style>

</style>