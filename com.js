const submit = document.querySelector('.submit')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const commentsCont = document.querySelector('#commentSection')
//const deleteCom = document.querySelector('.delete')


submit.addEventListener('click', submitReply);



feedbackArr = [];

function submitReply(e){
    const userForm = userName.value
    const commentForm = comment.value
    if(userForm && commentForm !== ''){
        newFeedback ={
        "id": Math.floor((Math.random() * 1000)+ 1),
        "userName": userForm,
        "userComment": commentForm,
        }
        feedbackArr.push(newFeedback)
    
        resetReply()
        addReply(newFeedback)
    }

    e.preventDefault()
}

function resetReply(){
    userName.value = ''
    comment.value = ''
}

function addReply(item){
    const div = document.createElement('div')
    div.classList = 'reply'
    div.id = item.id
    div.innerHTML = `
            <div id="pic">
              
            </div>
            <div id="commentInfo">
              <small class="user">
                ${item.userName}
              </small>
              <button class="delete">Delete</button>
              <button class="edit">Edit</button>
              <p class="comment">
                ${item.userComment}
              </p>
            </div>
    `
    commentsCont.insertAdjacentElement('afterbegin',div)
}

$('.delete').on('click', function(){
    $(commentsCont).removeClass('user')
})