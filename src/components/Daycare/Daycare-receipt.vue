<template>
  <div class="daycare-reg">
    <Navbar />
    <div class="container-fluid ">
      <div class="row shadow py-1 mb-3 rounded daycare-header">
        <div class="header mb-3 mt-1 p-2">
          <h1><b>We have received your booking ! ✔️</b></h1>
        </div>
      </div>
    </div>
    <div class="container p-3">
      <div class="row">
        <div class="col-md-8">
          <div class="card rounded border border-5 receipt">
            <div class="daycare-header p-3 receipt">
              <h2><b>Receipt Details 📝</b></h2>
            </div>
            <div class="row">
              <div class="col-md-5 p-4 m-3">
                <div class="card rounded border border-primary  pet-image">
                  This is image
                </div>
              </div>
              <div class="col-md-6 m-3 p-3">
                <div class="container">
                  <table class="table table-striped table-hover m-3">
                    <thead>
                      <tr>
                        <th scope="col">Owner Name</th>
                        <th scope="col">Mr.Nobody</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><b>PetName</b></td>
                        <td>Cheems</td>
                      </tr>
                      <tr>
                        <td><b>Email</b></td>
                        <td>nobody@gmail.com</td>
                      </tr>
                      <tr>
                        <td><b>No of days</b></td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td><b>Package</b></td>
                        <td>Premium</td>
                      </tr>
                      <tr>
                        <td><b>Price</b></td>
                        <td>5000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="container card rounded border border-primary receipt m-2 p-5 options"
          >
            <div class="row p-2 d-flex justify-content-center">
              <button type="button" class="w-75 btn btn-primary">
                <h5>Download Receipt 🔻</h5>
              </button>
            </div>
            <div class="row p-2 d-flex justify-content-center">
              <button type="button" class="w-75 btn btn-warning">
                <h5>Edit ✏️</h5>
              </button>
            </div>
            <div class="row p-2 d-flex justify-content-center">
              <button type="button" class="w-75 btn btn-danger">
                <h5>Delete 🗑️</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "daycare-receipt",
};
</script>
<style scoped>
.daycare-header {
  background-color: #6504b5;
  color: white;
}

.receipt-header {
  background-color: #6504b5;
  color: white;
}

.pet-image {
  width: 400px;
  height: 400px;
}

.receipt {
  border-radius: 20px !important;
}
</style>
