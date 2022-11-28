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
import { CHART_REGULAR_BG_COLOR, CHART_REGULAR_BORDER_COLOR } from '../../constant/constant';

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
            backgroundColor: CHART_REGULAR_BG_COLOR,
            borderColor: CHART_REGULAR_BORDER_COLOR,
            borderWidth: 1
        }]
    }

    return <Bar options={options} data={graphData} />;
}