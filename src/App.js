import React from "react";
import { Line } from "@ant-design/charts";
import "./App.css";

function App() {
  const data = [
    { year: '1991', value1: 3, value2: 4, value3: 5, value4: 6, value5: 7 },
    { year: '1992', value1: 4, value2: 5, value3: 6, value4: 7, value5: 8 },
    { year: '1993', value1: 3.5, value2: 4.5, value3: 5.5, value4: 6.5, value5: 7.5 },
    { year: '1994', value1: 5, value2: 6, value3: 7, value4: 8, value5: 9 },
    { year: '1995', value1: 4.9, value2: 5.9, value3: 6.9, value4: 7.9, value5: 8.9 },
    { year: '1996', value1: 6, value2: 7, value3: 8, value4: 9, value5: 10 },
    { year: '1997', value1: 7, value2: 8, value3: 9, value4: 10, value5: 11 },
    { year: '1998', value1: 9, value2: 10, value3: 11, value4: 12, value5: 13 },
    { year: '1999', value1: 13, value2: 14, value3: 15, value4: 16, value5: 17 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: ['value1', 'value2', 'value3', 'value4', 'value5'],
    color: ['#8884d8', '#ff0000', '#000000', '#808080', '#a0a0a0'],
    point: {
      shape: 'square',
      size: 4,
    },
    interactions: [{ type: 'tooltip' }],
  };

  return (
    <div style={{ width: '800px', height: '400px' }}>
      <h1 style={{ textAlign: 'center' }}>Bütçe ve Satış Toplamı</h1>
      <Line {...config} />
    </div>
  );
}

export default App;
