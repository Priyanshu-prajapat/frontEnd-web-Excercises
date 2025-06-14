import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import FitnessPlan from "../assets/image/FitnessPlans/FitnessPlan.png"
import SecondPlan from "../assets/image/FitnessPlans/FitnessPlanSecond.png"
import HeroSection from '../components/HeroSection';
import gif from "../assets/gif/HealthCareImg.png"
import styled from '@emotion/styled';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const FitnessExercises = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: '#121212',
        padding: '20px',
        '&:hover': {
            backgroundColor: "#292929",
        },
    }));

    return (
        <>
            <Box sx={{ paddingTop: '50px' }}>
                <HeroSection img={gif} title={"Let's Fit Yourself"} subtitle={"Make exercise a part of your daily routine. Schedule time for exercise just like you would any other important appointment. This will help you make sure you stick with it."} />
                <Typography variant='h2' >
                    Exercise Plans
                </Typography>
                <hr className="border border-white border-1" />

                <Grid container spacing={2} sx={{ marginBlock: "10vh" }} >
                    <Grid item md={6}>
                        <Typography variant="h4" component="div" sx={{ fontSize: "45px", paddingBottom: "10px" }}>
                            Get 1 Week Exercises Plan
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
                            Start by choosing a mix of cardio, strength training, and flexibility exercises. Aim to do 30 minutes of moderate-intensity exercise most days of the week.
                        </Typography>
                        <Link to={'one-week-exercise-plan'} >
                            <ColorButton sx={{ marginBlock: '10px' }}>
                                get week Plan
                            </ColorButton>
                        </Link>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{ display: "flex", justifyContent: 'center' }}>
                            <img
                                srcSet={FitnessPlan}
                                src={FitnessPlan}
                                alt={"Fitness Plan Img"}
                                loading="lazy"
                                width='250vh'
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginBlock: "10vh" }} >
                    <Grid item md={6}>
                        <Box sx={{ display: "flex", justifyContent: 'center' }}>
                            <img
                                srcSet={SecondPlan}
                                src={SecondPlan}
                                alt={"Fitness Plan Img"}
                                loading="lazy"
                                width='250vh'
                            />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h4" component="div" sx={{ fontSize: "45px", paddingBottom: "10px" }}>
                            Get 1 Month Exercises Plan
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
                            You can adjust this plan to fit your fitness level and goals. For example, if you're new to exercise, you can start with shorter workouts or fewer days per week. And as you get fitter, you can increase the duration and intensity of your workouts.
                        </Typography>
                        <Link to={"one-month-exercise-plan"}>
                            <ColorButton sx={{ marginBlock: '10px' }}>
                                get Month Plan
                            </ColorButton>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            {/* <Outlet /> */}
        </>
    )
}

export default FitnessExercises
