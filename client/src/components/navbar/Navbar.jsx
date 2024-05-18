import "./navbar.scss";
import Logo from "../../pict/logokoperasi.png";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				<div className="items">
					<div className="item">
						<LanguageIcon className="icon" />
						English
					</div>
					<div className="item">
						<DarkModeIcon className="icon" />
					</div>
					<div className="item">
						<FullscreenIcon className="icon" />
					</div>
					<div className="item">
						<NotificationsActiveIcon className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineIcon className="icon" />
						<div className="counter">3</div>
					</div>
					<div className="item">
						<FormatListBulletedIcon className="icon" />
					</div>
					<div className="item">
						<img 
							src={Logo}
							alt="hello"
							className="logoicon"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;