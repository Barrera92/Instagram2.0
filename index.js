
const photoPrincipal = Array.from(document.querySelectorAll(".photo-principal img"))

const likeCount = Array.from(document.querySelectorAll(".like-insta"))

let instaLikes = [21492, 15137, 12502, 1502, 25462, 3841, 2462]

function renderLikes(i){
    instaLikes[i] += 1

    for(let i = 0 ; i < likeCount.length; i++){
        likeCount[i].textContent = `${instaLikes[i]} likes`
    }
}
renderLikes()

for(let i = 0 ; i < photoPrincipal.length; i++){
    photoPrincipal[i].addEventListener("dblclick", (e) => {
        if(e.target.src === photoPrincipal[i].src){
            renderLikes(i)
        }
    })
}



// photoPrincipal[0].addEventListener("click", function(){
//     likeCount[0].textContent = `${likeImg1 += 1} likes`
// })
// photoPrincipal[1].addEventListener("click", function(){
//     likeCount[1].textContent = `${likeImg2 += 1} likes`
// })
// photoPrincipal[1].addEventListener("click", function(){
//     likeCount[1].textContent = `${likeImg2 += 1} likes`
// })
