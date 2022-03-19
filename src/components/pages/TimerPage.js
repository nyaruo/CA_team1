import React from 'react';
import MyStopwatch from '../Timer/Timer';
import '../../stylesheets/timer.css';

function Record() {
	return (
		<div className="RecordPage">
			<section>
 				<h1 className='Timer'>LEARNING TIMER</h1>
 				<MyStopwatch />
			</section>
 		</div>
	)
}


export default Record;