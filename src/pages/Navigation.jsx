import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/fitnesslogo.png'
import { ThemeProvider } from '@emotion/react';
import { Link, createTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const features = [
    { _title: 'HOME', _link: '' },
    { _title: 'FITNESS', _link: 'fitness-exercises' },
    { _title: 'HEALTH CARE', _link: 'health-care' },
    { _title: 'YOGA', _link: 'yoga' },
    { _title: 'GET DIET', _link: 'get-diet' },
];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Varela Round'
        }
    })

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', margin: '10', bgcolor: 'black' }}
        >
            <img src={logo} alt='logo' width={50} style={{ margin: '5px' }} />
            <Typography variant="h6" sx={{ my: 2, fontWeight: "900", color: 'white' }}>
                FITNESS FANATIC
            </Typography>
            <Divider />
            <List>
                {features.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <NavLink to={`/${item._link}`} >
                                <Link href="#" sx={{ textDecoration: "none" }}>
                                    <ListItemText primary={item._title} sx={{ color: 'white' }} />
                                </Link>
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    component="nav"
                    sx={{ position: 'stricky', boxShadow: 2, }}
                >
                    <Toolbar
                        sx={{ paddingLeft: { xs: '20px' }, paddingRight: { xs: '20px' }, bgcolor: "black" }}
                    >
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1, fontWeight: "900", display: { xs: 'none', sm: 'block' } }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
                                <img src={logo} alt='logo' width={50} style={{ marginInlineEnd: '10px' }} />
                                FITNESS FANATIC
                            </div>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {features.map((item, index) => (
                                <NavLink key={index} to={`/${item._link}`} >
                                    <Link
                                        href="#"
                                        key={item}
                                        sx={{
                                            fontSize: { lg: '20px' },
                                            margin: { lg: "10px" },
                                            cursor: "pointer",
                                            color: 'white'
                                        }}>
                                        {item._title}
                                    </Link>
                                </NavLink>
                            ))}
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        anchor='right'
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

NavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default NavBar;