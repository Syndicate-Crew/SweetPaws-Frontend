<template>
	<b-container class="tab-view-container w-100">
		<b-form @submit.prevent="" class="w-100">
			<b-col class="form-group-column">
				<b-form-group class="form-group image-from-group">
					<h2 class="change-image-h2">Change the Profile image</h2>
					<div class="form-image-container">
						<img
							class="form-image-div overlay-background"
							:src="imageUpload.url"
							id="image-id"
							alt=""
						/>
						<div class="form-image-div overlay">
							<label for="file-upload" class="custom-file-upload">
								<!-- click here to select file -->
								<i class="bi bi-upload"></i>
							</label>
							<input
								id="file-upload"
								accept="image/png, image/gif, image/jpeg"
								@change="previewImage"
								multiple="false"
								type="file"
							/>
						</div>
					</div>
					<div style="font-size: 13px; width: 300px; margin: 10px auto">
						Hover and click the upload button to upload the profile picture(.png
						and .jpg only)
					</div>
					<button
						class="form-btn-image"
						@click.prevent=""
						style="background: #5f30e2; color: white"
					>
						Change profile image
					</button>
				</b-form-group>
			</b-col>
		</b-form>

		<b-form @submit.prevent="handleSubmitInfo" class="w-100">
			<h2
				class="change-password-h2"
				style="margin-top: 30px; margin-bottom: 10px"
			>
				Change Info
			</h2>
			<b-col class="form-group-column">
				<b-form-group class="form-group">
					<b-row class="w-100 form-group-lable">
						<img class="form-group-lable-icon" src="./assets/ic_profile.png" />
						<div class="form-group-lable-text">Name</div>
					</b-row>
					<input
						type="text"
						v-model="user.name"
						id="name"
						name="name"
						class="form-control form-group-input w=100 form-input"
						placeholder="Name"
						autocomplete="false"
						:class="{ 'is-invalid': submitted.info && $v.user.name.$error }"
					/>
					<div
						v-if="submitted.info && !$v.user.name.required"
						class="invalid-feedback"
					>
						First Name is required
					</div>
				</b-form-group>
			</b-col>
			<b-col class="form-group-column">
				<b-form-group class="form-group">
					<b-row class="w-100 form-group-lable">
						<img class="form-group-lable-icon" src="./assets/ic_mail.png" />
						<div class="form-group-lable-text">e-mail</div>
					</b-row>
					<input
						type="text"
						v-model="user.email"
						id="email"
						name="email"
						class="form-control form-group-input w-100 form-input"
						placeholder="Email"
						autocomplete="false"
						:class="{ 'is-invalid': submitted.info && $v.user.email.$error }"
					/>
					<div
						v-if="submitted.info && $v.user.email.$error"
						class="invalid-feedback"
					>
						<span v-if="!$v.user.email.required">Email is required</span>
						<span v-if="!$v.user.email.email">Email is invalid</span>
					</div>
				</b-form-group>
			</b-col>
			<b-col class="form-group-column">
				<b-form-group class="form-group">
					<b-row class="w-100 form-group-lable">
						<img class="form-group-lable-icon" src="./assets/ic_phone.png" />
						<div class="form-group-lable-text">phone</div>
					</b-row>
					<input
						type="number"
						v-model="user.phone"
						id="phone"
						name="confirmPassword"
						placeholder="Phone"
						autocomplete="false"
						class="form-control form-group-input w=100 form-input"
						:class="{ 'is-invalid': submitted.info && $v.user.phone.$error }"
					/>
					<div
						v-if="submitted.info && $v.user.phone.$error"
						class="invalid-feedback"
					>
						<span v-if="!$v.user.phone.required">Phone number is required</span>
						<span v-else-if="!$v.user.phone.minLength"
							>Phone number must have 10 digits</span
						>
					</div>
					<b-row class="form-actions w-100">
						<button class="form-btn" @click.prevent="reset">Reset</button>
						<button class="form-btn" style="background: #5f30e2; color: white">
							Submit
						</button>
					</b-row>
				</b-form-group>
			</b-col>
		</b-form>

		<b-form @submit.prevent="" class="w-100">
			<b-col class="form-group-column">
				<h2 class="change-password-h2">Change Password</h2>
				<b-form-group class="form-group">
					<b-row class="w-100 form-group-lable">
						<img class="form-group-lable-icon" src="./assets/ic_password.png" />
						<div class="form-group-lable-text">password</div>
					</b-row>
					<input
						:type="passwordType"
						v-model="changePassword.password"
						id="password"
						name="password"
						autocomplete="false"
						placeholder="Password"
						class="form-control form-group-input w=100 form-input"
						:class="{
							'is-invalid':
								submitted.password && $v.changePassword.password.$error,
						}"
					/>
					<div
						v-if="submitted && $v.changePassword.password.$error"
						class="invalid-feedback"
					>
						<span v-if="!$v.changePassword.password.minLength"
							>Password must be at least 6 characters</span
						>
					</div>

					<input
						type="checkbox"
						@change="togglePasswordType"
						id="showPassword"
					/>
					<label for="showPassword" style="margin-left: 5px"
						>Show Password</label
					>

					<b-row class="w-100 form-group-lable">
						<img class="form-group-lable-icon" src="./assets/ic_password.png" />
						<div class="form-group-lable-text">Confirm password</div>
					</b-row>
					<input
						type="password"
						v-model="changePassword.confirmPassword"
						id="password"
						name="confirmPassword"
						autocomplete="false"
						placeholder="Confirm password"
						class="form-control form-group-input w=100 form-input"
						:class="{
							'is-invalid':
								submitted.password && $v.changePassword.confirmPassword.$error,
						}"
					/>
					<div
						v-if="submitted && $v.changePassword.confirmPassword.$error"
						class="invalid-feedback"
					>
						<span v-if="!$v.changePassword.confirmPassword.required"
							>Confirm Password is required</span
						>
						<span v-else-if="!$v.changePassword.confirmPassword.sameAsPassword"
							>Passwords must match</span
						>
					</div>

					<b-row class="form-actions w-100">
						<button class="form-btn" @click.prevent="">Reset</button>
						<button
							class="form-btn"
							@click.prevent=""
							style="background: #5f30e2; color: white"
						>
							Change password
						</button>
					</b-row>
				</b-form-group>
			</b-col>
		</b-form>
	</b-container>
</template>

<style scoped>
.form-group-lable-icon {
	padding: 0px;
	width: auto;
	height: 26px;
}

.form-group-lable-text {
	width: fit-content;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
}

.form-group-input {
	margin: 0px;
}

.form-group-lable-text {
	font-size: 18px;
	font-style: medium;
}

.form-group-lable {
	margin: 0px;
	padding-top: 20px;
}

.form-group-column {
	margin-top: 10px;
	justify-content: center;
	width: fit-content;
	width: 500px;
	margin: 0px auto;
}

.form-group-input {
	margin: 13px 0px 3px 0px;
	border: 2px solid #7e7dde;
}

.form-actions {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 0px;
}

.form-btn {
	width: fit-content;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	padding: 15px 34px;
	border-radius: 19px;
	border: 0px;
	margin: 30px 0px 70px 15px;
}

.form-btn-image {
	width: fit-content;
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	padding: 15px 34px;
	border-radius: 19px;
	border: 0px;
	margin: 20px 0px;
}

.form-image-container {
	width: 300px;
	height: 300px;
	overflow: hidden;
	position: relative;
	border-radius: 19px;
	border: 1px solid #171859;
	display: block;
	margin: 0px auto;
}

.form-image-div {
	width: inherit;
	height: inherit;
}

.overlay-background {
	background-color: white;
}

.image {
	width: inherit;
	height: auto;
	margin: 0;
	padding: 0;
}

.overlay {
	text-align: center;
	vertical-align: middle;
	background-color: #171859;
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
	opacity: 0;
	transition: 300ms;
}

.form-image-container:hover .overlay {
	opacity: 1;
}

.image-from-group {
	width: fit-content;
	margin: 10px auto;
}

#file-upload {
	visibility: hidden;
}

.custom-file-upload {
	color: white;
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
	padding: 20px 25px;
	border-radius: 50%;
	background-color: #7e7dde;
}

.overlay-background {
	background-color: white;
}

.custom-file-upload:hover {
	cursor: pointer;
}
</style>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
	name: "Info",
	data() {
		return {
			user: {
				name: "",
				email: "",
				phone: "",
			},
			changePassword: {
				password: "",
				confirmPassword: "",
			},
			defaults: {
				name: "",
				email: "",
				phone: "",
			},
			imageUpload: {
				url: "",
				image: null,
			},
			submitted: {
				image: false,
				info: false,
				password: false,
			},
			disableButtons: {
				image: true,
				info: true,
				password: true,
			},
			passwordType: "password",
		};
	},
	validations: {
		user: {
			name: { required },
			email: { required, email },
			phone: { required, minLength: minLength(10) },
		},
		changePassword: {
			password: { required, minLength: minLength(6) },
			confirmPassword: { required, sameAsPassword: sameAs("password") },
		},
	},
	mounted() {
		this.token = localStorage.getItem("sweet-token");
		const config = {
			headers: {
				"swt-token": this.token,
			},
		};
		axios
			.post("http://localhost:5000/api/user/auth", null, config)
			.then((result) => {
				this.user.email = result.data.email;
				this.user.name = result.data.name;
				this.user.phone = result.data.phone;

				this.defaults.email = result.data.email;
				this.defaults.name = result.data.name;
				this.defaults.phone = result.data.phone;

				this.imageUpload.url = `http://localhost:5000/api/public/profile_pictures/${result.data.image}`;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	methods: {
		handleSubmitInfo() {
			this.submitted.info = true;
			this.$v.user.$touch();
			if (this.$v.user.$invalid) {
				alert("Invalid values");
				return;
			} else {
				const form = new FormData();
				form.append("email", this.user.email);
				form.append("name", this.user.name);
				form.append("phone", this.user.phone);

				const config = {
					headers: {
						"swt-token": this.token,
					},
				};

				this.axios
					.put("http://localhost:5000/api/user/", form, config)
					.then((result) => {
						if (result.data.status == "successful") {
							alert("Data updated");
							this.user.email = result.data.email;
							this.user.name = result.data.name;
							this.user.phone = result.data.phone;

							this.defaults.email = result.data.email;
							this.defaults.name = result.data.name;
							this.defaults.phone = result.data.phone;

							this.imageUpload.url = `http://localhost:5000/api/public/profile_pictures/${result.data.image}`;
						} else {
							// alert("Wrong email or passowrd, try again");
							console.log("gg");
						}
					})
					.catch((err) => {
						// alert("An error occured" + JSON.stringify(err))
						console.log(err);
					});
			}
		},
		handleImageUpload() {
			const form = new FormData();

			// check if
			form.append("image", this.image);

			const config = {
				headers: {
					"swt-token": this.token,
				},
			};
			this.axios
				.put("http://localhost:5000/api/user/", form, config)
				.then((result) => {
					if (result.data.status == "successful") {
						this.imageUpload.url = `http://localhost:5000/api/public/profile_pictures/${result.data.image}`;
					} else {
						// alert("Wrong email or passowrd, try again");
						console.log("gg");
					}
				})
				.catch((err) => {
					// alert("An error occured" + JSON.stringify(err))
					console.log(err);
				});
		},
		handlePasswordChange() {
			this.submitted.password = true;

			this.$v.password.$touch();
			if (this.$v.password.$invalid) {
				alert("Invalid password");
			} else {
				const form = new FormData();
				form.append("password", this.changePassword.password);

				const config = {
					headers: {
						"swt-token": this.token,
					},
				};
				this.axios
					.put("http://localhost:5000/api/user/", form, config)
					.then((result) => {
						if (result.data.status == "successful") {
							alert("Password change successful");
						} else {
							// alert("Wrong email or passowrd, try again");
							console.log("gg");
						}
					})
					.catch((err) => {
						// alert("An error occured" + JSON.stringify(err))
						console.log(err);
					});
			}
		},
		togglePasswordType() {
			if (this.passwordType == "password") {
				this.passwordType = "text";
			} else {
				this.passwordType = "password";
			}
		},
		previewImage(e) {
			const file = e.target.files[0];
			document.getElementById("image-id").src = URL.createObjectURL(file);
			this.imageUpload.image = file;
		},
		reset() {
			console.log(this.image);
			this.user = {
				name: this.name,
				email: this.email,
				phone: this.phone,
			};
			this.submitted = false;
		},
	},
};
</script>
