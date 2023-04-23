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
    })
})
