<template>
  <div class="container-fluid">
    <h2 class="heading text-start mt-5 p-5 pb-0">Pet Management - Create</h2>
    <div class="row p-5">
      <div class="col">
        <div class="pet-image h-75 w-50 mt-4">
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
          <form>
            <div class="mb-3">
              <label for="pet-name" class="form-label">Name</label>
              <input type="text" class="form-control" id="pet-name" required/>
            </div>
            <div class="mb-3">
              <label for="pet-type" class="form-label">Type</label>
              <select class="form-select" id="pet-type">
                <option value="" hidden>Select</option>
                <option value="">Small</option>
                <option value="">Medium</option>
                <option value="">Large</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="pet-breed" class="form-label">Breed</label>
              <input
                class="form-control"
                list="pet-breed-list"
                id="pet-breed"
                placeholder="Type to search..."
              />
              <datalist id="pet-breed-list">
                <option value="Breed One"></option>
                <option value="Breed Two"></option>
                <option value="Breed Three"></option>
                <option value="Breed Four"></option>
                <option value="Breed Five"></option>
              </datalist>
            </div>
            <div class="mb-3">
              <label for="pet-age" class="form-label">Age</label>
              <input type="text" class="form-control" id="pet-age" required/>
            </div>
            <div class="mb-3">
              <label for="pet-description" class="form-label"
                >Description</label
              >
              <textarea
                class="form-control"
                name=""
                id="pet-description"
                rows="5"
                required></textarea>
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
    </div>
  </div>
</template>
<script>
export default {
  name: "petmanagementcreate",
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
