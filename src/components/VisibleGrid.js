import React, { Component } from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';


class VisibleGrid extends Component {
    render() {
        let data = [
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" },
            { OrderId: 13245, CustomerId: 16545264, EmployeeId: 1654465, Freight: "eggs", ShipCountry: "USA" }
        ];


        return (
            <div>
                <GridComponent dataSource={data}/>
            </div>
        )
    }

}

export default VisibleGrid; 