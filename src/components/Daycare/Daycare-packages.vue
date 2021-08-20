<template>
  <div class="daycare-reg">
    <Navbar />
    <div class="container-fluid ">
      <div class="row shadow py-1 mb-3 rounded daycare-header">
        <div class="header mb-3 mt-1 p-2">
          <h1><b>Daycare Packages 🎁</b></h1>
        </div>
      </div>
    </div>
    <div class="container p-3">
      <div class="row">
        <div class="package-card col d-flex justify-content-evenly m-3">
          <div class="card p-3 m-4" style="background-color:orange">
            <div class="card-body">
              <h1 class="card-title"><i>Premium</i> 💎</h1>
              <br />
              <br />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-dark">Choose 👉</button>
            </div>
          </div>
        </div>
        <div class="package-card col d-flex justify-content-evenly m-3">
          <div class="card p-3 m-4" style="background-color:red">
            <div class="card-body">
              <h1 class="card-title"><i>HealthyPlus</i>➕</h1>
              <br />
              <br />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-dark">Choose 👉</button>
            </div>
          </div>
        </div>
        <div class="package-card col d-flex justify-content-evenly m-3">
          <div class="card p-3 m-4" style="background-color:aqua">
            <div class="card-body">
              <h1 class="card-title"><i>Lite</i> ⚡</h1>
              <br />
              <br />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-dark">Choose 👉</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "daycare-packs",
};
</script>
<style scoped>
.daycare-header {
  background-color: #6504b5;
  color: white;
}
.package-card {
  width: 500px;
  height: 500px;
  border-style: solid;
  border-width: 5px;
  transition: transform 0.2s;
  border-radius: 10px;
  border-color: #6504b5;
  color: white;
}
.package-card:hover {
  transform: scale(1.1);
}
</style>
