import React from 'react'
import { sevenDays } from '../../../database/db';
import styled from '@emotion/styled';
import { Box, Stack, Typography, Paper } from '@mui/material';

const OneWeekPlan = () => {
    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(3),
        fontFamily: 'Varela Round',
        backgroundColor: "black",
        borderRadius: "10px",
    }));
    const Circle = styled(Paper)(({ theme }) => ({
        borderRadius: '20px',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: "gray",
        "&hover": {
            backgroundColor: 'none',
        },
    }))
    return (
        <Box sx={{ width: '100%', marginBlock: "20px" }}>
            <Box sx={{ paddingBottom: '20px' }}>
                <Typography variant='h3'>
                    One Week Exercise Plan
                </Typography>
                <hr />
            </Box>
            <Stack spacing={2}>
                {
                    sevenDays.map((item, index) => (
                        <>
                            <Item
                                key={index}
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <Circle variant='outlined'>
                                    {item.day}
                                </Circle>
                                <Box sx={{ paddingInline: '30px' }}>
                                    <Typography variant='h5'>{item.dayName}</Typography>
                                </Box>
                            </Item>
                        </>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default OneWeekPlan
