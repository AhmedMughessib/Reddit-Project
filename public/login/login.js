const submitBtn = document.getElementById("singupsubmit")
const userEmail = document.getElementById("singupemail")
const userPassword = document.getElementById("singuppassword")

submitBtn.addEventListener('click',()=>{
    fetch('/loginaction',{
        method:'POST',
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
            Email: userEmail.value,
            password: userPassword.value
        })
    })
})