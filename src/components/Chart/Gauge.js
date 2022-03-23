import React from 'react';
import "./gauge.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Gauge({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 2}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#B2B2B2" padding={{ left: 30, right: 30 }}/>
          <YAxis stroke="#B2B2B2"/>
          <Line type="monotone" dataKey={dataKey} stroke="#00ADB5"/>
          <Tooltip />
          {/* {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>} */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
