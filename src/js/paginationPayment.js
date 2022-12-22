const payments = document.querySelector('.payments');
const payment = document.querySelector('.payment')


const lengthOfPayments = payments.children.length;
let height = payments.scrollHeight;
let heightPayment = payment.scrollHeight;

if (lengthOfPayments <= 3) {
    payments.style.height = height + "px";
} else if (lengthOfPayments <= 10) {
    let difference = heightPayment * (lengthOfPayments - 3);
    payments.style.height = height - difference + "px";
}

onresize = (event) => {
    height = payments.scrollHeight;
    heightPayment = payment.scrollHeight;

    if (lengthOfPayments <= 3) {
        payments.style.height = height + "px";
    } else if (lengthOfPayments <= 10) {
        difference = heightPayment * (lengthOfPayments - 3);
        payments.style.height = height - difference + "px";
    }
};
