import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function Histogram({ graphTitle, barTitle, labels, data }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: graphTitle,
            },
        },
    };

    const graphData = {
        labels: labels,
        datasets: [{
            label: barTitle,
            data: data,
            backgroundColor: "#a0c5dd",
            borderColor: "rgb(255, 255, 210)",
            borderWidth: 1
        }]
    }

    return <Bar options={options} data={graphData} />;
}