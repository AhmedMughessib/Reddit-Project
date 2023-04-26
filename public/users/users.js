document.addEventListener("DOMContentLoaded", () => {
    



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
    
            const userLink = document.createElement('a');
            userLink.setAttribute('href', `/users/${result[i].name}`)
            
            const elementcontent = document.createElement('p');
            elementcontent.classList.add('elementcontent');

            userLink.appendChild(elementcontent)

            const postowner = document.createElement('div');
            postowner.classList.add('postowner');
            postowner.appendChild(userLink);
    
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


            const userActions = document.createElement('div');
            userActions.classList.add("useractions");

            const upvote = document.createElement('button');
            upvote.classList.add('upvote')
            const upvoteIcon = document.createElement('i');
            upvoteIcon.classList.add('ri-arrow-up-line');
            upvote.appendChild(upvoteIcon);

            const numberofVotes = document.createElement('p');
            numberofVotes.classList.add('numberofVotes');
            const upvotecontainer = document.createElement('div');
            upvotecontainer.classList.add('upvotecontainer');

            upvotecontainer.appendChild(upvote);
            upvotecontainer.appendChild(numberofVotes)


            upvote.addEventListener("click", () => {
                fetch('/upvote', {
                    method: "POST",
                    headers:  {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        post_id: result[i].id
                    })

                })
            })

            const comment = document.createElement('button');
            comment.classList.add('comment');
            const commentIcon = document.createElement('i');
            commentIcon.classList.add('ri-discuss-line')
            comment.appendChild(commentIcon)


            let contentIsLoaded = false;
            comment.addEventListener("click", () => {
                fetch('/comments', {
                    method: "POST",
                    headers:  {'Content-Type': 'application/json'},
                    body: JSON.stringify({post_id: result[i].id})
                }).then(newRes => newRes.json()).then(newResA => {
                    if (!contentIsLoaded) {

                        
                        
                        
                        
                        // ________________________________________________________
                    
                    const commentSection = document.createElement('div'); // this contain the whol comment section;
                    commentSection.classList.add('commentsection');
                    
                    if (!newResA[0].noComments) {
                    
                    
                    for (let i =0; i< newResA.length; i++) {

                        const userComment = document.createElement('div'); // this is one comment; ti will be repeated
                        userComment.classList.add('usercomment');
                        
                        const commentOwnerInfo = document.createElement('div');
                        commentOwnerInfo.classList.add('commentwonerinfo');
                        
                        const commentOwnerImage = document.createElement('img');
                        commentOwnerImage.setAttribute("src", newResA[i].img_url);
                        commentOwnerImage.classList.add('commentwonerimage');
                        
                        
                        const commentOwnerName = document.createElement('p');
                        commentOwnerName.textContent = newResA[i].name;
                        commentOwnerName.classList.add('commentwonername');
                        
                        
                        const commentBody = document.createElement('div');
                        commentBody.textContent = newResA[i].comment_body;
                        commentBody.classList.add('commentbody');
                        
                        commentOwnerInfo.appendChild(commentOwnerImage);
                        commentOwnerInfo.appendChild(commentOwnerName); 
                        
                        userComment.appendChild(commentOwnerInfo);
                        userComment.appendChild(commentBody);
                        
                        commentSection.appendChild(userComment)
                        
                        
                        
                    }
                    
                    // _________________________________________________-
                    
                }
                postBody.appendChild(commentSection)
                
                const userAddComment = document.createElement('div');
                userAddComment.classList.add('useraddcomment');
                
                const addCommentUserInfo = document.createElement('div');
                addCommentUserInfo.classList.add('addcommentuserinfo');
                
                const addCommentImage = document.createElement('img');
                addCommentImage.setAttribute("src", newResA[0].userImage);
                addCommentImage.classList.add('addcommentimage');
                
                const addCommentUsername = document.createElement('p');
                addCommentUsername.textContent = newResA[0].userName;
                addCommentUsername.classList.add('addcommentusername');
                
                
                const addCommentBox = document.createElement('input');
                addCommentBox.type = 'tel';
                addCommentBox.placeholder = 'add a comment';
                addCommentBox.classList.add('addcomentbox');
                
                const addCommentBtn = document.createElement('button');
                addCommentBtn.textContent = 'Comment';
                addCommentBtn.classList.add('addcommentbtn');
                
                addCommentUserInfo.appendChild(addCommentImage);
                addCommentUserInfo.appendChild(addCommentUsername);
                
                userAddComment.appendChild(addCommentUserInfo);
                userAddComment.appendChild(addCommentBox);
                userAddComment.appendChild(addCommentBtn);
                
                postBody.appendChild(userAddComment)
                
                
                addCommentBtn.addEventListener("click", () => {
                    fetch("/addcomment", {
                        method: "POST",
                        headers:  {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            commentValu : addCommentBox.value,
                            posttID : result[i].id,
                            commenterId: newResA[0].userID
                            
                        })
                    })
                })
                
             contentIsLoaded = true;   
            }
                
            })
            
            
        })
        
        
            const createDelete = document.createElement('button');
            createDelete.classList.add('delete');
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('ri-delete-bin-6-line')
            createDelete.appendChild(deleteIcon)
            createDelete.addEventListener("click", ()=>{
                        fetch(`/deletepost/${result[i].id}`, {
                            method: "Delete"
                        }).then(()=>{
                            
                        })

                        
            })

            userActions.appendChild(upvotecontainer);
            userActions.appendChild(comment);
            userActions.appendChild(createDelete);


    
    
            postBody.appendChild(postowner);
            postBody.appendChild(posttitle);
            postBody.appendChild(posttext);
            postBody.appendChild(postimageelement);
            postBody.appendChild(userActions)
            
            
            elementcontent.textContent = result[i].name + ' Posted';
            posttitleH1.textContent = result[i].title;
            posttext.textContent = result[i].posttext;
            numberofVotes.textContent =result[i].votes_count
            postimage.setAttribute('src',result[i].post_img);
            postBody.setAttribute("postDbId", result[i].id)
    
    
            const posts = document.getElementById('postsid');
            posts.appendChild(postBody)
    
        }








        fetch("/userinfo").then(res => res.json()).then(result => {
            const userName = document.getElementById('username')
            userName.textContent = result.name;
            const userImage = document.getElementById('userimage');
            userImage.setAttribute('src',result.image)
    
        })
    })
    
})


const logOutBtn = document.getElementById('logoutbutton');
logOutBtn.addEventListener("click", () => {
    fetch("/logout")
})

