const chatButton = document.querySelectorAll('.chat-item');
const chatFirst = document.querySelector('.chat-first');
const chatSecond = document.querySelector('.chat-second');
const chatThird = document.querySelector('.chat-third');
const chats = document.querySelectorAll('.chat');

const returnButton = document.querySelector('.return-mobile');


// переключение между чатами

function fullScreen() {
    let temp;
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
};

fullScreen();


onresize = (event) => {
    if (window.innerWidth >= 768 && chatButton[0].style.display !== 'none') { // если в мобильной версии не выбран не один чат при увеличении экрана буте показываться первый
        returnButton.style.display = 'none'; // убираем кнопку возврата
        chats[0].style.display = 'flex'; // показываем первый чат
        chatButton[0].classList.add('active');
        fullScreen()
    }
    if (window.innerWidth <= 767) { // при переключении на моб версию
        mobileVersion();
    }
    if (window.innerWidth >= 768 && chatButton[0].style.display === 'none') { // когда выбран чат и переключение на полный экран
        for (let i = 0; i < chatButton.length; i++) {
            chatButton[i].style.display = 'flex';
        }
        fullScreen();
    }
};

// мобильная версия переключения
function mobileVersion() {
    let temp;
    if (window.innerWidth <= 767) {
        for (let i = 0; i < chatButton.length; i++) {
            chats[i].style.display = 'none'; // убираем все чаты
            chatButton[i].classList.remove('active'); // убираем все активные кнопки
            chatButton[i].onclick = clickButton => {
                returnButton.style.display = 'flex'; // при переходе в чат показывем кнопку возврата
                chats[i].style.display = 'flex'; // показываем текущий чат
                temp = i;
                for (let j = 0; j < chatButton.length; j++) {
                    chatButton[j].style.display = 'none'; //убираем все кнопка чатов
                    if (j !== temp) { // проверяем что чат не действующий и убираем остальные
                        chats[j].style.display = 'none';
                    }
                }
            }
        }
        // нажатие на кнопку возврата
        returnButton.onclick = () => {
            for (let i = 0; i < chatButton.length; i++) {
                chats[i].style.display = 'none'; // убираем все чаты
                chatButton[i].style.display = 'flex'; // показываем все кнопки
                returnButton.style.display = 'none'; // убираем кнопку возврата
            }
        }

    }
}

mobileVersion();





// console.log(window.innerWidth);
