<template>
    <div>
        <b-card-group>
        <b-card 

            v-for="channel in Channels" :key="channel._id"

            v-bind:title="channel.title"
            v-bind:img-src="channel.image"
            img-alt="Image"
            img-top
            img-height="150"
            tag="article"
           style="max-width: 15rem; min-width: 15rem; box-shadow: 1px 4px 8px 2px rgba(0,0,0,0.5);"
            class="mb-3 m-3"      
        >
        <hr/>
            <b-card-text>
            {{channel.time}}
            </b-card-text>
            <router-link 
                    :to="{name: 'ChApp'}" 
                    class="btn btn-primary" 
                    v-b-popover.hover="{ variant: 'info',  content: 'Click to Here' }"
                    >
                    Channel
            </router-link>
        </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
    name: 'ChCard',

        data() {
        return {
                Channels: [
                    {
                        title: 'monday',
                        time: '12.30 - 3.30',
                        image: 'https://images.indianexpress.com/2021/06/Puppy-Pixabay.jpg'
                    },
                    {
                        title: 'tuesday',
                        time: '1.30 - 2.30',
                        image: 'https://umeandthekids.com/wp-content/uploads/2020/12/Why-You-Should-Get-a-Family-Dog-1.jpeg'
                        
                    },
                    {
                        title: 'wednesday',
                        time: '12.30 - 3.30',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9QOCzXOSb3YpHxZfMkGT3oYDJyQ9k_54SJYJOKYg06aFSMV0z4kQ3-1DD8MIcPGSj2o&usqp=CAU'
                    },
                    {
                        title: 'thursday',
                        time: '1.30 - 2.30',
                        image: 'https://images.photowall.com/products/57215/golden-retriever-puppy.jpg?h=699&q=85'
                    },
                    {
                        title: 'friday',
                        time: '12.30 - 3.30',
                        image: 'https://www.thesprucepets.com/thmb/-4jMGiuVcfrGyPZutbZPXwQVH64=/1884x1413/smart/filters:no_upscale()/GoldenPuppy185743593-56a9c1f23df78cf772aa4a33.jpg'
                    },
                    {
                        title: 'saturady',
                        time: '1.30 - 2.30',
                        image: 'https://global-uploads.webflow.com/5eb69d64ca6f425ad59d4319/5ec6b195f50e51e373490c1e_two%20yellow%20lab%20puppies%20in%20leaves.jpg'
                    },
                    {
                        title: 'monday',
                        time: '12.30 - 3.30',
                        image: 'https://www.dogboardingandtrainingmiami.com/wp-content/uploads/2018/08/dreamstime_xs_45116795.jpg'
                    },
                    {
                        title: 'wednesday',
                        time: '1.30 - 2.30',
                        image: 'https://i.pinimg.com/474x/77/12/60/771260d75c8f523aab9c9b149f06a7d3.jpg'
                    },
            ]
            }
        },

    props:{
        btntitle:String,
    },

}
</script>

<style>

</style>