import React from 'react';
import './App.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import VisibleHeatMap from './components/VisibleHeatMap';
import VisibleGrid from './components/VisibleGrid';
import VisibleBulletChart from './components/VisibleBulletChart';

function App() {
  let data = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
  let primaryxAxis = { valueType: 'Category' };

  return (

    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ChartComponent primaryXAxis={primaryxAxis}>
              <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]} />
              <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales' />
              </SeriesCollectionDirective>
            </ChartComponent>

          </div>
          <div className="col-sm">
            <VisibleGrid />
          </div>
          <div className="col-sm">
          <VisibleBulletChart/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">

            <VisibleHeatMap />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
