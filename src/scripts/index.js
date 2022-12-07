
function addSugestionUsers(database,sugestions){

    const SugestionUsersArea = document.querySelector(".user-sugestion-area-container")

    for(let i=0;i<sugestions.length;i++){
        for(let j = 0;j<database.length;j++){

            if(database[j].id === sugestions[i]){
                
                // console.log(database[j].id)
                const liSugestionCard = document.createElement("li")
                liSugestionCard.classList.add("user-sugestion-profile-card")
                
                const divProfileSugestionCard = document.createElement("div")
                divProfileSugestionCard.classList.add("user-sugestion-profile")
                
                const imgSugestionCard = document.createElement("img")
                imgSugestionCard.src =  database[j].img
                imgSugestionCard.alt = database[j].user
                
                const divTextProfileCard = document.createElement("div")
                divTextProfileCard.classList.add("user-sugestion-profile-text")
                
                const h3UsernameSugestion = document.createElement("h3")
                h3UsernameSugestion.innerText = database[j].user
                
                const pJobSugestion = document.createElement("p")
                pJobSugestion.innerText = database[j].stack 
                
                const buttonFollow = document.createElement("button")
                buttonFollow.classList.add("sugestion-follow-button")
                buttonFollow.innerText = "Seguir"
                
                divTextProfileCard.append(h3UsernameSugestion,pJobSugestion)
                divProfileSugestionCard.append(imgSugestionCard,divTextProfileCard)
                liSugestionCard.append(divProfileSugestionCard,buttonFollow)
                
                SugestionUsersArea.appendChild(liSugestionCard)
                
                // console.log(liSugestionCard)
                // buttons
                let followClick = false

                buttonFollow.addEventListener("click",()=>{
                    if(!followClick){
                        followClick = true
                        buttonFollow.innerText = "Seguindo"
                        buttonFollow.classList.toggle("followed")
                    }else{
                        followClick = false
                        buttonFollow.innerText = "Seguir"
                        buttonFollow.classList.toggle("followed")
                    }
                    
                })
            }
        }
                
     }
    
}
addSugestionUsers(users,sugestUsers)

// POST

function addPosts(post,database){

    const PostAreaContainer = document.querySelector(".post-area-container")

    for(let i=0;i<post.length;i++){
        for(let j = 0; j < database.length;j++){
            if(post[i].user === database[j].id){

             // profile
                // console.log(post)
                
                const liPostAreaCard = document.createElement("li")
                liPostAreaCard.classList.add("post-area-card")
                
                const divPostAreaprofile = document.createElement("div")
                divPostAreaprofile.classList.add("post-area-profile-card")
                
                const imgPostAreaProfile = document.createElement("img")
                imgPostAreaProfile.src = database[j].img
                imgPostAreaProfile.alt = database[j].user
                
                const divPostAreaProfileText = document.createElement("div")
                divPostAreaProfileText.classList.add("post-area-profile-card-text-area")

                const h3PostAreaProfileName = document.createElement("h3")
                h3PostAreaProfileName.innerText = database[j].user
                const pPostAreaProfileStack = document.createElement("p")
                pPostAreaProfileStack.innerText = database[j].stack
                //    Texto

                const divPostText = document.createElement("div")
                divPostText.classList.add("post-area-card-text-area")
                    
                const h2PostText = document.createElement("h2")
                h2PostText.innerText = post[i].title
                const h3PostText = document.createElement("h3")
                h3PostText.innerText = post[i].text
                //    Botores
                const divbuttonArea = document.createElement("div")
                divbuttonArea.classList.add("post-area-card-buttons-area")
                    
                const buttonPostArea = document.createElement("button")
                buttonPostArea.classList.add("open-post-button")
                buttonPostArea.innerText = "Abrir Post"
                buttonPostArea.id = database[j].id
                    
                const divlikeArea = document.createElement("div")
                divlikeArea.classList.add("like-area")
                    
                const pLikeArea = document.createElement("p")
                pLikeArea.classList.add("like-button")
                pLikeArea.classList.add("not-liked")
                    
                
                const smallLikeArea = document.createElement("small")
                smallLikeArea.classList.add("like-button-count")
                smallLikeArea.innerText = 0
                
                
                divPostAreaprofile.append(imgPostAreaProfile,divPostAreaProfileText)
                divPostAreaProfileText.append(h3PostAreaProfileName,pPostAreaProfileStack)
                divPostText.append(h2PostText,h3PostText)
                divlikeArea.append(pLikeArea,smallLikeArea)
                divbuttonArea.append(buttonPostArea,divlikeArea)
                liPostAreaCard.append(divPostAreaprofile,divPostText,divbuttonArea)
                
                PostAreaContainer.appendChild(liPostAreaCard)
                
                
                // buttons
                
                let cliked = false
                
                pLikeArea.addEventListener("click", ()=>{

                if(!cliked){
                    cliked = true
                    pLikeArea.classList.toggle("liked")
                    smallLikeArea.textContent++
                }else{
                    cliked = false
                    pLikeArea.classList.toggle("liked")
                    smallLikeArea.textContent--
                }
                  
                })


            }
        }
    }
}

addPosts(posts,users)



function addModal(array,database){
    const buttons = document.querySelectorAll(".open-post-button")

    for(let i = 0; i < buttons.length;i++){
        buttons[i].addEventListener("click",()=>{
            for(let j = 0;j < array.length;j++){
                if(buttons[i].id == array[j].user){
                    console.log(buttons[i].id)

                    const main = document.querySelector(".main-container")

                    const modalsection = document.createElement("section")
                    modalsection.classList.add("modal")
                    modalsection.classList.add("showModal")

                    const modalcontainer = document.createElement("div")
                    modalcontainer.classList.add("modal-container")

                    const modalTopSection = document.createElement("div")
                    modalTopSection.classList.add("modal-top")

                    const modalProfileDiv = document.createElement("div")
                    modalProfileDiv.classList.add("modal-profile")

                    const modalImg = document.createElement("img")
                    modalImg.src = database[(array[j].user)-1].img
                    
                    const modalProfileText = document.createElement("div")
                    modalProfileText.classList.add("modal-profile-text")

                    const modalName = document.createElement("h2")
                    modalName.innerText = database[(array[j].user)-1].user

                    const modalStack = document.createElement("p")
                    modalStack.innerText = database[(array[j].user)-1].stack
                    
                    const modalClose = document.createElement("span")
                    modalClose.innerText = "X"
                    modalClose.classList.add("modal-close")

                    
                    const modalh2Text = document.createElement("h2")
                    modalh2Text.innerText = array[i].title
                    const modalh3Text = document.createElement("h3")
                    modalh3Text.innerText = array[i].text
                    
                    modalClose.addEventListener("click",()=>{
                      modalsection.classList.toggle("showModal")
                      
                    })
                    
                    modalProfileText.append(modalName,modalStack)
                    modalProfileDiv.append(modalImg,modalProfileText)
                    modalTopSection.append(modalProfileDiv,modalClose)
                    modalcontainer.append(modalTopSection,modalh2Text,modalh3Text)
                    modalsection.append(modalcontainer)
                    
                    main.appendChild(modalsection)
                    
                }
            }
        })
    }


}

addModal(posts,users)
