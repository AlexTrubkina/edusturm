const chatButton = document.querySelectorAll('.chat-item');
const chatFirst = document.querySelector('.chat-first');
const chatSecond = document.querySelector('.chat-second');
const chatThird = document.querySelector('.chat-third');
const chats = document.querySelectorAll('.chat');

let temp;
// переключение между чатами
for (let i = 0; i < chatButton.length; i++) {
    chatButton[i].onclick = clickButton => {
        chatButton[i].classList.add('active');
        chats[i].style.display = 'flex';
        temp = i;
        for (let j = 0; j < chatButton.length; j++) {
            if (j !== temp) {
                chatButton[j].classList.remove('active');
                chats[j].style.display = 'none';
            }
        }
    }
}





// console.log(window.innerWidth);
