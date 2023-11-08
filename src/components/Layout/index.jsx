import React from 'react'
import NavBar from '../../pages/Navigation'
import Footer from '../../pages/Footer'
import { Box, Container, ThemeProvider, createTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const theme = createTheme({
        typography: {
            fontFamily: 'Varela Round'
        }
    })
    return (
        <>
            <NavBar />
            <Box>
                <Container>
                    <ThemeProvider theme={theme}>
                        <Outlet />
                    </ThemeProvider>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Layout
