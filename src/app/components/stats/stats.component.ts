import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  public barChartLabels = ['London', 'New York', 'Sydney', 'Mumbai', 'Hong Kong', 'Paris'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [8.6, 19.34, 5.2, 21.7, 7.52, 2.24], label: 'Series A'}
  ];

  public radarChartLabels =  ['London', 'New York', 'Sydney', 'Mumbai', 'Hong Kong', 'Paris'];
  public radarChartData = [
    {data: [1572, 783.8, 1234, 604.3, 1106, 105.4], label: 'Area'},
    {data: [5701, 2700, 4300, 6000, 7140,3000], label: 'Population density'}
  ];
  public radarChartType = 'radar';

  ngOnInit(): void {
  }

}
