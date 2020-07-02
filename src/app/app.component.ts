import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tableDataSource =
    {
     List: [
         {
             ediId: 'A4025822',
             receiverOrgId: 'A4025822',
             senderARE: '7411',
             senderDivisionCode: 'Einkäufergruppe 4400',
             senderOrgId: 'A4025822',
             sapSystemId: 'RLP',
             client: '800',
             quantity: '3.0',
             orderId: 'DE129274202',
             materialId: 'A5E00105336',
             supplierId: '123@gmail.com',
             supplierName: 'TDK Europe GmbH',
             deliveryAddress: 'Warenannahme Gebaeude 13.6, Vogelweiherstr. 1-15, DE 90441 Nuernberg',
             buyerId: 'string',
             profitCenter: 'string',
             forwarderName: 'string',
             trackingNumber: '',
             trackingStatus: '',
             requestedDeliveryDate: 'string',
             confirmedDeliveryDate: 'string',
             assumedDeliveryDate: 'string'
         },
         {
             ediId: 'A4025823',
             receiverOrgId: 'A4025822',
             senderARE: '7411',
             senderDivisionCode: 'Einkäufergruppe 4400',
             senderOrgId: 'A4025822',
             sapSystemId: 'RLP',
             client: '800',
             quantity: '3.0',
             orderId: 'DE129274202',
             materialId: 'A5E00105336',
             supplierId: '456@gmail.cim',
             supplierName: 'TDK Europe GmbH',
             deliveryAddress: 'Warenannahme Gebaeude 13.6, Vogelweiherstr. 1-15, DE 90441 Nuernberg',
             buyerId: 'string',
             profitCenter: 'string',
             forwarderName: 'string',
             trackingNumber: 'RD23424223424',
             trackingStatus: 'In Transit',
             requestedDeliveryDate: 'string',
             confirmedDeliveryDate: 'string',
             assumedDeliveryDate: 'string'
         },
         {
             ediId: 'A4025824',
             receiverOrgId: 'A4025822',
             senderARE: '7411',
             senderDivisionCode: 'Einkäufergruppe 4400',
             senderOrgId: 'A4025822',
             sapSystemId: 'RLP',
             client: '800',
             quantity: '3.0',
             orderId: 'DE129274202',
             materialId: 'A5E00105336',
             supplierId: 'venkata.nandyala@siemens.com',
             supplierName: 'TDK Europe GmbH',
             deliveryAddress: 'Warenannahme Gebaeude 13.6, Vogelweiherstr. 1-15, DE 90441 Nuernberg',
             buyerId: 'string',
             profitCenter: 'string',
             forwarderName: 'string',
             trackingNumber: '',
             trackingStatus: '',
             requestedDeliveryDate: 'string',
             confirmedDeliveryDate: 'string',
             assumedDeliveryDate: 'string'
         }
     ]};
  public chartDataSource =
    {
    List: [
        {
            ediId: 'A4025822',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Einkäufergruppe 4400',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '3.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: '123@gmail.com',
            supplierName: 'TDK Europe GmbH',
            deliveryAddress: 'Warenannahme Gebaeude 13.6, Vogelweiherstr. 1-15, DE 90441 Nuernberg',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'string',
            confirmedDeliveryDate: 'string',
            assumedDeliveryDate: 'string'
        },
        {
            ediId: 'A4025823',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Einkäufergruppe 4400',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '3.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: '456@gmail.cim',
            supplierName: 'TDK Europe GmbH',
            deliveryAddress: 'Warenannahme Gebaeude 13.6, Vogelweiherstr. 1-15, DE 90441 Nuernberg',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: 'RD23424223424',
            trackingStatus: 'In Transit',
            requestedDeliveryDate: 'string',
            confirmedDeliveryDate: 'string',
            assumedDeliveryDate: 'string'
        },
        {
            ediId: 'A4025824',
            receiverOrgId: 'A4025822',
            senderARE: '7411',
            senderDivisionCode: 'Einkäufergruppe 4400',
            senderOrgId: 'A4025822',
            sapSystemId: 'RLP',
            client: '800',
            quantity: '3.0',
            orderId: 'DE129274202',
            materialId: 'A5E00105336',
            supplierId: 'venkata.nandyala@siemens.com',
            supplierName: 'TDK Europe GmbH',
            deliveryAddress: 'Warenannahme Gebaeude 13.6, Vogelweiherstr. 1-15, DE 90441 Nuernberg',
            buyerId: 'string',
            profitCenter: 'string',
            forwarderName: 'string',
            trackingNumber: '',
            trackingStatus: '',
            requestedDeliveryDate: 'string',
            confirmedDeliveryDate: 'string',
            assumedDeliveryDate: 'string'
        }
    ]};

    public chart: Chart;

  displayedColumnss = ['ediId', 'supplierName', 'supplierId', 'quantity'];

  dataSources = new MatTableDataSource(this.tableDataSource.List);

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.chartDataSource.List.map(x => x.ediId),
        datasets: [
          {
            data: this.chartDataSource.List.map(x => parseFloat(x.quantity)),
            backgroundColor: ['red', 'green', 'yellow', 'blue', 'orange']
          }
        ]
      },
      options: {
        legend: {
           display: false
        },
        tooltips: {
           enabled: false
        }
      }
    });
    this.chart.options.onClick = (event) => { this.chartClicked(event); };
    this.dataSources.filterPredicate = (data, filter): boolean =>  data.ediId === filter;
  }

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

}
