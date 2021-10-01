<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="container">
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Size</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Energy Level</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Friendliness</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="Toward Children">Toward Dogs</option>
              <option value="Toward Other Pets">Toward Other Pets</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Ease Of Traning</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="Easy">Easy</option>
              <option value="Average">Average</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder"
              >Grooming Requirements</label
            >
            <select class="form-select">
              <option value="">Any</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Vocality</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder"
              >Exercise Requirements</label
            >
            <select class="form-select">
              <option value="">Any</option>
              <option value="Moderate">Moderate</option>
              <option value="Significant">Significant</option>
              <option value="Rigorous">Rigorous</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Affection Needs</label>
            <select class="form-select">
              <option value="">Any</option>
              <option value="Independant">Independant</option>
              <option value="Balanced">Balanced</option>
              <option value="Cuddly">Cuddly</option>
            </select>
          </div>
          <div class="row text-start mb-4">
            <label for="" class="form-label fw-bolder text-center"
              >Breed Name</label
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
        <div class="row row-cols-3">
          <!-- Display Card -->
          <div class="col mb-5">
            <div class="card">
              <img src="../../../assets/dog.jpeg" alt="" class="card-image" />
              <div class="card-body">
                <h5 class="card-title">Breed Name</h5>
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
// import Vue from "vue";
// import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);

export default {
  name: "dogbreeddisplaycomponent",
  //   data() {
  //     return {
  //       list: [],
  //       name: "",
  //       breed: "",
  //       size: "",
  //       age: "",
  //       gender: "",
  //       goodWith: "",
  //       careBehaviour: "",
  //       coatLength: "",
  //       color: "",
  //     };
  //   },
  //   methods: {
  //     getbreed() {
  //       Vue.axios.get("http://localhost:5000/api/breed/").then((res) => {
  //         this.list = res.data.results;
  //       });
  //     },
  //   },
  //   mounted() {
  //     this.getbreed();
  //   },
  //   computed: {
  //     filteredbreed: function () {
  //       return this.list.filter((breed) => {
  //         return (
  //           breed.name.toLowerCase().match(this.name.toLowerCase()) &&
  //         );
  //       });
  //     },
  //   },
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
  height: 400px;
  border-radius: 10px 10px 0 0;
}
.card {
  border-radius: 10px;
  width: 400px;
}
</style>