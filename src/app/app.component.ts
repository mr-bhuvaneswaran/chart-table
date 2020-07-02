import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

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

  displayedColumnss = ['ediId', 'supplierName', 'supplierId', 'quantity'];

  dataSources = new MatTableDataSource(this.tableDataSource.List);

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = this.chartDataSource.List.map(item => item.ediId);
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { data: this.chartDataSource.List.map(item => parseFloat(item.quantity) )  }
  ];

  constructor() { }

  ngOnInit() {
    this.dataSources.filterPredicate = (data, filter): boolean =>  data.ediId === filter;
  }

  public chartClicked({ active }: { event: MouseEvent, active: {}[] }): void {
    if (active[0] && active[0]._model) {
      this.applyFilter(active[0]._model.label);
    }
  }

  public applyFilter(searchText) {
    this.dataSources.filter = searchText;
  }

  public clearFilter(event) {
    this.dataSources.filter = null;
  }

}
