const chatButton = document.querySelectorAll('.chat-item');
const chatFirst = document.querySelector('.chat-first');
const chatSecond = document.querySelector('.chat-second');
const chatThird = document.querySelector('.chat-third');





    chatButton[0].onclick = () => {
        chatButton[0].classList.add('active');
        chatButton[1].classList.remove('active');
        chatButton[2].classList.remove('active');
        chatFirst.style.display = 'flex';
        chatSecond.style.display = 'none';
        chatThird.style.display = 'none';
    }

    chatButton[1].onclick = () => {
        chatButton[1].classList.add('active');
        chatButton[0].classList.remove('active');
        chatButton[2].classList.remove('active');
        chatSecond.style.display = 'flex';
        chatFirst.style.display = 'none';
        chatThird.style.display = 'none';
    }

    chatButton[2].onclick = () => {
        chatButton[2].classList.add('active');
        chatButton[1].classList.remove('active');
        chatButton[0].classList.remove('active');
        chatThird.style.display = 'flex';
        chatFirst.style.display = 'none';
        chatSecond.style.display = 'none';
    }
