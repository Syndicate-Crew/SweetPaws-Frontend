<template>
    <b-container fluid class="w-75 form-wrapper">
        <b-col class="form-component-wrapper">
            <div class="form-title">Sign up</div>
            <b-row class="form-col-row" cols-sm="1" cols="2" cols-md="2">
                <b-col>
                    <div class="form-image-container">
                        <div class="form-image-div overlay-background"></div>
                        <div class="form-image-div overlay">
                            <label for="file-upload" class="custom-file-upload">
                                <!-- click here to select file -->
                                <i class="bi bi-upload"></i>
                            </label>
                            <input id="file-upload" type="file"/>
                        </div>
                    </div>
                </b-col>
                <b-col cols="8">
                    <b-input id="name" type="text" class="w=75 form-input" autocomplete="false" placeholder="Name"></b-input>
                    <b-input id="email" type="email" class="w=75 form-input" autocomplete="false" placeholder="E Mail"></b-input>
                    <b-input id="password" type="password" class="w=75 form-input" autocomplete="false" placeholder="Password"></b-input>
                    <div class="show-password"><span><input type="checkbox"/></span>Show Password</div>
                    <b-input id="confirm-password" type="password" class="w=75 form-input" autocomplete="false" placeholder="Confirm password"></b-input>
                </b-col>
            </b-row>
            <b-row class="form-actions">
                <button class="form-btn" @click="$event.preventDefault()">Reset</button>
                <button class="form-btn" @click="$event.preventDefault()" style="background: #5F30E2;color: white">Submit</button>
            </b-row>
        </b-col>
        <div class="form-hint">
                    <center>Already have an account? <span class="form-hint-link">Sign in</span></center>
                </div>
    </b-container>
</template>

<style scoped>
.form-wrapper {
    margin: 110px auto;
    background: #FFFFFF;
    border-radius: 33px;
    overflow: hidden;
}

.form-title {
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #171859;
}

.form-component-wrapper {
    margin: 80px 90px 50px 90px;
    overflow: hidden;
}

.form-col-row {
    margin: 90px 0px 30px 0px;
}

.form-input {
    margin: 13px 0px 19px 0px;
    border: 2px solid #7E7DDE;
}

.show-password * {
    display: inline-block;
    margin: 0px 5px 0px 0px;
}

.form-btn {
    width: fit-content;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 15px 34px;
    border-radius: 19px;
    border: 0px;
    margin: 0px 15px 40px 0px;
}

.form-actions {
    width: fit-content;
    float: right;
}

.form-hint {
    clear: both;
    margin-bottom: 98px;
}

.form-hint-link {
    color: #2B33FF;
}

.form-image-div {
    background-color: #171859;
    width: inherit;
    height: inherit;
}

.form-image-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;
    border-radius: 19px;
}

.form-image-div {
    background-color: #171859;
    width: inherit;
    height: inherit;
}

.overlay-background {
    background-color: yellow;
}

.overlay {
    text-align: center;
    vertical-align: middle;
    background-color: #171859;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    opacity: 0;
    transition: 300ms;
}

.form-image-container:hover .overlay{
   opacity: 1;
}

#file-upload {
    visibility: hidden;
}

.custom-file-upload {
    color: white;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}

.custom-file-upload:hover {
    cursor: pointer;
}

</style>
