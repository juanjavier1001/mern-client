import { NavLink } from 'react-router-dom';

//<NavLink to="/">home 1 </NavLink> <NavLink to="/home2">home 2 </NavLink> <NavLink to="/home3">home 3 </NavLink>

const NavBarPage = () => {
	return (
		<>
			<ul>
				<NavLink to="/">TaskForm </NavLink>
				{/* <NavLink to="/">TaskPage </NavLink> */}
				{/* <NavLink to="/taskForm">TaskForm </NavLink> */}
			</ul>
		</>
	);
};

export default NavBarPage;
