import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ScoreIcon from '@mui/icons-material/Score';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">ksp-admin</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<Link to="/" style={{ textDecoration: "none" }}>
						<li>
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</li>
					</Link>
					<p className="title">LIST</p>
					<Link to="/users" style={{ textDecoration: "none" }}>
						<li>
							<PeopleIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products" style={{ textDecoration: "none" }}>
						<li>
							<InventoryIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<AllInboxIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<ScoreIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<MonitorHeartIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<TextSnippetIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<DisplaySettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
				<div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
			</div>
		</div>
	)
}

export default Sidebar;