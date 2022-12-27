const chatButton = document.querySelectorAll('.chat-item');
const chats = document.querySelectorAll('.chat');

const returnButton = document.querySelector('.return-mobile');


// переключение между чатами

function fullScreen() {
    let temp;
    for (let i = 0; i < chatButton.length; i++) {
        chatButton[i].onclick = clickButton => {
            chatButton[i].classList.add('active'); // при нажатии выделяется кнопка активного чата
            chats[i].style.display = 'flex'; // показываеься активный чат
            temp = i; // временная переменная чтобы обозначить активный чат
            for (let j = 0; j < chatButton.length; j++) {
                if (j !== temp) {
                    chatButton[j].classList.remove('active'); // у всех остальных кнопок убирается активный класс
                    chats[j].style.display = 'none'; // все чаты кроме активного убираются
                }
            }
        }
    }
};

fullScreen();


onresize = (event) => {
    if (window.innerWidth >= 768 && chatButton[0].style.display === 'none') {
        for (let i = 0; i < chatButton.length; i++) {
            chatButton[i].style.display = 'flex'; // показываем все кнопки
            returnButton.style.display = 'none'; // убираем кнопку возврата
        }
        fullScreen();
    }
    if (window.innerWidth <= 767 && chatButton[0].style.display !== 'none') { // при переключении на моб версию
        mobileVersion();
    }
    if (window.innerWidth >= 768) {
        returnButton.style.display = 'none';
        let count = 0;
        for (let i = 0; i < chatButton.length; i++) {
            if (chats[i].style.display === 'none') { // считаем количество непоказанных чатов
                count ++
            }
        }
        if (count === chats.length) { // если ни один чат не показан, показываем первый
            chats[0].style.display = 'flex';
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
            chatButton[i].onclick = clickButton => {
                returnButton.style.display = 'flex'; // при переходе в чат показывaем кнопку возврата
                chats[i].style.display = 'flex'; // показываем текущий чат
                chatButton[i].classList.add('active');
                temp = i;
                for (let j = 0; j < chatButton.length; j++) {
                    chatButton[j].classList.remove('active');
                    chatButton[j].style.display = 'none'; //убираем все кнопки чатов
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
