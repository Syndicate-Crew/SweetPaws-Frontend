<template>
    <div>
        <b-card
            v-bind:title="title"
            v-bind:img-src="image"
            img-alt="Image"
            img-top
            img-height="150"
            tag="article"
            style="max-width: 20rem; 
            box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.5);"
            class="mb-3"      
        >
        <hr/>
            <b-card-text>
            {{time}}
            </b-card-text>
            <b-button href="#" 
                    variant="primary" 
                    v-b-popover.hover="{ variant: 'info',  content: 'Click to Here' }"
            >{{btntitle}}</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'ChCard',

    props:{
        title: String,
        time: String,
        image: String,
        btntitle:String,
    }
}
</script>

<style>

</style>