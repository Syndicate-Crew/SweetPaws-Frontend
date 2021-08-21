<template>
  <div>
    <div class="container">
        <div class="row">       
            <ChHeader  title="Channel Your Pet" />
            <form>
             <div class="row">
               <div class="row ">
                  <label  class="form-label text-start fs-5">
                    <b>Owner Details</b>
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
                    placeholder="Enter First Name"
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
                    placeholder="Enter Last Name"
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
                    placeholder="Enter Email"
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
                    placeholder="Enter Phone"
                    required
                  />
                </div>
              </div>

              <div class="row">
                  <label  class="form-label text-start fs-5">
                    <b>Pet Details</b>
                  </label>
                  <hr/>
              </div>

              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Name :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="Enter Pet Name"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Age :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <input
                    type="text"
                    class="form-control"
                    id="example"
                    placeholder="Enter Pet Age"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 p-2">
                  <label  class="form-label text-start">
                    <b>Message :</b>
                  </label>
                </div>
                <div class="col-md-7 p-2">
                  <textarea 
                  class="form-control col-md-7 p-2" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  placeholder="Enter Message">
                  </textarea>
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
</template>

<script>
import ChHeader from "../../components/Channel/Ch_Header.vue"
export default {
  name: "ChAppointment",
  components: {
    ChHeader,
  },

}
</script>

<style>

</style>