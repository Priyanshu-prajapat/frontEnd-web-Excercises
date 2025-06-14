import { Box, Grid, Typography } from '@mui/material'
import aboutme from "../../assets/image/About/aboutme.png"
import React from 'react'
import ArticleBox from '../ArticleBox'
import { Height } from '@mui/icons-material'

const ModernAbout = () => {
    return (
        <Box sx={{ paddingBlock: "13vh" }}>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Typography variant='h3' mb={2}>
                        About
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: '16px' }}>
                        Welcome to Fitness Fanatics! I'm <strong>Priyanshu Prajapat</strong>, the creator and driving force behind this project. As a passionate advocate for health, fitness, and holistic well-being, I embarked on this journey to provide a platform that empowers individuals to lead healthier and happier lives.
                    </Typography>
                    <img src={aboutme} alt="hello user" style={{ height: 450, width: 450, marginTop: '20px' }} />
                </Grid>
                <Grid item md={4}>
                    <ArticleBox />
                </Grid>
            </Grid>
            <Box>
                <Typography>
                    Thank you for being a part of the Fitness Fanatics family!
                </Typography>
                <Typography variant='h5'>
                    Warm regards,
                    <strong>Priyanshu Prajapat</strong>
                </Typography>
            </Box>
        </Box >
    )
}

export default ModernAbout
