const ctx = new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Приятель", "Дружище", "БРО", "Отслеживают"],
        datasets: [{
            label: "Чел.",
            backgroundColor: ["#FBAE3C", "#232745", "#96446E", "#F17C53"],
            data: [13, 8, 2, 4]
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
                text: '',
                align: 'start',
                color: 'black',
                font: {
                    size: 25,
                    weight: 'bold',
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

const subtitle = () => {
    const data = ctx.data.datasets[0].data;
    const sum = data.reduce((partialSum, a) => partialSum + a, 0);
    if (sum % 10 > 1 && sum % 10 < 5) {
        ctx.options.plugins.subtitle.text = String(sum) + " человека";
    }
    else {
        ctx.options.plugins.subtitle.text = String(sum) + " человек";
    }
    ctx.update();
}
 
subtitle();
