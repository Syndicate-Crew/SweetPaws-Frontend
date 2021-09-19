<template>
    <b-row class="w-100">
        <b-col>
            <p>{{username}}</p>
        </b-col>
        <b-col>
            Options
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "ListItem",
    props: ["username"]
}
</script>