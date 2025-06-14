import React from 'react'
import { useParams } from 'react-router-dom'
import { getExercisesOfDayInTwentyOneDaysPlan } from '../../../database/Exercises';
import { Box, List, ListItem, Typography } from '@mui/material';

const ExercisePanelOfOneMonth = () => {
    const params = useParams();
    const exercises = getExercisesOfDayInTwentyOneDaysPlan();
    return (
        <Box sx={{
            m: 4
        }}>
            <Typography variant='h4' >
                {params.dayName}
            </Typography>
            <List>
                {
                    exercises.map((item, index) => (
                        <ListItem key={index}>
                            <Box>
                                <Typography variant='h5'>
                                    {item.exercise_Name}
                                </Typography>
                                <Typography>
                                    {item.exercise_Desc}
                                </Typography>
                                <List>
                                    {
                                        item.exercise_Steps.map((step, index) => (
                                            <ListItem key={index}>
                                                <Typography>
                                                    {step}
                                                </Typography>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default ExercisePanelOfOneMonth
