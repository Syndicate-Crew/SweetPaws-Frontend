<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="heading text-start mt-5 p-5 pb-0">
          Daycare Registration Management
        </h2>
      </div>
      <div class="col-5 mt-5 p-5 pb-0 d-flex">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Search By Owner Name"
          v-model="search"
        />
        <button type="button" class="btn search-btn">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
    <div class="container p-2 flex-shrink-1">
      <div class="row">
        <div
          class="
            d-flex
            justify-content-center
            my-5
            p-1
            shadow-lg
            table-card
            border border-secondary
          "
        >
          <table class="table table-hover">
            <thead class="table-primary">
              <tr>
                <th scope="col" class="p-4">
                  <h5><b>Owner</b></h5>
                </th>
                <th scope="col" class="p-4">
                  <h5><b>Pet Name</b></h5>
                </th>
                <th scope="col" class="p-4">
                  <h5><b>Email</b></h5>
                </th>
                <th scope="col" class="p-4">
                  <h5><b>Days</b></h5>
                </th>
                <th scope="col" class="p-4">
                  <h5><b>Package</b></h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in filteredDetails" v-bind:key="detail.id">
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
      list: [],
      search: "",
    };
  },
  methods: {
    getDaycare() {
      Vue.axios.get("http://localhost:5000/api/daycare/").then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
    },
  },
  mounted() {
    this.getDaycare();
  },
  computed: {
    filteredDetails: function() {
      return this.list.filter((detail) => {
        return detail.owner.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>
<style>
.container-fluid {
  width: 90%;
  top: 155px;
  background: #ffffff;
  border-radius: 33px 33px 33px 33px;
}
.heading {
  font-family: Poppins;
  font-weight: bolder;
  font-size: 35px;
  color: #171859;
}
</style>
