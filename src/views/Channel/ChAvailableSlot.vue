<template>
  <div>
      <Navbar/>
      <ChHeader title="Available Slots"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-9 center m-5 p-5 shadow-lg">
           
          </div>
        </div>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSideBar from "../../components/Channel/ChSideBar.vue"

export default {

    name: "ChAvaSlot",

    components: {
        Navbar,
        ChHeader,
        ChSideBar,
    },

}
</script>

<style>

</style>