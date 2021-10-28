import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mar 22',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mar 23',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar 24',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Mar 24',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mar 25',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Mar 26',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Mar 27',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class BarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: '90%',marginTop:"5%",justifyContent:"center",marginLeft:"3%",marginBottom:"5%" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
       
      </div>
    );
  }
}
