const submitBtn = document.getElementById("singupsubmit");
const userEmail = document.getElementById("singupemail");
const userName = document.getElementById("singupusername");
const userPassword = document.getElementById("singuppassword");
const userPasswordAgain = document.getElementById("singupconfirmpassword");
const userImage = document.getElementById("singupuserimage");

let massageLoaded = false;
submitBtn.addEventListener("click",(e)=>{
  e.preventDefault()

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
      }).then(res => res.json()).then( res => {

        console.log(res);
        if (!res.valid) {
          if (!massageLoaded) {

            const massage = document.createElement('div');
            massage.classList.add("massage")
            
            const massage1 = document.createElement('div')
            massage1.classList.add('massagefragment')
            const massage2 = document.createElement('div')
            massage2.classList.add('massagefragment')
            const massage3 = document.createElement('div')
            massage3.classList.add('massagefragment')
            const massage4 = document.createElement('div')
            massage4.classList.add('massagefragment')
            
            massage1.textContent = '*Wrong Argumnt! Try Again'
            massage2.textContent = '*Two passwords must match'
            massage3.textContent = '*Usernmae should be more that 4 letters'
            massage4.textContent = '*Email must be of style email@example.com'
            
            massage.appendChild(massage1)
            massage.appendChild(massage2)
            massage.appendChild(massage3)
            massage.appendChild(massage4)
            
            const target = document.querySelector("#singupuserimage")
            target.insertAdjacentElement("afterend", massage)
            
            massageLoaded = true;
          }
            
            
          } else {
          window.location.href = '/login'
        }
        
      }
        
    
        
        
    )
    })
document.addEventListener("DOMContentLoaded", () => {
  
})