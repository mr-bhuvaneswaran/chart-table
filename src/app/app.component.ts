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
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '13.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: 'RD23424223424',
            trackingStatus: 'In Transit',
            requestedDeliveryDate: 'Thu Jul 16 2020 01:38:59 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Thu Jul 16 2020 01:38:59 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Sat Jul 18 2020 12:41:46 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258221',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '10.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'Tue Jul 14 2020 05:36:41 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Tue Jul 14 2020 05:36:41 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Sun Jul 12 2020 07:45:15 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258222',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '15.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: 'RD23424223424',
            trackingStatus: 'In Transit',
            requestedDeliveryDate: 'Tue Jul 14 2020 20:52:38 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Tue Jul 14 2020 20:52:38 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Tue Jul 14 2020 23:45:30 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258223',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '23.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'Thu Jul 09 2020 21:36:30 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Thu Jul 09 2020 21:36:30 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Thu Jul 09 2020 12:00:54 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258224',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '33.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: 'RD23424223424',
            trackingStatus: 'In Transit',
            requestedDeliveryDate: 'Wed Jul 15 2020 14:58:52 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Wed Jul 15 2020 14:58:52 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Sat Jul 18 2020 10:42:37 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258225',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '3.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'Tue Jul 07 2020 06:18:53 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Tue Jul 07 2020 06:18:53 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Sun Jul 05 2020 17:37:32 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258226',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '8.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: 'RD23424223424',
            trackingStatus: 'In Transit',
            requestedDeliveryDate: 'Tue Jul 14 2020 17:38:52 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Tue Jul 14 2020 17:38:52 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Thu Jul 16 2020 08:16:54 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258227',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '10.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'Sun Jul 05 2020 10:54:28 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Sun Jul 05 2020 10:54:28 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Sat Jul 04 2020 02:13:32 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258228',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '15.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: 'RD23424223424',
            trackingStatus: 'In Transit',
            requestedDeliveryDate: 'Sun Jul 05 2020 06:57:34 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Sun Jul 05 2020 06:57:34 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Mon Jul 06 2020 11:15:24 GMT+0000 (UTC)'
        },
        {
            ediId: 'A40258229',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Italy',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '35.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'test2@testing.com',
            supplierName: 'Philips Europe',
            deliveryAddress: 'germany',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'Tue Jul 07 2020 09:51:13 GMT+0000 (UTC)',
            confirmedDeliveryDate: 'Tue Jul 07 2020 09:51:13 GMT+0000 (UTC)',
            assumedDeliveryDate: 'Mon Jul 06 2020 08:50:34 GMT+0000 (UTC)'
        }
    ]
  };
  public chartDataSource = {
    List: [
      {
          ediId: 'A40258220',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '13.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: 'RD23424223424',
          trackingStatus: 'In Transit',
          requestedDeliveryDate: 'Thu Jul 16 2020 01:38:59 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Thu Jul 16 2020 01:38:59 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sat Jul 18 2020 12:41:46 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258221',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '10.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: '',
          trackingStatus: '',
          requestedDeliveryDate: 'Tue Jul 14 2020 05:36:41 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 05:36:41 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sun Jul 12 2020 07:45:15 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258222',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '15.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: 'RD23424223424',
          trackingStatus: 'In Transit',
          requestedDeliveryDate: 'Tue Jul 14 2020 20:52:38 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 20:52:38 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Tue Jul 14 2020 23:45:30 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258223',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '23.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: '',
          trackingStatus: '',
          requestedDeliveryDate: 'Thu Jul 09 2020 21:36:30 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Thu Jul 09 2020 21:36:30 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Thu Jul 09 2020 12:00:54 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258224',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '33.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: 'RD23424223424',
          trackingStatus: 'In Transit',
          requestedDeliveryDate: 'Wed Jul 15 2020 14:58:52 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Wed Jul 15 2020 14:58:52 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sat Jul 18 2020 10:42:37 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258225',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '3.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: '',
          trackingStatus: '',
          requestedDeliveryDate: 'Tue Jul 07 2020 06:18:53 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 07 2020 06:18:53 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sun Jul 05 2020 17:37:32 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258226',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '8.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: 'RD23424223424',
          trackingStatus: 'In Transit',
          requestedDeliveryDate: 'Tue Jul 14 2020 17:38:52 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 14 2020 17:38:52 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Thu Jul 16 2020 08:16:54 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258227',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '10.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: '',
          trackingStatus: '',
          requestedDeliveryDate: 'Sun Jul 05 2020 10:54:28 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Sun Jul 05 2020 10:54:28 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Sat Jul 04 2020 02:13:32 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258228',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '15.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: 'RD23424223424',
          trackingStatus: 'In Transit',
          requestedDeliveryDate: 'Sun Jul 05 2020 06:57:34 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Sun Jul 05 2020 06:57:34 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Mon Jul 06 2020 11:15:24 GMT+0000 (UTC)'
      },
      {
          ediId: 'A40258229',
          receiverOrgId: 'A4025822',
          senderARE: '7411',
          senderDivisionCode: 'Italy',
          senderOrgId: 'A4025822',
          sapSystemId: 'RLP',
          client: '800',
          quantity: '35.0',
          orderId: 'DE129274202',
          materialId: 'A5E00105336',
          supplierId: 'test2@testing.com',
          supplierName: 'Philips Europe',
          deliveryAddress: 'germany',
          buyerId: 'string',
          profitCenter: 'string',
          forwarderName: 'string',
          trackingNumber: '',
          trackingStatus: '',
          requestedDeliveryDate: 'Tue Jul 07 2020 09:51:13 GMT+0000 (UTC)',
          confirmedDeliveryDate: 'Tue Jul 07 2020 09:51:13 GMT+0000 (UTC)',
          assumedDeliveryDate: 'Mon Jul 06 2020 08:50:34 GMT+0000 (UTC)'
      }
    ]
  };

  public chart: Chart;

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
            data:  Object.values(chartData) as [],
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
            title: (tooltipItem, data) => {
              const label = tooltipItem[0].xLabel.toString() || '';
              return `${tooltipItem[0].xLabel} - ${this.getToolTipForDate(label).length}`;
            },
            label: (tooltipItem, data) => {
                const label = tooltipItem.xLabel.toString() || '';
                return this.getToolTipForDate(label);
            }
          }
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  stepSize: 1
              }
          }]
        }
      }
    });
    this.chart.options.onClick = (event) => { this.chartClicked(event); };
    this.dataSources.filterPredicate = (data, filter): boolean =>
    this.getDateFormatted(data.assumedDeliveryDate) === this.getDateFormatted(filter);  }

  public chartClicked(event) {
    const active = this.chart.getElementsAtEvent(event);
    if (active[0] && active[0]["_model"]) {
      this.applyFilter(active[0]["_model"].label);
    }
  }

  public applyFilter(searchText) {
    this.dataSources.filter = searchText;
  }

  public clearFilter(event) {
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
      result[dateString] += 1;
      return result;
    }, {});
    return groupedValues;
  }

  private getDateFormatted(dateString): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date(dateString);
    return `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  }

  private getToolTipForDate(dateString: string) {
    return this.chartDataSource.List.filter(item => this.getDateFormatted(item.assumedDeliveryDate) === dateString)
    .map(item => `${item.ediId} : ${item.quantity}`);
  }

}
