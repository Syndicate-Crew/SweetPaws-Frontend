<template>
  <div>
    <ChHeader title="Manage Channelling" />
    <div class="row">
      <div class="col-md-2">
        <ChSideBar />
      </div>
      <div class="col-md-9 center m-5 p-5 shadow-lg">
        <ChManageSlot />
      </div>
    </div>
  </div>
</template>

<script>
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChSideBar from "../../components/Channel/ChSideBar.vue";
import ChManageSlot from "../../components/Channel/CHMangeSlot.vue";

export default {
  name: "ChSlotManage",
  components: {
    ChHeader,
    ChSideBar,
    ChManageSlot,
  },
};
</script>

<style></style>
