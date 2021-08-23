<template>
  <div>
      <Navbar/>
      <ChHeader title="Available Slots"/>
        <div class="row">
          <div class="col-md-2">
            <ChSideBar />
          </div>
          <div class="col-md-9 center m-5 p-5 shadow-lg">
            <b-container fluid="sm">    
                <b-container class="bv-example-row" >
                    <b-row>
                        <b-col><ChAdminCard btntitle="View"/></b-col>
                    </b-row>
                </b-container>  
            </b-container>
          </div>
        </div>
  </div>
</template>

<script>

import Navbar from "../../components/Navbar/Navbar.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue"
import ChSideBar from "../../components/Channel/ChSideBar.vue"
import ChAdminCard from '../../components/Channel/Ch_CardAdmin.vue'

export default {

    name: "ChAvaSlot",

    components: {
        Navbar,
        ChHeader,
        ChSideBar,
        ChAdminCard,
        
    },

}
</script>

<style>

</style>