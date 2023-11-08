import React from 'react'
import { twentyOneDays } from '../../../database/db';
import styled from '@emotion/styled';
import { Box, Paper, Stack, Typography } from '@mui/material';

const OneMonthPlan = () => {
    const Item = styled(Box)(({ theme }) => ({
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: "black",
        borderRadius: '20px'
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
                    One Month Exercise Plan
                </Typography>
                <hr />
            </Box>
            <Stack spacing={2}>
                {
                    twentyOneDays.map((item, index) => (
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

export default OneMonthPlan
