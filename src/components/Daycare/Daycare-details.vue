<template>
  <div class="home">
    <div class="container p-2 flex-shrink-1">
      <div class="row">
        <div
          class="d-flex justify-content-center my-5 p-1 shadow-lg table-card border border-secondary"
        >
          <table class="table table-hover">
            <thead class="table-head">
              <tr>
                <th scope="col" class="p-4"><b>Owner</b></th>
                <th scope="col" class="p-4"><b>Pet Name</b></th>
                <th scope="col" class="p-4"><b>Email</b></th>
                <th scope="col" class="p-4"><b>Days</b></th>
                <th scope="col" class="p-4">
                  <b>Package</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in list" v-bind:key="detail.id">
                <td class="col p-3">
                  <b>{{ detail.owner }}</b>
                </td>
                <td class="col p-3">
                  <b>{{ detail.pet }}</b>
                </td>
                <td class="col p-3">
                  <b>{{ detail.email }}</b>
                </td>
                <td class="col p-3">
                  <b>{{ detail.days }} </b>
                </td>
                <td class="col p-3">
                  {{ detail.package }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "daycare-details",
  data() {
    return {
      //   details: undefined,
      list: undefined,
    };
  },
  async mounted() {
    const result = await axios.get("http://localhost:5000/api/daycare/");
    this.details = result.data.data;
    console.log(result.data.data);
  },
};
</script>
<style>
.table-card {
  background-color: white !important;
  border-radius: 10px;
}
.table-head {
  background-color: rgb(218, 218, 218);
  color: rgb(0, 4, 255);
}
</style>
