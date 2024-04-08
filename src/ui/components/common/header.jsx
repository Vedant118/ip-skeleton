import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchAppBar from './searchBar';
import Notification from '../../../assets/notification';
import Setting from '../../../assets/setting';
import User from '../../../assets/user';
import ipLogo from '../../../assets/ipLogo.png';

const drawerWidth = 280;

export default function Header() {
	return (
		<AppBar
			position="fixed"
			style={{ zIndex: 1000 }}
			sx={{ width: '100%', ml: `${drawerWidth}px`, bgcolor: '#FFFFFF', height: '55px' }}
		>
			<Toolbar>
				<Typography variant="h6" noWrap component="div">
				</Typography>
				<img style={{ width: '161px', height: '46px' }} src={ipLogo} />
				<SearchAppBar />
				<div style={{ color: '#0F625DD9', left: '85%', position: 'absolute', display: 'flex' }}>
					<Notification />
					<Setting />
					<User />
				</div>
			</Toolbar>
		</AppBar>
	);
}