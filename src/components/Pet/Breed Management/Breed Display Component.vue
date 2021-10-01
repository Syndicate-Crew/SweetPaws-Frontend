<template>
  <div>
    <div class="container-fluid">
      <h2 class="heading text-start mt-5 p-5 pb-0">Breed Management</h2>
      <div class="p-5">
        <b-tabs content-class="mt-3">
          <!-- Dog List Tab -->
          <b-tab title="Dog Breeds" active>
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col text-end">
                    <p class="col fw-bold pt-1">Sort By :</p>
                  </div>
                  <div class="col">
                    <select class="form-select">
                      <option value="">Name (A-Z)</option>
                      <option value="">Name (Z-A)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-5"></div>
              <div class="col">
                <div class="row text-start">
                  <div class="col p-0">
                    <input
                      class="form-control search-input"
                      placeholder="Search"
                      type="text"
                      v-model="name"
                    />
                  </div>
                  <div class="col p-0">
                    <button type="button" class="btn search-btn">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-display pb-5 pt-2">
              <!-- Detail Row -->
              <div class="container">
                <div
                  class="row border rounded-pill mb-2"
                  v-for="dogBreed in filteredDogBreed"
                  v-bind:key="dogBreed.id"
                >
                  <div class="col-md">
                    <img src="" alt="" />
                  </div>
                  <div class="col-md-7 text-start">
                    <p class="mb-0 fw-bold">{{ dogBreed.name }}</p>
                    <small>{{ dogBreed.breed }}</small>
                  </div>
                  <div class="col edit-btn">
                    <router-link
                      :to="{
                        name: 'dogbreedupdate',
                        params: { id: dogBreed._id },
                      }"
                    >
                      <i class="bi bi-pencil-square pointer"></i>
                    </router-link>
                  </div>
                  <div class="col delete-btn">
                    <i
                      v-on:click="deleteDogBreed(dogBreed._id)"
                      class="bi bi-trash-fill pointer"
                    ></i>
                  </div>
                </div>
              </div>
              <!-- Detail Row End-->
            </div>
          </b-tab>
          <!-- Cat List Tab -->
          <b-tab title="Cat Breeds">
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col text-end">
                    <p class="col fw-bold pt-1">Sort By :</p>
                  </div>
                  <div class="col">
                    <select class="form-select">
                      <option value="">Name (A-Z)</option>
                      <option value="">Name (Z-A)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-5"></div>
              <div class="col">
                <div class="row text-start">
                  <div class="col p-0">
                    <input
                      class="form-control search-input"
                      placeholder="Search"
                      type="text"
                      v-model="name"
                    />
                  </div>
                  <div class="col p-0">
                    <button type="button" class="btn search-btn">
                      <i class="bi bi-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-display pb-5 pt-2">
              <!-- Detail Row -->
              <div class="container">
                <div
                  class="row border rounded-pill mb-2"
                  v-for="catBreed in filteredCatBreed"
                  v-bind:key="catBreed.id"
                >
                  <div class="col-md">
                    <img src="" alt="" />
                  </div>
                  <div class="col-md-7 text-start">
                    <p class="mb-0 fw-bold">{{ catBreed.name }}</p>
                    <small>{{ catBreed.breed }}</small>
                  </div>
                  <div class="col edit-btn">
                    <router-link
                      :to="{
                        name: 'catbreedupdate',
                        params: { id: catBreed._id },
                      }"
                    >
                      <i class="bi bi-pencil-square pointer"></i>
                    </router-link>
                  </div>
                  <div class="col delete-btn">
                    <i
                      v-on:click="deleteCat(catBreed._id)"
                      class="bi bi-trash-fill pointer"
                    ></i>
                  </div>
                </div>
              </div>
              <!-- Detail Row End-->
            </div>
          </b-tab>
        </b-tabs>
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
  name: "petdisplaycomponent",
  data() {
    return {
      listCatBreed: [],
      listDogBreed: [],
      name: "",
    };
  },
  methods: {
    // Dog Methods
    getDogBreed() {
      Vue.axios.get("http://localhost:5000/api/dog/").then((res) => {
        this.listDog = res.data.results;
      });
    },
    deleteDogBreed(_id) {
      this.axios.delete("http://localhost:5000/api/dog/" + _id).then(() => {
        this.getDog();
      });
    },
    // Cat Methods
    getCatBreed() {
      Vue.axios.get("http://localhost:5000/api/cat/").then((res) => {
        this.listCat = res.data.results;
      });
    },
    deleteCatBreed(_id) {
      this.axios.delete("http://localhost:5000/api/cat/" + _id).then(() => {
        this.getCat();
      });
    },
  },
  mounted() {
    this.getDogBreed();
    this.getCatBreed();
  },
  computed: {
    filteredCat: function () {
      return this.listCat.filter((cat) => {
        return cat.name.toLowerCase().match(this.name.toLowerCase());
      });
    },
    filteredDog: function () {
      return this.listDog.filter((dog) => {
        return dog.name.toLowerCase().match(this.name.toLowerCase());
      });
    },
  },
};
</script>
<style>
html {
  background-color: #efeef1;
}
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
.table-display {
  width: 1700px;
  margin-left: auto;
  margin-right: auto;
}
.table-display img {
  height: 40px;
  width: 40px;
  border: 1px solid rgba(167, 167, 167, 0.6);
  border-radius: 50%;
  margin-top: 3px;
}
.table-display .row:hover {
  background-color: #6504b5;
  color: #ffff;
}
.table-display .row:hover > .edit-btn i {
  color: white;
}
.table-display i {
  text-align: center;
  font-size: 25px;
}
.search-input {
  border-radius: 10px 0px 0px 10px;
}
.search-btn {
  border: 1px solid #6504b5;
  border-radius: 0px 10px 10px 0;
  background-color: #6504b5;
  color: #ffff;
}
.edit-btn {
  padding-top: 6px;
}
.delete-btn {
  padding-top: 6px;
}
.pointer {
  cursor: pointer;
}
</style>