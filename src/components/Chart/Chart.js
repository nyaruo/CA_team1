import React from "react";
import { PieChart, Pie } from "recharts";

function MyChart() {
  const data = [
    {
      index: 0,
      name: "データ1",
      value: 300,
    },
    {
      index: 1,
      name: "データ2",
      value: 200,
    },
    {
      index: 2,
      name: "データ3",
      value: 380,
    },
    {
      index: 3,
      name: "データ3",
      value: 80,
    },
    {
      index: 4,
      name: "データ4",
      value: 40,
    },
  ];
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        cx="30%"
        cy="50%"
        outerRadius={100}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
}

export default function Chart() {
  return (
    <div>
      <MyChart />
    </div>
  )
}
