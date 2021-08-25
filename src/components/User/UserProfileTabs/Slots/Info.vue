<template>
    <b-container class="tab-view-container">
        <b-form>
            <b-col class="form-group-column">
                <b-form-group class="form-group">
                    <b-row class="w-100 form-group-lable">
                        <img class="form-group-lable-icon" src="./assets/ic_profile.png"/>
                        <div class="form-group-lable-text">Name</div>
                    </b-row>
                    <b-form-input id="name" type="text" class="w=100 form-group-input" autocomplete="false"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col class="form-group-column">
                <b-form-group class="form-group">
                    <b-row class="w-100 form-group-lable">
                        <img class="form-group-lable-icon" src="./assets/ic_mail.png"/>
                        <div class="form-group-lable-text">e-mail</div>
                    </b-row>
                    <b-form-input id="email" type="text" class="w=100 form-group-input" autocomplete="false"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col class="form-group-column">
                <b-form-group class="form-group">
                    <b-row class="w-100 form-group-lable">
                        <img class="form-group-lable-icon" src="./assets/ic_password.png"/>
                        <div class="form-group-lable-text">password</div>
                    </b-row>
                    <b-form-input id="password" type="password" class="w=100 form-group-input" autocomplete="false"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col class="form-group-column">
                <b-form-group class="form-group">
                    <b-row class="w-100 form-group-lable">
                        <img class="form-group-lable-icon" src="./assets/ic_phone.png"/>
                        <div class="form-group-lable-text">phone</div>
                    </b-row>
                    <b-form-input id="phone" type="number" class="w=100 form-group-input" autocomplete="false"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col class="form-group-column">
                <b-row class="form-actions">
                        <button class="form-btn" @click="$event.preventDefault()">Reset</button>
                        <button class="form-btn" @click="$event.preventDefault()" style="background: #5F30E2;color: white">Submit</button>
                    </b-row>
            </b-col>
        </b-form>
    </b-container>
</template>

<style scoped>
    .form-group-lable-icon{
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
        margin: 0px
    }

    .form-group-lable-text {
        font-size: 18px;
        font-style: medium;
    }

    .form-group-lable {
        margin: 0px;
    }

    .form-group-column {
        margin-top: 10px;
        justify-content: center;
        width: fit-content;
        width: 500px;
    }

    .form-group-input {
        margin: 13px 0px 33px 0px;
        border: 2px solid #7E7DDE;
    }

    .tab-view-container {
        display: flex;
        justify-content: center;
    }

    .form-btn {
        width: fit-content;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        padding: 15px 34px;
        border-radius: 19px;
        border: 0px;
        margin: 0px 0px 100px 15px;
    }

    .form-actions {
        width: fit-content;
        float: right;
    }
</style>
    
<script>
export default {
    name: "Info",
}
</script>