import React from "react";
import MyStopwatch from "../Timer/Timer";
import Header from "../modules/Header";
import "../../stylesheets/timer.css";

class Timer extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="RecordPage">
			<section>
 				<h1 className='Timer'>LEARNING TIMER</h1>
 				<MyStopwatch />
			</section>
 		</div>
      </>
    );
  }
}

export default Timer;