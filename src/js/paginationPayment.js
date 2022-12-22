const payments = document.querySelector('.payments');
const payment = document.querySelector('.payment')


const lengthOfPayments = payments.children.length;
let height;
let heightPayment;

//устанавливаем высоту блока с платежами

function setHeight() {
    height = payments.scrollHeight;
    heightPayment = payment.scrollHeight;

    if (lengthOfPayments <= 3) {
        payments.style.height = height + "px";
    } else if (lengthOfPayments <= 10) {
        let difference = heightPayment * (lengthOfPayments - 3);
        payments.style.height = height - difference + "px";
    }
}

setHeight();

// при изменении размера экрана

onresize = (event) => {
    setHeight();
};
