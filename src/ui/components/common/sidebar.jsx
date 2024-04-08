import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Portfolio from '../../../assets/portfolio';
import Renewal from '../../../assets/renewal';
import Analytics from '../../../assets/analytics';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';
import AccessibilitySharpIcon from '@mui/icons-material/AccessibilitySharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Header from './header';

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Header />
			<Drawer
				style={{ zIndex: 999 }}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						bgcolor: '#0F625DD9',
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				<Divider />
				<List sx={{
					color: 'white', '& .MuiTypography-root': {
						fontFamily: 'Noto Sans',
						fontWeight: 600,
						lineHeight: '21.79px',
						fontSize: '16px'
					},
				}}>
					{['Home', 'My Ip Portfolio', 'My Renewals', 'Analytics & Reports'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ color: 'white' }}>
									{index === 0 ? <HomeIcon /> : index === 1 ? <Portfolio /> : index === 2 ? <Renewal /> : index === 3 ? <Analytics /> : ''}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List sx={{
					marginBottom: '95px',
					color: 'white', '& .MuiTypography-root': {
						fontFamily: 'Noto Sans',
						fontWeight: 600,
						lineHeight: '21.79px',
						fontSize: '16px'
					}
				}}>
					{['Group Management', 'Group Portfolios'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ color: 'white' }}>
									{index === 0 ? <PeopleOutlineSharpIcon /> : index === 1 ? <PeopleOutlineSharpIcon /> : ''}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List sx={{
					color: 'white', '& .MuiTypography-root': {
						fontFamily: 'Noto Sans',
						fontWeight: 600,
						lineHeight: '21.79px',
						fontSize: '16px'
					},
				}}>
					{['Help', 'Language', 'Accessablility', 'Logout'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ color: 'white' }}>
									{index === 0 ? <HelpOutlineSharpIcon /> : index === 1 ? <TranslateSharpIcon /> : index === 2 ? <AccessibilitySharpIcon /> : index === 3 ? <LogoutSharpIcon /> : ''}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, color: 'red' }}
			>
				<Toolbar />
			</Box>
		</Box>
	);
}
