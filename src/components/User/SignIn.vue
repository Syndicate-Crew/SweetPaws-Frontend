<template>
    <b-container class="form-wrapper">
        <b-col class="form-component-wrapper">
            <div class="form-title">Sign in</div>
            <b-input id="email" type="email" class="w=100 form-input" autocomplete="false" placeholder="E Mail"></b-input>
            <b-input id="password" type="password" class="w=100 form-input" autocomplete="false" placeholder="Password"></b-input>
            <div class="show-password"><span><b-checkbox id="show-password" type="checkbox"></b-checkbox></span>Show Password</div>
            <div class="forgot-password">Forgot Password</div>
            <b-row class="form-actions">
                <button class="form-btn" @click="$event.preventDefault()">Reset</button>
                <button class="form-btn" @click="$event.preventDefault()" style="background: #5F30E2;color: white">Submit</button>
            </b-row>

            <div class="form-hint w-100">
                <center>
                    Click here to <span class="form-hint-link">Create an account</span>
                </center>
            </div>
        </b-col>
    </b-container>
</template>

<style scoped>
/*<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">*/
.form-wrapper{
    text-align: start;
    width: 629px;
    background: #FFFFFF;
    border-radius: 33px;
    overflow: hidden;
    margin: 30px auto;
}

.form-title {
    margin: 80px auto 110px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
}

.form-btn {
    width: fit-content;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 15px 34px;
    border-radius: 19px;
    border: 0px;
    margin: 29px 0px 26px 15px;
}

.form-actions {
    width: fit-content;
    margin: 0px;
    display: inline-flex;
    float: right;
    margin-bottom: 66px;
}


.form-hint {
    clear: both;
    margin-bottom: 98px;
}

.form-hint-link {
    color: #2B33FF;
}

.form-component-wrapper {
    margin: 0px 105px;
}

.form-input {
    margin: 13px 0px 19px 0px;
    border: 2px solid #7E7DDE;
}

.show-password * {
    display: inline-block;
    margin: 0px 5px 0px 0px;
}

.show-password {
    font-weight: 500;
    font-size: 15px;
    padding: 3px 0px;
}

.forgot-password {
    font-weight: 500;
    font-size: 15px;
    color: #2B33FF;
    padding: 3px 0px;
}

</style>