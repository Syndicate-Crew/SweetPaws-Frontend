<template>
  <div>
    <ChHeader title="Available Channelling" />
    <div class="row">
      <div class="col-md-2">
        <ChSideBar />
      </div>
      <div class="col-md-9 center m-5 p-5 shadow-lg">
        <ChManageAva />
      </div>
    </div>
  </div>
</template>

<script>
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChSideBar from "../../components/Channel/ChSideBar.vue";
import ChManageAva from "../../components/Channel/CHManageAvailable.vue";

export default {
  name: "ChAvaChannel",

  components: {
    ChHeader,
    ChSideBar,
    ChManageAva,
  },
};
</script>

<style></style>
