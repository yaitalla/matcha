import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import style from './style';

const Form = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (
	<div style={style.signupSection}>
	<div style={style.info}>
<h2>Welcome to Matcha</h2>
<i style={style.icon}  aria-hidden="true"></i>
<br/>
<p>go ahead and meet true love</p>
</div>
	<form style={style.signupForm} onSubmit={onSubmit}>
	<ul style={style.noBullet}>
		<li>
			<h4 >Registration</h4>
		</li>
		<li>
			<div>
			<input
				style={style.inpuFields}
				autoComplete="off"
				placeholder="enter your email adress"
				label="Email"
				name="email"
				onChange={onChange}
				value={user.email}/>
			</div>
		</li>
		<li>
			<div>
			<input
				style={style.inpuFields}
				autoComplete="off"
				placeholder="choose a password"
				label="Password"
				type="password"
				name="password"
				onChange={onChange}
				value={user.password}/>
			</div>
		</li>
		<li>
			<div>
			<input
				style={style.inpuFields}
				autoComplete="off"
				placeholder="confirm your password"
				label="Password2"
				type="password"
				name="password2"
				onChange={onChange}
				value={user.password2}/>
			</div>
		</li>
	</ul>
	<button style={style.joinbtn} type="submit"  primary="true">
		Submit
	</button>
	</form>
</div>

);

Form.propTypes = {
onSubmit: PropTypes.func.isRequired,
onChange: PropTypes.func.isRequired,
errors: PropTypes.object.isRequired,
user: PropTypes.object.isRequired
};

export default Form;
