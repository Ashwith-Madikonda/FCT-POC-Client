import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';
@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})

export class StatsComponent {
  public barChartOptions: AgChartOptions;
  constructor() {
    this.barChartOptions = {
      // Data: Data to be displayed in the chart
      data: [
        // { day: 'Monday', avgTemp: 2.3, iceCreamSales: 162000 },
        // { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        // { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        // { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        // { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        // { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        { day: 'Monday', incidents: 10, incident:10 },
        { day: 'Tudesday', incidents: 8, incident:10 },
        { day: 'Wednesday', incidents: 15, incident:10 },
        { day: 'Thursday', incidents: 5, incident:10 },
        { day: 'Friday', incidents: 30, incident:10 },
        { day: 'Saturday', incidents: 20, incident:10 },
        { day: 'Sunday', incidents: 1, incident:10 },
      ],
      // Series: Defines which chart type and data to use
      series: [{ type: 'bar', xKey: 'day', yKey: 'incidents' }]
    };
  }
}
