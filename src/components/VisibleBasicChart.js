import React, { Component } from 'react';
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';

class VisibleBasicChart extends Component {

    constructor(props) {
        super(props);

        this.data = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];

        this.primaryxAxis = { valueType: 'Category' };
    }
    render() {

        return (
            <ChartComponent primaryXAxis={this.primaryxAxis}>
                <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={this.data} xName='month' yName='sales' name='Sales' />
                </SeriesCollectionDirective>
            </ChartComponent>
        )
    }
}

export default VisibleBasicChart;