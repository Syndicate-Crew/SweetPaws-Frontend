<template>
  <div>
      <Navbar/>
      <ChHeader title="Manage Channelling"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-9 center m-5 p-5 shadow-lg">
            <ChManageSlot

                id="1"
                name="sahan_ishara"
                email="sahan@gmail.com"
                phone="077485154"
                date="2021/08/20"
                time="8.30_12.30"
                room="no_2"
                charge="3000" 
            />
          </div>
        </div>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSideBar from "../../components/Channel/ChSideBar.vue"
import ChManageSlot from "../../components/Channel/CHMangeSlot.vue"

export default {
  name: "ChSlotManage",
  components: {
    Navbar,
    ChHeader,
    ChSideBar,
    ChManageSlot,
  },
}
</script>

<style>

</style>