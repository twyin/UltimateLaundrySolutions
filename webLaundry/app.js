

const App = () => {
	return (
		
		<div>
			<TopBar />
			<Description />
		</div>
		
	);
}

const TopBar = () => {
	return (
		<div className="player topBar">
			<span className="title">Ultimate Laundry Solutions
			</span>

			<Login />
			<Register />

		</div>
		
	);
}

const Login = () => {
	return (
		<div className="login">
			<button className="userOption login"> 
				login 
			</button>
		</div>
	);
}

const Register = () => {
	return (
		<div className="register">
			<button className="userOption register"> 
				register 
			</button>
		</div>
	);
}

const Description = () => {
	return (
		<div>
			<span> Who we are </span>

		</div>
	);
}




ReactDOM.render(
  	<App />,
  	document.getElementById('root')
);


// ReactDOM.render(
//   	<Description />,
//   	document.getElementById('root')
// );


