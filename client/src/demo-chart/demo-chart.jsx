import React from 'react';
import { render } from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import _ from 'lodash'

//http://recharts.org/#/en-US/examples

const data = [
    { name: 'Page A', uv: _.random(10, 6000, false), pv: 2400 },
    { name: 'Page B', uv: _.random(10, 6000, false), pv: 1398 },
    { name: 'Page C', uv: _.random(10, 6000, false), pv: 9800 },
    { name: 'Page D', uv: _.random(10, 6000, false), pv: 3908 },
    { name: 'Page E', uv: _.random(10, 6000, false), pv: 4800 },
    { name: 'Page F', uv: _.random(10, 6000, false), pv: 3800 },
    { name: 'Page G', uv: _.random(10, 6000, false), pv: 4300 },
];

class SimpleLineChart extends React.Component {
    render() {
        return (
            <LineChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

var element = document.createElement('div');
element.id = "demo-chart"
document.body.appendChild(element);

render(<SimpleLineChart />, element);