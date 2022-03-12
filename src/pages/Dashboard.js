import React from "react";
import Chart from "../components/Chart/Chart";
import Timer from "../components/Timer/Timer";
import StatusCard from '../components/StatusCard/StatusCard'

const Dashboard = () => {

  return (
    <>
      <div>dashboard</div>
      <div>
        <Chart />
      </div>
      <div>
        <Timer />
      </div>
			
    </>
  );
};

export default Dashboard;
