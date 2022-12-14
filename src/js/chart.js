new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Успеваемость", "Успеваемость", "Успеваемость", "Успеваемость"],
        datasets: [{
            label: "Grades",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            data: [13, 10, 2, 1]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Всего'
        }
    },

});
