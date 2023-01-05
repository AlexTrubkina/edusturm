const chatButton = document.querySelectorAll('.chat-item');
const chats = document.querySelectorAll('.chat');
const chatList = document.querySelector('.chat-list');

const returnButton = document.querySelector('.return-mobile');


// переключение между чатами

const length = chatButton.length;


for (let i = 1; i < length; i ++) {
    chats[i].style.display = 'none';
}

function fullScreen() {
    let temp;
    for (let i = 0; i < length; i++) {
        chatButton[i].onclick = clickButton => {
            chatButton[i].classList.add('active'); // при нажатии выделяется кнопка активного чата
            chats[i].style.display = 'flex'; // показываеься активный чат
            temp = i; // временная переменная чтобы обозначить активный чат
            for (let j = 0; j < length; j++) {
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
    if (window.innerWidth >= 768 && chatList.style.display === 'none') {
        chatList.style.display = 'flex'; // показываем все кнопки
        returnButton.style.display = 'none'; // убираем кнопку возврата
        fullScreen();
    }
    if (window.innerWidth <= 767 && chatList.style.display !== 'none') { // при переключении на моб версию
        mobileVersion();
    }
    if (window.innerWidth >= 768) {
        returnButton.style.display = 'none';
        let count = 0;
        let activeMobileChat = 0;
        for (let index = 0; index < length; index++) {
            if (chats[index].style.display === 'none') { // считаем количество непоказанных чатов
                count ++
            }
            if (chats[index].style.display !== 'none') {
                activeMobileChat = index;
                // console.log(chats[index].style.display);
                // console.log(index, chats[index].style.display !== 'none');
            }
        }
        if (count === length) { // если ни один чат не показан, показываем первый
            chats[0].style.display = 'flex'; 
            chatButton[0].classList.add('active');
        }
        else {
            chatButton[activeMobileChat].classList.add('active'); // если чат показан, доваляем активный индикатор этого чата
        }
        fullScreen();
    }
};

// мобильная версия переключения
function mobileVersion() {
    let temp;
    if (window.innerWidth <= 767) {
        returnButton.style.display = 'none'; // убираем кнопку возврата
        for (let i = 0; i < length; i++) {
            chats[i].style.display = 'none'; // убираем все чаты
            chatButton[i].classList.remove('active');
            chatButton[i].onclick = clickButton => {
                chatList.style.display = 'none'; //убираем все кнопки чатов
                returnButton.style.display = 'flex'; // при переходе в чат показывaем кнопку возврата
                chats[i].style.display = 'flex'; // показываем текущий чат
                temp = i;
                for (let j = 0; j < length; j++) {
                    if (j !== temp) { // проверяем что чат не действующий и убираем остальные
                        chats[j].style.display = 'none';
                    }
                }
            }
        }
        // нажатие на кнопку возврата
        returnButton.onclick = () => {
            chatList.style.display = 'flex'; // показываем все кнопки
            returnButton.style.display = 'none'; // убираем кнопку возврата
            for (let i = 0; i < length; i++) {
                chats[i].style.display = 'none'; // убираем все чаты
            }
        }

    }
}

mobileVersion();
