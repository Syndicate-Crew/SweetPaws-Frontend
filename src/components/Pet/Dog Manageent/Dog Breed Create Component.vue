<template>
  <div class="container-fluid breed-management-create-container">
    <h2 class="heading text-start mt-5 p-5 pb-0">Dog Breed Management - Create</h2>
    <div class="row">
      <div class="col">
        <div class="breed-image h-75 w-75 mt-4">
          <div class="position-relative top-50 start-50 translate-middle">
            <label for="file-upload" class="custom-file-upload">
              <i class="bi bi-upload"></i>
            </label>
            <input id="file-upload" type="file" accept="image/*" />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="w-75 text-start fw-bolder">
          <form>
            <div class="mb-3">
              <label for="breed-name" class="form-label">Breed Name</label>
              <input
                type="text"
                class="form-control"
                id="breed-name"
                name="name"
              />
            </div>
            <div class="mb-3">
              <label for="breed-size" class="form-label">Size</label>
              <select class="form-select" id="breed-size" name="size">
                <option value="" hidden>Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="breed-energyLevel" class="form-label"
                >Energy Level</label
              >
              <select
                class="form-select"
                id="breed-energyLevel"
                name="energyLevel"
              >
                <option value="" hidden>Select</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="breed-friendliness" class="form-label"
                >Friendliness</label
              >
              <select
                class="form-select"
                id="breed-friendliness"
                name="gefriendlinessnder"
              >
                <option value="" hidden>Select</option>
                <option value="Toward Children">Toward Dogs</option>
                <option value="Toward Other Pets">Toward Other Pets</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="breed-easeOfTraning" class="form-label"
                >Ease Of Traning</label
              >
              <select
                class="form-select"
                id="breed-easeOfTraning"
                name="easeOfTraning"
              >
                <option value="" hidden>Select</option>
                <option value="Easy">Easy</option>
                <option value="Average">Average</option>
                <option value="Difficult">Difficult</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="breed-groomingRequirements" class="form-label"
                >Grooming Requirements</label
              >
              <select
                class="form-select"
                id="breed-groomingRequirements"
                name="groomingRequirements"
              >
                <option value="" hidden>Select</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="breed-vocality" class="form-label">Vocality</label>
              <select class="form-select" id="breed-vocality" name="vocality">
                <option value="" hidden>Select</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="breed-exerciseRequirements" class="form-label"
                >Exercise Requirements</label
              >
              <select
                class="form-select"
                id="breed-exerciseRequirements"
                name="exerciseRequirements"
              >
                <option value="" hidden>Select</option>
                <option value="Moderate">Moderate</option>
                <option value="Significant">Significant</option>
                <option value="Rigorous">Rigorous</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="breed-affectionNeeds" class="form-label"
                >Affection Needs</label
              >
              <select
                class="form-select"
                id="breed-affectionNeeds"
                name="affectionNeeds"
              >
                <option value="" hidden>Select</option>
                <option value="Independant">Independant</option>
                <option value="Balanced">Balanced</option>
                <option value="Cuddly">Cuddly</option>
              </select>
            </div>
            <div class="mb-3 text-end mt-5">
              <button class="cancel-btn fw-bold me-3">
                <i class="bi bi-chevron-left"></i>Cancel
              </button>
              <input type="submit" class="submit-btn fw-bold" value="Submit" />
            </div>
          </form>
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
  name: "dogbreedcreatecomponent",
  // data() {
  //   return {
  //     breed: {
  //       name: null,
  //     },
  //   };
  // },
  // methods: {
  //   postData(e) {
  //     console.log(this.breed);
  //     this.axios
  //       .post("http://localhost:5000/api/breed/", this.breed)
  //       .then((result) => {
  //         console.warn(result);
  //         this.$router.push("petdisplay");
  //       });
  //     e.preventDefault();
  //   },
  // },
};
</script>
<style>
html {
  background-color: #efeef1;
}
.breed-management-create-container {
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
.breed-image {
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