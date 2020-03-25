import React from 'react';
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import VisibleHeatMap from './components/VisibleHeatMap';
import VisibleGrid from './components/VisibleGrid';
import VisibleBulletChart from './components/VisibleBulletChart';
import VisibleBasicChart from './components/VisibleBasicChart';

function App() {

  return (
    <div className="chart-area">
      <div className="row">
        <div className="col-lg main-header">
          <VisibleBulletChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <VisibleBasicChart />
        </div>
        <div className="col-md">
          <VisibleHeatMap />
        </div>
      </div>
      <div className="row">
        <div className="col-md">

        </div>

      </div>
      <div className="row">
        <div className="col-lg last-section">
          <VisibleGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
