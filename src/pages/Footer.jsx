import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, List, ListItem, Typography, createTheme } from '@mui/material';
import logo from "../assets/FitnessLogo.png"
import { ThemeProvider } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const features = [
        { _title: 'HOME', _link: '' },
        { _title: 'FITNESS', _link: 'fitness-exercises' },
        { _title: 'HEALTH CARE', _link: 'health-care' },
        { _title: 'YOGA', _link: 'yoga' },
        { _title: 'GET DIET', _link: 'get-diet' },
    ];

    const theme = createTheme({
        typography: {
            fontFamily: 'Varela Round'
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, paddingBlock: '50px', bgcolor: "black" }}>
                <Grid container spacing={2} sx={{ marginBottom: '30px' }}>
                    <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <img
                                srcSet={`${logo}`}
                                src={`${logo}`}
                                alt={"Logo"}
                                style={{ borderRadius: "20px", height: '100px', width: '100px' }}
                                loading="lazy"
                            />
                            <Typography variant='h4' sx={{ fontWeight: "bold" }}>
                                <i>FITNESS FANATIC</i>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box sx={{ marginInline: "10px" }}>
                            <Typography variant='h5' fontWeight={"bold"} sx={{ marginBottom: '15px' }} >
                                FEATURES
                            </Typography>
                            <List>
                                {
                                    features.map((item, index) => (
                                        <ListItem disablePadding key={index}>
                                            <NavLink to={`/${item._link}`} >
                                                <Link href="#" sx={{ color: 'white' }}>
                                                    <Typography variant='subtitle1' sx={{ fontSize: '20px' }}>
                                                        {item._title}
                                                    </Typography>
                                                </Link>
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box sx={{ marginInline: '10px' }}>
                            <Typography variant='h5' fontWeight={"bold"} sx={{ marginBottom: '15px' }} >
                                CONTECT
                            </Typography>
                            <Typography variant='h5' >
                                <NavLink to={'/about'}>
                                    <Link href="#" sx={{ color: 'white' }}>
                                        <Typography variant='subtitle1' sx={{ fontSize: '20px' }}>
                                            About us
                                        </Typography>
                                    </Link>
                                </NavLink>
                            </Typography>
                            <Typography variant='h5' >
                                <NavLink to={'/contact'}>
                                    <Link href="#" sx={{ color: 'white' }} >
                                        <Typography variant='subtitle1' sx={{ fontSize: '20px' }}>
                                            Contect us
                                        </Typography>
                                    </Link>
                                </NavLink>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default Footer