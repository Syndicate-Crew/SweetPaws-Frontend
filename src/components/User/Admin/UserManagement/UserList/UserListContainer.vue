<template>
    <div>
        <b-select>
            <b-select-option>A - Z</b-select-option>
            <b-select-option>Z - A</b-select-option>
        </b-select>
        <div v-for="user in users" :key="user">
            <ListItem />
        </div>
    </div>
</template>

<script>
import ListItem from "./ListItem.vue"
export default {
    name: "UserListContainer",
    data: {
        users: ["User1","User2"]
    },
    components: {
        ListItem
    }
}
</script>