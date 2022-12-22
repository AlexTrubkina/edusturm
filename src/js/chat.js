// отправка сообщения после нажатия на кнопку

(function() {
    const cards = document.querySelectorAll('.card');
    // если на странице больше одного чата
    cards.forEach((item, i) => {
        const input = item.querySelector('input');
        input.addEventListener('keydown', function(e) {
            let newMessage = '';
            if (e.keyCode === 13) {
                const cardBody = item.querySelector(".card-body");
                if (this.value !== "") {
                    newMessage = `<div class="chat-user justify-content-end align-items-center w-100 mb-3">
                                        <div class="chat-user-message" >` + this.value + `</div><img src="../../../images/avatar.png" alt="Avatar"></div>`
                    cardBody.innerHTML += newMessage;
                    this.value = "";
                }
            }
        });
    });
})();
