<template>
  <div>
      <Navbar/>
      <ChHeader title="Channelling Requests"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-9 center m-5 p-5 shadow-lg">
            <ChManageReq />
          </div>
        </div>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSideBar from "../../components/Channel/ChSideBar.vue"
import ChManageReq from "../../components/Channel/CHManageRequest.vue"

export default {

    name: "ChChannelReq",

    components: {
        Navbar,
        ChHeader,
        ChSideBar,
        ChManageReq,
    },

}
</script>

<style>

</style>