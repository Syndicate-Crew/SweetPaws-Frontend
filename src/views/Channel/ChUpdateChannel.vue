<template>
  <div>
    <Navbar />
    <ChHeader title="Update Channel Slot" />
    <div class="row">
      <div class="col-md-4">
        <ChSideBar />
      </div>
      <div
        class="col-md-6 container center card rounded m-5 p-2 shadow-lg border border-primary form-card"
      >
        <ChUpdateForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChSideBar from "../../components/Channel/ChSideBar.vue";
import ChUpdateForm from "../../components/Channel/ChUpdateSlotForm.vue";

export default {
  name: "ChUpdateSlot",

  components: {
    Navbar,
    ChHeader,
    ChSideBar,
    ChUpdateForm,
  },
};
</script>

<style></style>
