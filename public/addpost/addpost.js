const postBtn = document.getElementById("postbutton");
const postTitle = document.getElementById("title");
const postImage = document.getElementById("imageurl");
const postText = document.getElementById("posttext");


postBtn.addEventListener("click",(e) => {
    e.preventDefault();
    fetch("/addpostaction", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            Title: postTitle.value,
            imageUrl: postImage.value,
            Text: postText.value
        }),
        credentials: "include"
    }).then(window.location.href ='/main')
})


document.addEventListener("DOMContentLoaded", () => {
    fetch("/userinfo").then(res => res.json()).then(result => {
        const userName = document.getElementById('username')
        userName.textContent = result.name;
        const userImage = document.getElementById('userimage');
        userImage.setAttribute('src',result.image)

        const profileIcon = document.querySelector('.profileicon')
            profileIcon.setAttribute("href", `/users/${result.name}`)
    })
})