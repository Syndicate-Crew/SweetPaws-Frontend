<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <ChHeader  title="All Channel Request" />
      </div>
      <div class="col-md-3">
        <ChSearch/>
      </div>
    </div>
    <div class="row">
      <table class="table table-success table-striped">
        <thead>
            <tr>
              <th scope="col">#</th>
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
            <tr>
              <th scope="row">{{id}}</th>
              <td>{{O_name}}</td>
              <td>{{O_email}}</td>
              <td>{{O_phone}}</td>
              <td>{{P_name}}</td>
              <td>{{P_age}}</td>
              <td>{{date}}</td>
              <td>{{time}}</td>
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
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSearch from "../../components/Channel/ChSearchBar.vue"

export default {
  name: "ChManageReq",

  components: {
      ChHeader,
      ChSearch,
    },
  props:{
        id: String,
        O_name: String,
        O_email: String,
        O_phone: String,
        P_name: String,
        P_age: String,
        date: String,
        time: String,
    }

}
</script>

<style>

</style>