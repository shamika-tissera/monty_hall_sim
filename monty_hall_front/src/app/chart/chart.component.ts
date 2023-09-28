import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SharedService } from '../shared.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  currentWins: number = 0;
  currentLosses: number = 0;
  barChart: any;


  constructor(private data: SharedService) { }

  ngOnInit(): void {
    this.RenderChart();
    // subscribe to the behaviour subject
    this.data.currentArray.subscribe(array => {
      this.currentWins = array[0];
      this.currentLosses = array[1];

      this.barChart.data.datasets[0].data = [this.currentWins, this.currentLosses];
      this.barChart.update();
    }
    );
  }
  
  RenderChart() {
    var ctx = document.getElementById('bar_chart') as HTMLCanvasElement;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Wins', 'Losses'],
        datasets: [{
          label: 'Wins',
          data: [this.currentWins, this.currentLosses],
          backgroundColor: [
            '#ffdb58',
            '#6efafb'
          ],
          borderColor: [
            '#ffdb58',
            '#6efafb'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        color: '#fff',
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#fff',
            },
            grid: {
              color: '#fff',
            }
          },
          x: {
            ticks: {
              color: '#fff',
            },
            grid: {
              color: '#fff',
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Number of Wins and Losses',
            color: '#fff',
          }
        }
      }
    });
  }
}
