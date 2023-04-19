const submitBtn = document.getElementById("singupsubmit");
const userEmail = document.getElementById("singupemail");
const userName = document.getElementById("singupusername");
const userPassword = document.getElementById("singuppassword");
const userPasswordAgain = document.getElementById("singupconfirmpassword");
const userImage = document.getElementById("singupuserimage");


submitBtn.addEventListener("click",()=>{
fetch("/signupaction", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            Email: userEmail.value,
            username: userName.value,
            password: userPassword.value,
            passwordConfirmation: userPasswordAgain.value,
            image: userImage.value,
        })
      })
})
