<template>
  <div>
    <div class="container">
        <div class="row">
           <ChHeader title="Channelling Details" />
            <form>
             <div class="row">
               <div class="row ">
                  <label  class="form-label text-start fs-5">
                    <b>Venue Details</b>
                  </label>
                  <hr/>
              </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Veterinarian Name :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{veterinarian}}</b>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Day :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{day}}</b>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Date :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{date}}</b>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Time :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{time}}</b>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Room :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{room}}</b>
                  </label>
                </div>
              </div>
              <div class="row">
               <div class="row ">
                  <label  class="form-label text-start fs-5">
                    <b>Charges</b>
                  </label>
                  <hr/>
              </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Hospital Charge :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{hospitalcharge}}</b>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Doctor Charge :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{doctorcharge}}</b>
                  </label>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start text-danger">
                    <b>Total Charge :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start text-danger">
                    <b>{{totalcharge}}</b>
                  </label>
                </div>
              </div>
              <hr/>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import ChHeader from "../../components/Channel/Ch_Header.vue"
export default {
    name: "ChAppSlot",

    components: {
        ChHeader,
    },
      props:{
        veterinarian: String,
        day: String,
        date: String,
        time: String,
        room: String,
        hospitalcharge: String,
        doctorcharge: String,
        totalcharge: String,
    }

}
</script>

<style>

</style>