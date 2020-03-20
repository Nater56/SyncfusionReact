import React, { Component } from 'react';
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';

class VisibleBulletChart extends Component {

    constructor(props) {
        super(props);

       this.data = [
        { value: 100, target: 80 },
        { value: 200, target: 180 },
        { value: 300, target: 280 },
        { value: 400, target: 380 },
        { value: 500, target: 480 },
    ];
    }

    render() {

        return (
            <div>
              <BulletChartComponent id='title' style={{ textAlign: "center" }} animation={{ enable: false }} valueField='value' targetField='target' title='Revenue' minimum={0} maximum={300} interval={50} dataSource={[{ value: 270, target: 250 }]}>
            </BulletChartComponent>
            </div>
        )
    }

}

export default VisibleBulletChart; 