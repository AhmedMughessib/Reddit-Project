const submitBtn = document.getElementById("singupsubmit")
const userEmail = document.getElementById("singupemail")
const userPassword = document.getElementById("singuppassword")
let massageLoaded = false;
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch('/loginaction',{
        method:'POST',
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
            Email: userEmail.value,
            password: userPassword.value
        })
    }).then(res => res.json()).then(res => {
        console.log(res);
        if (!res.matched) {
            if (!massageLoaded) {
                console.log('fom true');
              const massage = document.createElement('div');
              massage.classList.add("massage");
              massage.textContent = 'Email or password wrong!'
            
              
              const target = document.querySelector("#singuppassword")
              target.insertAdjacentElement("afterend", massage)
              
              massageLoaded = true;
            }
              
              
            } else {
            window.location.href = '/main'
          }
          
      
    })


})