import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const HeroSection = ({ title, subtitle, img, width }) => {
    return (
        <Box sx={{ paddingBlock: "13vh" }}>
            <Grid container spacing={2}>
                <Grid item md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: "75px" }}>
                            {title}
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '20px' }}>
                            {subtitle}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <img src={img} alt="Gif" width={width ? width : '100%'} />
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default HeroSection
