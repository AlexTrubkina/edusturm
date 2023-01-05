// отправка сообщения после нажатия на кнопку
let cardBody = document.querySelector(".card-body");
(function () {
    const cards = document.querySelectorAll(".card");
    const anchor = document.querySelector(".anchor");
    // если на странице больше одного чата
    cards.forEach((item, i) => {
        const input = item.querySelector("input");
        input.addEventListener("keydown", function (e) {
            if (e.key === 'Enter') {
                const cardBody = item.querySelector(".card-body");
                if (this.value !== "") {
                    const parentBlock = document.createElement("div");
                    parentBlock.className =
                        "chat-user justify-content-end align-items-center w-100 mb-3";
                    const userMessage = document.createElement("div");
                    userMessage.className = "chat-user-message";
                    const text = document.createTextNode(this.value);
                    userMessage.appendChild(text);
                    const img = document.createElement("img");
                    img.setAttribute("src", "../../../images/avatar.png");
                    img.setAttribute("alt", "avatar");
                    parentBlock.appendChild(userMessage);
                    parentBlock.appendChild(img);
                    // console.log(parentBlock);
                    cardBody.insertBefore(parentBlock, anchor);
                    // newMessage = `<div class="chat-user justify-content-end align-items-center w-100 mb-3">
                    //                     <div class="chat-user-message" >` + this.value + `</div><img src="../../../images/avatar.png" alt="Avatar"></div>`
                    // cardBody.innerHTML += newMessage;
                    this.value = "";
                    cardBody.scrollTo(0, cardBody.scrollHeight);
                }
            }
        });
    });
})();


            
   


