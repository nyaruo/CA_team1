import React from "react";
import { userData } from "../Chart/userdata";
import Gauge from "../Chart/Gauge";
import UserActivity from "../Chart/Chart";
import Data from "../Chart/Data";
import { Container } from "react-bootstrap";
import { Box, Grid, Typography } from "@mui/material";
import "../../stylesheets/home.css";

class Home extends React.Component {
  render() {
    return (
      <>
			<div class="date">
				3月19日(土)
			</div>
        <Container fluid>
          <Grid container spacing={1}>
            <Grid item  md={5}>
              <Gauge
                data={userData}
                title="一週間の学習記録"
                grid
                dataKey="Active User"
              />
							<UserActivity />
            </Grid>
            <Grid item xs={7} >
              <Data />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Home;
