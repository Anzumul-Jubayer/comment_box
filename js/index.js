  const newComment= document.getElementById('new-comment')
// for comment
document.getElementById('comment-btn').addEventListener('click',function(){
 
    const commentArea = document.getElementById('comment-area')
    const commentValue = commentArea.value
    let setComment = document.createElement('p')
    setComment.classList.add("ml-2","mt-2", "bg-cyan-100","p-4","border-2","w-1/2","rounded-lg")
    commentArea.value=""
     setComment.innerHTML=commentValue
    newComment.appendChild(setComment)

})
// Like 
document.getElementById('like-btn').addEventListener('click',function(){
     let likebtn= document.querySelector('#like')
    
      let likeCount=likebtn.innerText
      let newlikeCount=parseInt(likeCount)
      newlikeCount++
      likebtn.innerText=newlikeCount
      
})
