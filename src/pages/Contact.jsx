import styled from '@emotion/styled';
import { Box, TextField, Typography, Button } from '@mui/material'
import { purple } from '@mui/material/colors';
import React from 'react'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#121212',
    padding: '20px',
    '&:hover': {
        backgroundColor: "#292929",
    },
}));

const Contect = () => {
    return (
        <Box sx={{ py: 5 }}>
            <Typography variant='h3' mb={2}>
                Contect us
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: '#3a3d40',
                    maxWidth: '750px',
                    borderRadius: '20px',
                    padding: '10px 20px'
                }}
            >
                <TextField
                    label="Name"
                    variant='standard'
                    margin='normal'
                />
                <TextField
                    label="Email"
                    variant='standard'
                    margin='normal'
                />
                <TextField
                    label="Message"
                    variant='standard'
                    multiline
                    rows={3}
                    margin='normal'
                />
                <ColorButton>
                    SUBMIT
                </ColorButton>
            </Box>
        </Box>
    )
}

export default Contect
