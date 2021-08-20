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
    <div class="container">
      <div class="row">
        <div class="package-card col d-flex justify-content-evenly">
          <div class="card p-3">
            <div class="card-body">
              <h1 class="card-title"><i>Premium</i> 💎</h1>
              <br />
              <br />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div class="package-card col d-flex justify-content-evenly">
          <div class="card p-3">
            <div class="card-body">
              <h1 class="card-title"><i>Healthy Plus</i> ➕</h1>
              <br />
              <br />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div class="package-card col d-flex justify-content-evenly">
          <div class="card p-3">
            <div class="card-body">
              <h1 class="card-title"><i>Lite</i> ⚡</h1>
              <br />
              <br />
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
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
}
</style>
