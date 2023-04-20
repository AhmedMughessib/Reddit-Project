const submitBtn = document.getElementById("singupsubmit")
const userEmail = document.getElementById("singupemail")
const userPassword = document.getElementById("singuppassword")
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('/loginaction',{
        method:'POST',
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
            Email: userEmail.value,
            password: userPassword.value
        })
    }).then(result=>result.json())
    .then(result=>{
        // const myCookie= result.headers.get("Set-Cookie");
        // document.cookie=myCookie
        
    })

})