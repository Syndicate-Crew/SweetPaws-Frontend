<template>
  <div>
      <Navbar/>
      <ChHeader title="New Channel Slot"/>
        <div>
        <div class="row">
          <div class="col-md-4">
            <ChSideBar />
          </div>
          <div class="col-md-6 container center card rounded m-5 p-2 shadow-lg border border-primary form-card">
            <ChSlotForm/>
          </div>
        </div>
      </div>   
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSideBar from "../../components/Channel/ChSideBar.vue"
import ChSlotForm from "../../components/Channel/ChNewChannel.vue"

export default {
  name: "ChNewChannelform",
  components: {
    Navbar,
    ChHeader,
    ChSideBar,
    ChSlotForm,
  },
}
</script>

<style>

</style>