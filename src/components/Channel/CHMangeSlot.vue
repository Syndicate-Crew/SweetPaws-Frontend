<template>
  <div>
    <div class="row">
      <div class="col-md-9">
        <ChHeader  title="Manage Channelling Slot" />
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Room no</th>
              <th scope="col">Charge</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{{id}}</th>
              <td>{{name}}</td>
              <td>{{email}}</td>
              <td>{{phone}}</td>
              <td>{{date}}</td>
              <td>{{time}}</td>
              <td>{{room}}</td>
              <td>{{charge}}</td>
              <td>
                <div class="row">
                  <div class="col-6">
                    <button type="button" class="btn btn-sm btn-success">
                      Update
                    </button>
                  </div> 
                  <div class="col-6"> 
                    <button type="button" class="btn btn-sm btn-danger">
                      Delete
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
  name: "ChManageSlot",

  components: {
      ChHeader,
      ChSearch,
    },
  props:{
        id: String,
        name: String,
        email: String,
        phone: String,
        date: String,
        time: String,
        room: String,
        charge: String,
    }

}
</script>

<style>

</style>