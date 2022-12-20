(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        let newMessage = '';
        if (e.keyCode === 13) {
            const cardBody = document.querySelector(".card-body");
            if (this.value !== "") {
                newMessage = `<div class="chat-user justify-content-end align-items-center w-100 mb-3">
                                    <div class="chat-user-message" >` + this.value + `</div><img src="../../../images/avatar.png" alt="Avatar"></div>`
                cardBody.innerHTML += newMessage;
                this.value = "";
            }
        }
    });
})();
