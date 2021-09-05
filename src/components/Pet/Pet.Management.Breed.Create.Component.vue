<template>
  <div class="container-fluid pet-management-breed-create-container">
    <!-- <h2 class="heading text-start mt-5 p-5 pb-0">Pet Management - Breed - Create</h2>
    <div class="row p-5">
      <div class="col">
        <div class="breed-image h-75 w-50 mt-4">
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
              <label for="pet-breed" class="form-label">Breed</label>
              <input
                type="text"
                class="form-control"
                id="pet-breed"
                name="breed"
                v-model="breed.breed"
              />
            </div>
            <div class="mb-3">
              <label for="breed-description" class="form-label"
                >Description</label
              >
              <textarea
                class="form-control"
                id="breed-description"
                rows="5"
                name="description"
                v-model="breed.description"
              ></textarea>
            </div>
            <div class="mb-3 text-end">
              <button class="cancel-btn fw-bold me-3">
                <i class="bi bi-chevron-left"></i>Cancel
              </button>
              <input type="submit" class="submit-btn fw-bold" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "petmanagementbreedcreate",
  data() {
    return {
      breed: {
        breed: null,
        description: null,
      },
    };
  },
  methods: {
    postData(e) {
      console.log(this.breed);
      this.axios
        .post("http://localhost:5000/api/breed/", this.breed)
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
.pet-management-breed-create-container {
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
.pet-image {
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
