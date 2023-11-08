import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const FeatureCard = ({ item }) => {
    let val = item.id % 2;
    return (
        <Box sx={{ marginBlock: '25px' }}>
            {
                val === 0 ?
                    <Box sx={{ marginBlock: "10px" }
                    } >
                        <Grid container spacing={2}>
                            <Grid item md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: { sm: '65px', xs: "15vw" } }}>
                                        {item._title}
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontSize: '20px' }}>
                                        {item._desc}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item md={6} sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ borderRadius: "20px", width: { md: 300 }, height: { md: 300 } }}
                                    image={item._img}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                        </Grid>
                    </Box >
                    :
                    <Box sx={{ marginBlock: "10px" }}>
                        <Grid container spacing={2}>
                            <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                {/* <img src={item._img} alt="Gif" width="500px" height='400px' /> */}
                                {/* <img
                                    srcSet={`${item._img}`}
                                    src={`${item._img}`}
                                    alt={item._title}
                                    style={{ borderRadius: "20px", width: { md: 300 }, height: { md: 300 } }}
                                    loading="lazy"
                                /> */}
                                <CardMedia
                                    component="img"
                                    sx={{
                                        borderRadius: "20px",
                                        width: { md: 300 },
                                        height: { md: 300 }
                                    }}
                                    image={item._img}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                            <Grid item md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: "55px" }}>
                                        {item._title}
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontSize: '20px' }}>
                                        {item._desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box >
            }
        </Box>
    )
}

export default FeatureCard
