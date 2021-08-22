<template>
  <div>
      <Navbar/>
      <ChHeader title="Available Channelling"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-9 center m-5 p-5 shadow-lg">
           <ChManageAva
            
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
import ChManageAva from "../../components/Channel/CHManageAvailable.vue"

export default {

    name: "ChAvaChannel",

    components: {
        Navbar,
        ChHeader,
        ChSideBar,
        ChManageAva,
    },

}
</script>

<style>

</style>