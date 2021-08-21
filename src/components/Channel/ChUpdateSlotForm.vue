<template>
 <div>
    <div class="container">
        <div class="row">       
            <ChHeader  title="Update Channel Slot" />
            <form>
             <div class="row">
               <div class="row ">
                  <label  class="form-label text-start fs-5">
                    <b>Veterinarian Details</b>
                  </label>
                  <hr/>
              </div>
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start" required>
                    <b>First Name :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="Nipun"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Last Name :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="Abeywardhana"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Email :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="Nipun@gmail.com"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Phone :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="077404751"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Charge :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="2000"
                    required
                  />
                </div>
              </div>

              <div class="row">
                  <label  class="form-label text-start fs-5">
                    <b>Hospital Details</b>
                  </label>
                  <hr/>
              </div>

              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Room No :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="No 2"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Date :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="date"
                    class="form-control"
                    id="example"
                    placeholder="2021/08/30"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Time :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="8.30 - 12.30"
                    required
                  />
                </div>
              </div>
             <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Charge :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="1000"
                    required
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-md-3 p-2"></div>
                <div class="col-md-6 p-2">
                  <button type="button" class="btn btn-success p-2 m-2">
                    Update
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
</template>

<script>

import ChHeader from "../../components/Channel/Ch_Header.vue"

export default {
  name: "ChUpdateForm",
  components: {
    ChHeader,
  },
}
</script>

<style>

</style>