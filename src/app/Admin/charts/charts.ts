import { Chart } from 'chart.js';


export const mychart1 = () =>{
    const myChart = new Chart('myChart', {
      type: 'radar',
      data: {
        labels: [
          'Nairobi',
          'Mombasa',
          'Nakuru',
          'Kericho',
          'Muranga',
          'Machakos',
        ],
        datasets: [
          {
            label: 'Clients',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(3, 90, 252, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
}


export const chart2 = () => {
    const myChart2 = new Chart('mydonurght', {
      type: 'doughnut',
      data: {
        labels: [
          'Nairobi',
          'Mombasa',
          'Nakuru',
          'Kericho',
          'Muranga',
          'Machakos',
        ],
        datasets: [
          {
            label: 'Clients',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(87,50,251, 1)',
              'rgba(3, 90, 252, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
}


