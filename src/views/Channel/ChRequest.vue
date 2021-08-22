<template>
  <div>
      <Navbar/>
      <ChHeader title="Channelling Requests"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-9 center m-5 p-5 shadow-lg">
            <ChManageReq 
                id="1"
                O_name="malith" 
                O_email="malith@gmail.com" 
                O_phone="07145845" 
                P_name="Lucky" 
                P_age="6" 
                date="2021/08/30" 
                time="8.30 - 12.30" 
            
            />
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