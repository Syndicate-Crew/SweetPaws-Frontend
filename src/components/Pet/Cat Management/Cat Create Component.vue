<template>
  <div>
    <div class="container-fluid cat-management-create-container">
      <h2 class="heading text-start mt-5 p-5 pb-0">Cat Management - Create</h2>
      <div class="row p-5">
        <div class="col">
          <div class="cat-image h-75 w-50 mt-4">
            <div class="position-relative top-50 start-50 translate-middle">
              <label for="file-upload" class="custom-file-upload">
                <i class="bi bi-upload"></i>
              </label>
              <input id="file-upload" type="file" accept="image/*" multiple />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="w-75 text-start fw-bolder">
            <form @submit="postData" method="post">
              <div class="mb-3">
                <label for="cat-name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="cat-name"
                  name="name"
                  v-model="cat.name"
                />
              </div>
              <div class="mb-3">
                <label for="cat-type" class="form-label">Type</label>
                <select
                  class="form-select"
                  id="cat-type"
                  name="type"
                  v-model="cat.type"
                >
                  <option value="#" hidden>Select</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="cat-breed" class="form-label">Breed</label>
                <input
                  class="form-control"
                  list="cat-breed-list"
                  id="cat-breed"
                  placeholder="Type to search"
                  name="breed"
                  v-model="cat.breed"
                />
                <datalist id="cat-breed-list">
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
              <div class="mb-3">
                <label for="cat-age" class="form-label">Age</label>
                <input
                  type="text"
                  class="form-control"
                  id="cat-age"
                  name="age"
                  v-model="cat.age"
                />
              </div>
              <div class="mb-3">
                <label for="cat-description" class="form-label"
                  >Description</label
                >
                <textarea
                  class="form-control"
                  id="cat-description"
                  rows="5"
                  name="description"
                  v-model="cat.description"
                ></textarea>
              </div>
              <div class="mb-3 text-end">
                <button class="cancel-btn fw-bold me-3">
                  <i class="bi bi-chevron-left"></i>Cancel
                </button>
                <input
                  type="submit"
                  class="submit-btn fw-bold"
                  value="Submit"
                />
              </div>
            </form>
          </div>
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
  name: "cat create component",
  data() {
    return {
      cat: {
        name: null,
        type: null,
        breed: null,
        age: null,
        description: null,
      },
    };
  },
  methods: {
    postData(e) {
      console.log(this.cat);
      this.axios
        .post("http://localhost:5000/api/cat/", this.cat)
        .then((result) => {
          console.warn(result);
          this.$router.push("petmanagement-display");
        });
      e.preventDefault();
    },
  },
};
</script>
<style>
html {
  background-color: #efeef1;
}
.cat-management-create-container {
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
input,
textarea,
select {
  border: 1px solid #7e7dde !important;
}
label {
  font-weight: bolder;
}
.submit-btn {
  color: #ffff;
  width: 120px;
  height: 50px;
  background: #5f30e2;
  border-radius: 19px;
  border: none;
}
.submit-btn:hover {
  color: #5f30e2;
  background: #ffff;
  border: 1px solid #5f30e2;
}
.cancel-btn {
  background: none;
  color: #7e7e7e;
  border: none;
  font-size: 18px;
}
.cancel-btn i {
  font-weight: 900;
}
.cat-image {
  border: 1px solid #7e7dde !important;
  border-radius: 30px;
  margin-right: auto;
  margin-left: auto;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #7e7dde;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 30px;
  font-size: 20px;
}
</style>