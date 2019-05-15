import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import css from './Form.js';

const AuthForm = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (
		<div style={css.signupSection}>
			<div style={css.info}>
	    <h2>Welcome back</h2>
	    <i style={css.icon}  aria-hidden="true"></i>
	    <p>find love now!</p>
	  </div>
			<form style={css.signupForm} onSubmit={onSubmit}>
			<ul style={css.noBullet}>
				<li>
					<h4 >Login</h4>
				</li>
				<li>
					<div>
					<input
						style={css.inpuFields}
						autoComplete="off"
						placeholder="email adress or username"
						label="Email"
						name="email"
						onChange={onChange}
						value={user.email}/>
					</div>
				</li>
				<li>
					<div>
					<input
						style={css.inpuFields}
						autoComplete="off"
						placeholder="password"
						label="Password"
						type="password"
						name="password"
						onChange={onChange}
						value={user.password}/>
					</div>
				</li>
			</ul>
			<button style={css.joinbtn} type="submit"  primary="true">
				Submit
			</button>
			</form>
	</div>

);

AuthForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default AuthForm;
