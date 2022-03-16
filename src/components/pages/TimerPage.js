import React from 'react';
import MyStopwatch from '../Timer/Timer';
import '../../stylesheets/timer.css';

class Timer extends React.Component{
	render(){
		return(
			<div className="TimerPage">
				<h1 className='Timer'>LEARNING TIMER</h1>
				<MyStopwatch />
			</div>
		);
	}
}

export default Timer;