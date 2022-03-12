import React from "react";
import Chart from "../components/Chart/Chart";
import Timer from "../components/Timer/Timer";
import StatusCard from "../components/Cards/StatusCard";
import HelloCard from "../components/Cards/HelloCard";
import Gauge from "../components/Chart/Gauge";
import { userData } from "../components/Chart/userdata";

const Dashboard = () => {
  return (
    <>
      <div>dashboard</div>
      <HelloCard name={"John"} />
      <StatusCard count={12} title={"Tasks to do:"} />
      <StatusCard count={8} title={"Tasks Compeleted this week"} />
      <div>
        <Chart />
      </div>
      <div>
        <Gauge
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
      </div>
      <div>
        <Timer />
      </div>
    </>
  );
};

export default Dashboard;
