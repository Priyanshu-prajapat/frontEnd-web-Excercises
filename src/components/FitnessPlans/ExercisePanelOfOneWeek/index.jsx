import React from 'react'
import { useParams } from 'react-router-dom'
import { getExercisesOfDayInSevenDaysPlan } from '../../../database/Exercises';
import { Box, List, ListItem, Typography } from '@mui/material';

const ExercisePanelOfOneWeek = () => {
    const params = useParams();
    const exercises = getExercisesOfDayInSevenDaysPlan();
    return (
        <Box sx={{
            m: 4
        }}>
            <Typography variant='h4'>
                {params.dayName}
            </Typography>
            <List>
                {
                    exercises.map(item => (
                        <ListItem>
                            <Box key={item.id}>
                                <Typography variant='h5'>
                                    {item.exercise_Name}
                                </Typography>
                                <Typography>
                                    {item.exercise_Desc}
                                </Typography>
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default ExercisePanelOfOneWeek
