<template>
	<div class="user-list-container">
		<div class="options-div">
			<label for="user-list-sort">Sort by  </label>
			<b-form-select id="user-list-sort" class="user-list-sort-select">
				<b-form-select-option>A - Z</b-form-select-option>
				<b-form-select-option>Z - A</b-form-select-option>
			</b-form-select>
		</div>
		<div v-for="user in users" :key="user">
			<ListItem :username="user" />
		</div>
	</div>
</template>

<style scoped>
.user-list-container{
	text-align: start;
}

.user-list-sort-select {
	margin: 0px 20px;
}
</style>

<script>
import ListItem from "./ListItem.vue";
export default {
	name: "UserListContainer",
	data: function() {
		return {
			users: ["User1", "User2"]
		}
	},
	components: {
		ListItem,
	},
};
</script>
