import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tableDataSource = {
    List: [
      {
          ediId: 'A40258220',
          quantity: '3.0',
          requestedDeliveryDate: 'Tue Jul 14 2020 19:54:26 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 19:54:26 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Thu Jul 16 2020 21:04:34 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258221',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 03:55:41 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 03:55:41 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Tue Jul 14 2020 04:21:07 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258222',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 06:04:23 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 06:04:23 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Wed Jul 15 2020 15:33:47 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258223',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 22:41:00 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 22:41:00 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Wed Jul 15 2020 03:25:22 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258224',
          quantity: '3.0',
          requestedDeliveryDate: 'Fri Jul 17 2020 02:09:36 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Fri Jul 17 2020 02:09:36 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Fri Jul 17 2020 23:19:56 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258225',
          quantity: '3.0',
          requestedDeliveryDate: 'Mon Jul 13 2020 07:59:00 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Mon Jul 13 2020 07:59:00 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Mon Jul 13 2020 05:36:56 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258226',
          quantity: '3.0',
          requestedDeliveryDate: 'Tue Jul 14 2020 04:41:52 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 04:41:52 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Tue Jul 14 2020 07:56:32 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258227',
          quantity: '3.0',
          requestedDeliveryDate: 'Sun Jul 12 2020 15:46:33 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Sun Jul 12 2020 15:46:33 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sun Jul 12 2020 02:33:34 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258228',
          quantity: '3.0',
          requestedDeliveryDate: 'Mon Jul 13 2020 20:19:11 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Mon Jul 13 2020 20:19:11 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Thu Jul 16 2020 07:22:55 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258229',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 15:52:07 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 15:52:07 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sun Jul 12 2020 19:56:33 GMT+0000 (UTC)'
      }
  ]
  };
  public chartDataSource = {
    List: [
      {
          ediId: 'A40258220',
          quantity: '3.0',
          requestedDeliveryDate: 'Tue Jul 14 2020 19:54:26 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 19:54:26 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Thu Jul 16 2020 21:04:34 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258221',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 03:55:41 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 03:55:41 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Tue Jul 14 2020 04:21:07 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258222',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 06:04:23 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 06:04:23 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Wed Jul 15 2020 15:33:47 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258223',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 22:41:00 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 22:41:00 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Wed Jul 15 2020 03:25:22 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258224',
          quantity: '3.0',
          requestedDeliveryDate: 'Fri Jul 17 2020 02:09:36 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Fri Jul 17 2020 02:09:36 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Fri Jul 17 2020 23:19:56 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258225',
          quantity: '3.0',
          requestedDeliveryDate: 'Mon Jul 13 2020 07:59:00 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Mon Jul 13 2020 07:59:00 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Mon Jul 13 2020 05:36:56 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258226',
          quantity: '3.0',
          requestedDeliveryDate: 'Tue Jul 14 2020 04:41:52 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 04:41:52 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Tue Jul 14 2020 07:56:32 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258227',
          quantity: '3.0',
          requestedDeliveryDate: 'Sun Jul 12 2020 15:46:33 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Sun Jul 12 2020 15:46:33 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sun Jul 12 2020 02:33:34 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258228',
          quantity: '3.0',
          requestedDeliveryDate: 'Mon Jul 13 2020 20:19:11 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Mon Jul 13 2020 20:19:11 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Thu Jul 16 2020 07:22:55 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258229',
          quantity: '3.0',
          requestedDeliveryDate: 'Wed Jul 15 2020 15:52:07 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 15:52:07 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sun Jul 12 2020 19:56:33 GMT+0000 (UTC)'
      }
  ] };

  public chart: Chart;
  public isFilterApplied  = false;

  displayedColumnss = Object.keys(this.tableDataSource.List[0]);

  dataSources = new MatTableDataSource(this.tableDataSource.List);

  constructor() { }

  ngOnInit() {
    const chartData = this.getChartData();
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: Object.keys(chartData),
        datasets: [
          {
            data: Object.values(chartData) as [],
            backgroundColor: this.chartDataSource.List.map( x => this.getRandomColor())
          }
        ]
      },
      options: {
        legend: {
           display: false
        },
        tooltips: {
           callbacks: {
            label: (tooltipItem, data) => {
                const label = tooltipItem.xLabel.toString() || '';
                return this.getToolTipForDate(label);
            }
        }
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
        }
      }
    });
    this.chart.options.onClick = (event) => { this.chartClicked(event); };
    this.dataSources.filterPredicate = (data, filter): boolean =>
    this.getDateFormatted(data.assumedDeliveryDate) === filter;
  }

  public chartClicked(event) {
    const active = this.chart.getElementsAtEvent(event);
    if (!this.isFilterApplied && active[0] && active[0]['_model']) {
      this.applyFilter(active[0]['_model'].label);
      const drilledData = this.getDrilledData(active[0]['_model'].label);
      this.removeChartData();
      this.addChartData(drilledData);
    }
  }

  public applyFilter(searchText) {
    this.isFilterApplied = true;
    this.dataSources.filter = searchText;
  }

  public clearFilter(event) {
    this.isFilterApplied = false;
    const chartData = this.getChartData();
    this.removeChartData();
    this.addChartData(chartData);
    this.dataSources.filter = null;
  }

  public getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private getChartData() {
    const groupedValues =  this.chartDataSource.List.reduce((result, currentValue) => {
      const dateString = this.getDateFormatted(currentValue.assumedDeliveryDate);
      if (!result[dateString]) { result[dateString] = 0; }
      result[dateString] += parseFloat(currentValue.quantity);
      return result;
    }, {});
    return groupedValues;
  }

  private getDateFormatted(dateString): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date(dateString);
    return `${currentDate.getUTCDate()} ${monthNames[currentDate.getUTCMonth()]} ${currentDate.getUTCFullYear()}`;
  }

  private getDateWithTime(dateString): string {
    const currentDate = new Date(dateString);
    return this.getDateFormatted(dateString) + ` ${currentDate.getUTCHours()} : ${currentDate.getUTCMinutes()}`;
  }

  private getDrilledData(dateString): object {
    return this.chartDataSource.List.filter(x => this.getDateFormatted(x.assumedDeliveryDate) === dateString)
    .reduce((result, currentValue) => {
      const formatedDateWithTime = this.getDateWithTime(currentValue.assumedDeliveryDate);
      if (!result[formatedDateWithTime]) { result[formatedDateWithTime] = currentValue.quantity; } else {
        result[formatedDateWithTime] += currentValue.quantity;
      }
      return result;
    }, {});
  }

  private addChartData(chartData) {
    this.chart.data.labels = Object.keys(chartData);
    this.chart.data.datasets[0].data = Object.values(chartData) as number[];
    this.chart.update();
}

  private removeChartData() {
    this.chart.data.labels = [];
    this.chart.data.datasets[0].data = [];
    this.chart.update();
  }

  private getToolTipForDate(dateString: string) {
    return this.chartDataSource.List.filter(item =>
      (dateString.includes(':') ?
      this.getDateWithTime(item.assumedDeliveryDate) :
      this.getDateFormatted(item.assumedDeliveryDate)) === dateString)
    .map(item => `${item.ediId} : ${item.quantity}`);
  }
};
