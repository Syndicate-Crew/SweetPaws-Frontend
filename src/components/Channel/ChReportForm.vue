<template>
  <div>
    <div class="container">
      <div class="row">
        <ChHeader title="Channel Report Form " />
        <form>
          <div class="row">
            <div class="row ">
              <label class="form-label text-start fs-5">
                <b>Dates</b>
              </label>
              <hr />
            </div>
            <div class="col-md-4 p-2">
              <label class="form-label text-start" required>
                <b>Start Date :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                class="form-control"
                id="example"
                placeholder="Enter Starting Name"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>End Date :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                class="form-control"
                id="example"
                placeholder="Enter Ending date"
                required
              />
            </div>
          </div>
          <div class="row">
            <label class="form-label text-start fs-5">
              <b>Charging Details</b>
            </label>
            <hr />
          </div>

          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Medicine Charges :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                placeholder="Enter Medicine Charges"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Other Charges :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                placeholder="Enter Charges"
                required
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-3 p-2"></div>
            <div class="col-md-6 p-2">
              <button type="button" class="btn btn-success p-2 m-2">
                Generate Report
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChReportForm",
  components: {
    ChHeader,
  },
};
</script>

<style></style>
