new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Успеваемость", "Успеваемость", "Успеваемость", "Успеваемость"],
        datasets: [{
            label: "Grades",
            backgroundColor: ["#FBAE3C", "#232745", "#96446E", "#F17C53"],
            data: [13, 10, 2, 1]
        }]
    },
    options: {
        cutoutPercentage: 70,
        title: {
            display: true,
            text: 'Всего'
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                fontSize: 20,
            }
        }
    },



});
