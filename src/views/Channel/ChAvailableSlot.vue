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
                        <b-col><ChCard title="Monday" time="12.30 - 2.30" btntitle="View" image="https://images.indianexpress.com/2021/06/Puppy-Pixabay.jpg"/></b-col>
                        <b-col><ChCard title="Tuesday" time="10.30 - 3.30" btntitle="View" image="https://umeandthekids.com/wp-content/uploads/2020/12/Why-You-Should-Get-a-Family-Dog-1.jpeg"/></b-col>
                        <b-col><ChCard title="Wednesday" time="11.30 - 5.30" btntitle="View" image="https://www.understandinganimalresearch.org.uk/files/9015/8333/7886/Neutering_pets_-_puppy.png"/></b-col>
                        <b-col><ChCard title="Thursday" time="12.30 - 2.30" btntitle="View" image="https://images.photowall.com/products/57215/golden-retriever-puppy.jpg?h=699&q=85"/></b-col>
                    </b-row>
                    <b-row>
                        <b-col><ChCard title="Friday" time="1.30 - 5.30" btntitle="View" image="https://www.thesprucepets.com/thmb/-4jMGiuVcfrGyPZutbZPXwQVH64=/1884x1413/smart/filters:no_upscale()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg"/></b-col>
                        <b-col><ChCard title="Wednesday" time="2.30 - 4.30" btntitle="View" image="https://global-uploads.webflow.com/5eb69d64ca6f425ad59d4319/5ec6b195f50e51e373490c1e_two%20yellow%20lab%20puppies%20in%20leaves.jpg"/></b-col>
                        <b-col><ChCard title="Saturday" time="3.30 - 6.30" btntitle="View" image="https://www.dogboardingandtrainingmiami.com/wp-content/uploads/2018/08/dreamstime_xs_45116795.jpg"/></b-col>
                        <b-col><ChCard title="Monday" time="8.30 - 2.30" btntitle="View" image="https://i.pinimg.com/474x/77/12/60/771260d75c8f523aab9c9b149f06a7d3.jpg"/></b-col>
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
import ChCard from '../../components/Channel/Ch_Card.vue'

export default {

    name: "ChAvaSlot",

    components: {
        Navbar,
        ChHeader,
        ChSideBar,
        ChCard,
        
    },

}
</script>

<style>

</style>