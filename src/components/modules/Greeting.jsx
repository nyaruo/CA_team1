import React from 'react';
import Illustrator from '../../icons/Illustrator.png';

function Greeting(){
	return (
		<div className="greetingBlock">
			<div className='greetingText'>
				<h2>Hello World!</h2>
				<p>今日も学習を進めましょう。</p>
			</div>
			<div className='greetingImg'>
				<img src={ Illustrator }/>
			</div>
		</div>
	);
}

export default Greeting;