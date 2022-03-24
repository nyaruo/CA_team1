import React from "react";
import { userData } from "../Chart/userdata";
import Gauge from "../Chart/Gauge";
// import UserActivity from "../Chart/Chart";
import Greeting from '../modules/Greeting';
import Data from "../Chart/Data";
import Header from "../modules/Header";
import { Container } from "react-bootstrap";
// import { Box, Grid, Typography } from "@mui/material";
import "../../stylesheets/home.css";

function Home() {
  // 日付の取得
  var dateDate = new Date();
  var month = dateDate.getMonth() + 1;
  var date = dateDate.getDate();
  var day = dateDate.getDay();
  var weekday = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <>
      <Container fluid>
        <div className="pageTitle">
          <h1>Home</h1>
          <h4 class="date">{month}月{date}日（{weekday[day]}）</h4>
        </div>
        <div className="flexItems">
          <Greeting />
          <Gauge
              data={userData}
              title="一週間の学習記録"
              grid
              dataKey="Active User"
          />
          {/* <UserActivity /> */}
          <Data />
        </div>
      </Container>
    </>
  );
}

export default Home;
