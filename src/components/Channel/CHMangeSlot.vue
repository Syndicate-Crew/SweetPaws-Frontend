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
              <!-- <th scope="col">Charge</th> -->
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slot in Slots" :key="slot._id">
              <!-- <th scope="row">{{id}}</th> -->
              <td>{{slot.firstname}} {{slot.lastname}}</td>
              <td>{{slot.email}}</td>
              <td>{{slot.phone}}</td>
              <td>{{slot.date}}</td>
              <td>{{slot.time}}</td>
              <td>{{slot.roomno}}</td>
              <!-- <td>{{total}}</td> -->
              <td>
                <div class="row">
                  <div class="col-6">
                    <button type="button" class="btn btn-sm btn-success">
                      Update
                    </button>
                  </div> 
                  <div class="col-6"> 
                    <button @click.prevent="deleteSlot(slot._id)" type="button" class="btn btn-sm btn-danger">
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

import axios from "axios";
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
                Slots: []
            }
        },
        created() {
            let apiURL = 'http://localhost:8050/cslot/';
            axios.get(apiURL).then(res => {
                this.Slots = res.data.data;
            }).catch(error => {
                console.log(error)
            });
        },
        // computed:{
        //   total: function(){
        //     return parseInt(this.Slots.hcharge) + parseInt(this.Slots.vcharge);
        //   }
        // }
        methods: {
            deleteSlot(id){
                let apiURL =  `http://localhost:8050/cslot/delete/${id}`;

                let indexOfArrayItem = this.Slots.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete ?")) {
                    axios.delete(apiURL).then(() => {
                        this.Slots.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
}
</script>

<style>

</style>