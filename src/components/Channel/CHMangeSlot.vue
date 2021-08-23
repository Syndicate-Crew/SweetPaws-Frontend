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
              <!-- <th scope="col">#</th> -->
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
            <tr v-for="slot in Slots" :key="slot._id">
              <!-- <th scope="row">{{id}}</th> -->
              <td>{{slot.name}}</td>
              <td>{{slot.email}}</td>
              <td>{{slot.phone}}</td>
              <td>{{slot.date}}</td>
              <td>{{slot.time}}</td>
              <td>{{slot.room}}</td>
              <td>{{slot.charge}}</td>
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

      data() {
        return {
                Slots: [
                  {
                      id: 'aaa',
                      name: 'aaa',
                      email: 'aaa',
                      phone: 'aaa',
                      date: 'aaa',
                      time: 'aaa',
                      room: 'aaa',
                      charge: 'aaa',
                  },
                  {
                      id: 'bbb',
                      name: 'bbb',
                      email: 'bbb',
                      phone: 'bbb',
                      date: 'bbb',
                      time: 'bbb',
                      room: 'bbb',
                      charge: 'bbb',
                  },
                  {
                      id: 'ccc',
                      name: 'ccc',
                      email: 'ccc',
                      phone: 'ccc',
                      date: 'ccc',
                      time: 'ccc',
                      room: 'ccc',
                      charge: 'ccc',
                  },
                  {
                      id: 'ddd',
                      name: 'ddd',
                      email: 'ddd',
                      phone: 'ddd',
                      date: 'ddd',
                      time: 'ddd',
                      room: 'ddd',
                      charge: 'ddd', 
                  },
                  {
                      id: 'eee',
                      name: 'eee',
                      email: 'eee',
                      phone: 'eee',
                      date: 'eee',
                      time: 'eee',
                      room: 'eee',
                      charge: 'eee', 
                  },
            ]
            }
        },


}
</script>

<style>

</style>