<template>
  <div class="daycare-reg">
    <Navbar />
    <div class="container-fluid">
      <div class="row shadow py-1 mb-3 rounded daycare-header">
        <div class="header mb-3 mt-1 p-2">
          <h1><b>Pet Registration - Daycare 📝</b></h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card rounded m-5 p-5 shadow-lg border border-success">
        <div class="row">
          <div class="col-md-5 mx-auto m-2">
            <h3><b>Upload Pet Image Here</b></h3>
            <br />
            <button
              type="button"
              class="btn btn-outline-primary p-5 pet-button mx-auto"
            >
              <h1>📤</h1>
            </button>
          </div>
          <div
            class="col-md-6 card rounded m-2 p-3 shadow-lg border border-primary form-card"
          >
            <form>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label for="exampleInputEmail1" class="form-label"
                    ><b>Owner Name</b></label
                  >
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label for="exampleInputEmail1" class="form-label"
                    ><b>Pet Name</b></label
                  >
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label for="exampleInputEmail1" class="form-label"
                    ><b>Email</b></label
                  >
                </div>
                <div class="col-md-6 p-2">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label for="exampleInputEmail1" class="form-label"
                    ><b>No. of days</b></label
                  >
                </div>
                <div class="col-md-2 p-2">
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="col-md-6 p-2 mb-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select the package</option>
                    <option value="1">Premium</option>
                    <option value="2">Healthy Plus</option>
                    <option value="3">Lite</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label class="form-label"><b>Amount</b></label>
                </div>
                <div class="col-md-2 p-2">
                  <label class="form-label"><b>1000</b></label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 p-2"></div>
                <div class="col-md-6 p-2">
                  <button type="button" class="btn btn-success p-2 m-2">
                    Submit
                  </button>
                  <button type="button" class="btn btn-danger p-2 m-2">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "daycare-reg",
};
</script>
<style scoped>
.pet-button {
  width: 400px;
  height: 400px;
  border-radius: 20px;
}
.form-card {
  border-radius: 20px !important;
}
.daycare-header {
  background-color: #6504b5;
  color: white;
}
</style>
