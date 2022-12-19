new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Успеваемость", "Успеваемость", "Успеваемость", "Успеваемость"],
        datasets: [{
            label: "Чел.",
            backgroundColor: ["#FBAE3C", "#232745", "#96446E", "#F17C53"],
            data: [13, 10, 2, 4]
        }]
    },
    options: {
        cutout: 70,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Всего',
                align: 'start'
            },
            subtitle: {
                display: true,
                text: '29 чел',
                align: 'start',
                color: 'black',
                font: {
                    size: 25,
                }
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: "black",
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        const sum = datasets[0].data.reduce((partialSum, a) => partialSum + a, 0);
                        return datasets[0].data.map((data, i) => ({
                            text: `${chart.data.labels[i]} ${Math.round(sum/100 * data)}%`,
                            fillStyle: datasets[0].backgroundColor[i],
                        }))
                    },
                    font: {
                        size: 16,
                    },
                }
            }
        },

    },
});
