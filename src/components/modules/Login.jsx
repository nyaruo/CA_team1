import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class LoginBox extends React.Component{

	constructor(props) {
		super(props);
		this.state = {};
	}

	render(){
		return(
			<section className='login-window'>
				{/* <Header /> */}
				{/* <div className='mainWindow'> */}
					<div className='box'>
						<div className='service-icon'>
							<h3>Study Pro</h3>
						</div>
						<div className='input-group'>
							{/* <label htmlFor='username'>ユーザーネーム</label> */}
							<input
								type="text"
								name="username"
								className="login-input"
								placeholder="ユーザーネーム"/>
						</div>
						<div className='input-group'>
							{/* <label htmlFor='password'>パスワード</label> */}
							<input
								type="password"
								name="password"
								className="login-input"
								placeholder="パスワード"/>
						</div>

						<div className='buttons-group'>
							<button type="button" className="signup-btn">
								ログイン
							</button>
							<Link to="/signup" id="to-signup">新規登録</Link>
						</div>
					</div>
				{/* </div> */}
			</section>
		);
	}
}
export default LoginBox;