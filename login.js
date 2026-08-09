let username = document.getElementById("loginName")
username.addEventListener("change", function (event) {
    console.log("Final Name :", event.target.value)
})

let useremail = document.getElementById("loginEmail")
useremail.addEventListener("change", function (event) {
    console.log("Final Email :", event.target.value)
})

let userpass = document.getElementById("loginEmail")
userpass.addEventListener("change", function (event) {
    console.log("Final Password :", event.target.value)
})

let userconfirmpass = document.getElementById("loginConfirmPassword")
userconfirmpass.addEventListener("change", function (event) {
    console.log("Confirm Password :", event.target.value)
})

let userage = document.getElementById("loginAge")
userage.addEventListener("change", function (event) {
    console.log("Final Age :", event.target.value)
})

let usergender = document.getElementById("loginGender")

let userheight = document.getElementById("loginHeight")

let userweight = document.getElementById("loginWeight")

let usergoal = document.getElementById("loginGoal")

let userremember = document.getElementById("rememberMe")



function remember() {
    let selectedagree = false
    let conditionchecked = null;

    if (userremember.checked == true) {
        selectedagree = true
        conditionchecked = userremember.value
    }
    return conditionchecked;
}

let Submit = document.getElementById("loginBtn")
Submit.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("--------On Submit--------")

    if (username.value = "") {
        alert("Please Enter Name")
        return;
    }

    if (useremail.value = "") {
        alert("Please Enter Email")
        return;
    }

    if (userpass.value = "") {
        alert("Please Enter pass")
        return;
    }

    if (userconfirmpass.value = "") {
        alert("Please Enter confirm Password ")
        return;
    }

    if (userpass.value !== userconfirmpass.value) {
        alert("Confirm password is not correct")
        return;
    }

    if (userage.value = "") {
        alert("Please Enter Age")
        return;
    }

    if (usergender.value = "") {
        alert("Please Enter Gender")
        return;
    }

    if (userheight.value = "") {
        alert("Please Enter height")
        return;
    }

    if (userweight.value = "") {
        alert("Please Enter weight")
        return;
    }

    if (usergoal.value = "") {
        alert("Please Enter Goal")
        return;
    }

    console.log("Name :", username.value)
    console.log("Email :", useremail.value)
    console.log("Password :", userpass.value)
    console.log("Confirm Password :", userconfirmpass.value)
    console.log("Age :", userage.value)
    console.log("Gender :", usergender.value)
    console.log("Height :", userheight.value)
    console.log("Weight :", userweight.value)
    console.log("Goal :", usergoal.value)

    let rememberr = remember();
    console.log(rememberr)

    if (!rememberr) {
        alert("Plese check on remember me")
    }

    let payload = {
        Name: username.value,
        Email: useremail.value,
        Password: userpass.value,
        Confrim: userconfirmpass.value,
        Age : userage.value,
        Gender: gender.value,
        Height : userheight.value,
        Weight : userweight.value,
        Goal : usergoal.value
    }

    console.table("Payload", payload)

})