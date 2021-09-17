<template>
    <form @submit.prevent="handleSubmit">
        <b-row class="form-col-row" cols-sm="1" cols="2" cols-md="2">
            <b-col>
                <div class="form-image-container">
                    <img class="form-image-div overlay-background"  src="../../assets/person.png" id="image-id" alt="">
                    <div class="form-image-div overlay">
                        <label for="file-upload" class="custom-file-upload">
                            <!-- click here to select file -->
                            <i class="bi bi-upload"></i>
                        </label>
                        <input id="file-upload" accept="image/png, image/gif, image/jpeg" @change="previewImage" multiple="false" type="file"/>
                    </div>
                </div>
                <div style="font-size: 13px;width: 300px">Hover and click the upload button to upload the profile picture(.png and .jpg only)</div>
                <div v-if="image == '../../assets/person.png'" style="font-size: 13px;color: red;width: 300px" :class="{'is-invalid': image == '../../assets/person.png'}">Upload an Image</div>
            </b-col>
            <b-col cols="8">
                <div class="form-group">
                    <input type="text" v-model="user.name" id="name" name="name" class="form-control w=75 form-input" placeholder="Name" autocomplete="false" :class="{ 'is-invalid': submitted && $v.user.name.$error }" />
                    <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">First Name is required</div>
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.email" id="email" name="email" class="form-control w=75 form-input" placeholder="E mail" autocomplete="false" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email is required</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                </div>
                <div class="form-group">
                    <input :type="passwordType" v-model="user.password" id="password" name="password" autocomplete="false" placeholder="Password" class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                        <span v-if="!$v.user.password.required">Password is required</span>
                        <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                    </div>
                </div>
                <div class="form-group">
                    <input type="checkbox" @change="togglePasswordType" id="showPassword"/>
                    <label for="showPassword" style="margin-left: 5px">Show Password</label>
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" autocomplete="false"  class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                    <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                        <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                        <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                    </div>
                </div>
                <div class="form-group">
                    <input type="number" v-model="user.phone" id="phone" name="confirmPassword" placeholder="Phone" autocomplete="false"  class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.phone.$error }" />
                    <div v-if="submitted && $v.user.phone.$error" class="invalid-feedback">
                        <span v-if="!$v.user.phone.required">Phone number is required</span>
                        <span v-else-if="!$v.user.phone.minLength">Phone number must have 10 digits</span>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="form-actions">
            <button class="form-btn" @click.prevent="reset">Reset</button>
            <button class="form-btn" style="background: #5F30E2;color: white">Submit</button>
        </b-row>
    </form>

</template>
<script>
export default {
    name: "AddUser"
}
</script>