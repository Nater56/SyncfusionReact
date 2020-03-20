import React, { Component } from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

class VisibleGrid extends Component {

    constructor(props) {
        super(props);

       this.data = [
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"},
            {OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA"}
       ];
    }

    render() {

        return (
            <div>
               <GridComponent dataSource={this.data}>
            <ColumnsDirective>
                <ColumnDirective field='OrderId' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerId' width='100'/>
                <ColumnDirective field='EmployeeId' width='100' textAlign="Right"/>
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
        </GridComponent>
            </div>
        )
    }

}

export default VisibleGrid; 