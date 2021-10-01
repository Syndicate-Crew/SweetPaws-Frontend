<template>
	<div class="user-list-container">
		<!-- <div class="options-div">
			<label for="user-list-sort">Sort by  </label>
			<b-form-select v-model="sort" id="user-list-sort" class="user-list-sort-select" @change="onChangeHandler">
				<b-form-select-option value="1">A - Z</b-form-select-option>
				<b-form-select-option value="2">Z - A</b-form-select-option>
			</b-form-select>
		</div> -->
		<div class="options-div">
			<label for="showPassword" style="margin-left: 5px" class="option-items">Search by name</label>
			<input type="text" v-model="query" id="showPassword" class="option-items"/>
			<button class="search-controls option-items" @click="handleSearch" id="search-buttons">Search</button>
			<button class="search-controls option-items" @click="handleClear" id="search-clear-buttons">Clear search</button>
			<button class="search-controls option-items" @click="handleDownload" id="search-clear-buttons">Download PDF</button>
		</div>
		<div v-for="(user,i) in users" :key="i">
			<ListItem :username="user.name" :id="user._id" :joined="user.joined" :image="user.image"/>
		</div>
		<div v-if="users.length < 1">
			<h1>No users found</h1>
		</div>
	</div>
</template>

<style scoped>
.option-items {
	margin: 5px 10px 5px 0px;
}
.search-controls{
	padding: 3px 16px;
	border-radius: 8px;
	border: none;
	box-shadow: 0px 0px 3px 1px #bbb;
}

.search-controls:active {
	padding: 3px 16px;
	border-radius: 8px;
	border: none;
	box-shadow: 0px 0px 5px 2px rgb(182, 182, 182);
}

#search-buttons {
	background: #5f30e2;
	color: white;
}

.user-list-container{
	text-align: start;
}

.user-list-sort-select {
	margin: 0px 20px 20px 20px;
}
</style>

<script>
import ListItem from "./ListItem.vue";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import Vue from "vue";
import autotable from "jspdf-autotable";

Vue.use(jsPDF)
export default {
	name: "UserListContainer",
	data: function() {
		return {
			users: [],
			sort: 1,
			query: ""
		}
	},
	components: {
		ListItem,
	},
	methods: {
		onChangeHandler() {
			if (this.sort == 1) {
				alert(1);
			} else if ( this.sort == 2) {
				alert(2)
			}
		},
		handleSearch() {
			
			if (this.query == "") {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Enter a search query first",
				});
			} else {
				this.axios.get(`http://localhost:5000/api/user/getByName/${this.query}`)
				.then(res => {
					this.users = res.data.result
				})
				.catch(err => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Enter a search query first",
					});
					console.log(err)
				});
			}
		},
		handleClear() {
			this.query = "";
			this.axios.get("http://localhost:5000/api/user/")
			.then(res => {
				this.users = res.data.result
			})
			.catch(err => {
				console.log(err);
				alert("An error occured please try again");
			});
		},
		handleDownload() {
			var list = [{
					"name": "User name",
					"joined": "Joined date",
					"email": "E mail",
					"phone": "Contact number"
				},{
					"name": " ",
					"joined": " ",
					"email": " ",
					"phone": " "
				}];
			this.users.map(element => {
				list.push({
					"name": element.name,
					"joined": element.joined,
					"email": element.email,
					"phone": element.phone
				});
			})

			var doc = new jsPDF('p', 'pt');
			doc.text('User list', 30, 20)
			autotable(doc, {
				body: list
			})
			doc.save('Userlist.pdf');
		}
	},
	mounted() {
		this.axios.get("http://localhost:5000/api/user/")
		.then(res => {
			this.users = res.data.result
		})
		.catch(err => {
			console.log(err);
			alert("An error occured please try again");
		});
	}
};
</script>
