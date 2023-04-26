
document.addEventListener("DOMContentLoaded", () => {

    fetch("/userinfo").then(res => res.json()).then(result => {
        const userName = document.getElementById('username')
        userName.textContent = result.name;
        const userImage = document.getElementById('userimage');
        userImage.setAttribute('src',result.image)

    })
    const url = document.location.href;
    newUrl = url.toString().split('users/')[1]
    fetch(`/userprofile/${newUrl}`).then(res => res.json()).then(result => {

        const profileUserName = document.querySelector('.followedusername')
        const profileUserEmail = document.querySelector('.followedemail')
        const profileUserImage = document.querySelector('.followeduserimage')

        profileUserName.textContent = result[0].name;
        profileUserEmail.textContent = result[0].email;
        profileUserImage.setAttribute('src',result[0].img_url)




        for (let i=0; i < result.length; i++) {

            const postBody =  document.createElement('div');
            postBody.classList.add('post');
    
            const elementcontent = document.createElement('p');
            elementcontent.classList.add('elementcontent');
            const postowner = document.createElement('div');
            postowner.classList.add('postowner');
            postowner.appendChild(elementcontent);
    
            const posttitle = document.createElement('div');
            posttitle.classList.add('posttitle');
            const posttitleH1 =document.createElement('h1');
            posttitle.appendChild(posttitleH1);
    
            const posttext = document.createElement('div');
            posttext.classList.add('posttext');
    
            const postimage = document.createElement('img');
            postimage.classList.add('postimage');
            const postimageelement = document.createElement('div');
            postimageelement.classList.add('postimageelement');
            postimageelement.appendChild(postimage);
    
    
            postBody.appendChild(postowner);
            postBody.appendChild(posttitle);
            postBody.appendChild(posttext);
            postBody.appendChild(postimageelement);
    
    
            elementcontent.textContent = result[i].name + ' Posted';
            posttitleH1.textContent = result[i].title;
            posttext.textContent = result[i].posttext;
            postimage.setAttribute('src',result[i].post_img);
    
    
            const posts = document.getElementById('postsid');
            posts.appendChild(postBody)
    
        }

    })


})







const logOutBtn = document.getElementById('logoutbutton');
logOutBtn.addEventListener("click", () => {
    fetch("/logout")
})
