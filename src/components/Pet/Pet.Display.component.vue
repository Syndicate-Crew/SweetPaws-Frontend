<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="container">
          <div class="row mb-4">
            <label for="pet-breed" class="form-label fw-bolder">Breed</label>
            <input
              class="form-select"
              list="pet-breed-list"
              id="pet-breed"
              placeholder="Any"
              name="breed"
            />
            <datalist id="pet-breed-list">
              <option value="Labrador Retriever"></option>
              <option value="German Shepherd"></option>
              <option value="Golden Retriever"></option>
              <option value="French Bulldog"></option>
              <option value="Bulldogs"></option>
              <option value="Poodles"></option>
              <option value="Beagles"></option>
              <option value="Rottweilers"></option>
              <option value="Corgi"></option>
            </datalist>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Age</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="">Puppy</option>
              <option value="">Young</option>
              <option value="">Adult</option>
              <option value="">Senior</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Size</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="">Small (0-25 lbs)</option>
              <option value="">Medium (26-60 lbs)</option>
              <option value="">Large (61-100 lbs)</option>
              <option value="">Extra Large (101 lbs or more)</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Gender</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Good With</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="">Kids</option>
              <option value="">Other Dogs</option>
              <option value="">Cats</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Care & Behaviour</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="">House-Trained</option>
              <option value="">Special Needs</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Coat Length</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="">Hairless</option>
              <option value="">Short</option>
              <option value="">Medium</option>
              <option value="">Long</option>
              <option value="">Wire</option>
              <option value="">Curly</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Color</label>
            <select class="form-select">
              <option value="">Any</option>
            </select>
          </div>
          <div class="row text-start mb-4">
            <label for="" class="form-label fw-bolder text-center"
              >Pet Name</label
            >
            <div class="col p-0">
              <input
                class="form-control search-input"
                placeholder="Search"
                type="text"
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
      <div class="col">
        <div class="row row-cols-5">
          <!-- Display Card -->
          <div class="col mb-5" v-for="pet in list"
                v-bind:key="pet.id">
            <div class="card">
              <img src="../../assets/dog.jpeg" alt="" class="card-image" />
              <div class="card-body">
                <h5 class="card-title">{{ pet.name }}</h5>
                <p class="card-text">{{ pet.breed }}</p>
              </div>
            </div>
          </div>
          <!-- Display Card End -->
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
  name: "petdisplaycomponent",
  data() {
    return { list: undefined };
  },
  methods: {
    getPet() {
      Vue.axios.get("http://localhost:5000/api/pet/").then((res) => {
        this.list = res.data.results;
      });
    },
    deletePet(_id) {
      this.axios.delete("http://localhost:5000/api/pet/" + _id).then(() => {
        this.getPet();
      });
    },
  },
    mounted() {
    this.getPet();
  },
};
</script>
<style>
.search-input {
  width: 225px;
  border-radius: 10px 0px 0px 10px;
}
.search-btn {
  border: 1px solid #6504b5;
  border-radius: 0px 10px 10px 0;
  background-color: #6504b5;
  color: #ffff;
}
.card-image {
  height: 250px;
  border-radius: 10px 10px 0 0;
}
.card {
  border-radius: 10px;
  width: 250px;
}
</style>